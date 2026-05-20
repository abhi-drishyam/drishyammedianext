import GallerySection from './GallerySection';
import VideoGallerySection from './VideoGallerySection';
import LazySection from './LazySection';

interface ImageItem {
  src: string;
  alt: string;
  label: string;
}

interface VideoItem {
  src: string;
  label: string;
  cls?: string;
}

interface DualStripSectionProps {
  id: string;
  title: string;
  count: string;
  ariaLabel: string;
  imageCarouselClass: string;
  videoCarouselClass: string;
  imageItems: ImageItem[];
  videoItems: VideoItem[];
  secondImageItems?: ImageItem[];
}

export default function DualStripSection({
  id,
  title,
  count,
  ariaLabel,
  imageCarouselClass,
  videoCarouselClass,
  imageItems,
  videoItems,
  secondImageItems,
}: DualStripSectionProps) {
  return (
    <section className="cat-block dual-strip-section" id={id} aria-label={ariaLabel}>
      <div className="cat-header">
        <h3 className="cat-title">{title}</h3>
        <span className="cat-count">{count}</span>
        <div className="cat-line" aria-hidden="true" />
      </div>
      <GallerySection
        id={`${id}-images`}
        title=""
        count=""
        ariaLabel={`${ariaLabel} photos`}
        carouselClass={imageCarouselClass}
        items={imageItems}
      />
      {(secondImageItems || videoItems.length > 0) && (
        <LazySection>
          {secondImageItems ? (
            <GallerySection
              id={`${id}-images-2`}
              title=""
              count=""
              ariaLabel={`${ariaLabel} photos row 2`}
              carouselClass={videoCarouselClass}
              items={secondImageItems}
            />
          ) : (
            <VideoGallerySection
              id={`${id}-videos`}
              title=""
              count=""
              ariaLabel={`${ariaLabel} videos`}
              carouselClass={videoCarouselClass}
              items={videoItems}
            />
          )}
        </LazySection>
      )}
    </section>
  );
}
