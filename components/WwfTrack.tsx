'use client';
import { useEffect, useRef, useState } from 'react';

interface WwfClient {
  name: string;
  rot: string;
  img: string;
}

const imgStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
};

function WwfCard({ name, rot, img }: WwfClient) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <div className="wwf-card" style={{ ['--rot' as any]: rot }}>
      <div className={`wwf-img${loaded ? ' wwf-img--loaded' : ''}`}>
        <img ref={imgRef} src={img} alt={name} loading="lazy" style={imgStyle} onLoad={() => setLoaded(true)} />
        {!loaded && <div className="wwf-card-inner" />}
      </div>
      <span className="wwf-card-name">{name}</span>
    </div>
  );
}

export default function WwfTrack({ clients }: { clients: WwfClient[] }) {
  return (
    <div className="wwf-track-wrap" aria-hidden="true">
      <div className="wwf-track">
        {clients.map((c) => (
          <WwfCard key={c.name} {...c} />
        ))}
        {clients.map((c) => (
          <WwfCard key={`dup-${c.name}`} {...c} />
        ))}
      </div>
    </div>
  );
}
