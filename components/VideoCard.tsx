'use client';
import { useEffect, useRef } from 'react';

interface VideoCardProps {
  src: string;
  label: string;
  cls?: string;
  ariaHidden?: boolean;
  sectionActive?: boolean;
}

export default function VideoCard({ src, label, cls, ariaHidden, sectionActive = true }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Gate 1 — section not in viewport: pause immediately, skip observer setup
    if (!sectionActive) {
      video.pause();
      return;
    }

    // Gate 2 — card must also be individually visible before playing
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
  }, [sectionActive]); // re-runs when section enters/leaves viewport

  return (
    <div
      className={`gallery-card${cls ? ' ' + cls : ''}`}
      role={ariaHidden ? undefined : 'listitem'}
      aria-hidden={ariaHidden || undefined}
    >
      <div className="card-img">
        <video ref={videoRef} src={src} loop muted playsInline preload="none" />
      </div>
      <div className="card-overlay">
        <span className="card-overlay-text">{label}</span>
      </div>
    </div>
  );
}
