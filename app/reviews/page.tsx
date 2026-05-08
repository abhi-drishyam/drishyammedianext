import './reviews.css';
import type { Metadata } from 'next';
import TestimonialCard from '@/components/TestimonialCard';

export const metadata: Metadata = {
  title: 'Client Reviews & Testimonials',
  description:
    'Real testimonials and success stories from Drishyam Media clients. 500+ happy clients, 4.9★ average rating, 98% retention rate.',
  alternates: { canonical: '/reviews' },
};

const clientPhotos = [
  { initials: 'RH', gradient: 'linear-gradient(135deg,#4b3fff,#9b2fff)', image: '/image/homepage/client-11.webp' },
  { initials: 'SH', gradient: 'linear-gradient(135deg,#9b2fff,#d4007a)', image: '/image/homepage/client-4.webp' },
  { initials: 'TK', gradient: 'linear-gradient(135deg,#d4007a,#ff3c2f)', image: '/image/homepage/client-3.webp' },
  { initials: 'SM', gradient: 'linear-gradient(135deg,#ff3c2f,#9b2fff)', image: '/image/homepage/client-13.webp' },
  { initials: 'AK', gradient: 'linear-gradient(135deg,#4b3fff,#d4007a)', image: '/image/homepage/client-15.webp' },
  { initials: 'NF', gradient: 'linear-gradient(135deg,#9b2fff,#ff3c2f)', image: '/image/homepage/client-6.webp' },
  { initials: 'MJ', gradient: 'linear-gradient(135deg,#d4007a,#4b3fff)', image: '/image/homepage/client-17.webp' },
  { initials: 'PP', gradient: 'linear-gradient(135deg,#ff3c2f,#4b3fff)', image: '/image/homepage/client-8.webp' },
  { initials: 'LW', gradient: 'linear-gradient(135deg,#9b2fff,#d4007a)', image: '/image/homepage/client-7.webp' },
  { initials: 'DM', gradient: 'linear-gradient(135deg,#4b3fff,#ff3c2f)', image: '/image/homepage/client-10.webp' },
];

// const videoTestimonials = [
//   { featured: true,  initials: 'SH', accent: '#9b2fff', avatarGrad: 'linear-gradient(135deg,#4b3fff,#9b2fff)', quote: '"These guys don\'t mess around. We saw results from month one. If you want to grow your business, look no further."', author: 'Scott Henry',  role: 'Content Creator'      },
//   { featured: false, initials: 'RS', accent: '#d4007a', avatarGrad: 'linear-gradient(135deg,#9b2fff,#d4007a)', quote: '"Working with Drishyam was a game-changer. Their designs gave our brand a fresh identity."',                          author: 'Rahul Sharma', role: 'Content Creator'      },
//   { featured: false, initials: 'TH', accent: '#4b3fff', avatarGrad: 'linear-gradient(135deg,#d4007a,#ff3c2f)', quote: '"We design content that gets noticed, attracts followers, and builds your online presence."',                           author: 'Thomas',       role: 'Content Creator'      },
//   { featured: false, initials: 'SM', accent: '#ff3c2f', avatarGrad: 'linear-gradient(135deg,#ff3c2f,#9b2fff)', quote: '"The ROI has been incredible. Our engagement tripled in just 3 months."',                                              author: 'Simon',        role: 'Marketing Director'   },
//   { featured: false, initials: 'PP', accent: '#9b2fff', avatarGrad: 'linear-gradient(135deg,#4b3fff,#d4007a)', quote: '"Professional, creative, and always on time. Exactly what we needed."',                                               author: 'Priya Patel',  role: 'Small Business Owner' },
// ];

const textTestimonials = [
  { initials: 'SR', gradient: 'linear-gradient(135deg,#9b2fff,#d4007a)', quote: 'We had almost no social media presence, and as a dairy farmer, I had very little knowledge about social media marketing. A friend introduced me to Abhishek when I was looking to increase my sales. Abhishek clearly explained the strategy he planned to use to grow my business and improve sales. Almost everything worked exactly as he said. By the second month, I was already getting more sales directly through Instagram.', name: 'Sourav', role: 'Dairy Business Owner' },
  { initials: 'AG', gradient: 'linear-gradient(135deg,#4b3fff,#d4007a)', quote: 'We started a new music and podcast studio in November with absolutely no social media presence. Drishyam came in and helped us build everything from scratch. Within four months, nearly 80% of our sales were coming through social media marketing. Their team planned everything specifically for our niche, managed the campaigns for us, and consistently delivered the best ROI possible.', name: 'Aditya Gulati', role: 'Music & Podcast Studio Owner' },
  { initials: 'RB', gradient: 'linear-gradient(135deg,#ff3c2f,#d4007a)', quote: 'I run a marketing agency, and for all our shoot-related backend work, Christian Studios was our trusted production partner. We could always rely on them to deliver professional and high-quality work on time.', name: 'Rueben', role: 'Marketing Agency Owner' },
];

const whyCards = [
  { initials: 'RS', gradient: 'linear-gradient(135deg,#4b3fff,#9b2fff)', quote: 'We worked closely with you and through research you not only understand our industry, but enhanced our brand across multiple platforms in a way that connects with our customers.', name: 'Falcon', role: 'Singer/Rapper' },
  { initials: 'NF', gradient: 'linear-gradient(135deg,#9b2fff,#d4007a)', quote: 'The attention to detail is unmatched. Every design felt purposeful and strategic. We finally have a brand that stands out in our market.', name: 'PriyaVrindha', role: 'Performance Psychologist' },
  { initials: 'TK', gradient: 'linear-gradient(135deg,#d4007a,#ff3c2f)', quote: "Fast turnaround, creative solutions, and a team that actually listens. They took our rough ideas and turned them into a polished brand identity.", name: 'Mehnoor', role: 'Clothing Brand' },
  { initials: 'SM', gradient: 'linear-gradient(135deg,#4b3fff,#d4007a)', quote: "ROI-focused and data-driven. They didn't just make things look pretty — they made sure our content actually converted and grew our audience.", name: 'SD Rotract', role: 'Marketing Director' },
  { initials: 'PP', gradient: 'linear-gradient(135deg,#ff3c2f,#9b2fff)', quote: "As a small business owner, I needed someone who understood budget constraints without compromising quality. Drishyam delivered exactly that.", name: 'Rudranshi', role: 'Fitness Content Creator' },
  { initials: 'AK', gradient: 'linear-gradient(135deg,#9b2fff,#ff3c2f)', quote: "They're more than a service provider — they're a strategic partner. Every piece of content is crafted with our business goals in mind.", name: 'Navkirna', role: 'Education Content Creator' },
];

const reviewsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Drishyam Media',
  url: 'https://drishyammedia.com',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Scott Henry' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: "These guys don't mess around. We saw results from month one. If you want to grow your business, look no further.",
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Rahul Sharma' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Working with Drishyam was a game-changer. Their designs gave our brand a fresh identity.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Anika Kumar' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Professional service from start to finish. They understood our goals and delivered beyond expectations.',
    },
  ],
};

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />
      <div className="hero-wrapper">
        <section className="reviews-hero" aria-label="Reviews hero section">
          <div className="grain" aria-hidden="true" />
          <div className="reviews-hero-content">
            <h1>Hear it directly from our <span className="grad-text">clients</span></h1>
            <p>Real stories from real people. Our testimonials reflect the satisfaction and success our clients have experienced working with us.</p>
          </div>

          <div className="client-showcase">
            <div className="client-photos-wrapper">
              {clientPhotos.map((c, i) => (
                <div key={i} className="client-photo">
                  <img src={c.image} alt={c.initials} className="client-initial" style={{ background: c.gradient, objectFit: 'cover' }} />
                </div>
              ))}
            </div>
            <div className="client-stats">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4.9★</div>
                <div className="stat-label">Average Rating</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">92%</div>
                <div className="stat-label">Retention Rate</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Video Testimonials — temporarily hidden
      <section className="video-testimonials" aria-label="Video testimonials">
        <div className="section-header">
          <h2>Listen to our <span className="grad-text">clients</span></h2>
          <p>Watch actual success stories. We&apos;d love to hear how you turned content into authority.</p>
        </div>
        <div className="video-grid">
          {videoTestimonials.map((v, i) => (
            <div key={i} className={`video-card${v.featured ? ' featured' : ''}`} style={{ ['--accent' as any]: v.accent }}>
              <div className="video-placeholder">
                <div className="video-bg-glow" aria-hidden="true" />
                <button className="play-btn" aria-label={`Play testimonial from ${v.author}`}>
                  <svg viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
                </button>
                <div className="video-info">
                  <p className="video-quote">{v.quote}</p>
                  <div className="video-author">
                    <div className="video-avatar" style={{ background: v.avatarGrad }}>{v.initials}</div>
                    <div>
                      <div className="video-author-name">{v.author}</div>
                      <div className="video-author-role">{v.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      */}

      {/* Text Testimonials */}
      <section className="text-testimonials" aria-label="Written testimonials">
        <div className="section-header">
          <h2>There&apos;s a Reason People are <span className="grad-text">Raving About Us</span></h2>
          <p>Join the experts, doctors, and funders who&apos;ve turned authenticity into growth. Your content should be working harder than you are.</p>
        </div>
        <div className="testimonial-carousel">
          <div className="testimonial-track">
            {textTestimonials.map((t, i) => (
              <TestimonialCard
                key={i}
                quote={t.quote}
                initials={t.initials}
                name={t.name}
                role={t.role}
                avatarGradient={t.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="case-study" aria-label="Client success story">
        <div className="case-study-container">
          <div className="case-study-header">
            <div className="case-study-badge">Client Success Story</div>
            <h2 className="case-study-title">Nandani Farm&apos;s Growth <span className="grad-text">With Drishyam</span></h2>
            <p className="case-study-description">From local recognition to online influence — here&apos;s how our collaboration helped Nandani Farm grow their digital presence and reach thousands of new customers.</p>
          </div>
          <div className="stats-grid">
            {[
              { icon: '📱', number: '0 → 12k', label: 'Instagram Followers' },
              { icon: '👁️', number: '340%', label: 'Engagement Increase' },
              { icon: '💰', number: '250%', label: 'Revenue Growth' },
              { icon: '⏱️', number: '1.5 Mo', label: 'Time to Results' },
            ].map((s, i) => (
              <div key={i} className="stat-card">
                <div className="stat-icon">{s.icon}</div>
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose" aria-label="Why clients choose us">
        <div className="section-header">
          <h2>Why Our Clients <span className="grad-text">Keep Coming Back</span></h2>
          <p>We don&apos;t just deliver projects — we build partnerships that drive real growth.</p>
        </div>
        <div className="why-grid">
          {whyCards.map((c, i) => (
            <TestimonialCard
              key={i}
              quote={c.quote}
              initials={c.initials}
              name={c.name}
              role={c.role}
              avatarGradient={c.gradient}
            />
          ))}
        </div>
      </section>
    </>
  );
}
