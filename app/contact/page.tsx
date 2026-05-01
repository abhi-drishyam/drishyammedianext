import './contact.css';
import HeroSection from '@/components/HeroSection';
import ContactForm from './ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Get a Free Strategy Call',
  description:
    "Have a project in mind? Contact Drishyam Media for video production, graphic design, web development, and brand growth. Offices in Tampa, Chandigarh, Niagara, and Mumbai.",
  alternates: { canonical: '/contact' },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Drishyam Media',
  url: 'https://drishyammedia.com',
  logo: 'https://drishyammedia.com/icons/icon-512x512.png',
  image: 'https://drishyammedia.com/icons/icon-512x512.png',
  description:
    'Creative marketing agency specializing in video production, graphic design, web development, and brand growth strategy.',
  email: 'contact@drishyammedia.com',
  telephone: '+1-813-965-7606',
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
  },
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'Tampa',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Chandigarh',
      addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Niagara',
      addressCountry: 'CA',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai',
      addressCountry: 'IN',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Creative Marketing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Video Editing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Graphic Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Photography & Videography' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Strategy' } },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <HeroSection
        heading={<>Let&apos;s Create Something <span className="grad-text">Amazing Together</span></>}
        description="Have a project in mind? We'd love to hear from you. Reach out and let's start building your brand's next big story."
        ariaLabel="Contact hero section"
      />

      {/* Contact section */}
      <section className="contact-section" aria-label="Contact information and form">
        <div className="contact-container">
          {/* Left — info */}
          <div className="contact-info">
            <h2>Ask Us <span className="grad-text">Anything</span></h2>
            <p className="contact-info-text">Have a project in mind? We&apos;d love to hear from you. Reach out and let&apos;s start building your brand&apos;s next big story.</p>
            <div className="contact-methods">
              {(() => { const email = 'contact@drishyammedia.com'; return (
              <a href={`mailto:${email}`} className="contact-method">
                <div className="contact-method-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div className="contact-method-content">
                  <h3>Email Us</h3>
                  <p>{email}</p>
                </div>
              </a>
              ); })()}
              <a href="https://www.instagram.com/studio.drishyam" className="contact-method" target="_blank" rel="noopener noreferrer">
                <div className="contact-method-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div className="contact-method-content">
                  <h3>Instagram</h3>
                  <p>@studio.drisyhyam</p>
                </div>
              </a>
              {(() => { const phoneUS = '+1 813 965 7606'; return (
              <a href={`tel:${phoneUS.replace(/\s/g, '')}`} className="contact-method">
                <div className="contact-method-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div className="contact-method-content">
                  <h3>US &amp; Canada</h3>
                  <p>{phoneUS}</p>
                </div>
              </a>
              ); })()}
              {(() => { const phoneIN = '+91 9914319899'; return (
              <a href={`tel:${phoneIN.replace(/\s/g, '')}`} className="contact-method">
                <div className="contact-method-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div className="contact-method-content">
                  <h3>India</h3>
                  <p>{phoneIN}</p>
                </div>
              </a>
              ); })()}
            </div>
          </div>

          {/* Right — form */}
          <ContactForm />
        </div>
      </section>

      {/* Locations */}
      <section className="locations-section" aria-label="Our office locations">
        <div className="section-header">
          <h2>Our <span className="grad-text">Global Presence</span></h2>
          <p>We&apos;re proud to serve clients worldwide from our offices across the globe.</p>
        </div>
        <div className="locations-grid">
          {[
            { name: 'Chandigarh, India', address: 'Where our core team operates, driving creative direction and production excellence.', mapSrc: 'https://maps.google.com/maps?ll=30.7363,76.7884&z=10&output=embed' },
            { name: 'Tampa, Florida', address: 'Our central base for global strategy, client partnerships, and growth.', mapSrc: 'https://maps.google.com/maps?ll=27.9475,-82.4584&z=10&output=embed' },
            { name: 'Niagara, Canada', address: 'Extending our capabilities across North America with localized support.', mapSrc: 'https://maps.google.com/maps?ll=43.1066,-79.0642&z=10&output=embed' },
            { name: 'Mumbai, India', address: 'Strengthening our reach and responsiveness across Western India.', mapSrc: 'https://maps.google.com/maps?ll=19.0300,72.8777&z=10&output=embed' },
          ].map((loc) => (
            <div key={loc.name} className="location-card">
              <div className="location-map">
                <iframe
                  src={loc.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${loc.name}`}
                />
              </div>
              <div className="location-info">
                <h3 className="location-name">{loc.name}</h3>
                <p className="location-address">{loc.address}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
