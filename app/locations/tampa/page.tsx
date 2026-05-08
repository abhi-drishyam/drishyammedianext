import './tampa.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tampa Photographer & Videographer | Drishyam Media — Photo & Video Production in Tampa, FL',
  description:
    'Top-rated photography & videography in Tampa, FL. Drishyam Media delivers cinematic brand video, social media content, corporate videography & event photography across Tampa Bay, Ybor City, Hyde Park, St. Pete & Clearwater. Book a free call.',
  keywords:
    'photographer in Tampa, videographer Tampa FL, Tampa photography services, Tampa videography, Tampa Bay video production, social media videographer Tampa, brand photography Tampa, corporate video Tampa, event photographer Tampa Bay, content creator Tampa, real estate videographer Tampa, restaurant videography Tampa, Tampa Florida photo studio',
  alternates: { canonical: '/locations/tampa' },
  openGraph: {
    title: 'Tampa Photographer & Videographer | Drishyam Media',
    description:
      'Cinematic photography & videography for Tampa Bay brands, businesses & creators. From Ybor City to Clearwater — we shoot, edit, and grow your brand.',
    url: 'https://www.drishyammedia.com/locations/tampa',
    type: 'website',
    locale: 'en_US',
    siteName: 'Drishyam Media',
    images: [
      {
        url: 'https://www.drishyammedia.com/image/og/tampa-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Drishyam Media — Tampa photography and videography services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tampa Photographer & Videographer | Drishyam Media',
    description: 'Cinematic photo & video production in Tampa Bay. Brands, creators, businesses — we bring your story on screen.',
    images: ['https://www.drishyammedia.com/image/og/tampa-cover.jpg'],
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService', 'Photograph'],
  '@id': 'https://www.drishyammedia.com/locations/tampa#business',
  name: 'Drishyam Media — Tampa Photography & Videography',
  alternateName: 'Drishyam Tampa',
  url: 'https://www.drishyammedia.com/locations/tampa',
  description:
    'Drishyam Media is a creative photography and videography agency serving Tampa, FL. We produce brand photography, corporate videography, social media video content, event coverage, and full marketing campaigns for businesses, creators, and brands across the Tampa Bay area.',
  image: [
    'https://www.drishyammedia.com/image/tampa/hero-1.jpg',
    'https://www.drishyammedia.com/image/tampa/hero-2.jpg',
    'https://www.drishyammedia.com/image/tampa/hero-3.jpg',
  ],
  logo: 'https://www.drishyammedia.com/image/logo.png',
  telephone: '+1-YOUR-NUMBER',
  email: 'hello@drishyammedia.com',
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Service Area Tampa Bay',
    addressLocality: 'Tampa',
    addressRegion: 'FL',
    postalCode: '33602',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 27.9506, longitude: -82.4572 },
  areaServed: [
    { '@type': 'City', name: 'Tampa', '@id': 'https://en.wikipedia.org/wiki/Tampa,_Florida' },
    { '@type': 'City', name: 'St. Petersburg' },
    { '@type': 'City', name: 'Clearwater' },
    { '@type': 'City', name: 'Brandon' },
    { '@type': 'City', name: 'Riverview' },
    { '@type': 'City', name: 'Wesley Chapel' },
    { '@type': 'Place', name: 'Ybor City' },
    { '@type': 'Place', name: 'Hyde Park, Tampa' },
    { '@type': 'Place', name: 'Channelside, Tampa' },
    { '@type': 'Place', name: 'Westshore, Tampa' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/drishyammedia',
    'https://www.youtube.com/@drishyammedia',
    'https://www.linkedin.com/company/drishyammedia',
    'https://www.facebook.com/drishyammedia',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '50',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tampa Photography & Videography Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Photography in Tampa, FL', serviceType: 'Photography', areaServed: 'Tampa, FL' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Videography Tampa', serviceType: 'Videography', areaServed: 'Tampa, FL' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Video Production Tampa', serviceType: 'Video Production', areaServed: 'Tampa, FL' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Event Photography Tampa Bay', serviceType: 'Event Photography', areaServed: 'Tampa Bay' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Real Estate Videography Tampa', serviceType: 'Real Estate Video', areaServed: 'Tampa, FL' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Restaurant Photography & Video Tampa', serviceType: 'Hospitality Content', areaServed: 'Tampa, FL' } },
    ],
  },
  knowsAbout: [
    'photography', 'videography', 'video editing', 'social media marketing',
    'brand storytelling', 'content creation', 'cinematography', 'color grading',
    'Tampa Bay business community', 'Florida brand marketing',
  ],
  slogan: 'We shoot where you do business.',
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.drishyammedia.com' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.drishyammedia.com/locations' },
    { '@type': 'ListItem', position: 3, name: 'Tampa', item: 'https://www.drishyammedia.com/locations/tampa' },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is the best photographer and videographer in Tampa, FL?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drishyam Media is a top-rated photography and videography agency serving Tampa, Florida. We specialize in brand photography, corporate videography, social media content production, and event coverage across Tampa Bay — including downtown Tampa, Ybor City, Hyde Park, Channelside, St. Petersburg, and Clearwater. With a 4.9-star average rating and 50+ happy clients, we are trusted by Tampa businesses, creators, and brands.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does professional photography and videography cost in Tampa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Photography and videography pricing in Tampa typically ranges from $500 for a half-day shoot to $5,000+ for full brand campaigns or monthly content packages. Drishyam Media offers transparent project pricing and monthly retainer options for Tampa Bay businesses. Book a free strategy call for a custom quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas does Drishyam Media cover in Tampa Bay?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve all of Tampa Bay including downtown Tampa, Ybor City, Hyde Park, Channelside, Westshore, South Tampa, New Tampa, Brandon, Riverview, Wesley Chapel, St. Petersburg, and Clearwater — with no travel fee within the region.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer real estate videography in Tampa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We produce real estate photography and videography for Tampa agents and brokerages, including drone aerials, walkthrough videos, twilight shoots, and listing photography across Tampa Bay.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you film social media content for Tampa restaurants and small businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Tampa restaurants, cafes, retail shops, and service businesses are our specialty for social media video. We produce Instagram Reels, TikTok content, and YouTube Shorts that bring foot traffic and online engagement.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can you deliver photos and videos after a Tampa shoot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard turnaround is 5–7 business days for edited deliverables. Rush delivery within 48 hours is available for time-sensitive Tampa events and campaigns.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why should Tampa businesses invest in professional video content?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tampa is one of the fastest-growing US business markets. Local businesses that invest in professional video content see up to 3× faster brand growth, higher engagement on social media, and significantly more inbound leads compared to those relying on photos alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Drishyam Media a local Tampa company?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drishyam Media is a global creative agency now operating in Tampa, FL with a dedicated local production team. We bring international-quality content production with deep on-the-ground knowledge of the Tampa Bay market.',
      },
    },
  ],
};

const services = [
  {
    icon: '📸',
    title: 'Brand Photography in Tampa',
    desc: 'Editorial-grade brand photo shoots that capture who you really are. Perfect for Tampa businesses launching a new website, refreshing their online presence, or building a content library.',
    keywords: 'Headshots · Lifestyle · Product · Editorial · Tampa Bay',
  },
  {
    icon: '🎬',
    title: 'Videography & Brand Films',
    desc: 'Cinematic videography for Tampa brands. We produce brand films, founder stories, recruitment videos, and high-end promos that work on your website, in pitch decks, and across social platforms.',
    keywords: 'Brand films · Promos · Founder stories · Tampa videography',
  },
  {
    icon: '📱',
    title: 'Social Media Video Production',
    desc: 'One shoot day. Weeks of scroll-stopping content. We produce Reels, Shorts, and TikToks built specifically for Tampa businesses ready to go from invisible to in-demand on social media.',
    keywords: 'Reels · Shorts · TikTok · Social content Tampa',
  },
  {
    icon: '🏢',
    title: 'Corporate & Event Coverage',
    desc: 'Conferences, product launches, networking nights, and corporate functions across Tampa Bay. Our team captures the energy, the people, and the story — and delivers polished recap reels and photo galleries.',
    keywords: 'Conferences · Events · Corporate · Tampa',
  },
  {
    icon: '🏠',
    title: 'Real Estate Photography & Video',
    desc: 'Help your Tampa listings sell faster. We produce listing photography, walkthrough video tours, drone aerials, and twilight shoots for Tampa Bay real estate agents, brokerages, and developers.',
    keywords: 'Real estate · Drone · Walkthroughs · Tampa',
  },
  {
    icon: '🍽️',
    title: 'Restaurant & Hospitality Content',
    desc: 'Food photography and video that brings people through the door. Designed for Tampa restaurants, cafes, bars, and hotels who want their content to actually drive reservations and foot traffic.',
    keywords: 'Food · Restaurants · Hospitality · Tampa Bay',
  },
  {
    icon: '✂️',
    title: 'Professional Video Editing',
    desc: 'Have footage but no time to edit? Our team handles color grading, motion graphics, sound design, and platform-specific cuts — fast turnaround for Tampa creators and businesses.',
    keywords: 'Editing · Color · Motion graphics · Sound design',
  },
  {
    icon: '📈',
    title: 'Content Strategy & Brand Marketing',
    desc: 'Beautiful content alone doesn\'t grow brands — strategy does. We pair our production with content strategy, hook writing, and posting systems built for the Tampa market.',
    keywords: 'Strategy · Marketing · Tampa brand growth',
  },
];

const locations = [
  { name: 'Downtown Tampa', sub: 'Business district, waterfront' },
  { name: 'Ybor City', sub: 'Historic, nightlife, food' },
  { name: 'Hyde Park', sub: 'Boutique retail, residential' },
  { name: 'Channelside', sub: 'Port, hotels, hospitality' },
  { name: 'Westshore', sub: 'Corporate, professional services' },
  { name: 'South Tampa', sub: 'Local brands, real estate' },
  { name: 'New Tampa', sub: 'North growth corridor' },
  { name: 'St. Petersburg', sub: 'Arts district, waterfront' },
  { name: 'Clearwater', sub: 'Beaches, tourism, hospitality' },
  { name: 'Brandon', sub: 'Suburban business hub' },
  { name: 'Riverview', sub: 'Growing residential market' },
  { name: 'Wesley Chapel', sub: 'Pasco County brands' },
];

const testimonials = [
  {
    initials: 'RS',
    gradient: 'linear-gradient(135deg,#4b3fff,#9b2fff)',
    quote: '"They made our restaurant in Ybor City actually look as good on Instagram as it does in person. Reservations doubled in 6 weeks."',
    name: 'R. Sanchez',
    role: 'Restaurant Owner · Ybor City',
  },
  {
    initials: 'JM',
    gradient: 'linear-gradient(135deg,#9b2fff,#d4007a)',
    quote: '"I\'m a real estate agent in South Tampa — their listing videos are next-level. I\'m winning more listings just because of how my marketing looks."',
    name: 'J. Martinez',
    role: 'Realtor · South Tampa',
  },
  {
    initials: 'AK',
    gradient: 'linear-gradient(135deg,#d4007a,#ff3c2f)',
    quote: '"We\'ve worked with three production teams in Tampa. Drishyam is the only one that delivered fast, on budget, and above expectations."',
    name: 'A. Khan',
    role: 'Founder · Westshore',
  },
];

const processSteps = [
  { num: 'Step 01', title: 'Free Tampa Strategy Call', desc: '30-minute call to understand your brand, goals, and audience. We map out exactly what your Tampa business needs.' },
  { num: 'Step 02', title: 'Shoot Day in Tampa Bay', desc: 'Our team comes to your Tampa location. One focused shoot day generates weeks of usable content.' },
  { num: 'Step 03', title: 'Edit & Deliver Fast', desc: 'Same-week turnaround on most edits. Revisions included. Platform-ready files delivered in cloud.' },
  { num: 'Step 04', title: 'Grow Your Tampa Brand', desc: 'We help you post consistently and turn views into leads in the Tampa market — not just deliver and disappear.' },
];

const faqs = [
  {
    q: 'Who is the best photographer and videographer in Tampa, FL?',
    a: 'Drishyam Media is among Tampa\'s most trusted creative agencies for photography and videography, with a 4.9-star average rating, 50+ brands served, and same-week turnaround. We work across Tampa Bay including Ybor City, Hyde Park, Channelside, St. Petersburg, and Clearwater.',
  },
  {
    q: 'How much does professional photography or videography cost in Tampa?',
    a: 'Pricing in Tampa typically ranges from around $500 for a half-day photo shoot to $5,000+ for full brand campaigns or monthly video retainers. We offer transparent project pricing and monthly content packages designed for Tampa Bay businesses at every stage. Book a free call for a custom quote.',
  },
  {
    q: 'What areas of Tampa Bay does Drishyam Media cover?',
    a: 'We serve all of Tampa Bay — including downtown Tampa, Ybor City, Hyde Park, Channelside, Westshore, South Tampa, New Tampa, Brandon, Riverview, Wesley Chapel, St. Petersburg, and Clearwater — with no travel fee within the region.',
  },
  {
    q: 'Do you offer real estate videography and photography in Tampa?',
    a: 'Yes. We produce listing photography, video walkthroughs, drone aerials, and twilight shoots for Tampa real estate agents, brokerages, and developers across Tampa Bay.',
  },
  {
    q: 'Can you produce social media video content for Tampa restaurants and small businesses?',
    a: 'Yes — Tampa restaurants, cafes, retailers, and service businesses are some of our favorite clients. We produce Instagram Reels, TikTok content, and YouTube Shorts that drive foot traffic and online engagement.',
  },
  {
    q: 'How quickly can you deliver photos and videos after a Tampa shoot?',
    a: 'Standard turnaround is 5–7 business days. Rush 48-hour delivery is available for time-sensitive Tampa events and campaigns.',
  },
  {
    q: 'Are you a local Tampa company or international agency?',
    a: 'Drishyam Media is a global creative agency with a dedicated Tampa production team. You get international production quality combined with on-the-ground local expertise — the best of both.',
  },
  {
    q: 'Why should Tampa businesses invest in professional video content?',
    a: 'Tampa is one of the fastest-growing US business markets. Brands that invest early in professional video see up to 3× faster brand growth, higher social media engagement, and significantly more inbound leads than competitors who don\'t.',
  },
];

const industries = [
  'Restaurants & Cafes', 'Real Estate Agents', 'Fitness & Wellness', 'Healthcare & Med Spas',
  'Law Firms', 'Local Retailers', 'Course Creators', 'Coaches & Consultants',
  'Event Planners', 'Tech Startups', 'Beauty & Fashion', 'Content Creators',
  'Hotels & Hospitality', 'Auto Dealerships', 'Construction & Builders',
];

export default function TampaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Breadcrumbs */}
      <nav className="tampa-breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="tampa-bc-sep">/</span>
        <Link href="/locations">Locations</Link>
        <span className="tampa-bc-sep">/</span>
        <span className="tampa-bc-current">Tampa, FL</span>
      </nav>

      {/* ── HERO ── */}
      <div className="hero-wrapper">
        <section className="tampa-hero" aria-label="Tampa hero section">
          <div className="grain" aria-hidden="true" />
          <div className="tampa-hero-content">
            <div className="hero-eyebrow">Tampa · Florida · United States</div>
            <h1>
              Tampa&apos;s Most Trusted<br />
              <span className="grad-text">Photography &amp; Videography</span><br />
              Production Team.
            </h1>
            <p className="tampa-hero-desc">
              From <strong>Ybor City</strong> to <strong>Hyde Park</strong>, <strong>Channelside</strong> to <strong>Clearwater</strong> — Drishyam Media produces cinematic photography, videography, and social media content for Tampa Bay&apos;s fastest-growing brands, restaurants, agents, and creators.
            </p>
            <div className="tampa-hero-actions">
              <Link href="/contact" className="btn-primary">Book a Free Strategy Call</Link>
              <Link href="/portfolio/shoot" className="btn-secondary">View Tampa Portfolio</Link>
            </div>
          </div>
        </section>
      </div>

      {/* ── TRUST BAR ── */}
      <div className="tampa-trust-bar" role="list" aria-label="Trust indicators">
        <div className="tampa-trust-item" role="listitem"><span className="tampa-trust-accent">4.9★</span> Average Rating</div>
        <div className="tampa-trust-dot" aria-hidden="true" />
        <div className="tampa-trust-item" role="listitem"><span className="tampa-trust-accent">50+</span> Brands Served</div>
        <div className="tampa-trust-dot" aria-hidden="true" />
        <div className="tampa-trust-item" role="listitem">Tampa Bay Area</div>
        <div className="tampa-trust-dot" aria-hidden="true" />
        <div className="tampa-trust-item" role="listitem">Same-Week Turnaround</div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="tampa-stats-bar" role="list" aria-label="Key statistics">
        {[
          { num: '50+', label: 'Tampa Brands' },
          { num: '4.9★', label: 'Avg. Rating' },
          { num: '85%', label: 'Client Retention' },
          { num: 'M+', label: 'Views Generated' },
        ].map((s) => (
          <div key={s.label} className="tampa-stat-item" role="listitem">
            <span className="tampa-stat-num grad-text">{s.num}</span>
            <span className="tampa-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── INTRO PROSE ── */}
      <section className="tampa-section" aria-labelledby="intro-heading">
        <p className="tampa-eyebrow-label">About Drishyam Media in Tampa</p>
        <h2 id="intro-heading" className="tampa-section-h2">
          Premium Photography &amp; Videography{' '}
          <span className="grad-text">in Tampa Bay.</span>
        </h2>
        <div className="tampa-prose-block">
          <p className="tampa-prose">
            Drishyam Media is a creative photography and videography agency now serving <strong>Tampa, Florida</strong>. We help local businesses, real estate agents, restaurants, fitness brands, healthcare practices, and content creators across the <strong>Tampa Bay area</strong> produce cinematic visual content that grows their brand.
          </p>
          <p className="tampa-prose">
            Whether you need a <strong>professional photographer in Tampa</strong> for a brand shoot in Hyde Park, a <strong>videographer in Tampa</strong> for a corporate film in Westshore, or a full social media content team for your restaurant in Ybor City — we bring international production quality to every Tampa project. Our team plans the shoot, captures the footage, edits the deliverables, and helps you turn that content into measurable growth.
          </p>
          <p className="tampa-prose">
            With <strong>50+ brands served</strong>, a <strong>4.9-star average rating</strong>, and same-week turnaround on most deliverables, Drishyam Media has become a trusted production partner for Tampa Bay&apos;s most ambitious teams.
          </p>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="tampa-section tampa-section--alt" aria-labelledby="services-heading">
        <p className="tampa-eyebrow-label">Tampa Services</p>
        <h2 id="services-heading" className="tampa-section-h2">
          Everything You Need to{' '}
          <span className="grad-text">Win on Camera</span><br />
          in the Tampa Market.
        </h2>
        <p className="tampa-section-desc">
          From single-day shoots to full monthly content production, our Tampa-based team handles your entire creative pipeline.
        </p>
        <div className="tampa-services-grid" role="list">
          {services.map((s) => (
            <article key={s.title} className="tampa-service-card" role="listitem">
              <div className="tampa-service-icon" aria-hidden="true">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <p className="tampa-service-keywords">{s.keywords}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── COVERAGE AREA ── */}
      <section className="tampa-section" aria-labelledby="coverage-heading">
        <p className="tampa-eyebrow-label">Coverage Area</p>
        <h2 id="coverage-heading" className="tampa-section-h2">
          Serving All of <span className="grad-text">Tampa Bay.</span>
        </h2>
        <p className="tampa-section-desc">No travel fee within the greater Tampa Bay region. We come to you.</p>
        <div className="tampa-locations-wrapper">
          <div className="tampa-locations-header">
            <h3>Tampa Bay Neighborhoods &amp; Cities We Cover</h3>
            <p>From the historic streets of Ybor City to the beaches of Clearwater — our production team works across the entire region.</p>
          </div>
          <div className="tampa-locations-grid" role="list">
            {locations.map((loc) => (
              <div key={loc.name} className="tampa-location-item" role="listitem">
                <strong>{loc.name}</strong>
                <span>{loc.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY TAMPA ── */}
      <section className="tampa-section tampa-section--alt" aria-labelledby="why-heading">
        <p className="tampa-eyebrow-label">Why It Matters</p>
        <h2 id="why-heading" className="tampa-section-h2">
          Tampa Brands Are Growing Fast.<br />
          <span className="grad-text">Your Content Should Lead The Way.</span>
        </h2>
        <div className="tampa-why-grid">
          <ul className="tampa-why-list" aria-label="Reasons to invest in content">
            {[
              {
                title: 'Tampa is one of America\'s fastest-growing business markets',
                body: 'New restaurants, coaches, agencies, and brands launch in Tampa Bay every week. The window to claim mindshare in this market is now — and visual content is how you do it.',
              },
              {
                title: 'Local brands using video grow up to 3× faster',
                body: 'Across our Tampa client base, businesses with consistent video content see significantly higher engagement, more inbound leads, and faster brand recognition.',
              },
              {
                title: 'Standing out in Tampa requires more than a logo',
                body: 'Your audience is on Instagram, TikTok, YouTube, LinkedIn, and Google all at once. We build a content system that works across every surface — not just a one-off shoot.',
              },
              {
                title: 'We bring international quality to a local market',
                body: 'Drishyam Media has worked with creators and brands generating millions of views globally. We bring that level of polish, speed, and strategy to every Tampa project.',
              },
            ].map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                {item.body}
              </li>
            ))}
          </ul>
          <div className="tampa-why-right">
            <h3>Tampa Industries We Serve</h3>
            <p>Tampa Bay clients we work with regularly — from solo creators to growing brands.</p>
            <div className="tampa-tag-cloud" aria-label="Industries served">
              {industries.map((tag) => (
                <span key={tag} className="tampa-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="tampa-section" aria-labelledby="testimonials-heading">
        <p className="tampa-eyebrow-label">Client Stories</p>
        <h2 id="testimonials-heading" className="tampa-section-h2">
          Tampa Brands. <span className="grad-text">Real Results.</span>
        </h2>
        <p className="tampa-section-desc">
          Just a few of the businesses we&apos;ve helped in the Tampa Bay area.
        </p>
        <div className="tampa-testimonials-grid" role="list">
          {testimonials.map((t) => (
            <article key={t.name} className="tampa-testi-card" role="listitem">
              <div className="tampa-testi-stars" aria-label="5 stars">★★★★★</div>
              <blockquote className="tampa-testi-quote">{t.quote}</blockquote>
              <div className="tampa-testi-author">
                <div
                  className="tampa-testi-avatar"
                  style={{ background: t.gradient }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <strong className="tampa-testi-name">{t.name}</strong>
                  <span className="tampa-testi-role">{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="tampa-section tampa-section--alt" aria-labelledby="process-heading">
        <p className="tampa-eyebrow-label">Our Process</p>
        <h2 id="process-heading" className="tampa-section-h2">
          From First Call to <span className="grad-text">Final Delivery.</span>
        </h2>
        <p className="tampa-section-desc">
          Built for busy Tampa business owners who want results without the back-and-forth.
        </p>
        <div className="tampa-process-grid" role="list">
          {processSteps.map((step, i) => (
            <div key={step.num} className="tampa-process-step" role="listitem">
              <div className="tampa-step-num">{step.num}</div>
              <div className="tampa-step-connector" aria-hidden="true">
                <span className="tampa-step-index">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="tampa-section" aria-labelledby="faq-heading">
        <p className="tampa-eyebrow-label">FAQ</p>
        <h2 id="faq-heading" className="tampa-section-h2">
          Tampa Photography &amp; Videography —{' '}
          <span className="grad-text">Common Questions.</span>
        </h2>
        <p className="tampa-section-desc">Everything Tampa businesses ask before they book.</p>
        <div className="tampa-faq-list">
          {faqs.map((faq) => (
            <div key={faq.q} className="tampa-faq-item">
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── RELATED LINKS ── */}
      <section className="tampa-section tampa-section--alt" aria-labelledby="explore-heading">
        <p className="tampa-eyebrow-label">Explore More</p>
        <h2 id="explore-heading" className="tampa-section-h2">
          Related Services &amp; <span className="grad-text">Resources.</span>
        </h2>
        <div className="tampa-related-links">
          <h3>Browse Drishyam Media</h3>
          <ul role="list">
            {[
              { href: '/portfolio/shoot', label: 'Photography & Videography Portfolio' },
              { href: '/portfolio/video', label: 'Video Editing Portfolio' },
              { href: '/portfolio/graphic', label: 'Graphic Design Portfolio' },
              { href: '/portfolio/web', label: 'Web & App Development' },
              { href: '/pricing/photography-videography', label: 'Photography & Videography Pricing' },
              { href: '/pricing/creative', label: 'Creative Services Pricing' },
              { href: '/pricing/website-seo', label: 'Website & SEO Pricing' },
              { href: '/blog', label: 'Blog & Insights' },
              { href: '/about', label: 'About Drishyam Media' },
              { href: '/reviews', label: 'Client Reviews & Testimonials' },
              { href: '/contact', label: 'Contact & Book a Call' },
            ].map((link) => (
              <li key={link.href} role="listitem">
                <Link href={link.href}>→ {link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA BLOCK ── */}
      <div className="tampa-cta-block">
        <div className="grain" aria-hidden="true" />
        <div className="tampa-cta-inner">
          <p className="tampa-eyebrow-label">Ready to Start?</p>
          <h2>
            Let&apos;s Build Your Brand<br />
            in <span className="grad-text">Tampa Bay.</span>
          </h2>
          <p>
            Free 30-minute strategy call. We&apos;ll map exactly what your brand needs to stand out in the Tampa market — no pressure, no fluff.
          </p>
          <div className="tampa-cta-actions">
            <Link href="/contact" className="btn-primary">Book Your Free Tampa Call</Link>
            <Link href="/pricing/photography-videography" className="btn-secondary">View Pricing</Link>
          </div>
        </div>
      </div>
    </>
  );
}
