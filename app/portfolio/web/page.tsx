'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import './web-portfolio.css';

/* ── Project data — edit here to add/remove projects ────────────────────────── */
const projects: {
  id: string;
  title: string;
  tag: string;
  description: string;
  image: string;
  url: string;
}[] = [
  {
    id: 'quickparamarsh',
    title: 'Quick Paramarsh',
    tag: 'Business Website',
    description: 'A modern consulting platform with clean UI, built for trust and conversion.',
    image: '/image/homepage/website-1.webp',
    url: 'https://www.quickparamarsh.com/',
  },
  {
    id: 'maghji',
    title: 'Magh Ji',
    tag: 'Brand Website',
    description: 'An elegant brand presence designed to reflect heritage and craftsmanship.',
    image: '/image/homepage/website-2.webp',
    url: 'https://www.maghji.com/',
  },
  {
    id: 'tattv',
    title: 'Tattv Healthcare',
    tag: 'Healthcare',
    description: 'A calming, professional healthcare site that prioritises clarity and patient trust.',
    image: '/image/homepage/website-3.webp',
    url: 'https://tattvhealthcare.com/',
  },
  {
    id: 'techbias',
    title: 'Techbias',
    tag: 'Tech / SaaS',
    description: 'A bold, tech-forward landing page engineered for engagement and sign-ups.',
    image: '/image/homepage/website-4.webp',
    url: 'https://www.techbias.in/',
  },
  /* ── Add more projects below ──────────────────────────────────────────────── */
  // {
  //   id: 'project5',
  //   title: 'Project Name',
  //   tag: 'Category',
  //   description: 'Short one-liner about the project.',
  //   image: '/image/web-portfolio/project5.webp',
  //   url: 'https://example.com',
  // },
];
/* ──────────────────────────────────────────────────────────────────────────── */

export default function WebPortfolioPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [redirectTarget, setRedirectTarget] = useState<{ title: string; url: string } | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (redirectTarget) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [redirectTarget]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setRedirectTarget(null);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const handleCardClick = useCallback((e: React.MouseEvent, project: { title: string; url: string }) => {
    e.preventDefault();
    setRedirectTarget(project);
  }, []);

  return (
    <>
      {/* ── Redirect confirmation modal ──────────────────────────────────── */}
      {redirectTarget && (
        <div className="wp-modal-overlay" onClick={() => setRedirectTarget(null)}>
          <div className="wp-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="External link confirmation">
            <div className="wp-modal-icon" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#modalGrad)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <defs><linearGradient id="modalGrad" x1="0" y1="0" x2="24" y2="24"><stop offset="0%" stopColor="#4b3fff"/><stop offset="100%" stopColor="#d4007a"/></linearGradient></defs>
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </div>
            <h3 className="wp-modal-title">You&apos;re leaving Drishyam</h3>
            <p className="wp-modal-desc">
              You&apos;ll be redirected to <strong>{redirectTarget.title}</strong>&apos;s website — an external link not managed by us.
            </p>
            <p className="wp-modal-url">{redirectTarget.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</p>
            <div className="wp-modal-actions">
              <button className="wp-modal-cancel" onClick={() => setRedirectTarget(null)}>Go Back</button>
              <a className="wp-modal-continue" href={redirectTarget.url} target="_blank" rel="noopener noreferrer" onClick={() => setRedirectTarget(null)}>
                Continue
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 12L12 4M12 4H5M12 4v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="hero-wrapper">
        <section className="page-hero" aria-label="Web &amp; App Portfolio">
          <div className="grain" aria-hidden="true" />
          <div className="page-hero-content">
            <div className="hero-eyebrow">Web &amp; App Portfolio</div>
            <h1>
              Websites That <span className="grad-text">Perform</span>
            </h1>
            <p className="sub-copy">
              Every pixel placed with purpose. We craft digital experiences that
              look stunning, load fast, and convert visitors into customers.
            </p>
          </div>
        </section>
      </div>

      {/* ── What We Build ──────────────────────────────────────────────── */}
      <section className="wp-services" aria-label="What we build">
        <h2 className="wp-services-heading">What We <span className="grad-text">Build</span></h2>
        <div className="wp-services-grid">
          <div className="wp-svc-card">
            <div className="wp-svc-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#svcGrad1)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <defs><linearGradient id="svcGrad1" x1="0" y1="0" x2="24" y2="24"><stop offset="0%" stopColor="#4b3fff"/><stop offset="100%" stopColor="#d4007a"/></linearGradient></defs>
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            </div>
            <h3>WordPress Websites</h3>
            <p>Starter sites, business pages, and content-driven platforms — built on WordPress for easy management and quick launches.</p>
          </div>

          <div className="wp-svc-card">
            <div className="wp-svc-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#svcGrad2)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <defs><linearGradient id="svcGrad2" x1="0" y1="0" x2="24" y2="24"><stop offset="0%" stopColor="#9b2fff"/><stop offset="100%" stopColor="#ff3c2f"/></linearGradient></defs>
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
                <line x1="14" y1="4" x2="10" y2="20" />
              </svg>
            </div>
            <h3>Custom Coded Websites</h3>
            <p>High-performance, fully custom websites hand-coded from scratch — designed for speed, scalability, and complete creative control.</p>
          </div>

          <div className="wp-svc-card">
            <div className="wp-svc-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#svcGrad3)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <defs><linearGradient id="svcGrad3" x1="0" y1="0" x2="24" y2="24"><stop offset="0%" stopColor="#4b3fff"/><stop offset="100%" stopColor="#ff3c2f"/></linearGradient></defs>
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <line x1="12" y1="18" x2="12" y2="18.01" />
              </svg>
            </div>
            <h3>App Development</h3>
            <p>Native and cross-platform mobile apps for iOS and Android — from concept to App Store, built for real users and real results.</p>
          </div>
        </div>
      </section>

      {/* ── Portfolio Grid ────────────────────────────────────────────────── */}
      <section className="wp-section" aria-label="Website projects">
        <div className="wp-grid">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`wp-card${hoveredId && hoveredId !== project.id ? ' dimmed' : ''}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={(e) => handleCardClick(e, project)}
            >
              {/* Browser frame */}
              <div className="wp-browser">
                <div className="wp-browser-bar" aria-hidden="true">
                  <div className="wp-dots">
                    <span style={{ background: '#ff5f57' }} />
                    <span style={{ background: '#febc2e' }} />
                    <span style={{ background: '#28c840' }} />
                  </div>
                  <div className="wp-url">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" aria-hidden="true">
                      <rect x="3" y="11" width="18" height="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                    <span>{project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                  </div>
                </div>
                <div className="wp-screen">
                  <img
                    src={project.image}
                    alt={`${project.title} website preview`}
                    loading="lazy"
                    width={960}
                    height={540}
                  />
                </div>
              </div>

              {/* Info */}
              <div className="wp-info">
                <span className="wp-tag">{project.tag}</span>
                <h3 className="wp-title">{project.title}</h3>
                <p className="wp-desc">{project.description}</p>
                <span className="wp-link-hint">
                  Visit Site
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 12L12 4M12 4H5M12 4v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* ── Bottom CTA ────────────────────────────────────────────────── */}
        <div className="wp-cta-wrap">
          <p className="wp-cta-text">Have a project in mind?</p>
          <Link href="/contact" className="wp-cta-btn">
            Let&apos;s Build Together
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
