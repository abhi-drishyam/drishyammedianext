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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": [
    "Organization",
    "LocalBusiness",
    "ProfessionalService",
    "MarketingAgency"
  ],
  "@id": "https://www.drishyammedia.com/#organization",
  "name": "Drishyam Media",
  "alternateName": "Drishyam",
  "url": "https://www.drishyammedia.com/",
  "logo": "https://www.drishyammedia.com/og/logo-1200.png",
  "image": "https://www.drishyammedia.com/og/logo-1200.png",
  "description": "Drishyam Media is a Tampa-based creative production and marketing agency specializing in cinematic video production, photography, podcast production, social media marketing, branding, website development, graphic design, and high-converting content systems for creators, brands, and businesses.",
  "email": "contact@drishyammedia.com",
  "telephone": "+1-813-965-7606",
  "priceRange": "$50-$2000",
  "foundingLocation": {
    "@type": "City",
    "name": "Chandigarh"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "9946 Brompton Dr.",
    "addressLocality": "Tampa",
    "addressRegion": "FL",
    "postalCode": "33626",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "City", "name": "Tampa" },
    { "@type": "City", "name": "Chandigarh" },
    { "@type": "City", "name": "Mumbai" },
    { "@type": "City", "name": "Niagara" }
  ],
  "serviceArea": [
    { "@type": "Place", "name": "Tampa, Florida" },
    { "@type": "Place", "name": "Chandigarh, India" },
    { "@type": "Place", "name": "Mumbai, India" },
    { "@type": "Place", "name": "Niagara, Canada" }
  ],
  "sameAs": [
    "https://www.instagram.com/studio.drishyam",
    "https://www.linkedin.com/company/drishyammedia/",
    "https://x.com/studiodrishyam"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-813-965-7606",
    "contactType": "customer support",
    "areaServed": ["US", "IN", "CA"],
    "availableLanguage": ["English", "Hindi", "Punjabi"]
  },
  "founder": {
    "@type": "Person",
    "name": "Abhishek Nagar"
  },
  "knowsAbout": [
    "Video Production",
    "Commercial Photography",
    "Podcast Production",
    "Social Media Marketing",
    "Content Strategy",
    "Brand Strategy",
    "Video Editing",
    "Short-form Content",
    "Graphic Design",
    "Website Development",
    "SEO",
    "Creative Direction",
    "Event Coverage",
    "Advertising Content",
    "Reels Editing",
    "Cinematography"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Creative & Marketing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Video Production" }
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Photography" }
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Podcast Production" }
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Social Media Marketing" }
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Video Editing" }
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Graphic Design" }
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Website Development" }
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "SEO Services" }
      }
    ]
  }
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.drishyammedia.com'),
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
  authors: [{ name: 'Drishyam Media', url: 'https://www.drishyammedia.com' }],
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
    url: 'https://www.drishyammedia.com',
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
    canonical: 'https://www.drishyammedia.com',
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
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
