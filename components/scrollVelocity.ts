'use client';

/**
 * Tracks scroll velocity and emits a "settled" signal 300ms after scrolling
 * slows below the fast threshold. Used to suppress video playback work
 * during active scrolling.
 */

type Listener = () => void;

const FAST_PX_PER_MS = 2; // ~moderate wheel/trackpad scroll
const SETTLE_DELAY_MS = 200;

let installed = false;
let fast = false;
let lastY = 0;
let lastT = 0;
let settleTimer: number | null = null;

const settledListeners = new Set<Listener>();

function notifySettled() {
  for (const fn of settledListeners) fn();
}

function onScroll() {
  const now =
    typeof performance !== 'undefined' ? performance.now() : Date.now();
  const y = window.scrollY;
  const dy = Math.abs(y - lastY);
  const dt = now - lastT || 1;
  const v = dy / dt; // px per ms

  lastY = y;
  lastT = now;

  if (v >= FAST_PX_PER_MS) {
    fast = true;
    if (settleTimer !== null) {
      window.clearTimeout(settleTimer);
      settleTimer = null;
    }
  } else if (fast) {
    // velocity dropped below the fast threshold; start (or restart) the settle timer
    if (settleTimer !== null) window.clearTimeout(settleTimer);
    settleTimer = window.setTimeout(() => {
      fast = false;
      settleTimer = null;
      notifySettled();
    }, SETTLE_DELAY_MS);
  }
}

function install() {
  if (installed || typeof window === 'undefined') return;
  installed = true;
  lastY = window.scrollY;
  lastT =
    typeof performance !== 'undefined' ? performance.now() : Date.now();
  window.addEventListener('scroll', onScroll, { passive: true });
}

export function isScrollingFast(): boolean {
  return fast;
}

export function subscribeSettled(cb: Listener): () => void {
  install();
  settledListeners.add(cb);
  return () => {
    settledListeners.delete(cb);
  };
}
