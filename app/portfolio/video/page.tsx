import './video.css';
import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import VideoGallerySection from '@/components/VideoGallerySection';
import LazySection from '@/components/LazySection';

export const metadata: Metadata = {
  title: 'Video Editing Portfolio — Motion Graphics, Events & Animations',
  description:
    'Explore Drishyam Media\'s video editing portfolio — motion graphics, event edits, speedramp edits, long-format content, and animation videos.',
  alternates: { canonical: '/portfolio/video' },
};

const SECTIONS = [
  {
    id: 'motion',
    title: 'Motion Graphics',
    count: '8 videos',
    ariaLabel: 'Motion Graphics',
    carouselClass: 'motion-carousel',
    items: [
      { src: '/video/motion-1.mp4', label: '' },
      { src: '/video/motion-2.mp4', label: '' },
      { src: '/video/motion-3.mp4', label: '' },
      { src: '/video/motion-4.mp4', label: '' },
      { src: '/video/motion-5.mp4', label: '' },
      { src: '/video/motion-6.mp4', label: '' },
      { src: '/video/motion-7.mp4', label: '' },
      { src: '/video/motion-8.mp4', label: '' },
    ],
  },
  {
    id: 'events',
    title: 'Event Edits',
    count: '6 videos',
    ariaLabel: 'Event Edits',
    carouselClass: 'event-carousel',
    items: [
      { src: '/video/event-1.mp4',  label: '', cls: 'card-landscape' },
      { src: '/video/eventv-2.mp4',  label: '', cls: 'card-portrait'  },
            { src: '/video/event-2.mp4', label: '', cls: 'card-landscape' },
      { src: '/video/eventv-3.mp4',  label: '', cls: 'card-portrait'  },
      { src: '/video/event-3.mp4', label: '', cls: 'card-landscape' },
      { src: '/video/eventv-1.mp4', label: '', cls: 'card-portrait'  },
    ],
  },
  {
    id: 'speedramp',
    title: 'SpeedRamp Edits',
    count: '5 videos',
    ariaLabel: 'SpeedRamp Edits',
    carouselClass: 'speedramp-carousel',
    items: [
      { src: '/video/speedramp-1.mp4', label: '' },
      { src: '/video/speedramp-2.mp4', label: '' },
      { src: '/video/speedramp-3.mp4', label: '' },
      { src: '/video/speedramp-4.mp4', label: '' },
      { src: '/video/speedramp-5.mp4', label: '' },
    ],
  },
  {
    id: 'longformat',
    title: 'Long Format Edits',
    count: '4 videos',
    ariaLabel: 'Long Format Edits',
    carouselClass: 'longformat-carousel',
    items: [
      { src: '/video/long-1.mp4', label: '' },
      { src: '/video/long-5.mp4', label: '' },
      { src: '/video/long-6.mp4', label: '' },
      { src: '/video/long-7.mp4', label: '' },
    ],
  },
  {
    id: 'animation',
    title: 'Animation Videos',
    count: '8 videos',
    ariaLabel: 'Animation Videos',
    carouselClass: 'animation-carousel',
    items: [
      { src: '/video/talking-1.mp4', label: '' },
      { src: '/video/talking-2.mp4', label: '' },
      { src: '/video/talking-3.mp4', label: '' },
      { src: '/video/talking-4.mp4', label: '' },
      { src: '/video/talking-5.mp4', label: '' },
      { src: '/video/talking-6.mp4', label: '' },
      { src: '/video/talking-7.mp4', label: '' },
      { src: '/video/talking-8.mp4', label: '' },
    ],
  },
];

export default function VideoPage() {
  return (
    <>
      <HeroSection
        badge="Video Editing Portfolio"
        heading={<>Videos That <span className="grad-text">Captivate</span></>}
        description="From high-energy motion graphics to cinematic long-format edits, every frame is crafted to hold attention and tell your story."
        ariaLabel="Video Editing Portfolio"
        categories={[
          { href: '#motion',     label: 'Motion Graphics'  },
          { href: '#events',     label: 'Event Edits'      },
          { href: '#speedramp',  label: 'SpeedRamp Edits'  },
          { href: '#longformat', label: 'Long Format'       },
          { href: '#animation',  label: 'Animation'         },
        ]}
      />

      <main className="gallery-page" aria-label="Video Portfolio Gallery">

        <div className="gallery-heading-wrap">
          <div className="gallery-heading-eyebrow-wrap">
            <span className="gallery-heading-eyebrow">Category</span>
          </div>
          <h2 className="gallery-heading-title">
            Video <span className="grad-text">Editing</span>
          </h2>
          <p className="gallery-heading-desc">
            Dynamic video content crafted for every platform — from fast-paced reels to polished long-format productions, each edit is designed to engage and convert.
          </p>
        </div>

        {SECTIONS.map((section, i) =>
          i === 0 ? (
            <VideoGallerySection key={section.id} {...section} />
          ) : (
            <LazySection key={section.id}>
              <VideoGallerySection {...section} />
            </LazySection>
          )
        )}

      </main>

    </>
  );
}
