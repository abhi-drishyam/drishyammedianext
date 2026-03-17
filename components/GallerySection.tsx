interface GalleryItem {
  src: string;
  alt: string;
  label: string;
}

interface GallerySectionProps {
  id: string;
  title: string;
  count: string;
  ariaLabel: string;
  carouselClass: string;
  items: GalleryItem[];
}

export default function GallerySection({
  id,
  title,
  count,
  ariaLabel,
  carouselClass,
  items,
}: GallerySectionProps) {
  return (
    <section className="cat-block" id={id} aria-label={ariaLabel}>
      <div className="cat-header">
        <h3 className="cat-title">{title}</h3>
        <span className="cat-count">{count}</span>
        <div className="cat-line" aria-hidden="true" />
      </div>
      <div className={`carousel-wrap ${carouselClass}`} aria-label="Scrolling gallery">
        <div className="carousel-track" role="list">
          {items.map((item, i) => (
            <div key={i} className="gallery-card" role="listitem">
              <div className="card-img">
                <img src={item.src} alt={item.alt} loading="lazy" />
              </div>
              <div className="card-overlay">
                <span className="card-overlay-text">{item.label}</span>
              </div>
            </div>
          ))}
          {/* Duplicates for infinite scroll loop */}
          {items.map((item, i) => (
            <div key={`dup-${i}`} className="gallery-card" aria-hidden="true">
              <div className="card-img">
                <img src={item.src} alt="" loading="lazy" />
              </div>
              <div className="card-overlay">
                <span className="card-overlay-text">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
