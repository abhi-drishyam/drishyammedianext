import '../pricing.css';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';

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

export default function CreativePricingPage() {
  return (
    <>
      <HeroSection
        badge="Monthly subscriptions & project packages"
        heading={<>Creative Services <span className="grad-text">Pricing</span></>}
        description={<>Unlimited requests. Structured delivery. Predictable quality.<br />Video editing, graphic design, shoots — bundled or à la carte.</>}
        ariaLabel="Creative services pricing overview"
        categories={[
          { href: '#special', label: 'Special Packages' },
          { href: '#video-editing', label: 'Video Editing' },
          { href: '#graphic-design', label: 'Graphic Design' },
          { href: '#video-shoots', label: 'Video Shoots' },
          { href: '#unlimited-clarity', label: 'Unlimited Clarity' },
        ]}
      />

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
              <div className="sp-price grad-text">$599</div>
              <div className="sp-period">per month · cancel anytime</div>
              <div className="sp-divider"></div>

              <div className="sp-section-title">What&apos;s Included</div>
              <ul className="tick-list pink" style={{marginBottom:'0'}}>
                <li><span className="tick"></span>2 hour shoot (tampa and nearby area only)</li>
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
              <Link href="/contact" className="btn-solid" style={{marginTop:'auto'}}>Get Started</Link>
            </div>
          </div>

          {/* SMB */}
          <div className="sp-card">
            <div className="sp-card-inner">
              <div className="sp-badge">For Businesses</div>
              <div className="sp-name">Small &amp; Medium Business<br />Growth Package</div>
              <div className="sp-price grad-text">$999</div>
              <div className="sp-period">per month · cancel anytime</div>
              <div className="sp-divider"></div>

              <div className="sp-section-title">What&apos;s Included</div>
              <ul className="tick-list pink" style={{marginBottom:'0'}}>
                <li><span className="tick"></span>2 hour shoot (tampa and nearby area only)</li>
                <li><span className="tick"></span>1 video editing request at a time</li>                <li><span className="tick"></span>1 graphic design request at a time</li>
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
              <Link href="/contact" className="btn-solid" style={{marginTop:'auto'}}>Get Started</Link>
            </div>
          </div>

        </div>

        <div className="sp-clarity">
          <h4>Important Clarity</h4>
          <ul className="tick-list" style={{gap:'9px'}}>
            <li><span className="tick"></span>Unlimited requests mean unlimited submissions</li>
            <li><span className="tick"></span>Work is completed on 1 video + 1 graphic at a time</li>
            <li><span className="tick"></span>Revisions are unlimited within the original scope</li>
            <li><span className="tick"></span>Editing time depends on complexity — on average, a 5-minute video takes 2–4 hours to edit</li>
          </ul>
        </div>
      </section>

      <div className="section-sep" />

      {/* VIDEO EDITING */}
      <section className="svc-section" id="video-editing" aria-label="Video Editing plans">
        <div className="svc-header">
          <h2>Video Editing — <span className="grad-text">Monthly Subscriptions</span></h2>
          <p>Unlimited requests. Structured delivery. Predictable quality.</p>
        </div>

        <div className="price-table-wrap">
          <div className="pt-header">
            <div className="pt-header-spacer"></div>

            <div className="pt-plan-card">
              <div className="pt-plan-name">Starter</div>
              <div className="pt-plan-price grad-text">$399</div>
              <div className="pt-plan-period">per month</div>
              <div className="pt-plan-requests">1 active request</div>
            </div>

            <div className="pt-plan-card featured">
              <div className="pt-badge">Most Popular</div>
              <div className="pt-plan-name">Growth</div>
              <div className="pt-plan-price grad-text">$599</div>
              <div className="pt-plan-period">per month</div>
              <div className="pt-plan-requests">2 active requests</div>
            </div>

            <div className="pt-plan-card">
              <div className="pt-plan-name">Scale</div>
              <div className="pt-plan-price grad-text">$899</div>
              <div className="pt-plan-period">per month</div>
              <div className="pt-plan-requests">3 active requests</div>
            </div>
          </div>

          <div className="pt-body">
            <div className="pt-row">
              <div className="pt-row-label">Unlimited Requests</div>
              <div className="pt-row-cell"><Check /></div>
              <div className="pt-row-cell"><Check pink /></div>
              <div className="pt-row-cell"><Check /></div>
            </div>
            <div className="pt-row">
              <div className="pt-row-label">Unlimited Revisions</div>
              <div className="pt-row-cell"><Check /></div>
              <div className="pt-row-cell"><Check pink /></div>
              <div className="pt-row-cell"><Check /></div>
            </div>
            <div className="pt-row">
              <div className="pt-row-label">Short-form Edits (Reels, Shorts)</div>
              <div className="pt-row-cell"><Check /></div>
              <div className="pt-row-cell"><Check pink /></div>
              <div className="pt-row-cell"><Check /></div>
            </div>
            <div className="pt-row">
              <div className="pt-row-label">Long-form Edits (YouTube, Podcasts)</div>
              <div className="pt-row-cell"><Check /></div>
              <div className="pt-row-cell"><Check pink /></div>
              <div className="pt-row-cell"><Check /></div>
            </div>
            <div className="pt-row">
              <div className="pt-row-label">Ads, Promos, Social Content</div>
              <div className="pt-row-cell"><Check /></div>
              <div className="pt-row-cell"><Check pink /></div>
              <div className="pt-row-cell"><Check /></div>
            </div>
            <div className="pt-row">
              <div className="pt-row-label">Platform Specific Formatting</div>
              <div className="pt-row-cell"><Cross /></div>
              <div className="pt-row-cell"><Check pink /></div>
              <div className="pt-row-cell"><Check /></div>
            </div>
            <div className="pt-row">
              <div className="pt-row-label">Queue Priority</div>
              <div className="pt-row-cell"><span className="pt-priority std">Standard</span></div>
              <div className="pt-row-cell"><span className="pt-priority high">High</span></div>
              <div className="pt-row-cell"><span className="pt-priority top">Top</span></div>
            </div>
            <div className="pt-row">
              <div className="pt-row-label">Senior Editor Review</div>
              <div className="pt-row-cell"><Cross /></div>
              <div className="pt-row-cell"><Cross /></div>
              <div className="pt-row-cell"><Check pink /></div>
            </div>
            <div className="pt-row">
              <div className="pt-row-label">Same Day Revisions (when possible)</div>
              <div className="pt-row-cell"><Cross /></div>
              <div className="pt-row-cell"><Cross /></div>
              <div className="pt-row-cell"><Check pink /></div>
            </div>
            <div className="pt-row">
              <div className="pt-row-label">Turnaround per Task</div>
              <div className="pt-row-cell" style={{fontSize:'12px',color:'rgba(255,255,255,0.55)'}}>3–4 Business Days</div>
              <div className="pt-row-cell" style={{fontSize:'12px',color:'#ff80c0'}}>24–48 Business Hours</div>
              <div className="pt-row-cell" style={{fontSize:'12px',color:'rgba(255,255,255,0.55)'}}>24–48 Business Hours</div>
            </div>
            <div className="pt-row">
              <div className="pt-row-label">Cancel or Pause Anytime</div>
              <div className="pt-row-cell"><Check /></div>
              <div className="pt-row-cell"><Check pink /></div>
              <div className="pt-row-cell"><Check /></div>
            </div>
          </div>

          <div className="pt-cta-row">
            <div className="pt-cta-spacer"></div>
            <div className="pt-cta-cell"><Link href="/contact" className="btn-outline">Get Started</Link></div>
            <div className="pt-cta-cell"><Link href="/contact" className="btn-solid">Get Started</Link></div>
            <div className="pt-cta-cell"><Link href="/contact" className="btn-outline">Get Started</Link></div>
          </div>
        </div>

        <div className="pt-note">
          <strong>Editing Time Reference (Transparency):</strong> Depending upon project complexity (varies based on footage quality, style, pacing, effects, and revisions) turnaround time can vary. For example, long-format edits take higher turnaround time than short-format edits. You will be informed if any video you provided for editing will require more time than the stated turnaround, once the team has reviewed project complexity.
        </div>
      </section>

      <div className="section-sep" />

      {/* GRAPHIC DESIGN + PHOTO EDITING */}
      <section className="svc-section" id="graphic-design" aria-label="Graphic Design plans">
        <div className="svc-header">
          <h2>Graphic Design + Photo Editing — <span className="grad-text">Monthly Subscriptions</span></h2>
          <p>Design that looks premium — not outsourced.</p>
        </div>

        <div className="price-table-wrap">
          <div className="pt-header">
            <div className="pt-header-spacer"></div>

            <div className="pt-plan-card">
              <div className="pt-plan-name">Starter</div>
              <div className="pt-plan-price grad-text">$249</div>
              <div className="pt-plan-period">per month</div>
              <div className="pt-plan-requests">1 active request</div>
            </div>

            <div className="pt-plan-card featured">
              <div className="pt-badge">Most Popular</div>
              <div className="pt-plan-name">Growth</div>
              <div className="pt-plan-price grad-text">$429</div>
              <div className="pt-plan-period">per month</div>
              <div className="pt-plan-requests">2 active requests</div>
            </div>

            <div className="pt-plan-card">
              <div className="pt-plan-name">Scale</div>
              <div className="pt-plan-price grad-text">$659</div>
              <div className="pt-plan-period">per month</div>
              <div className="pt-plan-requests">3 active requests</div>
            </div>
          </div>

          <div className="pt-body">
            <div className="pt-row">
              <div className="pt-row-label">Unlimited Design Requests</div>
              <div className="pt-row-cell"><Check /></div>
              <div className="pt-row-cell"><Check pink /></div>
              <div className="pt-row-cell"><Check /></div>
            </div>
            <div className="pt-row">
              <div className="pt-row-label">Unlimited Revisions</div>
              <div className="pt-row-cell"><Check /></div>
              <div className="pt-row-cell"><Check pink /></div>
              <div className="pt-row-cell"><Check /></div>
            </div>
            <div className="pt-row">
              <div className="pt-row-label">Social Media Creatives</div>
              <div className="pt-row-cell"><Check /></div>
              <div className="pt-row-cell"><Check pink /></div>
              <div className="pt-row-cell"><Check /></div>
            </div>
            <div className="pt-row">
              <div className="pt-row-label">Ads, Banners, Thumbnails</div>
              <div className="pt-row-cell"><Check /></div>
              <div className="pt-row-cell"><Check pink /></div>
              <div className="pt-row-cell"><Check /></div>
            </div>
            <div className="pt-row">
              <div className="pt-row-label">Carousels &amp; Campaign Creatives</div>
              <div className="pt-row-cell"><Check /></div>
              <div className="pt-row-cell"><Check pink /></div>
              <div className="pt-row-cell"><Check /></div>
            </div>
            <div className="pt-row">
              <div className="pt-row-label">Photo Retouching &amp; Image Cleanup</div>
              <div className="pt-row-cell"><Check /></div>
              <div className="pt-row-cell"><Check pink /></div>
              <div className="pt-row-cell"><Check /></div>
            </div>
            <div className="pt-row">
              <div className="pt-row-label">Brand Consistency Support</div>
              <div className="pt-row-cell"><Check /></div>
              <div className="pt-row-cell"><Check pink /></div>
              <div className="pt-row-cell"><Check /></div>
            </div>
            <div className="pt-row">
              <div className="pt-row-label">Dedicated Design Lead</div>
              <div className="pt-row-cell"><Cross /></div>
              <div className="pt-row-cell"><Cross /></div>
              <div className="pt-row-cell"><Check pink /></div>
            </div>
            <div className="pt-row">
              <div className="pt-row-label">Queue Priority</div>
              <div className="pt-row-cell"><span className="pt-priority std">Standard</span></div>
              <div className="pt-row-cell"><span className="pt-priority high">High</span></div>
              <div className="pt-row-cell"><span className="pt-priority top">Top</span></div>
            </div>
            <div className="pt-row">
              <div className="pt-row-label">Turnaround per Task</div>
              <div className="pt-row-cell" style={{fontSize:'12px',color:'rgba(255,255,255,0.55)'}}>2–3 Business Days</div>
              <div className="pt-row-cell" style={{fontSize:'12px',color:'#ff80c0'}}>24–48 Business Hours</div>
              <div className="pt-row-cell" style={{fontSize:'12px',color:'rgba(255,255,255,0.55)'}}>24–48 Business Hours</div>
            </div>
            <div className="pt-row">
              <div className="pt-row-label">Cancel or Pause Anytime</div>
              <div className="pt-row-cell"><Check /></div>
              <div className="pt-row-cell"><Check pink /></div>
              <div className="pt-row-cell"><Check /></div>
            </div>
          </div>

          <div className="pt-cta-row">
            <div className="pt-cta-spacer"></div>
            <div className="pt-cta-cell"><Link href="/contact" className="btn-outline">Get Started</Link></div>
            <div className="pt-cta-cell"><Link href="/contact" className="btn-solid">Get Started</Link></div>
            <div className="pt-cta-cell"><Link href="/contact" className="btn-outline">Get Started</Link></div>
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* VIDEO SHOOTS */}
      <section className="svc-section" id="video-shoots" aria-label="Video Shoot packages">
        <div className="svc-header">
          <h2>Video Shoots — <span className="grad-text">Project Based</span></h2>
          <p>Same gear. Same quality. Pricing based on time. <strong style={{color:'rgba(255,255,255,0.6)'}}>Tampa, USA</strong></p>
        </div>

        <div className="shoot-cards">
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

      {/* CLARITY ON UNLIMITED */}
      <section className="svc-section" id="unlimited-clarity" aria-label="Unlimited requests clarity">
        <div className="svc-header">
          <h2>Clarity on <span className="grad-text">&ldquo;Unlimited Requests&rdquo;</span></h2>
          <p>No fine print — just honest expectations.</p>
        </div>

        <div className="unlimited-wrap">
          <div className="unlimited-card">
            <div className="unlimited-title">What &ldquo;unlimited&rdquo; really means</div>
            <ul className="tick-list" style={{marginBottom:'24px'}}>
              <li><span className="tick"></span>Unlimited requests = unlimited submissions</li>
              <li><span className="tick"></span>We work on a fixed number of active requests at a time</li>
              <li><span className="tick"></span>Turnaround applies per active request</li>
              <li><span className="tick"></span>Revisions are unlimited within original scope</li>
            </ul>
            <ul className="cross-list">
              <li>No animation, 3D, heavy VFX, or film-level production included</li>
              <li>Source files provided only if explicitly mentioned</li>
              <li>Abuse of unlimited may result in throttling or termination</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
