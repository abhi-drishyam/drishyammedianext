import './video.css';
import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import VideoGallerySection from '@/components/VideoGallerySection';

export const metadata: Metadata = {
  title: 'Video Editing Portfolio — Drishyam Media',
  description: 'Video editing portfolio — motion graphics, event edits, speedramp edits, long format, and animation videos.',
};

const SECTIONS = [
  {
    id: 'motion',
    title: 'Motion Graphics',
    count: '8 videos',
    ariaLabel: 'Motion Graphics',
    carouselClass: 'motion-carousel',
    items: Array.from({ length: 8 }, (_, i) => ({
      src: `/assets/images/video/motion/motion-${i + 1}.mp4`,
      label: `Motion Graphics ${i + 1}`,
    })),
  },
  {
    id: 'events',
    title: 'Event Edits',
    count: '8 videos',
    ariaLabel: 'Event Edits',
    carouselClass: 'event-carousel',
    items: [
      { src: '/assets/images/video/events/event-1.mp4', label: 'Event Edit 1', cls: 'card-landscape' },
      { src: '/assets/images/video/events/event-2.mp4', label: 'Event Edit 2', cls: 'card-portrait'  },
      { src: '/assets/images/video/events/event-3.mp4', label: 'Event Edit 3', cls: 'card-portrait'  },
      { src: '/assets/images/video/events/event-4.mp4', label: 'Event Edit 4', cls: 'card-landscape' },
      { src: '/assets/images/video/events/event-5.mp4', label: 'Event Edit 5', cls: 'card-portrait'  },
      { src: '/assets/images/video/events/event-6.mp4', label: 'Event Edit 6', cls: 'card-landscape' },
      { src: '/assets/images/video/events/event-7.mp4', label: 'Event Edit 7', cls: 'card-portrait'  },
      { src: '/assets/images/video/events/event-8.mp4', label: 'Event Edit 8', cls: 'card-landscape' },
    ],
  },
  {
    id: 'speedramp',
    title: 'SpeedRamp Edits',
    count: '8 videos',
    ariaLabel: 'SpeedRamp Edits',
    carouselClass: 'speedramp-carousel',
    items: Array.from({ length: 8 }, (_, i) => ({
      src: `/assets/images/video/speedramp/speedramp-${i + 1}.mp4`,
      label: `SpeedRamp Edit ${i + 1}`,
    })),
  },
  {
    id: 'longformat',
    title: 'Long Format Edits',
    count: '8 videos',
    ariaLabel: 'Long Format Edits',
    carouselClass: 'longformat-carousel',
    items: Array.from({ length: 8 }, (_, i) => ({
      src: `/assets/images/video/longformat/longformat-${i + 1}.mp4`,
      label: `Long Format Edit ${i + 1}`,
    })),
  },
  {
    id: 'animation',
    title: 'Animation Videos',
    count: '8 videos',
    ariaLabel: 'Animation Videos',
    carouselClass: 'animation-carousel',
    items: Array.from({ length: 8 }, (_, i) => ({
      src: `/assets/images/video/animation/animation-${i + 1}.mp4`,
      label: `Animation Video ${i + 1}`,
    })),
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

        {SECTIONS.map((section) => (
          <VideoGallerySection key={section.id} {...section} />
        ))}

      </main>

    </>
  );
}
