'use client';

type VideoEntry = {
  el: HTMLVideoElement;
  // monotonically increasing so we can evict the least-recently-activated
  activatedAt: number;
};

let cap = 12;
let staggerMs = 35;
let detected = false;

function detectDeviceClass() {
  if (detected || typeof navigator === 'undefined') return;
  detected = true;

  const cores = navigator.hardwareConcurrency ?? 8;
  const mem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;

  // Low-end: <=4 cores or <=4GB RAM (when reported)
  if (cores <= 4 || (mem !== undefined && mem <= 4)) {
    cap = 4;
    staggerMs = 80;
  } else if (cores <= 6) {
    cap = 8;
    staggerMs = 50;
  } else {
    cap = 12;
    staggerMs = 35;
  }
}

const active = new Map<HTMLVideoElement, VideoEntry>();
let activationCounter = 0;
let nextStaggerSlot = 0;

function evictOldest() {
  let oldest: VideoEntry | null = null;
  for (const entry of active.values()) {
    if (!oldest || entry.activatedAt < oldest.activatedAt) {
      oldest = entry;
    }
  }
  if (oldest) {
    try {
      oldest.el.pause();
    } catch {
      // ignore
    }
    active.delete(oldest.el);
  }
}

/**
 * Request to play a video, respecting the global budget.
 * - If under cap: plays after a staggered delay (prevents decode storm on first paint)
 * - If at cap: evicts the least-recently-activated video first
 * Returns a cleanup function to call when the video should be released.
 */
export function requestPlay(el: HTMLVideoElement): () => void {
  detectDeviceClass();

  if (active.has(el)) {
    // already active, just bump its activation timestamp
    active.get(el)!.activatedAt = ++activationCounter;
  } else {
    if (active.size >= cap) {
      evictOldest();
    }
    active.set(el, { el, activatedAt: ++activationCounter });
  }

  // Compute a stagger delay so simultaneous IntersectionObserver fires don't all hit play() in the same frame.
  // Slots clear out 500ms after now, so subsequent (e.g. scroll-triggered) plays become immediate.
  const now =
    typeof performance !== 'undefined' ? performance.now() : Date.now();
  if (nextStaggerSlot < now) nextStaggerSlot = now;
  const delay = nextStaggerSlot - now;
  nextStaggerSlot += staggerMs;
  // cap the queue depth so a huge burst doesn't push the last play far into the future
  if (nextStaggerSlot - now > 600) nextStaggerSlot = now + 600;

  let cancelled = false;
  const timer = window.setTimeout(() => {
    if (cancelled) return;
    if (!active.has(el)) return; // got evicted before we even started
    const p = el.play();
    if (p && typeof p.catch === 'function') p.catch(() => {});
  }, delay);

  return () => {
    cancelled = true;
    window.clearTimeout(timer);
    if (active.has(el)) {
      try {
        el.pause();
      } catch {
        // ignore
      }
      active.delete(el);
    }
  };
}

/**
 * Release a video without playing — used when a card scrolls out of view.
 */
export function releasePlay(el: HTMLVideoElement) {
  if (active.has(el)) {
    try {
      el.pause();
    } catch {
      // ignore
    }
    active.delete(el);
  }
}

/** Test/debug helper — current active count */
export function _activeCount() {
  return active.size;
}
