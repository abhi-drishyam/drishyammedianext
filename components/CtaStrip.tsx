import Link from 'next/link';
import type { ReactNode } from 'react';
import CalLink from '@/components/CalLink';

interface BtnProps {
  href: string;
  label: string;
}

interface CtaStripProps {
  heading: ReactNode;
  subheading: ReactNode;
  primaryBtn: BtnProps;
  secondaryBtn: BtnProps;
  /** When true, the primary button opens the Cal.com popup instead of navigating to primaryBtn.href */
  primaryAsCal?: boolean;
}

export default function CtaStrip({ heading, subheading, primaryBtn, secondaryBtn, primaryAsCal }: CtaStripProps) {
  return (
    <section className="cta-strip" aria-label="Call to action">
      <h2>{heading}</h2>
      <p>{subheading}</p>
      <div className="cta-strip-actions">
        {primaryAsCal ? (
          <CalLink className="btn-primary">{primaryBtn.label}</CalLink>
        ) : (
          <Link href={primaryBtn.href} className="btn-primary">{primaryBtn.label}</Link>
        )}
        <Link href={secondaryBtn.href} className="btn-secondary">{secondaryBtn.label}</Link>
      </div>
    </section>
  );
}
