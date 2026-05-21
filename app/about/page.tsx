import './about.css';
import HeroSection from '@/components/HeroSection';
import VideoGallerySection from '@/components/VideoGallerySection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Drishyam Media | Founder Abhishek Nagar & Team — Tampa Bay',
  description:
    'Drishyam Media is a Tampa Bay creative studio founded by Abhishek Nagar. 500+ shoots, 50+ brands, premium cinematography & social-first content.',
  openGraph: {
    title: 'About Drishyam Media | Founder Abhishek Nagar & Team — Tampa Bay',
    description:
      'Drishyam Media is a Tampa Bay creative studio founded by Abhishek Nagar. 500+ shoots, 50+ brands, premium cinematography & social-first content.',
    images: [{ url: '/image/about/og-about.jpg', width: 1200, height: 630 }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://drishyammedia.com/about#webpage',
      url: 'https://drishyammedia.com/about',
      name: 'About Drishyam Media | Founder Abhishek Nagar & Team — Tampa Bay',
      description:
        'Drishyam Media is a Tampa Bay creative production studio founded by Abhishek Nagar. 500+ shoots across India and the USA, 50+ brands, premium cinematography & social-first content.',
      isPartOf: { '@id': 'https://drishyammedia.com/#website' },
      about: { '@id': 'https://drishyammedia.com/#organization' },
    },
    {
      '@type': 'Organization',
      '@id': 'https://drishyammedia.com/#organization',
      name: 'Drishyam Media',
      url: 'https://drishyammedia.com',
      logo: 'https://drishyammedia.com/icons/icon-512x512.png',
      foundingDate: '2022',
      founder: { '@id': 'https://drishyammedia.com/#founder' },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '9946 Brompton Dr.',
        addressLocality: 'Tampa',
        addressRegion: 'FL',
        postalCode: '33626',
        addressCountry: 'US',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-813-965-7606',
        contactType: 'customer service',
        email: 'contact@drishyammedia.com',
      },
      sameAs: ['https://www.instagram.com/studio.drishyam'],
    },
    {
      '@type': 'Person',
      '@id': 'https://drishyammedia.com/#founder',
      name: 'Abhishek Nagar',
      jobTitle: 'Founder & Creative Director',
      image: 'https://drishyammedia.com/image/about/team-2.webp',
      worksFor: { '@id': 'https://drishyammedia.com/#organization' },
      sameAs: [
        'https://www.linkedin.com/in/abhisheknagar815/',
        'https://www.instagram.com/em_abhi_nagar/',
      ],
      knowsAbout: [
        'Cinematography',
        'Video Production',
        'Brand Campaigns',
        'Social Media Marketing',
        'Adobe Creative Suite',
        'Meta Ads',
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '9946 Brompton Dr.',
        addressLocality: 'Tampa',
        addressRegion: 'FL',
        postalCode: '33626',
        addressCountry: 'US',
      },
    },
  ],
};


export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection
        heading={<>About <span className="grad-text">Us</span></>}
        description="From a single camera in India to a creative studio serving global brands. Drishyam Media is built on 500+ shoots, 50+ brand partnerships, and the belief that every business deserves visual storytelling that actually works."
        ariaLabel="About hero section"
      />

      {/* Founder Story */}
      <section className="vision-section" aria-label="The person behind the lens">
        <div className="vision-container">
          <div className="vision-image">
            <img src="/image/drishyam team.webp" alt="Abhishek Nagar on set" className="vision-image-fill" loading="lazy" />
          </div>
          <div className="vision-content">
            <h2>The person behind <span className="grad-text">the lens</span></h2>
            <p>I started my journey with a camera, not with a business plan.</p>
            <p>In the beginning, I was taking every project I could get — learning through real shoots, real pressure, and real clients. Over time, what started as freelance videography turned into something much bigger. In just over two years, I completed <strong>500+ shoots</strong> across concerts, brand campaigns, podcasts, events, advertisements, and social media productions.</p>
            <p>That journey led me to build <strong>Drishyam</strong> in India — a full-service creative production agency that worked with more than <strong>50 clients</strong> across different industries. I wasn&apos;t just shooting videos; I was building systems, managing teams, handling client strategy, and overseeing the complete production pipeline from concept to final delivery.</p>
            <p>As Drishyam grew, I built an in-house team of graphic designers, editors, social media managers, SEO specialists, and developers. Alongside client projects, we also worked as a white-label creative partner for other agencies.</p>
            <p>My work gave me the opportunity to shoot personal content for artists like and, while also covering large-scale concerts featuring and. I also led coverage for major events including Riwayat, Apratim, Fur Fest, cyclothons, pet events, and brand activations including a Domino&apos;s event.</p>
            <p>In End 2025, I relocated to the United States and now I am based in Tampa, Florida. For me, moving countries was never about starting over — it was about expanding the vision behind Drishyam.</p>
            <p>I&apos;ve always believed that strong visual storytelling does more than just &ldquo;look good.&rdquo; Good content builds trust, shapes perception, and helps brands stay remembered long after people stop scrolling.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats-section" aria-label="Drishyam Media by the numbers">
        <div className="about-stats-inner">
          <div className="about-stats-header">
            <h2>From a single camera in India to a creative studio serving global brands.</h2>
            <p>Drishyam Media is built on 500+ shoots, 50+ brand partnerships, and the belief that every business deserves visual storytelling that actually works.</p>
          </div>
          <div className="about-stats-grid">
            {[
              { number: '500+', label: 'Completed Shoots' },
              { number: '50+',  label: 'Clients'    },
              { number: '2',    label: 'Works in Continents'       },
              { number: '2+',   label: 'Years in Production' },
            ].map((stat) => (
              <div key={stat.label} className="about-stat-card">
                <span className="about-stat-number">{stat.number}</span>
                <span className="about-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="journey-section" aria-label="What we believe">
        <div className="about-values-container">
          <h2>What we <span className="grad-text">believe</span></h2>
          <div className="about-values-grid">
            <div className="about-value-item">
              <h3>Story first, tools second.</h3>
              <p>Every camera, editing suite, and platform is a means to an end. We don&apos;t start with formats or deliverables. We start by understanding who you&apos;re trying to reach and what needs to change in their mind when they see your content.</p>
            </div>
            <div className="about-value-item">
              <h3>Quality without gatekeeping.</h3>
              <p>Premium production doesn&apos;t belong exclusively to enterprise budgets. We&apos;ve worked with first-time founders, independent artists, and regional businesses. The standard of craft is the same regardless — what changes is the strategy, not the quality.</p>
            </div>
            <div className="about-value-item">
              <h3>Accountability at every frame.</h3>
              <p>We&apos;ve run the full production pipeline ourselves — ideation, scheduling, shooting, editing, distribution — so we understand what clients actually need: a partner who shows up prepared, communicates clearly, and delivers on time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section" aria-label="Team members">
        <div className="section-header">
          <h2>The <span className="grad-text">Team</span></h2>
          <p>A small, focused crew with deep expertise across every stage of production — from strategy to delivery.</p>
        </div>
        <div className="team-grid">
          {[
            {
              image: 'image/about/team-1.webp',
              name: 'Goldy',
              role: 'Graphic Designer',
              bio: 'Sharp eye for visual hierarchy and brand consistency. From social graphics to full campaign identity systems, Goldy translates creative direction into designs that are clean, distinctive, and built to perform across platforms.',
              linkedin: '#',
              isFounder: false,
            },
            {
              image: 'image/about/team-2.webp',
              name: 'Abhishek Nagar',
              role: 'Founder · Cinematographer · Brand Strategist',
              bio: 'With 500+ shoots across India and the U.S., Abhishek leads creative direction and client strategy at Drishyam. He holds the camera and the bigger picture simultaneously.',
              linkedin: '#',
              isFounder: true,
            },
            {
              image: 'image/about/team-3.webp',
              name: 'Prakash',
              role: 'Cinematographer',
              bio: 'Specializes in capturing moments that feel both intentional and alive — tight commercial shots or wide-angle stage reveals at live events. Technical precision and a natural instinct for light.',
              linkedin: '#',
              isFounder: false,
            },
            {
              image: 'image/about/team-4.jpeg',
              name: 'Saksham',
              role: 'Video Editor',
              bio: 'Lives in the timeline. Takes raw footage and finds the story inside it — pacing, rhythm, color, sound — assembling cuts that hold attention. Especially fast under deadline pressure.',
              linkedin: '#',
              isFounder: false,
            },
          ].map((member) => (
            <div key={member.name} className={`team-card${member.isFounder ? ' team-card--founder' : ''}`}>
              <div className="team-photo" style={{ aspectRatio: '1 / 1', overflow: 'hidden' }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="about-bts-section" aria-label="Behind the scenes at Drishyam Media">
        <div className="section-header">
          <h2>Behind the <span className="grad-text">scenes</span></h2>
          <p>Not every story makes it into the final cut. Here&apos;s what production actually looks like — the setup, the crew, the controlled chaos that turns into content.</p>
        </div>
        <VideoGallerySection
          id="bts"
          title=""
          count=""
          ariaLabel="BTS Footage"
          carouselClass="bts-carousel"
          items={[
            { src: '/video/bts-1.mp4', label: '' },
            { src: '/video/bts-2.mp4', label: '' },
            { src: '/video/bts-3.mp4', label: '' },
            { src: '/video/bts-4.mp4', label: '' },
            { src: '/video/bts-5.mp4', label: '' },
            { src: '/video/bts-6.mp4', label: '' },
          ]}
        />
      </section>

      {/* Where We Work */}
      <section className="journey-section about-locations-section" aria-label="Where we work">
        <div className="about-values-container">
          <h2>Where we <span className="grad-text">work</span></h2>
          <div className="about-locations-grid">
            {[
              {
                location: 'Tampa Bay, Florida',
                tag: 'Primary Market',
                desc: 'Our home base. We serve businesses, creators, brands, and event organizers across Tampa, St. Petersburg, Clearwater, and the broader Bay Area.',
              },
              {
                location: 'Chandigarh, India',
                tag: '',
                desc: 'Where Drishyam began. We still maintain strong roots and professional relationships here for productions and brand campaigns in the region.',
              },
              {
                location: 'Niagara & Toronto, Canada',
                tag: '',
                desc: 'Available for productions in the Niagara and Greater Toronto area. Contact us to discuss scheduling and logistics for Canadian projects.',
              },
              {
                location: 'Mumbai, India',
                tag: '',
                desc: 'Through our extended network of production professionals, we can coordinate and support commercial productions in Mumbai for international co-productions.',
              },
            ].map((loc) => (
              <div key={loc.location} className="about-location-card">
                <div className="about-location-header">
                  <h3>{loc.location}</h3>
                  {loc.tag && <span className="about-location-tag">{loc.tag}</span>}
                </div>
                <p>{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
