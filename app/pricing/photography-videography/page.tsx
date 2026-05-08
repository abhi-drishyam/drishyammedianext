import '../pricing.css';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import CalButton from '@/components/CalButton';
import type { Metadata } from 'next';

// Helper SVG components
const Check = ({ pink = false }) => (
  <div className={`pt-check${pink ? ' pink' : ''}`}>
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

const Cross = () => (
  <div className="pt-cross">
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
      <path d="M1.5 1.5l5 5M6.5 1.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  </div>
);

export const metadata: Metadata = {
  title: 'Photography & Videography Pricing — Shoots for Creators & Businesses',
  description:
    'Photography and videography pricing — project packages for creators and businesses. Professional shoots bundled or à la carte.',
  alternates: { canonical: '/pricing/photography-videography' },
};

export default function PhotographyVideographyPricingPage() {
  return (
    <>
      <HeroSection
        badge="Project packages & Hourly Price"
        heading={<>Photography/Videography <span className="grad-text">Pricing</span></>}
        description={<>Professional shoots. Structured delivery. Predictable quality.<br />Photo &amp; video shoots — bundled or à la carte.</>}
        ariaLabel="Photography and videography pricing overview"
        categories={[
          { href: '#special', label: 'Special Packages' },
          { href: '#general-shoot', label: 'General Shoot Pricing' },
          { href: '#real-estate', label: 'Real Estate' },
          { href: '#events', label: 'Events' },
          { href: '#social-content', label: 'Social Media Content' },
          { href: '#photoshoots', label: 'Photoshoots' },
          { href: '#photo-video-shoots', label: 'Photo / Video Shoots' },
        ]}
      />

      {/* PHOTO / VIDEO SHOOTS */}
      <section className="svc-section" id="photo-video-shoots" aria-label="Photography and Video Shoot packages">
        <div className="svc-header">
          <h2>Photography / Video Shoots — <span className="grad-text">Project Based</span></h2>
          <p>Same gear. Same quality. Pricing based on time. <strong style={{color:'rgba(255,255,255,0.6)'}}></strong></p>
        </div>

        <div className="shoot-cards">
          <div className="shoot-card">
            <div className="shoot-card-inner">
              <div className="shoot-label">Package</div>
              <div className="shoot-name">Quick</div>
              <div className="shoot-duration">30 Minutes</div>
              <div className="shoot-price grad-text">$75</div>
              <div className="shoot-price-note">one-time project fee</div>
              <div className="shoot-divider" aria-hidden="true"></div>
              <div className="shoot-equipment">
                Quick shoots, short-form content, or basic coverage
              </div>
            </div>
          </div>

          <div className="shoot-card">
            <div className="shoot-card-inner">
              <div className="shoot-label">Package</div>
              <div className="shoot-name">Standard</div>
              <div className="shoot-duration">1 Hour</div>
              <div className="shoot-price grad-text">$100</div>
              <div className="shoot-price-note">one-time project fee</div>
              <div className="shoot-divider" aria-hidden="true"></div>
              <div className="shoot-equipment">
                Best for small shoots and quick sessions
              </div>
            </div>
          </div>

          <div className="shoot-card">
            <div className="shoot-card-inner">
              <div className="shoot-label">Package</div>
              <div className="shoot-name">Half-Day</div>
              <div className="shoot-duration">4 Hours</div>
              <div className="shoot-price grad-text">$349</div>
              <div className="shoot-price-note">one-time project fee</div>
              <div className="shoot-divider" aria-hidden="true"></div>
              <div className="shoot-equipment">
                <strong>Equipment included:</strong><br />
                Sony 10-bit 4K Camera, Gimbal, Tripod, Pro Mic
              </div>
            </div>
          </div>

          <div className="shoot-card">
            <div className="shoot-card-inner">
              <div className="shoot-label">Package</div>
              <div className="shoot-name">Full-Day</div>
              <div className="shoot-duration">8 Hours</div>
              <div className="shoot-price grad-text">$549</div>
              <div className="shoot-price-note">one-time project fee</div>
              <div className="shoot-divider" aria-hidden="true"></div>
              <div className="shoot-equipment">
                <strong>Equipment included:</strong><br />
                Same equipment, extended coverage
              </div>
            </div>
          </div>
        </div>

        <div className="shoot-delivery-note">
          <strong>Delivery:</strong> Final footage shared via Google Drive.<br />
          <strong>Add-ons priced separately:</strong> Drone, extra camera, rush delivery.
        </div>
      </section>

      <div className="section-sep" />

      {/* REAL ESTATE SERVICES */}
      <section className="svc-section" id="real-estate" aria-label="Real estate services pricing">
        <div className="svc-header">
          <h2>Real Estate <span className="grad-text">Services</span></h2>
          <p>Professional visuals to help your listings stand out and sell faster.</p>
        </div>

        <div className="webdev-grid">

          <div className="wd-card">
            <div className="wd-package">Package</div>
            <div className="wd-name">Starter — Photos Only</div>
            <div className="wd-price grad-text">$199</div>
            <div className="wd-period">one-time</div>
            <div className="wd-divider"></div>
            <ul className="tick-list" style={{flex:1,marginBottom:'24px'}}>
              <li><span className="tick"></span>25–40 edited images</li>
              <li><span className="tick"></span>Interior + exterior coverage</li>
              <li><span className="tick"></span>MLS-ready delivery</li>
            </ul>
            <CalButton variant="outline" />
          </div>

          <div className="wd-card" style={{borderColor:'rgba(155,47,255,0.25)',background:'rgba(155,47,255,0.06)'}}>
            <div className="wd-package">Package</div>
            <div className="wd-name">Growth — Photo + Video</div>
            <div className="wd-price grad-text">$449</div>
            <div className="wd-period">one-time</div>
            <div className="wd-divider"></div>
            <ul className="tick-list" style={{flex:1,marginBottom:'24px'}}>
              <li><span className="tick"></span>Everything in Starter</li>
              <li><span className="tick"></span>Cinematic walkthrough video</li>
              <li><span className="tick"></span>1 vertical social media reel</li>
            </ul>
            <CalButton variant="solid" />
          </div>

          <div className="wd-card">
            <div className="wd-package">Package</div>
            <div className="wd-name">Premium — Full Listing Package</div>
            <div className="wd-price grad-text">$699</div>
            <div className="wd-period">one-time</div>
            <div className="wd-divider"></div>
            <ul className="tick-list" style={{flex:1,marginBottom:'24px'}}>
              <li><span className="tick"></span>Everything in Growth</li>
              <li><span className="tick"></span>Drone footage</li>
              <li><span className="tick"></span>Day-to-dusk / twilight edits</li>
              <li><span className="tick"></span>Virtual staging (key areas)</li>
            </ul>
            <CalButton variant="outline" />
          </div>

        </div>
      </section>

      <div className="section-sep" />

      {/* EVENT COVERAGE */}
      <section className="svc-section" id="events" aria-label="Event coverage pricing">
        <div className="svc-header">
          <h2>Event <span className="grad-text">Coverage</span></h2>
          <p>Introductory Pricing — Limited Time (30% Off)</p>
        </div>

        <div className="webdev-grid">

          <div className="wd-card">
            <div className="wd-package">Package</div>
            <div className="wd-name">Starter — Event Highlight</div>
            <del className="sp-original" style={{fontSize:'16px',marginTop:'8px'}}>$499</del>
            <div className="wd-price grad-text">$349</div>
            <div className="wd-period">one-time</div>
            <div className="wd-divider"></div>
            <ul className="tick-list" style={{flex:1,marginBottom:'24px'}}>
              <li><span className="tick"></span>Up to 2 hours coverage</li>
              <li><span className="tick"></span>Highlight video</li>
              <li><span className="tick"></span>Basic photo coverage</li>
            </ul>
            <CalButton variant="outline" />
          </div>

          <div className="wd-card" style={{borderColor:'rgba(155,47,255,0.25)',background:'rgba(155,47,255,0.06)'}}>
            <div className="wd-package">Package</div>
            <div className="wd-name">Growth — Half-Day Coverage</div>
            <del className="sp-original" style={{fontSize:'16px',marginTop:'8px'}}>$899</del>
            <div className="wd-price grad-text">$629</div>
            <div className="wd-period">one-time</div>
            <div className="wd-divider"></div>
            <ul className="tick-list" style={{flex:1,marginBottom:'24px'}}>
              <li><span className="tick"></span>Up to 4 hours coverage</li>
              <li><span className="tick"></span>Cinematic highlight video</li>
              <li><span className="tick"></span>Social media cutdowns</li>
              <li><span className="tick"></span>Edited photos</li>
            </ul>
            <CalButton variant="solid" />
          </div>

          <div className="wd-card">
            <div className="wd-package">Package</div>
            <div className="wd-name">Premium — Full Event Coverage</div>
            <del className="sp-original" style={{fontSize:'16px',marginTop:'8px'}}>$1,499</del>
            <div className="wd-price grad-text">$1,049</div>
            <div className="wd-period">one-time</div>
            <div className="wd-divider"></div>
            <ul className="tick-list" style={{flex:1,marginBottom:'24px'}}>
              <li><span className="tick"></span>Up to 8 hours coverage</li>
              <li><span className="tick"></span>Full cinematic recap</li>
              <li><span className="tick"></span>Edited pictures</li>
              <li><span className="tick"></span>Social media videos</li>
            </ul>
            <CalButton variant="outline" />
          </div>

        </div>
      </section>

      <div className="section-sep" />

      {/* PHOTOSHOOTS */}
      <section className="svc-section" id="photoshoots" aria-label="Photography session packages">
        <div className="svc-header">
          <h2>Photo<span className="grad-text">shoots</span></h2>
          <p>Clean, professional photography for individuals, creators, and brands.</p>
        </div>

        <div className="webdev-grid">

          <div className="wd-card">
            <div className="wd-package">Session</div>
            <div className="wd-name">Mini Session</div>
            <div className="wd-price grad-text">$99</div>
            <div className="wd-period">30 minutes · one-time</div>
            <div className="wd-divider"></div>
            <ul className="tick-list" style={{flex:1,marginBottom:'24px'}}>
              <li><span className="tick"></span>10 edited images</li>
              <li><span className="tick"></span>All raw previews included</li>
              <li><span className="tick"></span>Best for quick headshots</li>
            </ul>
            <Link href="/contact" className="btn-outline">Book Now</Link>
          </div>

          <div className="wd-card" style={{borderColor:'rgba(155,47,255,0.25)',background:'rgba(155,47,255,0.06)'}}>
            <div className="wd-package">Session</div>
            <div className="wd-name">Standard Session</div>
            <div className="wd-price grad-text">$149</div>
            <div className="wd-period">1 hour · one-time</div>
            <div className="wd-divider"></div>
            <ul className="tick-list" style={{flex:1,marginBottom:'24px'}}>
              <li><span className="tick"></span>20–30 edited images</li>
              <li><span className="tick"></span>Multiple poses and angles</li>
              <li><span className="tick"></span>Best for personal or creator shoots</li>
            </ul>
            <Link href="/contact" className="btn-solid">Book Now</Link>
          </div>

          <div className="wd-card">
            <div className="wd-package">Session</div>
            <div className="wd-name">Enhanced Session</div>
            <div className="wd-price grad-text">$249</div>
            <div className="wd-period">1.5–2 hours · one-time</div>
            <div className="wd-divider"></div>
            <ul className="tick-list" style={{flex:1,marginBottom:'24px'}}>
              <li><span className="tick"></span>40+ edited images</li>
              <li><span className="tick"></span>Outfit and location variations</li>
              <li><span className="tick"></span>Best for personal branding and portfolios</li>
            </ul>
            <Link href="/contact" className="btn-outline">Book Now</Link>
          </div>

        </div>

        <div className="shoot-delivery-note" style={{maxWidth:'960px'}}>
          <strong>Book your shoot or get a custom quote.</strong>
        </div>
      </section>

      <div className="section-sep" />

      {/* SOCIAL MEDIA CONTENT PRODUCTION */}
      <section className="svc-section" id="social-content" aria-label="Social media content production">
        <div className="svc-header">
          <h2>Social Media Content <span className="grad-text">Production</span></h2>
          <p>Built for brands that already know what they want to create.</p>
        </div>

        <div className="unlimited-wrap">
          <div className="unlimited-card">
            <p style={{fontSize:'13.5px',fontWeight:500,color:'rgba(255,255,255,0.55)',lineHeight:'1.7',marginBottom:'28px'}}>
              We don&apos;t sell random shoots. We work with businesses and creators who have a clear content direction or strategy.
            </p>

            <div className="sp-section-title">How it works</div>
            <ul className="tick-list" style={{marginBottom:'28px'}}>
              <li><span className="tick"></span>You plan your content (or share your ideas with us)</li>
              <li><span className="tick"></span>We align on shoot requirements (location, formats, references)</li>
              <li><span className="tick"></span>We execute the shoot professionally</li>
              <li><span className="tick"></span>Optional: we handle editing and final delivery</li>
            </ul>

            <div className="sp-section-title">What we shoot</div>
            <ul className="tick-list" style={{marginBottom:'28px'}}>
              <li><span className="tick"></span>Reels / short-form videos</li>
              <li><span className="tick"></span>Brand storytelling content</li>
              <li><span className="tick"></span>Product shoots</li>
              <li><span className="tick"></span>Talking-head / podcast setups</li>
            </ul>

            <div className="sp-section-title">Optional add-ons</div>
            <ul className="tick-list" style={{marginBottom:'36px'}}>
              <li><span className="tick"></span>Full video editing</li>
              <li><span className="tick"></span>Content batching (multiple videos in one shoot)</li>
              <li><span className="tick"></span>Ongoing monthly content production</li>
            </ul>

            <Link href="/contact" className="btn-solid">Have a content plan? Let&apos;s shoot it.</Link>
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* SPECIAL PACKAGES */}
      <section className="svc-section" id="special" aria-label="Special bundle packages">
        <div className="svc-header">
          <h2>Special <span className="grad-text"> Packages</span></h2>
          <p>Everything you need, bundled into one predictable monthly rate.</p>
        </div>

        <div className="special-grid">

          {/* Creator / Influencer */}
          <div className="sp-card">
            <div className="sp-card-inner">
              <div className="sp-badge">For Creators</div>
              <div className="sp-name">Creator / Influencer<br />Growth Package</div>
              <del className="sp-original">$2000</del>
              <div className="sp-price grad-text">$699</div>
              <div className="sp-period">per month · cancel anytime</div>
              <div className="sp-divider"></div>

              <div className="sp-section-title">What&apos;s Included</div>
              <ul className="tick-list pink" style={{marginBottom:'0'}}>
                <li><span className="tick"></span>2 hour shoot (tampa bay area only)</li>
                <li><span className="tick"></span>1 video editing request at a time</li>
                <li><span className="tick"></span>1 graphic design request at a time</li>
                <li><span className="tick"></span>Unlimited requests &amp; unlimited revisions</li>
                <li><span className="tick"></span>Short-form videos (Reels, Shorts, TikTok)</li>
                <li><span className="tick"></span>Long-form videos (YouTube, podcasts)</li>
                <li><span className="tick"></span>Thumbnails &amp; social media graphics</li>
                <li><span className="tick"></span>Basic photo cleanup &amp; retouching</li>
                <li><span className="tick"></span>Platform-optimized formatting</li>
                <li><span className="tick"></span>24–48 business hour turnaround per task</li>
                <li><span className="tick"></span>High-priority queue</li>
                <li><span className="tick"></span>Cancel or pause anytime</li>
              </ul>

              <div className="sp-why">
                <div className="sp-why-title">Why this works for creators</div>
                <ul>
                  <li>Keeps your content pipeline moving every week</li>
                  <li>Test, iterate, and improve without extra costs</li>
                  <li>Perfect for influencers, YouTubers, coaches &amp; personal brands</li>
                  <li>You focus on creating — we handle editing and design</li>
                </ul>
              </div>

              <br />
              <CalButton variant="solid" style={{marginTop:'auto'}} />
            </div>
          </div>

          {/* SMB */}
          <div className="sp-card">
            <div className="sp-card-inner">
              <div className="sp-badge">For Businesses</div>
              <div className="sp-name">Small &amp; Medium Business<br />Growth Package</div>
              <del className="sp-original">$2500</del>
              <div className="sp-price grad-text">$999</div>
              <div className="sp-period">per month · cancel anytime</div>
              <div className="sp-divider"></div>

              <div className="sp-section-title">What&apos;s Included</div>
              <ul className="tick-list pink" style={{marginBottom:'0'}}>
                <li><span className="tick"></span>2 hour shoot (tampa bay area only)</li>
                <li><span className="tick"></span>1 video editing request at a time</li>
                <li><span className="tick"></span>1 graphic design request at a time</li>
                <li><span className="tick"></span>Unlimited requests &amp; unlimited revisions</li>
                <li><span className="tick"></span>Social videos, ads, promos &amp; brand content</li>
                <li><span className="tick"></span>Social posts, banners &amp; marketing creatives</li>
                <li><span className="tick"></span>Photo retouching &amp; image cleanup</li>
                <li><span className="tick"></span>Monthly SEO (local focus)</li>
                <li><span className="tick"></span>Google Business Profile optimization</li>
                <li><span className="tick"></span>Maps &amp; local visibility improvement</li>
                <li><span className="tick"></span>Monthly SEO work report</li>
                <li><span className="tick"></span>24–48 business hour turnaround per task</li>
                <li><span className="tick"></span>High priority queue</li>
                <li><span className="tick"></span>Cancel or pause anytime</li>
              </ul>

              <div className="sp-why">
                <div className="sp-why-title">Why this works for businesses</div>
                <ul>
                  <li>Combines content creation with search visibility</li>
                  <li>No need to manage multiple freelancers or agencies</li>
                  <li>Helps customers find you, trust you &amp; contact you</li>
                  <li>Clear monthly reporting shows exactly what work was done</li>
                </ul>
              </div>

              <br />
              <CalButton variant="solid" style={{marginTop:'auto'}} />
            </div>
          </div>

        </div>

        <div className="sp-clarity">
          <h4>Important Clarity</h4>
          <ul className="tick-list" style={{gap:'9px'}}>
            <li><span className="tick"></span>Unlimited requests mean unlimited submissions</li>
            <li><span className="tick"></span>Work is completed on 1 video + 1 graphic at a time</li>
            <li><span className="tick"></span>Revisions are unlimited within the original scope</li>
            <li><span className="tick"></span>Editing time depends on complexity</li>
          </ul>
        </div>
      </section>
    </>
  );
}
