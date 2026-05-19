'use client';

import { isScrollingFast, subscribeSettled } from './scrollVelocity';

/**
 * Coordinates "only one strip plays at a time" across the page.
 *
 * Each VideoGallerySection registers itself + reports its current
 * visibility ratio (0..1). Whichever has the highest ratio above
 * MIN_VISIBLE wins and is told it's active; all others go inactive.
 *
 * Active-strip changes are debounced by SETTLE_MS so fast scrolling
 * doesn't trigger a cascade of play/pause events on every passing strip.
 * During fast scrolling, all strips are forced inactive.
 */

type Listener = (active: boolean) => void;

interface Entry {
  id: string;
  ratio: number;
  listener: Listener;
  lastNotified: boolean;
}

const MIN_VISIBLE = 0.2;
const SETTLE_MS = 200;

const strips = new Map<string, Entry>();
let activeId: string | null = null;
let pendingId: string | null = null;
let settleTimer: number | null = null;
let scheduled = false;
let settledSubscribed = false;

function notifyAll() {
  for (const entry of strips.values()) {
    const shouldBeActive = entry.id === activeId;
    if (entry.lastNotified !== shouldBeActive) {
      entry.lastNotified = shouldBeActive;
      entry.listener(shouldBeActive);
    }
  }
}

function pickBest(): string | null {
  let bestId: string | null = null;
  let bestRatio = MIN_VISIBLE;
  for (const entry of strips.values()) {
    if (entry.ratio > bestRatio) {
      bestRatio = entry.ratio;
      bestId = entry.id;
    }
  }
  return bestId;
}

function recompute() {
  scheduled = false;

  // During fast scrolling: force everything inactive. The settled subscriber
  // will trigger another recompute once the user stops.
  if (isScrollingFast()) {
    if (activeId !== null) {
      activeId = null;
      notifyAll();
    }
    if (settleTimer !== null) {
      window.clearTimeout(settleTimer);
      settleTimer = null;
    }
    pendingId = null;
    return;
  }

  const bestId = pickBest();

  if (bestId === activeId) {
    // No change; just flush any newly-registered strips
    if (settleTimer !== null) {
      window.clearTimeout(settleTimer);
      settleTimer = null;
    }
    pendingId = null;
    notifyAll();
    return;
  }

  // Active candidate changed → start (or restart) the settle timer
  if (pendingId !== bestId) {
    pendingId = bestId;
    if (settleTimer !== null) window.clearTimeout(settleTimer);
    settleTimer = window.setTimeout(() => {
      settleTimer = null;
      // Only commit if scrolling is still slow and the candidate is unchanged
      if (isScrollingFast()) return;
      if (pendingId !== bestId && pendingId !== null) return;
      activeId = pendingId;
      pendingId = null;
      notifyAll();
    }, SETTLE_MS);
  }
}

function schedule() {
  if (!settledSubscribed && typeof window !== 'undefined') {
    settledSubscribed = true;
    subscribeSettled(() => {
      // Scroll just settled — re-evaluate so we wake up the right strip
      scheduleNow();
    });
  }
  scheduleNow();
}

function scheduleNow() {
  if (scheduled) return;
  scheduled = true;
  if (typeof requestAnimationFrame !== 'undefined') {
    requestAnimationFrame(recompute);
  } else {
    setTimeout(recompute, 0);
  }
}

export function registerStrip(id: string, listener: Listener): () => void {
  strips.set(id, { id, ratio: 0, listener, lastNotified: false });
  schedule();
  return () => {
    strips.delete(id);
    if (activeId === id) activeId = null;
    if (pendingId === id) pendingId = null;
    schedule();
  };
}

export function reportRatio(id: string, ratio: number) {
  const entry = strips.get(id);
  if (!entry) return;
  if (entry.ratio === ratio) return;
  entry.ratio = ratio;
  schedule();
}
