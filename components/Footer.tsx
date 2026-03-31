import Link from 'next/link';
import CtaStrip from '@/components/CtaStrip';

export default function Footer() {
  return (
    <footer className="footer-section" aria-label="Footer">

      <CtaStrip
        heading={<>Ready to Make Your Brand <span className="grad-text">Stand Out?</span></>}
        subheading={<>Book a free strategy call and let&apos;s build content that grows your brand<br />and drives real, lasting results.</>}
        primaryBtn={{ href: '/contact', label: 'Book a Free Call' }}
        secondaryBtn={{ href: '/pricing', label: 'View Pricing' }}
      />

      {/* Body: brand col + 3 nav columns */}
      <div className="footer-body">

        {/* Left brand column */}
        <div className="footer-brand">
          <Link href="/" className="footer-logo-mark">Drishyam<sup>®</sup></Link>
          <p className="footer-tagline">
            Content is easy. Growth is not.<br />
            We help you do both.
          </p>
          <div className="footer-socials">
            {/* WhatsApp */}
            <a href="https://wa.me/18139657606" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/studio.drishyam" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* Mail */}
            <a href="mailto:contact@drishyammedia.com" className="footer-social-btn" aria-label="Mail">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                <polyline points="22,4 12,13 2,4" />
              </svg>
            </a>
          </div>
        </div>

        {/* Nav column 1 */}
        <nav className="footer-nav-col" aria-label="Footer navigation column 1">
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/">Home</Link></li>
          </ul>
        </nav>

        {/* Nav column 2 */}
        <nav className="footer-nav-col" aria-label="Footer navigation column 2">
          <ul>
            <li><Link href="/pricing/creative">Creative Pricing</Link></li>
            <li><Link href="/pricing/website-seo">Website Pricing</Link></li>
          </ul>
        </nav>

        {/* Nav column 3 */}
        <nav className="footer-nav-col" aria-label="Footer navigation column 3">
          <ul>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/reviews">Review</Link></li>
          </ul>
        </nav>

      </div>

      {/* Divider */}
      <div className="footer-divider" aria-hidden="true" />

      {/* Copyright bar */}
      <div className="footer-copy-bar">
        <p className="footer-copy">© {new Date().getFullYear()} Drishyam Media Marketing Agency. All Rights Reserved.</p>
        <ul className="footer-copy-links">
          <li><Link href="#">Privacy Policy</Link></li>
          <li><Link href="#">Terms of Service</Link></li>
        </ul>
      </div>

    </footer>
  );
}
