'use client';
import { useEffect, useRef } from 'react';
import { isScrollingFast, subscribeSettled } from './scrollVelocity';

interface VideoCardProps {
  src: string;
  label: string;
  cls?: string;
  ariaHidden?: boolean;
  sectionActive?: boolean;
  /**
   * If true, renders a styled placeholder div instead of a <video> element.
   * Used for marquee duplicates so we don't double the mounted decoder count.
   */
  placeholder?: boolean;
}

export default function VideoCard({
  src,
  label,
  cls,
  ariaHidden,
  sectionActive = true,
  placeholder = false,
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (placeholder) return;
    const video = videoRef.current;
    if (!video) return;

    if (!sectionActive) {
      video.pause();
      return;
    }

    let inView = false;

    const tryPlay = () => {
      if (!inView) return;
      if (isScrollingFast()) return; // defer until scroll settles
      video.play().catch(() => {});
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) {
          tryPlay();
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(video);

    // When fast scrolling settles, any in-view card should resume
    const unsubSettled = subscribeSettled(tryPlay);

    return () => {
      observer.disconnect();
      unsubSettled();
    };
  }, [sectionActive, placeholder]);

  return (
    <div
      className={`gallery-card${cls ? ' ' + cls : ''}`}
      role={ariaHidden ? undefined : 'listitem'}
      aria-hidden={ariaHidden || undefined}
    >
      <div className="card-img">
        {!placeholder && (
          <video ref={videoRef} src={src} loop muted playsInline preload="metadata" />
        )}
      </div>
      <div className="card-overlay">
        <span className="card-overlay-text">{label}</span>
      </div>
    </div>
  );
}
