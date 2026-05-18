'use client';
import { useEffect, useRef } from 'react';
import { requestPlay, releasePlay } from './videoBudget';

interface VideoCardProps {
  src: string;
  label: string;
  cls?: string;
  ariaHidden?: boolean;
  sectionActive?: boolean;
  /**
   * If true, renders a styled placeholder div instead of a <video> element.
   * Used for marquee duplicates so we don't double the live decoder count.
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
      releasePlay(video);
      return;
    }

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
  }, [sectionActive, placeholder]);

  return (
    <div
      className={`gallery-card${cls ? ' ' + cls : ''}`}
      role={ariaHidden ? undefined : 'listitem'}
      aria-hidden={ariaHidden || undefined}
    >
      <div className="card-img">
        {!placeholder && (
          <video ref={videoRef} src={src} loop muted playsInline preload="none" />
        )}
      </div>
      <div className="card-overlay">
        <span className="card-overlay-text">{label}</span>
      </div>
    </div>
  );
}
