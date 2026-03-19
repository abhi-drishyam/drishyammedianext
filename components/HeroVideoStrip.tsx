'use client';

import { useState, useRef, useEffect } from 'react';

function VideoCard({ src }: { src: string }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Explicitly request play — catches cases where autoPlay is ignored
    // (offscreen elements, browser throttling, power-save mode)
    video.play().catch(() => {
      // Muted autoplay should never be blocked, but swallow silently if so
    });
  }, []);

  return (
    <div className="card">
      <div
        className={`card-skeleton${playing ? ' card-skeleton--hide' : ''}`}
        aria-hidden="true"
      />
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        // No preload="none" — let the browser use its default (metadata + autoplay-ready).
        // preload="none" causes browsers to skip loading offscreen/low-priority videos
        // entirely, which is the root cause of blank cards and stalled playback.
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          borderRadius: 'inherit',
          opacity: playing ? 1 : 0,
          transition: 'opacity 0.7s ease',
        }}
        // onPlaying fires only when frames are actually being rendered —
        // more reliable than onCanPlay which fires before the first frame is shown.
        // We never reset playing back to false: if the video briefly stalls,
        // the last rendered frame stays visible instead of flashing the skeleton.
        onPlaying={() => setPlaying(true)}
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
