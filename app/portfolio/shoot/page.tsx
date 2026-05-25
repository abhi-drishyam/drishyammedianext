import './shoot.css';
import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import VideoGallerySection from '@/components/VideoGallerySection';
import DualStripSection from '@/components/DualStripSection';
import LazySection from '@/components/LazySection';

export const metadata: Metadata = {
  title: 'Photography & Videography Shoot Portfolio',
  description:
    'Explore Drishyam Media\'s shoot portfolio — BTS footage, event coverage, portrait sessions, product shoots, and aerial cinematography.',
};

const BTS_SECTION = {
  id: 'bts',
  title: 'BTS Footage',
  count: '8 videos',
  ariaLabel: 'BTS Footage',
  carouselClass: 'bts-carousel',
  items: [
    { src: '/video/bts-1.mp4', label: '' },
    { src: '/video/bts-2.mp4', label: '' },
    { src: '/video/bts-3.mp4', label: '' },
    { src: '/video/bts-4.mp4', label: '' },
    { src: '/video/bts-5.mp4', label: '' },
    { src: '/video/bts-6.mp4', label: '' },
  ],
};


const DUAL_SECTIONS = [
  {
    id: 'modeling',
    title: 'Model/Fashion',
    count: '8 photos · 8 videos',
    ariaLabel: 'Modeling',
    imageCarouselClass: 'modeling-img-carousel',
    videoCarouselClass: 'modeling-vid-carousel',
    imageItems: [
      { src: '/image/shoot/model-1.webp', alt: '', label: '' },
      { src: '/image/shoot/model-2.webp', alt: '', label: '' },
      { src: '/image/shoot/model-3.webp', alt: '', label: '' },
      { src: '/image/shoot/model-4.webp', alt: '', label: '' },
      { src: '/image/shoot/model-5.webp', alt: '', label: '' },
      { src: '/image/shoot/model-6.webp', alt: '', label: '' },
      { src: '/image/shoot/model-7.webp', alt: '', label: '' },
      { src: '/image/shoot/model-8.webp', alt: '', label: '' },
      { src: '/image/shoot/model-9.webp', alt: '', label: '' },
      { src: '/image/shoot/model-10.webp', alt: '', label: '' },
    ],
    // TODO: add modeling videos later
    videoItems: [],
    /* videoItems: [
      { src: '/shoot/modeling-1.mp4', label: '' },
      { src: '/shoot/modeling-2.mp4', label: '' },
      { src: '/shoot/modeling-3.mp4', label: '' },
      { src: '/shoot/modeling-4.mp4', label: '' },
      { src: '/shoot/modeling-5.mp4', label: '' },
      { src: '/shoot/modeling-6.mp4', label: '' },
      { src: '/shoot/modeling-7.mp4', label: '' },
      { src: '/shoot/modeling-8.mp4', label: '' },
    ], */
  },
  {
    id: 'portraits',
    title: 'Candids',
    count: '16 photos',
    ariaLabel: 'Portraits and Candids',
    imageCarouselClass: 'portrait-img-carousel',
    videoCarouselClass: 'portrait-vid-carousel',
    imageItems: [
      { src: '/image/shoot/ecandid-1.webp', alt: '', label: '' },
      { src: '/image/shoot/ecandid-2.webp', alt: '', label: '' },
      { src: '/image/shoot/ecandid-3.webp', alt: '', label: '' },
      { src: '/image/shoot/ecandid-4.webp', alt: '', label: '' },
      { src: '/image/shoot/ecandid-5.webp', alt: '', label: '' },
      { src: '/image/shoot/ecandid-6.webp', alt: '', label: '' },
      { src: '/image/shoot/ecandid-7.webp', alt: '', label: '' },
      { src: '/image/shoot/ecandid-8.webp', alt: '', label: '' },
    ],
    videoItems: [],
    secondImageItems: [
      { src: '/image/shoot/candid-1.webp', alt: '', label: '' },
      { src: '/image/shoot/candid-2.webp', alt: '', label: '' },
      { src: '/image/shoot/candid-3.webp', alt: '', label: '' },
      { src: '/image/shoot/candid-4.webp', alt: '', label: '' },
      { src: '/image/shoot/candid-5.webp', alt: '', label: '' },
      { src: '/image/shoot/candid-6.webp', alt: '', label: '' },
      { src: '/image/shoot/candid-7.webp', alt: '', label: '' },
      { src: '/image/shoot/candid-8.webp', alt: '', label: '' },
      { src: '/image/shoot/candid-9.webp', alt: '', label: '' },
    ],
  },
  {
    id: 'events',
    title: 'Events',
    count: '8 photos · 6 videos',
    ariaLabel: 'Events',
    imageCarouselClass: 'event-img-carousel',
    videoCarouselClass: 'event-vid-carousel',
    imageItems: [
      { src: '/image/shoot/event-1.webp', alt: '', label: '' },
      { src: '/image/shoot/event-2.webp', alt: '', label: '' },
      { src: '/image/shoot/event-3.webp', alt: '', label: '' },
      { src: '/image/shoot/event-4.webp', alt: '', label: '' },
      { src: '/image/shoot/event-5.webp', alt: '', label: '' },
      { src: '/image/shoot/event-6.webp', alt: '', label: '' },
      { src: '/image/shoot/event-7.webp', alt: '', label: '' },
      { src: '/image/shoot/event-8.webp', alt: '', label: '' },
      { src: '/image/shoot/event-9.webp', alt: '', label: '' },
      { src: '/image/shoot/event-10.webp', alt: '', label: '' },
      { src: '/image/shoot/event-11.webp', alt: '', label: '' },
    ],
    videoItems: [
      { src: '/video/event-1.mp4',  label: '', cls: 'card-landscape' },
      { src: '/video/eventv-2.mp4', label: '', cls: 'card-portrait'  },
      { src: '/video/event-2.mp4',  label: '', cls: 'card-landscape' },
      { src: '/video/eventv-3.mp4', label: '', cls: 'card-portrait'  },
      { src: '/video/event-3.mp4',  label: '', cls: 'card-landscape' },
      { src: '/video/eventv-1.mp4', label: '', cls: 'card-portrait'  },
    ],
  },
];

const REAL_ESTATE_SECTION = {
  id: 'realestate',
  title: 'Real Estate',
  count: '7 photos',
  ariaLabel: 'Real Estate',
  imageCarouselClass: 'realestate-img-carousel',
  videoCarouselClass: 'realestate-vid-carousel',
  imageItems: [
    { src: '/image/shoot/real-1.webp', alt: '', label: '' },
    { src: '/image/shoot/real-2.webp', alt: '', label: '' },
    { src: '/image/shoot/real-3.webp', alt: '', label: '' },
    { src: '/image/shoot/real-4.webp', alt: '', label: '' },
    { src: '/image/shoot/real-5.webp', alt: '', label: '' },
    { src: '/image/shoot/real-6.webp', alt: '', label: '' },
    { src: '/image/shoot/real-7.webp', alt: '', label: '' },
  ],
  videoItems: [],
};

export default function ShootPage() {
  return (
    <>
      <HeroSection
        badge="Shoot Portfolio"
        heading={<>Frames That <span className="grad-text">Speak</span></>}
        description="From intimate BTS moments to sweeping aerial shots, every capture is composed to tell a story that resonates and endures."
        ariaLabel="Shoot Portfolio"
        categories={[
          { href: '#modeling',  label: 'Modeling'           },
          { href: '#portraits', label: 'Portraits & Candids'},
          { href: '#events',    label: 'Events'             },
          { href: '#realestate',label: 'Real Estate'        },
          { href: '#bts',       label: 'BTS Footage'        },
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

        {DUAL_SECTIONS.map((section) => (
          <LazySection key={section.id}>
            <DualStripSection {...section} />
          </LazySection>
        ))}

        <LazySection>
          <DualStripSection {...REAL_ESTATE_SECTION} />
        </LazySection>

        <LazySection>
          <VideoGallerySection {...BTS_SECTION} />
        </LazySection>

      </main>

    </>
  );
}
