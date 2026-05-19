'use client';

/**
 * Device-class detection for sizing video-heavy components.
 * - low-end: <=4 cores or <=4GB RAM (hardware decoder cap typically 4)
 * - mid: 5-6 cores
 * - high: 8+ cores
 *
 * Use the returned `videoLimit` to cap how many <video> elements a marquee
 * mounts. The rest should render as CSS-styled placeholder divs.
 */

export type DeviceClass = 'low' | 'mid' | 'high';

export interface DeviceProfile {
  deviceClass: DeviceClass;
  videoLimit: number;
}

const FALLBACK: DeviceProfile = { deviceClass: 'high', videoLimit: 99 };

let cached: DeviceProfile | null = null;

export function getDeviceProfile(): DeviceProfile {
  if (cached) return cached;
  if (typeof navigator === 'undefined') return FALLBACK;

  const cores = navigator.hardwareConcurrency ?? 8;
  const mem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;

  let profile: DeviceProfile;
  if (cores <= 4 || (mem !== undefined && mem <= 4)) {
    profile = { deviceClass: 'low', videoLimit: 4 };
  } else if (cores <= 6) {
    profile = { deviceClass: 'mid', videoLimit: 8 };
  } else {
    profile = { deviceClass: 'high', videoLimit: 99 };
  }

  cached = profile;
  return profile;
}
