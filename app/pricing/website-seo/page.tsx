import '../pricing.css';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website & SEO Pricing — WordPress, Custom Dev & Local SEO',
  description:
    'Website development and SEO pricing — WordPress sites, custom-coded websites, maintenance plans, and local SEO packages. Transparent pricing, no hidden fees.',
  alternates: { canonical: '/pricing/website-seo' },
};

// Helper SVG components
const SeoCheck = ({ pink = false }) => (
  <div className="seo-cell">
    <div className={`pt-check${pink ? ' pink' : ''}`}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  </div>
);

export default function WebsiteSeoPricingPage() {
  return (
    <>
      <HeroSection
        badge="Monthly retainers & one-time project packages"
        heading={<>Website &amp; SEO <span className="grad-text">Pricing</span></>}
        description={<>Local SEO, WordPress &amp; custom-coded websites — built to perform.<br />Transparent pricing. No hidden fees.</>}
        ariaLabel="Website and SEO pricing overview"
        categories={[
          { href: '#website-wp', label: 'WordPress Dev' },
          { href: '#website-custom', label: 'Custom Dev' },
          { href: '#website-maintenance', label: 'Maintenance' },
          { href: '#seo', label: 'SEO' },
        ]}
      />

      {/* WEBSITE DEV — WORDPRESS */}
      <section className="svc-section" id="website-wp" aria-label="WordPress website development">
        <div className="svc-header">
          <h2>Website Development — <span className="grad-text">WordPress</span></h2>
          <p>Faster launch. Easier updates. Clean UI.</p>
        </div>

        <div className="webdev-grid">
          <div className="wd-card">
            <div className="wd-package">Package</div>
            <div className="wd-name">Single Page Website</div>
            <div className="wd-price grad-text">$599</div>
            <div className="wd-period">one-time</div>
            <div className="wd-divider"></div>
            <div className="wd-desc">Setup, theme customization, mobile responsive.</div>
            <Link href="/contact" className="btn-outline">Get Started</Link>
          </div>

          <div className="wd-card" style={{borderColor:'rgba(155,47,255,0.25)',background:'rgba(155,47,255,0.06)'}}>
            <div className="wd-package">Package</div>
            <div className="wd-name">Multi-Page Website</div>
            <div className="wd-price grad-text">$999</div>
            <div className="wd-period">5–7 pages · one-time</div>
            <div className="wd-divider"></div>
            <div className="wd-desc">Custom pages, responsive layout, basic SEO.</div>
            <Link href="/contact" className="btn-solid">Get Started</Link>
          </div>

          <div className="wd-card">
            <div className="wd-package">Package</div>
            <div className="wd-name">E-Commerce Website</div>
            <div className="wd-price grad-text">$2,500</div>
            <div className="wd-period">one-time</div>
            <div className="wd-divider"></div>
            <div className="wd-desc">WooCommerce setup, checkout configuration.</div>
            <Link href="/contact" className="btn-outline">Get Started</Link>
          </div>
        </div>

        <div className="wd-footnotes" style={{position:'relative',zIndex:1,maxWidth:'960px',margin:'24px auto 0'}}>
          <div className="wd-footnote"><span className="icon green">✔</span> 2 months post-launch maintenance included</div>
          <div className="wd-footnote"><span className="icon green">✔</span> Setting up website on hosting and linking domain name included in above plans</div>
          <div className="wd-footnote"><span className="icon red">✖</span> Domain Name &amp; hosting plans not included — to be provided by clients (we can give recommendations depending upon requirements)</div>
          <div className="wd-footnote"><span className="icon red">✖</span> Payment gateway integration for single page and multi-page website charged separately, included in E-commmerce website.</div>
        </div>
      </section>

      <div className="section-sep" />

      {/* WEBSITE DEV — CUSTOM CODE */}
      <section className="svc-section" id="website-custom" aria-label="Custom code website development">
        <div className="svc-header">
          <h2>Website Development — <span className="grad-text">Custom Code</span></h2>
          <p>Built for performance, scalability &amp; custom UX.</p>
        </div>

        <div className="webdev-grid">
          <div className="wd-card">
            <div className="wd-package">Package</div>
            <div className="wd-name">Single Page Website</div>
            <div className="wd-price grad-text">$899</div>
            <div className="wd-period">one-time</div>
            <div className="wd-divider"></div>
            <div className="wd-desc">Custom coded site, optimized performance.</div>
            <Link href="/contact" className="btn-outline">Get Started</Link>
          </div>

          <div className="wd-card" style={{borderColor:'rgba(155,47,255,0.25)',background:'rgba(155,47,255,0.06)'}}>
            <div className="wd-package">Package</div>
            <div className="wd-name">Multi-Page Website</div>
            <div className="wd-price grad-text">$1,999</div>
            <div className="wd-period">5–7 pages · one-time</div>
            <div className="wd-divider"></div>
            <div className="wd-desc">Custom layout, responsive structure.</div>
            <Link href="/contact" className="btn-solid">Get Started</Link>
          </div>

          <div className="wd-card">
            <div className="wd-package">Package</div>
            <div className="wd-name">E-Commerce Website</div>
            <div className="wd-price grad-text">$3,999</div>
            <div className="wd-period">one-time</div>
            <div className="wd-divider"></div>
            <div className="wd-desc">Scalable custom store architecture.</div>
            <Link href="/contact" className="btn-outline">Get Started</Link>
          </div>
        </div>

        <div style={{position:'relative',zIndex:1,maxWidth:'960px',margin:'24px auto 0'}}>
          <div className="wd-footnote"><span className="icon green">✔</span> 2 months post-launch maintenance included</div>
          <div className="wd-footnote"><span className="icon red">✖</span> Domain &amp; hosting not included</div>
          <div className="wd-footnote"><span className="icon red">✖</span> Payment gateway integration billed separately</div>
        </div>
      </section>

      <div className="section-sep" />

      {/* WEBSITE MAINTENANCE */}
      <section className="svc-section" id="website-maintenance" aria-label="Website maintenance">
        <div className="svc-header">
          <h2>Website Maintenance <span className="grad-text">(Post-Launch)</span></h2>
          <p>Keep your site fast, secure, and always up to date.</p>
        </div>

        <div className="maint-wrap">
          <div className="maint-card">
            <div className="maint-info">
              <div className="maint-name">Ongoing Plan</div>
              <div className="maint-title">Monthly Maintenance</div>
              <div className="maint-desc">Updates, backups, security, bug fixes, minor edits.</div>
            </div>
            <div className="maint-price-col">
              <div className="maint-price grad-text">$199<sub>/mo</sub></div>
              <div className="maint-period">cancel anytime</div>
              <br />
              <Link href="/contact" className="btn-outline" style={{marginTop:'16px'}}>Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* SEO */}
      <section className="svc-section" id="seo" aria-label="SEO retainer plans">
        <div className="svc-header">
          <h2>SEO — <span className="grad-text">Monthly Retainers</span></h2>
          <p>Built for local visibility, not vanity metrics.</p>
        </div>

        <div className="seo-table-wrap">
          <div className="seo-header">
            <div></div>
            <div className="seo-plan-card">
              <div className="seo-plan-name">SEO Growth</div>
              <div className="seo-plan-price grad-text">From $699</div>
              <div className="seo-plan-period">per month</div>
            </div>
            <div className="seo-plan-card featured">
              <div className="seo-plan-name">SEO Authority</div>
              <div className="seo-plan-price grad-text">$1,199</div>
              <div className="seo-plan-period">per month</div>
            </div>
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:'2px'}}>
            <div className="seo-row">
              <div className="seo-label">On-Page SEO</div>
              <div className="seo-cell sub">Up to 10 Pages</div>
              <div className="seo-cell sub">Advanced</div>
            </div>
            <div className="seo-row">
              <div className="seo-label">Keyword Research</div>
              <SeoCheck />
              <SeoCheck pink />
            </div>
            <div className="seo-row">
              <div className="seo-label">Technical SEO</div>
              <div className="seo-cell sub">Basic</div>
              <div className="seo-cell sub">Advanced</div>
            </div>
            <div className="seo-row">
              <div className="seo-label">Content Optimization</div>
              <SeoCheck />
              <SeoCheck pink />
            </div>
            <div className="seo-row">
              <div className="seo-label">Link Strategy</div>
              <SeoCheck />
              <SeoCheck pink />
            </div>
            <div className="seo-row">
              <div className="seo-label">Competitor Tracking</div>
              <SeoCheck />
              <SeoCheck pink />
            </div>
            <div className="seo-row">
              <div className="seo-label">Google Business Profile Optimization</div>
              <SeoCheck />
              <SeoCheck pink />
            </div>
            <div className="seo-row">
              <div className="seo-label">Maps Visibility Focus</div>
              <SeoCheck />
              <SeoCheck pink />
            </div>
            <div className="seo-row">
              <div className="seo-label">Monthly SEO Work Report</div>
              <SeoCheck />
              <SeoCheck pink />
            </div>
          </div>

          <div className="seo-cta-row">
            <div></div>
            <div style={{display:'flex',justifyContent:'center'}}><Link href="/contact" className="btn-outline">Get Started</Link></div>
            <div style={{display:'flex',justifyContent:'center'}}><Link href="/contact" className="btn-solid">Get Started</Link></div>
          </div>
        </div>

        <div className="seo-note">
          Clients receive a detailed monthly report outlining: tasks completed, pages optimized, SEO progress &amp; visibility improvements.
        </div>
      </section>
    </>
  );
}
