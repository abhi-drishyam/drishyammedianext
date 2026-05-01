import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web & App Development Portfolio',
  description:
    'Explore Drishyam Media\'s web and app development portfolio — modern, conversion-focused websites built for businesses, brands, and creators.',
  alternates: { canonical: '/portfolio/web' },
};

export default function WebPortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
