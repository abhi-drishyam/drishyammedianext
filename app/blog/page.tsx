import './blog.css';
import HeroSection from '@/components/HeroSection';
import BlogCard from '@/components/BlogCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — Drishyam Media',
  description: 'Insights, tips, and creative stories from the Drishyam team.',
};

const posts = [
  {
    slug: 'the-only-copywriting-framework',
    title: 'The Only Copywriting Framework You\'ll Ever Need',
    date: 'Mar 18, 2024',
    image: '/image/Blog/blog-1.webp',
    featured: true,
  },
  {
    slug: 'why-my-ads-print-money',
    title: 'Why My ADs Print Money While Others Bleed Cash',
    date: 'Jul 4, 2024',
    image: '/image/Blog/blog-2.webp',
    featured: false,
  },
  {
    slug: 'create-1000-ads-meta-andromeda',
    title: 'Create 1000 Ads Without Recording Anything',
    date: 'Nov 22, 2024',
    image: '/image/Blog/blog-3.webp',
    featured: false,
  },
  {
    slug: '24-marketing-lessons',
    title: '24 Marketing Lessons That Took Me 3 Years to Learn',
    date: 'Feb 9, 2025',
    image: '/image/Blog/blog-4.webp',
    featured: false,
  },
  {
    slug: 'email-marketing-is-not-about-yes',
    title: 'Email Marketing Is Not About Yes',
    date: 'Jun 14, 2025',
    image: '/image/Blog/blog-5.webp',
    featured: false,
  },
  {
    slug: 'killer-video-ad-scripts',
    title: 'How to Write Killer, High-Converting Video Ad Scripts',
    date: 'Sep 3, 2025',
    image: '/image/Blog/blog-6.webp',
    featured: false,
  },
  {
    slug: 'landing-page-not-converting',
    title: 'Why Your Landing Page Isn\'t Converting',
    date: 'Dec 11, 2025',
    image: '/image/Blog/blog-7.webp',
    featured: false,
  },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <HeroSection
        badge="blogs"
        heading={<>Our <span className="grad-text">Blog</span></>}
        description="Insights, tips, and creative stories from the Drishyam team."
        ariaLabel="Blog hero"
      />

      {/* Blog grid */}
      <section className="blog-listing" aria-label="Blog posts">
        <div className="blog-grid">
          <BlogCard {...featured} featured />
          {rest.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </section>
    </>
  );
}
