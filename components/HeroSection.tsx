import React from 'react';

type Category = {
  href: string;
  label: string;
};

type HeroSectionProps = {
  badge?: string;
  heading: React.ReactNode;
  description: React.ReactNode;
  categories?: Category[];
  ariaLabel?: string;
};

export default function HeroSection({
  badge,
  heading,
  description,
  categories,
  ariaLabel,
}: HeroSectionProps) {
  return (
    <div className="hero-wrapper">
      <section className="page-hero" aria-label={ariaLabel ?? (typeof heading === 'string' ? heading : undefined)}>
        <div className="grain" aria-hidden="true" />
        <div className="page-hero-content">
          {badge && <div className="hero-eyebrow">{badge}</div>}
          <h1>{heading}</h1>
          <p className="sub-copy">{description}</p>
        </div>
        {categories && categories.length > 0 && (
          <div className="anchor-pills" role="navigation" aria-label="Jump to category">
            {categories.map(({ href, label }) => (
              <a key={href} href={href} className="anchor-pill">
                {label}
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
