import './shoot.css';
import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import VideoGallerySection from '@/components/VideoGallerySection';
import LazySection from '@/components/LazySection';

export const metadata: Metadata = {
  title: 'Photography & Videography Shoot Portfolio',
  description:
    'Explore Drishyam Media\'s shoot portfolio — BTS footage, event coverage, portrait sessions, product shoots, and aerial cinematography.',
  alternates: { canonical: '/portfolio/shoot' },
};

const SECTIONS = [
  {
    id: 'bts',
    title: 'BTS Footage',
    count: '8 videos',
    ariaLabel: 'BTS Footage',
    carouselClass: 'bts-carousel',
    items: [
      { src: '/shoot/bts-1.mp4', label: '' },
      { src: '/shoot/bts-2.mp4', label: '' },
      { src: '/shoot/bts-3.mp4', label: '' },
      { src: '/shoot/bts-4.mp4', label: '' },
      { src: '/shoot/bts-5.mp4', label: '' },
      { src: '/shoot/bts-6.mp4', label: '' },
      { src: '/shoot/bts-7.mp4', label: '' },
      { src: '/shoot/bts-8.mp4', label: '' },
    ],
  },
  {
    id: 'events',
    title: 'Event Coverage',
    count: '6 videos',
    ariaLabel: 'Event Coverage',
    carouselClass: 'shoot-event-carousel',
    items: [
      { src: '/shoot/event-1.mp4',  label: '', cls: 'card-landscape' },
      { src: '/shoot/eventv-2.mp4', label: '', cls: 'card-portrait'  },
      { src: '/shoot/event-2.mp4',  label: '', cls: 'card-landscape' },
      { src: '/shoot/eventv-3.mp4', label: '', cls: 'card-portrait'  },
      { src: '/shoot/event-3.mp4',  label: '', cls: 'card-landscape' },
      { src: '/shoot/eventv-1.mp4', label: '', cls: 'card-portrait'  },
    ],
  },
  {
    id: 'portrait',
    title: 'Portrait Sessions',
    count: '5 videos',
    ariaLabel: 'Portrait Sessions',
    carouselClass: 'portrait-carousel',
    items: [
      { src: '/shoot/portrait-1.mp4', label: '' },
      { src: '/shoot/portrait-2.mp4', label: '' },
      { src: '/shoot/portrait-3.mp4', label: '' },
      { src: '/shoot/portrait-4.mp4', label: '' },
      { src: '/shoot/portrait-5.mp4', label: '' },
    ],
  },
  {
    id: 'podcast',
    title: 'Podcast',
    count: '4 videos',
    ariaLabel: 'Podcast',
    carouselClass: 'podcast-carousel',
    items: [
      { src: '/shoot/podcast-1.mp4', label: '' },
      { src: '/shoot/podcast-2.mp4', label: '' },
      { src: '/shoot/podcast-3.mp4', label: '' },
      { src: '/shoot/podcast-4.mp4', label: '' },
    ],
  },
  {
    id: 'brand',
    title: 'Brand',
    count: '8 videos',
    ariaLabel: 'Brand',
    carouselClass: 'brand-carousel',
    items: [
      { src: '/shoot/brand-1.mp4', label: '' },
      { src: '/shoot/brand-2.mp4', label: '' },
      { src: '/shoot/brand-3.mp4', label: '' },
      { src: '/shoot/brand-4.mp4', label: '' },
      { src: '/shoot/brand-5.mp4', label: '' },
      { src: '/shoot/brand-6.mp4', label: '' },
      { src: '/shoot/brand-7.mp4', label: '' },
      { src: '/shoot/brand-8.mp4', label: '' },
    ],
  },
];

export default function ShootPage() {
  return (
    <>
      <HeroSection
        badge="Shoot Portfolio"
        heading={<>Frames That <span className="grad-text">Speak</span></>}
        description="From intimate BTS moments to sweeping aerial shots, every capture is composed to tell a story that resonates and endures."
        ariaLabel="Shoot Portfolio"
        categories={[
          { href: '#bts',      label: 'BTS Footage'       },
          { href: '#events',   label: 'Event Coverage'    },
          { href: '#portrait', label: 'Portrait Sessions' },
          { href: '#podcast',  label: 'Podcast'    },
          { href: '#brand',    label: 'Brand'      },
        ]}
      />

      <main className="gallery-page" aria-label="Shoot Portfolio Gallery">

        <div className="gallery-heading-wrap">
          <div className="gallery-heading-eyebrow-wrap">
            <span className="gallery-heading-eyebrow">Category</span>
          </div>
          <h2 className="gallery-heading-title">
            Shoot <span className="grad-text">Portfolio</span>
          </h2>
          <p className="gallery-heading-desc">
            Authentic visual storytelling captured on location — from high-energy event coverage to precision product cinematography, every frame is shot with intent.
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
