import './index.css';
import Link from 'next/link';
import WebsiteShowcase from './WebsiteShowcase';
import AtaTimeline from '@/components/AtaTimeline';
import HeroVideoStrip from '@/components/HeroVideoStrip';
import WwfTrack from '@/components/WwfTrack';

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO WRAPPER
      ══════════════════════════════════════ */}
      <div className="hero-wrapper">

        <div className="bg-layer" aria-hidden="true"></div>
        <div className="bg-grain" aria-hidden="true"></div>

        <div className="hero-wrap">

          <div className="hero-content">
            <h1 className="hero-headline">
              <span className="line-white">Supercharge Your Brand With</span><br />
              <span className="line-pink">Viral Signature Clips.</span>
            </h1>
            <p className="hero-sub">
              If you&apos;re a busy creator/business with no time to create, edit or post consistently on social media but still recognize the need to grow your brand faster, then we are for you.
            </p>
            <Link href="/contact" className="hero-cta">Get Started</Link>
          </div>

          <HeroVideoStrip videos={[
            '/video/talking-1.mp4',
            '/video/motion-1.mp4',
            '/video/talking-2.mp4',
            '/video/motion-2.mp4',
            '/video/talking-3.mp4',
            '/video/speedramp-2.mp4',
            '/video/motion-3.mp4',
            '/video/talking-4.mp4',
            '/video/talking-5.mp4',
            '/video/motion-4.mp4',
            '/video/talking-6.mp4',
            '/video/speedramp-3.mp4',
          ]} />

        </div>{/* end .hero-wrap */}

      </div>{/* end .hero-wrapper */}


      {/* ══════════════════════════════════════
          ATTENTION TO ACQUISITION
      ══════════════════════════════════════ */}
      <AtaTimeline />


      {/* ══════════════════════════════════════
          WE'VE WORKED WITH
      ══════════════════════════════════════ */}
      <section className="wwf-section" aria-label="Clients we've worked with">
        <div className="wwf-bg" aria-hidden="true"></div>

        <h2 className="wwf-title">We&apos;ve Worked <span className="wwf-grad">With</span></h2>

        <WwfTrack clients={[
          { name: 'Arjun Mehta',   rot: '-6deg', img: '/image/homepage/client-1.webp' },
          { name: 'Priya Kapoor',  rot: '5deg',  img: '/image/homepage/client-2.webp' },
          { name: 'Rohan Sharma',  rot: '-4deg', img: '/image/homepage/client-3.webp' },
          { name: 'Sneha Iyer',    rot: '7deg',  img: '/image/homepage/client-4.webp' },
          { name: 'Vikram Nair',   rot: '-5deg', img: '/image/homepage/client-5.webp' },
          { name: 'Ananya Rao',    rot: '4deg',  img: '/image/homepage/client-6.webp' },
          { name: 'Karan Malhotra',rot: '-7deg', img: '/image/homepage/client-7.webp' },
          { name: 'Divya Singh',   rot: '6deg',  img: '/image/homepage/client-8.webp' },
          { name: 'Rahul Verma',   rot: '-3deg', img: '/image/homepage/client-9.webp' },
          { name: 'Meera Joshi',   rot: '5deg',  img: '/image/homepage/client-10.webp' },
        ]} />
      </section>


      {/* ══════════════════════════════════════
          DESIGN THAT SPEAKS
      ══════════════════════════════════════ */}
      <section className="dts-section" aria-label="Design Portfolio">
        <div className="dts-header">
          <h2 className="dts-title">Design That Speaks for <span className="dts-grad">Your Brand</span></h2>
          <p className="dts-sub">From scroll-stopping thumbnails to engaging posts and reel covers,<br />we craft visuals that make your content impossible to ignore.</p>
        </div>

        <div className="gallery-wrap">

          {/* ROW 1 — scrolls left */}
          <div className="gallery-row">
            <div className="gallery-track">
              <div className="g-item g-169"><img src="/image/homepage/designthatspeak169 (1).webp" alt="YouTube Thumbnail" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-916"><img src="/image/homepage/designthatspeak916 (1).webp" alt="Reel Cover" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-11"><img src="/image/homepage/designthatspeak11 (1).webp" alt="LinkedIn Post" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-169"><img src="/image/homepage/designthatspeak169 (2).webp" alt="Campaign Visual" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-11"><img src="/image/homepage/designthatspeak11 (2).webp" alt="Brand Post" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-916"><img src="/image/homepage/designthatspeak916 (2).webp" alt="Speaker Card" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-169"><img src="/image/homepage/designthatspeak169 (3).webp" alt="Thumbnail Design" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-916"><img src="/image/homepage/designthatspeak916 (3).webp" alt="Reel Cover" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-11"><img src="/image/homepage/designthatspeak11 (3).webp" alt="Event Poster" loading="lazy" /><div className="dts-tag"></div></div>
              {/* duplicate set for seamless loop */}
              <div className="g-item g-169" aria-hidden="true"><img src="/image/homepage/designthatspeak169 (1).webp" alt="" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-916" aria-hidden="true"><img src="/image/homepage/designthatspeak916 (1).webp" alt="" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-11" aria-hidden="true"><img src="/image/homepage/designthatspeak11 (1).webp" alt="" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-169" aria-hidden="true"><img src="/image/homepage/designthatspeak169 (2).webp" alt="" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-11" aria-hidden="true"><img src="/image/homepage/designthatspeak11 (2).webp" alt="" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-916" aria-hidden="true"><img src="/image/homepage/designthatspeak916 (2).webp" alt="" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-169" aria-hidden="true"><img src="/image/homepage/designthatspeak169 (3).webp" alt="" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-916" aria-hidden="true"><img src="/image/homepage/designthatspeak916 (3).webp" alt="" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-11" aria-hidden="true"><img src="/image/homepage/designthatspeak11 (3).webp" alt="" loading="lazy" /><div className="dts-tag"></div></div>
            </div>
          </div>

          {/* ROW 2 — scrolls right */}
          <div className="gallery-row">
            <div className="gallery-track gallery-track-r2">
              <div className="g-item g-11"><img src="/image/homepage/designthatspeak11 (4).webp" alt="Design Work" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-169"><img src="/image/homepage/designthatspeak169 (4).webp" alt="Design Work" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-916"><img src="/image/homepage/designthatspeak916 (4).webp" alt="Design Work" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-169"><img src="/image/homepage/designthatspeak169 (5).webp" alt="Design Work" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-916"><img src="/image/homepage/designthatspeak916 (5).webp" alt="Design Work" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-11"><img src="/image/homepage/designthatspeak11 (5).webp" alt="Design Work" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-916"><img src="/image/homepage/designthatspeak916 (6).webp" alt="Design Work" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-11"><img src="/image/homepage/designthatspeak11 (6).webp" alt="Design Work" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-169"><img src="/image/homepage/designthatspeak169 (6).webp" alt="Design Work" loading="lazy" /><div className="dts-tag"></div></div>
              {/* duplicate set for seamless loop */}
              <div className="g-item g-11" aria-hidden="true"><img src="/image/homepage/designthatspeak11 (4).webp" alt="" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-169" aria-hidden="true"><img src="/image/homepage/designthatspeak169 (4).webp" alt="" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-916" aria-hidden="true"><img src="/image/homepage/designthatspeak916 (4).webp" alt="" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-169" aria-hidden="true"><img src="/image/homepage/designthatspeak169 (5).webp" alt="" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-916" aria-hidden="true"><img src="/image/homepage/designthatspeak916 (5).webp" alt="" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-11" aria-hidden="true"><img src="/image/homepage/designthatspeak11 (5).webp" alt="" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-916" aria-hidden="true"><img src="/image/homepage/designthatspeak916 (6).webp" alt="" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-11" aria-hidden="true"><img src="/image/homepage/designthatspeak11 (6).webp" alt="" loading="lazy" /><div className="dts-tag"></div></div>
              <div className="g-item g-169" aria-hidden="true"><img src="/image/homepage/designthatspeak169 (6).webp" alt="" loading="lazy" /><div className="dts-tag"></div></div>
            </div>
          </div>

        </div>

        <div className="dts-footer">
          <Link href="/portfolio/graphic" className="dts-discover-btn">
            Discover More
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </section>


      {/* ══════════════════════════════════════
          WEBSITE SHOWCASE (client component)
      ══════════════════════════════════════ */}
      <WebsiteShowcase />


      {/* ══════════════════════════════════════
          HOW WE HELP YOU
      ══════════════════════════════════════ */}
      <section className="hwh-section" aria-label="How We Help You">
        <div className="hwh-bg" aria-hidden="true">
          <div className="hwh-glow-l"></div>
          <div className="hwh-glow-r"></div>
        </div>

        <div className="hwh-header">
          <h2 className="hwh-title">How We <span className="hwh-grad">Help You</span></h2>
          <p className="hwh-sub">We help your brand grow with powerful designs, consistent branding,<br />and strategies that boost engagement — while saving you time and effort.</p>
        </div>

        <div className="hwh-cards">
          <div className="hwh-card">
            <div className="hwh-card-inner">
              <div className="hwh-icon-wrap" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
              </div>
              <h3 className="hwh-card-title">Grow Your Reach</h3>
              <p className="hwh-card-desc">We design content that gets noticed, attracts followers, and builds your online presence across every platform.</p>
              <div className="hwh-card-stat">
                <span className="hwh-stat-num">3×</span>
                <span className="hwh-stat-label">avg. follower growth in 90 days</span>
              </div>
            </div>
          </div>

          <div className="hwh-card hwh-card-center">
            <div className="hwh-card-inner">
              <div className="hwh-icon-wrap hwh-icon-active" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h3 className="hwh-card-title">Boost Engagement</h3>
              <p className="hwh-card-desc">From posts to reels, we create visuals that spark conversations, increase likes, and strengthen your community.</p>
              <div className="hwh-card-stat">
                <span className="hwh-stat-num">5×</span>
                <span className="hwh-stat-label">higher engagement vs. industry avg.</span>
              </div>
            </div>
          </div>

          <div className="hwh-card">
            <div className="hwh-card-inner">
              <div className="hwh-icon-wrap" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="hwh-card-title">Save Your Time</h3>
              <p className="hwh-card-desc">We handle strategy, creation, and delivery — so you can focus on what you do best while we build your brand.</p>
              <div className="hwh-card-stat">
                <span className="hwh-stat-num">20+</span>
                <span className="hwh-stat-label">hours saved per week on average</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="tm-section" aria-label="Client Testimonials">
        <div className="tm-bg" aria-hidden="true">
          <div className="tm-glow-tl"></div>
          <div className="tm-glow-br"></div>
        </div>

        <div className="tm-header">
          <div className="tm-eyebrow">Client Stories</div>
          <h2 className="tm-title">Hear it directly from<br />our <span className="tm-grad">clients</span></h2>
          <p className="tm-sub">Real results, real people. Here&apos;s what our clients say about working with us.</p>
        </div>

        <div className="tm-video-row">
          <div className="tm-video-card">
            <div className="tm-video-thumb" style={{ ['--c1' as any]: '#0d0828', ['--c2' as any]: '#1e0848' }}>
              <div className="tm-video-overlay" aria-hidden="true"></div>
              <button className="tm-play-btn" aria-label="Play video testimonial from Scott Henry">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 3l14 9-14 9V3z"/></svg>
              </button>
              <div className="tm-video-duration" aria-hidden="true">1:42</div>
            </div>
            <div className="tm-video-body">
              <div className="tm-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <p className="tm-quote">&ldquo;These guys don&apos;t mess around. We saw results from month one. If you want to grow your business, look no further.&rdquo;</p>
              <div className="tm-author">
                <div className="tm-avatar" style={{ background: 'linear-gradient(135deg,#4b3fff,#9b2fff)' }} aria-hidden="true">SH</div>
                <div>
                  <div className="tm-author-name">Scott Henry</div>
                  <div className="tm-author-role">Content Creator</div>
                </div>
                <div className="tm-platform-tag">YouTube</div>
              </div>
            </div>
          </div>

          <div className="tm-video-card">
            <div className="tm-video-thumb" style={{ ['--c1' as any]: '#200010', ['--c2' as any]: '#480020' }}>
              <div className="tm-video-overlay" aria-hidden="true"></div>
              <button className="tm-play-btn" aria-label="Play video testimonial from William K.">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 3l14 9-14 9V3z"/></svg>
              </button>
              <div className="tm-video-duration" aria-hidden="true">2:08</div>
            </div>
            <div className="tm-video-body">
              <div className="tm-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <p className="tm-quote">&ldquo;My results and online presence went through the roof more or less overnight. Mind-blowing what they achieved for me.&rdquo;</p>
              <div className="tm-author">
                <div className="tm-avatar" style={{ background: 'linear-gradient(135deg,#d4007a,#ff3c2f)' }} aria-hidden="true">WK</div>
                <div>
                  <div className="tm-author-name">William K.</div>
                  <div className="tm-author-role">Business Coach</div>
                </div>
                <div className="tm-platform-tag">Instagram</div>
              </div>
            </div>
          </div>
        </div>

        <div className="tm-quote-strip">
          <div className="tm-quote-card">
            <div className="tm-quote-mark" aria-hidden="true">&ldquo;</div>
            <p className="tm-quote-text">Within 60 days our engagement tripled. The content quality is on another level entirely.</p>
            <div className="tm-quote-author">
              <div className="tm-avatar tm-avatar-sm" style={{ background: 'linear-gradient(135deg,#9b2fff,#d4007a)' }} aria-hidden="true">PR</div>
              <div><div className="tm-author-name">Priya R.</div><div className="tm-author-role">E-Commerce Brand</div></div>
            </div>
          </div>

          <div className="tm-quote-card tm-quote-card-featured">
            <div className="tm-quote-mark" aria-hidden="true">&ldquo;</div>
            <p className="tm-quote-text">I went from 2K to 48K followers in 4 months. Their strategy is unlike anything I&apos;ve seen before.</p>
            <div className="tm-quote-author">
              <div className="tm-avatar tm-avatar-sm" style={{ background: 'linear-gradient(135deg,#4b3fff,#d4007a)' }} aria-hidden="true">AM</div>
              <div><div className="tm-author-name">Arjun M.</div><div className="tm-author-role">Fitness Coach</div></div>
            </div>
          </div>

          <div className="tm-quote-card">
            <div className="tm-quote-mark" aria-hidden="true">&ldquo;</div>
            <p className="tm-quote-text">The ROI was immediate. Our DMs filled up with qualified leads after the very first batch of content.</p>
            <div className="tm-quote-author">
              <div className="tm-avatar tm-avatar-sm" style={{ background: 'linear-gradient(135deg,#ff3c2f,#d4007a)' }} aria-hidden="true">NK</div>
              <div><div className="tm-author-name">Neha K.</div><div className="tm-author-role">Course Creator</div></div>
            </div>
          </div>
        </div>

        <div className="tm-stats-bar" role="list">
          <div className="tm-stat" role="listitem"><div className="tm-stat-num">500<span>+</span></div><div className="tm-stat-label">Happy Clients</div></div>
          <div className="tm-stat-divider" aria-hidden="true"></div>
          <div className="tm-stat" role="listitem"><div className="tm-stat-num">98<span>%</span></div><div className="tm-stat-label">Retention Rate</div></div>
          <div className="tm-stat-divider" aria-hidden="true"></div>
          <div className="tm-stat" role="listitem"><div className="tm-stat-num">4.9<span>★</span></div><div className="tm-stat-label">Average Rating</div></div>
          <div className="tm-stat-divider" aria-hidden="true"></div>
          <div className="tm-stat" role="listitem"><div className="tm-stat-num">12<span>M+</span></div><div className="tm-stat-label">Views Generated</div></div>
        </div>
      </section>
    </>
  );
}
