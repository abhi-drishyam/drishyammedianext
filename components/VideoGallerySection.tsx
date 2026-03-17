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
            <div key={i} className={`gallery-card${item.cls ? ' ' + item.cls : ''}`} role="listitem">
              <div className="card-img">
                <video src={item.src} autoPlay loop muted playsInline />
              </div>
              <div className="card-overlay">
                <span className="card-overlay-text">{item.label}</span>
              </div>
            </div>
          ))}
          {/* Duplicates for infinite scroll loop */}
          {items.map((item, i) => (
            <div key={`dup-${i}`} className={`gallery-card${item.cls ? ' ' + item.cls : ''}`} aria-hidden="true">
              <div className="card-img">
                <video src={item.src} autoPlay loop muted playsInline />
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
