'use client';
import React, { useEffect, useRef, useState } from 'react';
import { getDeviceProfile } from './videoBudget';
import { isScrollingFast, subscribeSettled } from './scrollVelocity';

const videoStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
};

function HeroCard({ src, placeholder }: { src: string; placeholder: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (placeholder) return;
    const video = ref.current;
    if (!video) return;

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

    const unsubSettled = subscribeSettled(tryPlay);

    return () => {
      observer.disconnect();
      unsubSettled();
    };
  }, [placeholder]);

  return (
    <div className="card" aria-hidden={placeholder ? true : undefined}>
      {!placeholder && (
        <video
          ref={ref}
          src={src}
          loop
          muted
          playsInline
          preload="metadata"
          autoPlay
          style={videoStyle}
        />
      )}
      <div className="card-label" />
    </div>
  );
}

export default function HeroVideoStrip({ videos }: { videos: string[] }) {
  // SSR-safe: start with all placeholders (matches server output), then upgrade on mount.
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    setLimit(getDeviceProfile().videoLimit);
  }, []);

  return (
    <div className="card-strip-wrap" aria-hidden="true">
      <div className="card-strip" id="strip">
        {videos.map((src, i) => (
          <HeroCard key={src} src={src} placeholder={i >= limit} />
        ))}
        {/* Duplicates mirror the originals so the marquee back-half stays visually identical */}
        {videos.map((src, i) => (
          <HeroCard key={`dup-${src}`} src={src} placeholder={i >= limit} />
        ))}
      </div>
    </div>
  );
}
