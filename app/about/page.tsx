import './about.css';
import HeroSection from '@/components/HeroSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us — Drishyam Media',
  description: 'Step into Drishyam, where ideas turn into visuals and brands find their voice.',
};

export default function AboutPage() {
  return (
    <>
      <HeroSection
        heading={<>About <span className="grad-text">Us</span></>}
        description="Step into Drishyam, where ideas turn into visuals and brands find their voice. Our studio is more than just a workspace—it's a creative hub where design, strategy, and storytelling come together to craft unforgettable experiences."
        ariaLabel="About hero section"
      />

      {/* Vision */}
      <section className="vision-section" aria-label="The vision behind Drishyam">
        <div className="vision-container">
          <div className="vision-image">
            <div className="vision-image-placeholder" aria-hidden="true">🎨</div>
          </div>
          <div className="vision-content">
            <h2>The Vision Behind <span className="grad-text">Drishyam</span></h2>
            <p>Drishyam was founded by a creative mind with a passion for design, branding, and digital storytelling. With a belief that every brand deserves to shine, we started Drishyam to help businesses grow through the power of creativity and strategy.</p>
            <p>Our mission is simple: to give brands more than just designs—to give them a voice, an identity, and a story that resonates with their audience. We believe that great design isn&apos;t just about aesthetics; it&apos;s about creating meaningful connections and driving real business results.</p>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="journey-section" aria-label="From idea to agency">
        <div className="journey-container">
          <div className="journey-content">
            <h2>From an Idea to <span className="grad-text">an Agency</span></h2>
            <p>What started as a small vision turned into a full-fledged creative marketing agency.</p>
            <p>Drishyam began with a simple goal: to give brands more than just designs—to give them a voice. Over time, we&apos;ve partnered with businesses, creators, and organizations to craft campaigns that spark engagement, build trust, and drive results.</p>
            <p>Today, Drishyam stands as a creative hub where innovation meets strategy—helping brands leave a lasting impact in the digital world.</p>
          </div>
          <div className="journey-images">
            <div className="journey-image">
              <div className="journey-image-placeholder" aria-hidden="true">💼</div>
            </div>
            <div className="journey-image">
              <div className="journey-image-placeholder" aria-hidden="true">🎯</div>
            </div>
            <div className="journey-image large">
              <div className="journey-image-placeholder" aria-hidden="true">🚀</div>
            </div>
          </div>
        </div>
      </section>

      {/* BTS */}
      <section className="bts-section" aria-label="Behind the scenes">
        <div className="section-header">
          <h2><span className="grad-text">BTS&apos;s</span></h2>
          <p>What started as a small vision turned into a full-fledged creative marketing agency. Drishyam began with a simple goal: to give brands more than just designs—to give them a voice. Over time, we&apos;ve partnered with businesses, creators, and organizations to craft campaigns that spark engagement.</p>
        </div>
        <div className="bts-videos">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bts-video-card">
              <div className="video-placeholder">
                <div className="play-btn">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="team-section" aria-label="Team members">
        <div className="section-header">
          <h2>Team <span className="grad-text">Members</span></h2>
          <p>Step into Drishyam, where ideas turn into visuals and brands find their voice. Our studio is more than just a workspace—it&apos;s a creative hub where design, strategy, and storytelling come together to craft unforgettable experiences.</p>
        </div>
        <div className="team-grid">
          {[
            { image: 'image/about/team-1.webp', name: 'Goldy',    role: 'Graphic Designer'              },
            { image: 'image/about/team-2.webp', name: 'Abhishek', role: 'Cinematographer / Strategist'  },
            { image: 'image/about/team-3.webp', name: 'Prakash',   role: 'Cinematographer'               },
            { image: 'image/about/team-4.webp', name: 'Anil',  role: 'Developer'                     },
          ].map((member) => (
            <div key={member.name} className="team-card">
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
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
