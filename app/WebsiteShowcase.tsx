'use client';

import { useState } from 'react';
import Link from 'next/link';

type Category = 'ecommerce' | 'portfolio' | 'landing' | 'saas';

const categories: { id: Category; label: string }[] = [
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'landing', label: 'Landing Pages' },
  { id: 'saas', label: 'SaaS / Dashboards' },
];

const urlLabels: Record<Category, string> = {
  ecommerce: 'yourstore.com',
  portfolio: 'myportfolio.co',
  landing: 'yourbrand.com',
  saas: 'dashboard.app',
};

const thumbPreviews: Record<Category, string> = {
  ecommerce: 'linear-gradient(135deg,#1a0838,#3d0a70)',
  portfolio: 'linear-gradient(135deg,#060510,#1a0030)',
  landing: 'linear-gradient(135deg,#04020e,#280010)',
  saas: 'linear-gradient(135deg,#080618,#1a0838)',
};

const thumbLabels: Record<Category, string> = {
  ecommerce: 'E-Commerce',
  portfolio: 'Portfolio',
  landing: 'Landing Page',
  saas: 'Dashboard',
};

export default function WebsiteShowcase() {
  const [active, setActive] = useState<Category>('ecommerce');

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

      <div className="ws-tabs" role="tablist">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`ws-tab${active === cat.id ? ' active' : ''}`}
            data-cat={cat.id}
            role="tab"
            aria-selected={active === cat.id}
            onClick={() => setActive(cat.id)}
          >
            {cat.label}
          </button>
        ))}
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
              <span>{urlLabels[active]}</span>
            </div>
            <div className="ws-nav-icons" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>
            </div>
          </div>

          <div className="ws-screen">
            {/* E-Commerce */}
            <div className={`ws-panel${active === 'ecommerce' ? ' active' : ''}`} data-cat="ecommerce" role="tabpanel">
              <div className="ws-mock-nav" aria-hidden="true"><div className="ws-mock-logo"></div><div className="ws-mock-links"><span></span><span></span><span></span></div><div className="ws-mock-cta"></div></div>
              <div className="ws-mock-hero" style={{ background: 'linear-gradient(135deg,#1a0838 0%,#2d0a5a 50%,#0d0020 100%)' }} aria-hidden="true">
                <div className="ws-mock-hero-text"><div style={{ width: '55%', height: '14px', background: '#fff', borderRadius: '4px', marginBottom: '10px', opacity: 0.9 }}></div><div style={{ width: '40%', height: '10px', background: 'rgba(255,255,255,0.4)', borderRadius: '4px', marginBottom: '18px' }}></div><div style={{ width: '100px', height: '32px', background: 'linear-gradient(90deg,#4b3fff,#d4007a)', borderRadius: '8px' }}></div></div>
                <div className="ws-mock-hero-img"></div>
              </div>
              <div className="ws-mock-products" aria-hidden="true">
                <div className="ws-mock-section-title"></div>
                <div className="ws-mock-grid">
                  <div className="ws-mock-product"><div className="ws-mock-product-img" style={{ background: 'linear-gradient(160deg,#2a0a50,#5a0a80)' }}></div><div className="ws-mock-product-info"><div></div><div></div></div></div>
                  <div className="ws-mock-product"><div className="ws-mock-product-img" style={{ background: 'linear-gradient(160deg,#3d0060,#8000a0)' }}></div><div className="ws-mock-product-info"><div></div><div></div></div></div>
                  <div className="ws-mock-product"><div className="ws-mock-product-img" style={{ background: 'linear-gradient(160deg,#500020,#c00050)' }}></div><div className="ws-mock-product-info"><div></div><div></div></div></div>
                  <div className="ws-mock-product"><div className="ws-mock-product-img" style={{ background: 'linear-gradient(160deg,#1a0050,#4b3fff)' }}></div><div className="ws-mock-product-info"><div></div><div></div></div></div>
                </div>
              </div>
              <div className="ws-mock-testimonials" aria-hidden="true">
                <div className="ws-mock-section-title" style={{ width: '120px' }}></div>
                <div className="ws-mock-reviews">
                  <div className="ws-mock-review"><div className="ws-stars"></div><div></div><div></div></div>
                  <div className="ws-mock-review"><div className="ws-stars"></div><div></div><div></div></div>
                  <div className="ws-mock-review"><div className="ws-stars"></div><div></div><div></div></div>
                </div>
              </div>
            </div>

            {/* Portfolio */}
            <div className={`ws-panel${active === 'portfolio' ? ' active' : ''}`} data-cat="portfolio" role="tabpanel">
              <div className="ws-mock-nav" aria-hidden="true"><div className="ws-mock-logo"></div><div className="ws-mock-links"><span></span><span></span><span></span></div><div className="ws-mock-cta" style={{ background: 'linear-gradient(90deg,#d4007a,#ff3c2f)' }}></div></div>
              <div className="ws-mock-hero" style={{ background: 'linear-gradient(135deg,#060510 0%,#1a0030 40%,#300010 100%)' }} aria-hidden="true">
                <div className="ws-mock-hero-text" style={{ width: '60%' }}><div style={{ width: '80%', height: '18px', background: 'linear-gradient(90deg,#9b2fff,#d4007a)', borderRadius: '4px', marginBottom: '10px' }}></div><div style={{ width: '55%', height: '10px', background: 'rgba(255,255,255,0.3)', borderRadius: '4px', marginBottom: '18px' }}></div><div style={{ display: 'flex', gap: '8px' }}><div style={{ width: '80px', height: '28px', background: 'linear-gradient(90deg,#4b3fff,#9b2fff)', borderRadius: '6px' }}></div><div style={{ width: '80px', height: '28px', background: 'rgba(255,255,255,0.08)', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)' }}></div></div></div>
              </div>
              <div className="ws-mock-masonry" aria-hidden="true">
                <div className="ws-mason-col"><div style={{ height: '80px', background: 'linear-gradient(160deg,#1a0838,#3d0a70)', borderRadius: '6px', marginBottom: '6px' }}></div><div style={{ height: '50px', background: 'linear-gradient(160deg,#200010,#500030)', borderRadius: '6px' }}></div></div>
                <div className="ws-mason-col"><div style={{ height: '50px', background: 'linear-gradient(160deg,#0d0020,#2a0060)', borderRadius: '6px', marginBottom: '6px' }}></div><div style={{ height: '80px', background: 'linear-gradient(160deg,#300010,#700030)', borderRadius: '6px' }}></div></div>
                <div className="ws-mason-col"><div style={{ height: '70px', background: 'linear-gradient(160deg,#1a0028,#4a0060)', borderRadius: '6px', marginBottom: '6px' }}></div><div style={{ height: '60px', background: 'linear-gradient(160deg,#200018,#500030)', borderRadius: '6px' }}></div></div>
                <div className="ws-mason-col"><div style={{ height: '55px', background: 'linear-gradient(160deg,#0a0820,#2a2060)', borderRadius: '6px', marginBottom: '6px' }}></div><div style={{ height: '75px', background: 'linear-gradient(160deg,#280010,#600020)', borderRadius: '6px' }}></div></div>
              </div>
            </div>

            {/* Landing Page */}
            <div className={`ws-panel${active === 'landing' ? ' active' : ''}`} data-cat="landing" role="tabpanel">
              <div className="ws-mock-nav" aria-hidden="true"><div className="ws-mock-logo"></div><div className="ws-mock-links"><span></span><span></span></div><div className="ws-mock-cta" style={{ background: 'linear-gradient(90deg,#ff3c2f,#d4007a)' }}></div></div>
              <div className="ws-mock-hero" style={{ background: 'linear-gradient(160deg,#04020e 0%,#18083a 60%,#280010 100%)', textAlign: 'center', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '28px 16px' }} aria-hidden="true">
                <div style={{ width: '180px', height: '12px', background: 'linear-gradient(90deg,#4b3fff,#d4007a)', borderRadius: '4px', marginBottom: '10px' }}></div>
                <div style={{ width: '130px', height: '8px', background: 'rgba(255,255,255,0.25)', borderRadius: '4px', marginBottom: '20px' }}></div>
                <div style={{ width: '110px', height: '34px', background: 'linear-gradient(90deg,#4b3fff,#9b2fff,#d4007a)', borderRadius: '999px', boxShadow: '0 0 20px rgba(155,47,255,0.4)' }}></div>
              </div>
              <div className="ws-mock-features" aria-hidden="true">
                <div className="ws-mock-feat"><div className="ws-feat-icon" style={{ background: 'rgba(75,63,255,0.2)' }}></div><div className="ws-feat-lines"><div></div><div></div></div></div>
                <div className="ws-mock-feat"><div className="ws-feat-icon" style={{ background: 'rgba(212,0,122,0.2)' }}></div><div className="ws-feat-lines"><div></div><div></div></div></div>
                <div className="ws-mock-feat"><div className="ws-feat-icon" style={{ background: 'rgba(255,60,47,0.2)' }}></div><div className="ws-feat-lines"><div></div><div></div></div></div>
              </div>
              <div className="ws-mock-social-proof" aria-hidden="true">
                <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', marginTop: '10px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg,#4b3fff,#9b2fff)' }}></div>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg,#9b2fff,#d4007a)' }}></div>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg,#d4007a,#ff3c2f)' }}></div>
                  <div style={{ width: '60px', height: '28px', borderRadius: '4px', background: 'rgba(255,255,255,0.06)', marginLeft: '4px' }}></div>
                </div>
              </div>
            </div>

            {/* SaaS Dashboard */}
            <div className={`ws-panel${active === 'saas' ? ' active' : ''}`} data-cat="saas" role="tabpanel">
              <div className="ws-mock-dash" aria-hidden="true">
                <div className="ws-dash-sidebar">
                  <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'linear-gradient(135deg,#4b3fff,#d4007a)', marginBottom: '16px' }}></div>
                  <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px', marginBottom: '8px' }}></div>
                  <div style={{ width: '70%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', marginBottom: '8px' }}></div>
                  <div style={{ width: '80%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', marginBottom: '8px' }}></div>
                  <div style={{ width: '60%', height: '6px', background: 'linear-gradient(90deg,#4b3fff,#9b2fff)', borderRadius: '3px', marginBottom: '8px' }}></div>
                  <div style={{ width: '75%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}></div>
                </div>
                <div className="ws-dash-main">
                  <div className="ws-dash-stats">
                    <div className="ws-dash-stat" style={{ background: 'linear-gradient(135deg,#1a0838,#2d0a5a)' }}><div style={{ height: '8px', width: '70%', background: 'rgba(255,255,255,0.5)', borderRadius: '2px', marginBottom: '6px' }}></div><div style={{ height: '18px', width: '50%', background: 'linear-gradient(90deg,#4b3fff,#9b2fff)', borderRadius: '2px' }}></div></div>
                    <div className="ws-dash-stat" style={{ background: 'linear-gradient(135deg,#200010,#500030)' }}><div style={{ height: '8px', width: '70%', background: 'rgba(255,255,255,0.5)', borderRadius: '2px', marginBottom: '6px' }}></div><div style={{ height: '18px', width: '50%', background: 'linear-gradient(90deg,#d4007a,#ff3c2f)', borderRadius: '2px' }}></div></div>
                    <div className="ws-dash-stat" style={{ background: 'linear-gradient(135deg,#080620,#180840)' }}><div style={{ height: '8px', width: '70%', background: 'rgba(255,255,255,0.5)', borderRadius: '2px', marginBottom: '6px' }}></div><div style={{ height: '18px', width: '50%', background: 'linear-gradient(90deg,#9b2fff,#d4007a)', borderRadius: '2px' }}></div></div>
                  </div>
                  <div className="ws-dash-chart">
                    <svg width="100%" height="70" viewBox="0 0 300 70" preserveAspectRatio="none" aria-hidden="true">
                      <defs>
                        <linearGradient id="cg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4b3fff" stopOpacity="0.4"/><stop offset="100%" stopColor="#4b3fff" stopOpacity="0"/></linearGradient>
                        <linearGradient id="cg2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#4b3fff"/><stop offset="50%" stopColor="#9b2fff"/><stop offset="100%" stopColor="#d4007a"/></linearGradient>
                      </defs>
                      <path d="M0,60 C30,55 50,40 80,35 S130,20 160,25 S220,10 260,15 L300,10 L300,70 L0,70Z" fill="url(#cg1)"/>
                      <path d="M0,60 C30,55 50,40 80,35 S130,20 160,25 S220,10 260,15 L300,10" fill="none" stroke="url(#cg2)" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="ws-dash-table">
                    <div className="ws-dash-row header"><span></span><span></span><span></span></div>
                    <div className="ws-dash-row"><span></span><span></span><span style={{ background: 'linear-gradient(90deg,#4b3fff,#9b2fff)' }}></span></div>
                    <div className="ws-dash-row"><span></span><span></span><span style={{ background: 'linear-gradient(90deg,#9b2fff,#d4007a)' }}></span></div>
                    <div className="ws-dash-row"><span></span><span></span><span style={{ background: 'linear-gradient(90deg,#d4007a,#ff3c2f)' }}></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ws-thumbs" role="tablist" aria-label="Website type selector">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`ws-thumb${active === cat.id ? ' active' : ''}`}
              data-cat={cat.id}
              role="tab"
              aria-selected={active === cat.id}
              tabIndex={0}
              onClick={() => setActive(cat.id)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActive(cat.id); }}
            >
              <div className="ws-thumb-preview" style={{ background: thumbPreviews[cat.id] }}></div>
              <span>{thumbLabels[cat.id]}</span>
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
