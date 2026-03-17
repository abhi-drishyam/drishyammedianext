import Link from 'next/link';
import type { ReactNode } from 'react';

interface BtnProps {
  href: string;
  label: string;
}

interface CtaStripProps {
  heading: ReactNode;
  subheading: ReactNode;
  primaryBtn: BtnProps;
  secondaryBtn: BtnProps;
}

export default function CtaStrip({ heading, subheading, primaryBtn, secondaryBtn }: CtaStripProps) {
  return (
    <section className="cta-strip" aria-label="Call to action">
      <h2>{heading}</h2>
      <p>{subheading}</p>
      <div className="cta-strip-actions">
        <Link href={primaryBtn.href} className="btn-primary">{primaryBtn.label}</Link>
        <Link href={secondaryBtn.href} className="btn-secondary">{secondaryBtn.label}</Link>
      </div>
    </section>
  );
}
