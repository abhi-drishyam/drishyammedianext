import './graphic.css';
import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import GallerySection from '@/components/GallerySection';

export const metadata: Metadata = {
  title: 'Graphic Design Portfolio — Drishyam Media',
  description: 'Premium graphic design portfolio — social media posts, thumbnails, reel covers, posters, album art, and brochures.',
};

const SECTIONS = [
  {
    id: 'posts',
    title: 'Post',
    count: '8 designs',
    ariaLabel: 'Social Media Posts',
    carouselClass: 'post-carousel',
    items: [
      { src: '/image/graphic/post-10.webp', alt: 'Our Services Post',   label: '' },
      { src: '/image/graphic/post-11.webp', alt: 'GAIA Brand Post',     label: '' },
      { src: '/image/graphic/post-13.webp', alt: 'Booked to Speak',     label: '' },
      { src: '/image/graphic/post-4.webp', alt: 'Buccaneers Games',    label: '' },
      { src: '/image/graphic/post-15.webp', alt: 'Open House Listing',  label: '' },
      { src: '/image/graphic/post-16.webp', alt: 'Fashion Editorial',   label: '' },
      { src: '/image/graphic/post-17.webp', alt: 'Skincare Campaign',   label: '' },
      { src: '/image/graphic/post-8.webp', alt: 'Bright and Visible',  label: '' },
    ],
  },
  {
    id: 'thumbnails',
    title: 'Thumbnail',
    count: '8 designs',
    ariaLabel: 'Thumbnails',
    carouselClass: 'thumb-carousel',
    items: [
      { src: '/image/graphic/thumb-1.webp', alt: 'Build AI Tool',           label: '' },
      { src: '/image/graphic/thumb-2.webp', alt: 'Castles in the Air',      label: '' },
      { src: '/image/graphic/thumb-3.webp', alt: 'Wildlife Feature',        label: '' },
      { src: '/image/graphic/thumb-4.webp', alt: 'Podcast Thumbnail',       label: '' },
      { src: '/image/graphic/thumb-5.webp', alt: 'Why Invest in Dulhera',   label: '' },
      { src: '/image/graphic/thumb-6.webp', alt: 'Outdoors Feature',        label: '' },
      { src: '/image/graphic/thumb-7.webp', alt: 'Street Photography',      label: '' },
      { src: '/image/graphic/thumb-8.webp', alt: 'Finance Thumbnail',       label: '' },
    ],
  },
  {
    id: 'reels',
    title: 'Reel Covers',
    count: '8 designs',
    ariaLabel: 'Reel Covers',
    carouselClass: 'reel-carousel',
    items: [
      { src: '/image/graphic/reel-1.webp', alt: 'This is Your Sign',    label: '' },
      { src: '/image/graphic/reel-2.webp', alt: 'Paradiso Reel',        label: '' },
      { src: '/image/graphic/reel-3.webp', alt: 'Mumbai Reel',          label: '' },
      { src: '/image/graphic/reel-4.webp', alt: 'Real Estate Reel',     label: '' },
      { src: '/image/graphic/reel-5.webp', alt: 'Ayoush Portrait Reel', label: '' },
      { src: '/image/graphic/reel-6.webp', alt: 'Viral Strategy',       label: '' },
      { src: '/image/graphic/reel-7.webp', alt: 'Luxury Brand Reel',    label: '' },
      { src: '/image/graphic/reel-8.webp', alt: 'Food Stories Reel',    label: '' },
    ],
  },
  {
    id: 'posters',
    title: 'Posters',
    count: '8 designs',
    ariaLabel: 'Posters',
    carouselClass: 'poster-carousel',
    items: [
      { src: '/image/graphic/poster-1.webp', alt: 'Wander Film Poster',  label: '' },
      { src: '/image/graphic/poster-2.webp', alt: 'Saturday Night DJ',   label: '' },
      { src: '/image/graphic/poster-3.webp', alt: 'The Last Passenger',  label: '' },
      { src: '/image/graphic/poster-4.webp', alt: 'Holiday Toy Drive',   label: '' },
      { src: '/image/graphic/poster-5.webp', alt: 'Dark Horizon',        label: '' },
      { src: '/image/graphic/poster-6.webp', alt: 'Neon Festival',       label: '' },
      { src: '/image/graphic/poster-7.webp', alt: 'Exhibition Poster',   label: '' },
      { src: '/image/graphic/poster-8.webp', alt: 'Documentary',         label: '' },
      { src: '/image/graphic/poster-9.webp', alt: 'Exhibition Poster',   label: '' },
      { src: '/image/graphic/poster-10.webp', alt: 'Documentary',         label: '' },
    ],
  },
  {
    id: 'album',
    title: 'Album Art',
    count: '8 designs',
    ariaLabel: 'Album Art',
    carouselClass: 'album-carousel',
    items: [
      { src: '/image/graphic/album-1.webp', alt: 'Portrait Single',   label: '' },
      { src: '/image/graphic/album-2.webp', alt: 'Vision Album Art',  label: '' },
      { src: '/image/graphic/album-3.webp', alt: 'Collective EP',     label: '' },
      { src: '/image/graphic/album-4.webp', alt: 'Samarpan Album',    label: '' },
      { src: '/image/graphic/album-5.webp', alt: 'Snowdream Album',   label: '' },
      { src: '/image/graphic/album-6.webp', alt: 'Jazz Suite Album',  label: '' },
      { src: '/image/graphic/album-7.webp', alt: 'Ambient Album',     label: '' },
      { src: '/image/graphic/album-8.webp', alt: 'Soul Album',        label: '' },
    ],
  },
  {
    id: 'brochure',
    title: 'Brochure',
    count: '8 designs',
    ariaLabel: 'Brochures',
    carouselClass: 'brochure-carousel',
    items: [
      { src: '/image/graphic/brochure-1.webp', alt: 'White Brand Brochure',     label: '' },
      { src: '/image/graphic/brochure-2.webp', alt: 'Dark Luxury Brochure',     label: '' },
      { src: '/image/graphic/brochure-3.webp', alt: 'Minimal Brochure',         label: '' },
      { src: '/image/graphic/brochure-4.webp', alt: 'Local Community Brochure', label: '' },
      { src: '/image/graphic/brochure-5.webp', alt: 'Dante Music Studio',       label: '' },
      { src: '/image/graphic/brochure-6.webp', alt: 'Restaurant Menu',          label: '' },
      { src: '/image/graphic/brochure-7.webp', alt: 'BMS Equipment List',       label: '' },
      { src: '/image/graphic/brochure-8.webp', alt: 'Price List',               label: '' },
    ],
  },
];

export default function GraphicPage() {
  return (
    <>
      <HeroSection
        badge="Graphic Design Portfolio"
        heading={<>Services We <span className="grad-text">Provide</span></>}
        description="From eye-catching designs to complete social media strategies, we deliver everything you need to grow, engage, and stand out online."
        ariaLabel="Graphic Design Services"
        categories={[
          { href: '#posts',      label: 'Social Media Posts' },
          { href: '#thumbnails', label: 'Thumbnails'         },
          { href: '#reels',      label: 'Reel Covers'        },
          { href: '#posters',    label: 'Posters'            },
          { href: '#album',      label: 'Album Art'          },
          { href: '#brochure',   label: 'Brochure'           },
        ]}
      />

      <main className="gallery-page" aria-label="Design Portfolio Gallery">

        <div className="gallery-heading-wrap">
          <div className="gallery-heading-eyebrow-wrap">
            <span className="gallery-heading-eyebrow">Category</span>
          </div>
          <h2 className="gallery-heading-title">
            Graphic <span className="grad-text">Design</span>
          </h2>
          <p className="gallery-heading-desc">
            Premium visuals crafted for every format — from social media to print, each piece is built to stop the scroll and communicate your brand.
          </p>
        </div>

        {SECTIONS.map((section) => (
          <GallerySection key={section.id} {...section} />
        ))}

      </main>

    </>
  );
}
