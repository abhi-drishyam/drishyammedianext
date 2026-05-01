import type { Metadata } from 'next';
import { Manrope, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://drishyammedia.com'),
  title: {
    default: 'Drishyam Media — Creative Marketing Agency | Video, Design & Web',
    template: '%s | Drishyam Media',
  },
  description:
    'Drishyam Media is a creative marketing agency specializing in video production, graphic design, web development, and brand growth strategy for creators and businesses worldwide.',
  keywords: [
    'creative marketing agency',
    'video production',
    'graphic design',
    'web development',
    'brand growth',
    'social media content',
    'video editing services',
    'Drishyam Media',
  ],
  authors: [{ name: 'Drishyam Media', url: 'https://drishyammedia.com' }],
  creator: 'Drishyam Media',
  publisher: 'Drishyam Media',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/icons/icon-192x192.png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://drishyammedia.com',
    siteName: 'Drishyam Media',
    title: 'Drishyam Media — Creative Marketing Agency | Video, Design & Web',
    description:
      'Supercharge your brand with viral signature clips. Video production, graphic design, web development, and growth strategy for creators and businesses.',
    images: [
      {
        url: '/icons/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'Drishyam Media Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drishyam Media — Creative Marketing Agency',
    description:
      'Supercharge your brand with viral signature clips. Video production, graphic design, web development, and growth strategy.',
    images: ['/icons/icon-512x512.png'],
  },
  alternates: {
    canonical: 'https://drishyammedia.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${poppins.variable}`}>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
