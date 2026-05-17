import './about.css';
import HeroSection from '@/components/HeroSection';
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
        addressLocality: 'Westchase',
        addressRegion: 'FL',
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
      worksFor: { '@id': 'https://drishyammedia.com/#organization' },
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
        addressLocality: 'Westchase',
        addressRegion: 'FL',
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
            <p>Abhishek Nagar grew up with a camera in his hands and a question in his mind: <em>why do some brands feel alive while others are forgotten the moment the scroll moves on?</em> That question became his career.</p>
            <p>He started shooting professionally in India — taking every job, learning the hard way, and building a reputation one frame at a time. Over two years and more than <strong>500 completed shoots</strong>, he moved from solo freelancer to founding <strong>Drishyam</strong>, a full-service creative production agency that grew to serve over <strong>50 clients</strong> across industries.</p>
            <p>At Drishyam India, Abhishek built and led an in-house team across graphic design, video editing, social media, SEO, and development — managing the full pipeline from ideation to distribution. He directed multi-camera coverage for concerts headlined by <strong>Badshah</strong>, <strong>Parmish Verma</strong>, and <strong>Prince Narula</strong>, and produced fast-turnaround content for large-scale events including Riwayat, Apratim, Fur Fest, and a Domino&apos;s flagship event.</p>
            <p>In 2024, Abhishek relocated to the United States as a permanent resident, settling in Westchase, Tampa, Florida — bringing Drishyam with him as an evolution, not a reset. The philosophy hasn&apos;t changed: good visual storytelling isn&apos;t decoration — it&apos;s infrastructure for growth.</p>
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
              { number: '50+',  label: 'Brand Clients'    },
              { number: '2',    label: 'Continents'       },
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
        <div className="about-bts-cards">
          {[
            {
              src: '/image/about/bts-1.webp',
              type: 'image' as const,
              tag: 'Live Event · Chandigarh',
              title: 'Multi-camera night at a 5,000-person concert',
              desc: 'Coordinating three camera positions, live lighting changes, and a crowd that doesn\'t stop moving. This is where fast decisions and good prep separate a great shoot from a scramble.',
            },
            {
              src: '/image/about/bts-2.webp',
              type: 'image' as const,
              tag: 'Brand Shoot · Tampa Bay',
              title: 'Setting the frame before the client arrives',
              desc: 'Most of the work happens before action is called — checking exposure, positioning lights, running test shots until everything is exactly right.',
            },
            {
              src: '/video/about/bts-1.mp4',
              poster: '/image/about/bts-video-1-poster.webp',
              type: 'video' as const,
              tag: 'Commercial · India',
              title: 'Fast-turnaround product shoot for a brand campaign',
              desc: 'High-output shoot days with multiple setups, tight timelines, and deliverables needed same-day for social. The kind of pressure we\'ve learned to enjoy.',
            },
            {
              src: '/image/about/bts-3.webp',
              type: 'image' as const,
              tag: 'Event Coverage · Chandigarh',
              title: 'On the floor at Fur Fest',
              desc: 'Large-scale events need a crew that communicates without radio chatter. We\'ve shot enough of them to move like one unit across a venue.',
            },
            {
              src: '/image/about/bts-4.webp',
              type: 'image' as const,
              tag: 'Corporate · Tampa Bay',
              title: 'Interview setup for a brand documentary',
              desc: 'Getting a subject comfortable on camera is half the job. The other half is building a frame that makes them look as credible as they are.',
            },
            {
              src: '/video/about/bts-2.mp4',
              poster: '/image/about/bts-video-2-poster.webp',
              type: 'video' as const,
              tag: 'Post-Production · Remote',
              title: 'The edit room is where the story actually gets made',
              desc: 'Raw footage tells you what happened. Editing tells you what it meant. We spend as much time in post as we do on location — because it shows in the final cut.',
            },
          ].map((item) => (
            <div key={item.title} className="about-bts-card">
              <div className="about-bts-thumb">
                {item.type === 'video' ? (
                  <video
                    className="about-bts-media"
                    src={item.src}
                    poster={(item as { poster?: string }).poster}
                    muted
                    playsInline
                    loop
                    autoPlay
                    aria-label={item.title}
                  />
                ) : (
                  <img
                    className="about-bts-media"
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                  />
                )}
              </div>
              <div className="about-bts-text">
                <span className="about-bts-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
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
