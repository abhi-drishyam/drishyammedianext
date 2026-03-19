'use client';

import React, { useState } from 'react';

const videoStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
  transition: 'opacity 0.7s ease',
};

function VideoCard({ src }: { src: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="card">
      <div className={`card-skeleton${loaded ? ' card-skeleton--hide' : ''}`} aria-hidden="true" />
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        style={{ ...videoStyle, opacity: loaded ? 1 : 0 }}
        onCanPlay={() => setLoaded(true)}
      />
      <div className="card-label" />
    </div>
  );
}

export default function HeroVideoStrip({ videos }: { videos: string[] }) {
  return (
    <div className="card-strip-wrap" aria-hidden="true">
      <div className="card-strip" id="strip">
        {videos.map((src) => (
          <VideoCard key={src} src={src} />
        ))}
        {videos.map((src) => (
          <VideoCard key={`dup-${src}`} src={src} />
        ))}
      </div>
    </div>
  );
}
