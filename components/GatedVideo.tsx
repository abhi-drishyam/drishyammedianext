'use client';
import { useEffect, useRef } from 'react';

interface GatedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel?: string;
}

/**
 * Standalone autoplay video that only plays while visible.
 * For one-off looping videos outside a gallery context.
 */
export default function GatedVideo({ src, poster, className, ariaLabel }: GatedVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
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
      preload="metadata"
      aria-label={ariaLabel}
    />
  );
}
