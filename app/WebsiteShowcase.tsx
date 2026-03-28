'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type Category = 'ecommerce' | 'portfolio' | 'landing' | 'saas';

// ── Edit URLs and images here ─────────────────────────────────────────────────
const layouts: { id: Category; label: string; url: string; image: string; alt: string }[] = [
  { id: 'ecommerce', label: 'Quick Paramarsh',       url: 'https://www.quickparamarsh.com/',  image: '/image/homepage/website-1.webp', alt: 'E-Commerce website preview'  },
  { id: 'portfolio', label: 'Magh Ji',         url: 'https://www.maghji.com/', image: '/image/homepage/website-2.webp', alt: 'Portfolio website preview'    },
  { id: 'landing',   label: 'Tattv Healthcare',     url: 'https://tattvhealthcare.com/',  image: '/image/homepage/website-3.webp', alt: 'Landing page preview'         },
  { id: 'saas',      label: 'Techbias', url: 'https://www.techbias.in/',  image: '/image/homepage/website-4.webp', alt: 'SaaS dashboard preview'       },
];
// ─────────────────────────────────────────────────────────────────────────────

const categoryIds = layouts.map((l) => l.id);

export default function WebsiteShowcase() {
  const [active, setActive] = useState<Category>('ecommerce');

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => {
        const idx = categoryIds.indexOf(prev);
        return categoryIds[(idx + 1) % categoryIds.length];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="ws-section" aria-label="Website Showcase">

      <div className="ws-bg" aria-hidden="true">
        <div className="ws-blob ws-blob-l"></div>
        <div className="ws-blob ws-blob-r"></div>
      </div>

      <div className="ws-header">
        <h2 className="ws-title">Websites That Speak <span className="ws-grad">Your Brand</span></h2>
        <p className="ws-sub">From conversion-focused landing pages to full e-commerce stores,<br />we build websites that look stunning and perform even better.</p>
      </div>

      <div className="ws-frame-wrap">
        <div className="ws-browser" role="region" aria-label="Website preview">
          <div className="ws-browser-bar" aria-hidden="true">
            <div className="ws-dots">
              <span style={{ background: '#ff5f57' }}></span>
              <span style={{ background: '#febc2e' }}></span>
              <span style={{ background: '#28c840' }}></span>
            </div>
            <div className="ws-url-bar">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
              <span>{layouts.find((l) => l.id === active)!.url}</span>
            </div>
            <div className="ws-nav-icons" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>
            </div>
          </div>

          <div className="ws-screen">
            {layouts.map((layout) => (
              <div key={layout.id} className={`ws-panel${active === layout.id ? ' active' : ''}`} data-cat={layout.id} role="tabpanel">
                <img src={layout.image} alt={layout.alt} width={1886} height={924} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>
        </div>

        <div className="ws-thumbs" role="tablist" aria-label="Website type selector">
          {layouts.map((layout) => (
            <div
              key={layout.id}
              className={`ws-thumb${active === layout.id ? ' active' : ''}`}
              data-cat={layout.id}
              role="tab"
              aria-selected={active === layout.id}
              tabIndex={0}
              onClick={() => setActive(layout.id)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActive(layout.id); }}
            >
              <img src={layout.image} alt={layout.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <span>{layout.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="ws-cta-wrap">
        <Link href="/contact" className="ws-cta-btn">
          Discover More
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
      </div>
    </section>
  );
}
