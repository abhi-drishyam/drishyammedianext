import './contact.css';
import HeroSection from '@/components/HeroSection';
import ContactForm from './ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Drishyam Media',
  description: "Have a project in mind? We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
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
              <a href="mailto:studio.drishyam.com" className="contact-method">
                <div className="contact-method-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div className="contact-method-content">
                  <h3>Email Us</h3>
                  <p>studio.drishyam.com</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/company/drishyam-media" className="contact-method" target="_blank" rel="noopener noreferrer">
                <div className="contact-method-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </div>
                <div className="contact-method-content">
                  <h3>LinkedIn</h3>
                  <p>studio.drishyam.com</p>
                </div>
              </a>
              <a href="tel:1234567890" className="contact-method">
                <div className="contact-method-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div className="contact-method-content">
                  <h3>Call Us</h3>
                  <p>123,456,7890</p>
                </div>
              </a>
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
            { name: 'Chandigarh, India', address: 'Our flagship office serving clients across India and Southeast Asia', mapSrc: 'https://maps.google.com/maps?ll=30.7363,76.7884&z=10&output=embed' },
            { name: 'Tampa, Florida', address: 'US headquarters serving North American clients', mapSrc: 'https://maps.google.com/maps?ll=27.9475,-82.4584&z=10&output=embed' },
            { name: 'Niagara, Canada', address: 'Canadian office for North American partnerships', mapSrc: 'https://maps.google.com/maps?ll=43.1066,-79.0642&z=10&output=embed' },
            { name: 'Mumbai, India', address: 'Regional office for Western India operations', mapSrc: 'https://maps.google.com/maps?ll=19.0300,72.8777&z=10&output=embed' },
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
