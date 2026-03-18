'use client';
import { useEffect, useRef, useState } from 'react';
import VideoCard from './VideoCard';

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

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    // Watches the whole section — flips sectionActive on/off as user scrolls
    const observer = new IntersectionObserver(
      ([entry]) => setSectionActive(entry.isIntersecting),
      { threshold: 0.05 } // triggers when 5% of section enters/leaves viewport
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="cat-block" id={id} aria-label={ariaLabel}>
      <div className="cat-header">
        <h3 className="cat-title">{title}</h3>
        <span className="cat-count">{count}</span>
        <div className="cat-line" aria-hidden="true" />
      </div>
      <div className={`carousel-wrap ${carouselClass}`} aria-label="Scrolling gallery">
        <div className="carousel-track" role="list">
          {items.map((item, i) => (
            <VideoCard key={i} src={item.src} label={item.label} cls={item.cls} sectionActive={sectionActive} />
          ))}
          {/* Duplicates for infinite scroll loop */}
          {items.map((item, i) => (
            <VideoCard key={`dup-${i}`} src={item.src} label={item.label} cls={item.cls} ariaHidden sectionActive={sectionActive} />
          ))}
        </div>
      </div>
    </section>
  );
}
