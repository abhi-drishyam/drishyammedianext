'use client';
import { useEffect, useId, useRef, useState } from 'react';
import VideoCard from './VideoCard';
import { registerStrip, reportRatio } from './activeStrip';

interface VideoItem {
  src: string;
  label: string;
  cls?: string;
}

interface VideoGallerySectionProps {
  id: string;
  title: string;
  count: string;
  ariaLabel: string;
  carouselClass: string;
  items: VideoItem[];
}

export default function VideoGallerySection({
  id,
  title,
  count,
  ariaLabel,
  carouselClass,
  items,
}: VideoGallerySectionProps) {
  const [sectionActive, setSectionActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const reactId = useId();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const unregister = registerStrip(reactId, (active) => setSectionActive(active));

    // 5 thresholds is enough to pick the most-visible strip; more just burns JS on every scroll frame
    const observer = new IntersectionObserver(
      ([entry]) => reportRatio(reactId, entry.intersectionRatio),
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      unregister();
    };
  }, [reactId]);

  return (
    <section ref={sectionRef} className="cat-block" id={id} aria-label={ariaLabel}>
      {title && (
        <div className="cat-header">
          <h3 className="cat-title">{title}</h3>
          <span className="cat-count">{count}</span>
          <div className="cat-line" aria-hidden="true" />
        </div>
      )}
      <div className={`carousel-wrap ${carouselClass}`} aria-label="Scrolling gallery">
        <div className="carousel-track" role="list">
          {items.map((item, i) => (
            <VideoCard key={i} src={item.src} label={item.label} cls={item.cls} sectionActive={sectionActive} />
          ))}
          {/* Duplicates for infinite scroll loop — must be real videos so the marquee back-half doesn't show blank cards */}
          {items.map((item, i) => (
            <VideoCard key={`dup-${i}`} src={item.src} label={item.label} cls={item.cls} ariaHidden sectionActive={sectionActive} />
          ))}
        </div>
      </div>
    </section>
  );
}
