import './index.css';
import Link from 'next/link';
import WebsiteShowcase from './WebsiteShowcase';
import AtaTimeline from '@/components/AtaTimeline';
import HeroVideoStrip from '@/components/HeroVideoStrip';
import WwfTrack from '@/components/WwfTrack';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Drishyam Media',
  url: 'https://drishyammedia.com',
  logo: 'https://drishyammedia.com/icons/icon-512x512.png',
  description:
    'Creative marketing agency specializing in video production, graphic design, web development, and brand growth strategy for creators and businesses worldwide.',
  foundingDate: '2022',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-813-965-7606',
      contactType: 'sales',
      areaServed: ['US', 'CA'],
      availableLanguage: 'English',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+91-9914319899',
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
  ],
  sameAs: [
    'https://www.instagram.com/studio.drishyam',
    'https://wa.me/18139657606',
  ],
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
  knowsAbout: [
    'Video Production',
    'Video Editing',
    'Graphic Design',
    'Web Development',
    'Social Media Marketing',
    'Brand Strategy',
    'Content Creation',
    'SEO',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Drishyam Media',
  url: 'https://drishyammedia.com',
  description:
    'Creative marketing agency offering video production, graphic design, web development, and brand growth strategy.',
  publisher: {
    '@type': 'Organization',
    name: 'Drishyam Media',
    url: 'https://drishyammedia.com',
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

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
            <Link href="/video" className="hero-cta">See Our Work</Link>
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
          WE'VE WORKED WITH
      ══════════════════════════════════════ */}
      <section className="wwf-section" aria-label="Clients we've worked with">
        <div className="wwf-bg" aria-hidden="true"></div>

        <h2 className="wwf-title">We&apos;ve Worked <span className="wwf-grad">With</span></h2>

        <WwfTrack clients={[
          { name: 'Duryodhan',       rot: '-6deg', img: '/image/homepage/client-1.webp' },
          { name: 'Badshah',         rot: '5deg',  img: '/image/homepage/client-2.webp' },
          { name: 'Manan Vohra',     rot: '-4deg', img: '/image/homepage/client-3.webp' },
          { name: 'Rudranshi',       rot: '7deg',  img: '/image/homepage/client-4.webp' },
          { name: 'Paradox',         rot: '-5deg', img: '/image/homepage/client-5.webp' },
          { name: 'Yuvraj',          rot: '4deg',  img: '/image/homepage/client-6.webp' },
          { name: 'Amit Uchana',     rot: '-7deg', img: '/image/homepage/client-7.webp' },
          { name: 'Priyanvrindha',   rot: '6deg',  img: '/image/homepage/client-8.webp' },
          { name: 'Pritish Narula',  rot: '-3deg', img: '/image/homepage/client-9.webp' },
          { name: 'Pooja Brampton',  rot: '5deg',  img: '/image/homepage/client-10.webp' },
          { name: 'Mehnoor',         rot: '-4deg', img: '/image/homepage/client-11.webp' },
          { name: 'Parmish Verma',   rot: '6deg',  img: '/image/homepage/client-12.webp' },
          { name: 'SD Rotract',      rot: '-7deg', img: '/image/homepage/client-13.webp' },
          { name: 'Arnmaan Bedil',   rot: '3deg',  img: '/image/homepage/client-14.webp' },
          { name: 'Falcon',          rot: '-5deg', img: '/image/homepage/client-15.webp' },
          { name: 'RJ Shanky',       rot: '-3deg', img: '/image/homepage/client-16.webp' },
          { name: 'Dominoz',         rot: '5deg',  img: '/image/homepage/client-17.webp' },
        ]} />
      </section>


      {/* ══════════════════════════════════════
          ATTENTION TO ACQUISITION
      ══════════════════════════════════════ */}
      <AtaTimeline
        titlePrefix="From "
        titleHighlight1="Attention"
        titleConnector=" To "
        titleHighlight2="Acquisition"
        subtitle="We started by helping creators go viral. Now, we help brands and experts grow predictably through systems that combine authentic storytelling, branding, and automation."
        steps={[
          { name: 'Plan',    desc: 'We find what works in your niche and build a content strategy that actually grows.' },
          { name: 'Shoot',     desc: 'One shoot. Multiple high-quality videos. No wasted effort.' },
          { name: 'Edit', desc: 'Fast, sharp edits designed to stop scrolling and keep people watching.' },
          { name: 'Grow',    desc: 'We guide posting, hooks, and systems that turn views into leads and sales.' },
        ]}
      />


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

        <div className="tm-video-row" style={{ display: 'none' }}>
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
            <p className="tm-quote-text">We had almost no social media presence, and as a dairy farmer, I had very little knowledge about social media marketing. 
              A friend introduced me to Abhishek when I was looking to increase my sales. 
              Abhishek clearly explained the strategy he planned to use to grow my business and improve sales. 
              Almost everything worked exactly as he said. By the second month, I was already getting more sales directly through Instagram.</p>
            <div className="tm-quote-author">
              <div className="tm-avatar tm-avatar-sm" style={{ background: 'linear-gradient(135deg,#9b2fff,#d4007a)' }} aria-hidden="true">PR</div>
              <div><div className="tm-author-name">Sourav</div><div className="tm-author-role">Dairy Business Owner</div></div>
            </div>
          </div>

          <div className="tm-quote-card tm-quote-card-featured">
            <div className="tm-quote-mark" aria-hidden="true">&ldquo;</div>
            <p className="tm-quote-text">We started a new music and podcast studio in November with absolutely no social media presence. 
              Drishyam came in and helped us build everything from scratch. Within four months, nearly 80% of our sales were coming through social media marketing. 
              Their team planned everything specifically for our niche, managed the campaigns for us, and consistently delivered the best ROI possible.</p>
            <div className="tm-quote-author">
              <div className="tm-avatar tm-avatar-sm" style={{ background: 'linear-gradient(135deg,#4b3fff,#d4007a)' }} aria-hidden="true">AM</div>
              <div><div className="tm-author-name">Aditya Gulati</div><div className="tm-author-role">Music & Podcast Studio</div></div>
            </div>
          </div>

          <div className="tm-quote-card">
            <div className="tm-quote-mark" aria-hidden="true">&ldquo;</div>
            <p className="tm-quote-text">I run a marketing agency, and for all our shoot-related backend work, Christian Studios was our trusted production partner. 
              Whenever we had a project, we knew we could rely on them to handle everything professionally and deliver quality work on time.</p>
            <div className="tm-quote-author">
              <div className="tm-avatar tm-avatar-sm" style={{ background: 'linear-gradient(135deg,#ff3c2f,#d4007a)' }} aria-hidden="true">NK</div>
              <div><div className="tm-author-name">Rueben</div><div className="tm-author-role">Marketing Agency Owner</div></div>
            </div>
          </div>
        </div>

        <div className="tm-stats-bar" role="list">
          <div className="tm-stat" role="listitem"><div className="tm-stat-num">50<span>+</span></div><div className="tm-stat-label">Happy Clients</div></div>
          <div className="tm-stat-divider" aria-hidden="true"></div>
          <div className="tm-stat" role="listitem"><div className="tm-stat-num">85<span>%</span></div><div className="tm-stat-label">Retention Rate</div></div>
          <div className="tm-stat-divider" aria-hidden="true"></div>
          <div className="tm-stat" role="listitem"><div className="tm-stat-num">4.9<span>★</span></div><div className="tm-stat-label">Average Rating</div></div>
          <div className="tm-stat-divider" aria-hidden="true"></div>
          <div className="tm-stat" role="listitem"><div className="tm-stat-num">Millions<span>+</span></div><div className="tm-stat-label">Views Generated</div></div>
        </div>
      </section>
    </>
  );
}
