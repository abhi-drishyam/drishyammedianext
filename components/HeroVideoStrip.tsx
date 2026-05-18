'use client';
import React, { useEffect, useRef, useState } from 'react';
import { requestPlay, releasePlay } from './videoBudget';

const videoStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
};

function HeroCard({
  src,
  stripActive,
  placeholder,
}: {
  src: string;
  stripActive: boolean;
  placeholder?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (placeholder) return;
    const video = ref.current;
    if (!video) return;

    if (!stripActive) {
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
  }, [stripActive, placeholder]);

  return (
    <div className="card" aria-hidden={placeholder ? true : undefined}>
      {!placeholder && (
        <video ref={ref} src={src} loop muted playsInline preload="none" style={videoStyle} />
      )}
      <div className="card-label" />
    </div>
  );
}

export default function HeroVideoStrip({ videos }: { videos: string[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [stripActive, setStripActive] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setStripActive(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="card-strip-wrap" aria-hidden="true">
      <div className="card-strip" id="strip">
        {videos.map((src) => (
          <HeroCard key={src} src={src} stripActive={stripActive} />
        ))}
        {videos.map((src) => (
          <HeroCard key={`dup-${src}`} src={src} stripActive={stripActive} placeholder />
        ))}
      </div>
    </div>
  );
}
