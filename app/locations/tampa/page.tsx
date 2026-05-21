import './tampa.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import AnnouncementBanner from '@/components/AnnouncementBanner';

export const metadata: Metadata = {
  title: 'Tampa Photographer & Videographer | Drishyam Media — Photo & Video Production in Tampa, FL',
  description:
    'Top-rated photography & videography in Tampa, FL. Drishyam Media delivers cinematic brand video, social media content, corporate videography & event photography across Tampa Bay, Ybor City, Hyde Park, St. Pete & Clearwater. Book a free call.',
  keywords:
    'photographer in Tampa, videographer Tampa FL, Tampa photography services, Tampa videography, Tampa Bay video production, social media videographer Tampa, brand photography Tampa, corporate video Tampa, event photographer Tampa Bay, content creator Tampa, real estate videographer Tampa, restaurant videography Tampa, Tampa Florida photo studio',
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
  '@type': ['LocalBusiness', 'ProfessionalService', 'MarketingAgency'],
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
  logo: 'https://www.drishyammedia.com/og/logo-1200.png',
  telephone: '+1-813-965-7606',
  email: 'contact@drishyammedia.com',
  priceRange: '$50-$2000',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '9946 Brompton Dr.',
    addressLocality: 'Tampa',
    addressRegion: 'FL',
    postalCode: '33626',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 27.9506, longitude: -82.4572 },
  areaServed: [
    { '@type': 'City', name: 'Tampa', '@id': 'https://en.wikipedia.org/wiki/Tampa,_Florida' },
    { '@type': 'City', name: 'St. Petersburg' },
    { '@type': 'Place', name: 'Westchase' },
    { '@type': 'Place', name: 'Town N Country' },
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
    'https://www.instagram.com/studio.drishyam',
    'https://www.linkedin.com/company/drishyammedia/',
    'https://x.com/studiodrishyam',
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
      name: 'Who is Drishyam Media and are you actually based in Tampa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — we have a real presence in Tampa. Abhishek (the person you\'ll actually talk to and shoot with) is on the ground here. Our post-production team operates out of Chandigarh, India — and that\'s intentional. It\'s how we deliver international-quality editing at rates that make sense for local Tampa businesses. You get a single point of contact in your timezone, and a full creative team working behind the scenes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a shoot cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shoots start at $75 for a 30-minute session. From there, pricing scales based on time, deliverables, and what your project needs. We don\'t believe in hiding numbers — book a free call and we\'ll give you a clear quote without the runaround.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast will I get my photos and videos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most shoots, you\'ll have your edited deliverables within 2–3 business days. Real estate photography is typically turned around in 1 business day, because we know listings can\'t wait. We build in a small buffer for unexpected factors — weather, technical issues, volume — so when we commit to a timeline, we mean it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you rush my delivery if I need it faster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If you have a hard deadline — a listing going live, a campaign launch, an event recap — tell us upfront. We\'ll have an honest conversation about what\'s possible and lock in a timeline that works. Rush delivery is handled case by case, not as a blanket policy with a fixed fee.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you do real estate photography and video in Tampa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It\'s one of our most requested services. We shoot listing photography, walkthrough video tours, drone aerials, and twilight shoots for agents, brokerages, and developers across Tampa Bay. Real estate photos turnaround is 1 business day because we understand how time-sensitive listings are.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas of Tampa Bay do you cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All of it — Downtown Tampa, Ybor City, Hyde Park, Channelside, Westshore, South Tampa, New Tampa, Brandon, Riverview, Wesley Chapel, St. Petersburg, and Clearwater. No travel fee within the greater Tampa Bay region.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you a local company or an international agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both, honestly. Drishyam Media operates across 4 cities in 3 countries — Tampa (US), Niagara (Canada), Chandigarh, and Mumbai (India). The shoot happens with a local team member here in Tampa. The editing, motion graphics, and post-production happen with our India-based team. This structure is why our pricing is accessible without cutting corners on quality.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is your pricing more affordable than other Tampa agencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because our model is different. Most local agencies carry high overhead — local editors, studio space, full-time staff. We operate lean by design: one shooter on the ground in Tampa, a skilled post-production team in India, and no unnecessary middlemen. You\'re not paying for overhead. You\'re paying for the work.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of businesses do you work with in Tampa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Real estate agents, restaurants, fitness brands, healthcare practices, coaches, law firms, event planners, content creators, retail — if your business needs to look credible and compelling online, we\'ve probably worked with someone like you. We work with solo operators and growing teams alike.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get started?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Book a free 20-minute strategy call. We\'ll understand your goals, figure out what you actually need (not just what sounds good), and give you a clear plan and quote. No pressure, no pitch deck. Just a real conversation.',
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


const processSteps = [
  { num: 'Step 01', title: 'Free Tampa Strategy Call', desc: '30-minute call to understand your brand, goals, and audience. We map out exactly what your Tampa business needs.' },
  { num: 'Step 02', title: 'Shoot Day in Tampa Bay', desc: 'Our team comes to your Tampa location. One focused shoot day generates weeks of usable content.' },
  { num: 'Step 03', title: 'Edit & Deliver Fast', desc: 'Same-week turnaround on most edits. Revisions included. Platform-ready files delivered in cloud.' },
  { num: 'Step 04', title: 'Grow Your Tampa Brand', desc: 'We help you post consistently and turn views into leads in the Tampa market — not just deliver and disappear.' },
];

const faqs = [
  {
    q: 'Who is Drishyam Media and are you actually based in Tampa?',
    a: 'Yes — we have a real presence in Tampa. Abhishek (the person you\'ll actually talk to and shoot with) is on the ground here. Our post-production team operates out of Chandigarh, India — and that\'s intentional. It\'s how we deliver international-quality editing at rates that make sense for local Tampa businesses. You get a single point of contact in your timezone, and a full creative team working behind the scenes.',
  },
  {
    q: 'How much does a shoot cost?',
    a: 'Shoots start at $75 for a 30-minute session. From there, pricing scales based on time, deliverables, and what your project needs. We don\'t believe in hiding numbers — book a free call and we\'ll give you a clear quote without the runaround.',
  },
  {
    q: 'How fast will I get my photos and videos?',
    a: 'For most shoots, you\'ll have your edited deliverables within 2–3 business days. Real estate photography is typically turned around in 1 business day, because we know listings can\'t wait. We build in a small buffer for unexpected factors — weather, technical issues, volume — so when we commit to a timeline, we mean it.',
  },
  {
    q: 'Can you rush my delivery if I need it faster?',
    a: 'Yes. If you have a hard deadline — a listing going live, a campaign launch, an event recap — tell us upfront. We\'ll have an honest conversation about what\'s possible and lock in a timeline that works. Rush delivery is handled case by case, not as a blanket policy with a fixed fee.',
  },
  {
    q: 'Do you do real estate photography and video in Tampa?',
    a: 'It\'s one of our most requested services. We shoot listing photography, walkthrough video tours, drone aerials, and twilight shoots for agents, brokerages, and developers across Tampa Bay. Real estate photos turnaround is 1 business day because we understand how time-sensitive listings are.',
  },
  {
    q: 'What areas of Tampa Bay do you cover?',
    a: 'All of it — Downtown Tampa, Ybor City, Hyde Park, Channelside, Westshore, South Tampa, New Tampa, Brandon, Riverview, Wesley Chapel, St. Petersburg, and Clearwater. No travel fee within the greater Tampa Bay region.',
  },
  {
    q: 'Are you a local company or an international agency?',
    a: 'Both, honestly. Drishyam Media operates across 4 cities in 3 countries — Tampa (US), Niagara (Canada), Chandigarh, and Mumbai (India). The shoot happens with a local team member here in Tampa. The editing, motion graphics, and post-production happen with our India-based team. This structure is why our pricing is accessible without cutting corners on quality.',
  },
  {
    q: 'Why is your pricing more affordable than other Tampa agencies?',
    a: 'Because our model is different. Most local agencies carry high overhead — local editors, studio space, full-time staff. We operate lean by design: one shooter on the ground in Tampa, a skilled post-production team in India, and no unnecessary middlemen. You\'re not paying for overhead. You\'re paying for the work.',
  },
  {
    q: 'What kind of businesses do you work with in Tampa?',
    a: 'Real estate agents, restaurants, fitness brands, healthcare practices, coaches, law firms, event planners, content creators, retail — if your business needs to look credible and compelling online, we\'ve probably worked with someone like you. We work with solo operators and growing teams alike.',
  },
  {
    q: 'How do I get started?',
    a: 'Book a free 20-minute strategy call. We\'ll understand your goals, figure out what you actually need (not just what sounds good), and give you a clear plan and quote. No pressure, no pitch deck. Just a real conversation.',
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

      <AnnouncementBanner generic />

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
        <div className="tampa-trust-item" role="listitem"><span className="tampa-trust-accent">500+</span> Shoots Done</div>
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
          { num: '50+', label: 'Brands' },
          { num: '500+', label: 'Shoots Done' },
          { num: '95%', label: 'Client Retention' },
          { num: 'Million+', label: 'Views Generated' },
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
    </>
  );
}
