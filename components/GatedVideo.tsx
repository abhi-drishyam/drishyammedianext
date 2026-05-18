'use client';
import { useEffect, useRef } from 'react';
import { requestPlay, releasePlay } from './videoBudget';

interface GatedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel?: string;
}

/**
 * Standalone autoplay video that participates in the global video budget
 * and only plays while visible. For pages that need a one-off looping video
 * outside a gallery context.
 */
export default function GatedVideo({ src, poster, className, ariaLabel }: GatedVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    let release: (() => void) | null = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          release = requestPlay(video);
        } else if (release) {
          release();
          release = null;
        } else {
          releasePlay(video);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => {
      observer.disconnect();
      if (release) release();
      else releasePlay(video);
    };
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      muted
      playsInline
      loop
      preload="none"
      aria-label={ariaLabel}
    />
  );
}
