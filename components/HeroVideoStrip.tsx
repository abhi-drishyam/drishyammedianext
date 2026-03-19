import React from 'react';

const videoStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
};

export default function HeroVideoStrip({ videos }: { videos: string[] }) {
  return (
    <div className="card-strip-wrap" aria-hidden="true">
      <div className="card-strip" id="strip">
        {videos.map((src) => (
          <div key={src} className="card">
            <video src={src} autoPlay loop muted playsInline preload="none" style={videoStyle} />
            <div className="card-label" />
          </div>
        ))}
        {videos.map((src) => (
          <div key={`dup-${src}`} className="card" aria-hidden="true">
            <video src={src} autoPlay loop muted playsInline preload="none" style={videoStyle} />
            <div className="card-label" />
          </div>
        ))}
      </div>
    </div>
  );
}
