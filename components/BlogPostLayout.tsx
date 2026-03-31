import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';

interface RelatedPost {
  href: string;
  title: string;
  description: string;
}

interface BlogPostLayoutProps {
  title: ReactNode;
  date: string;
  readTime: string;
  image: string;
  relatedPosts: RelatedPost[];
  children: ReactNode;
}

export default function BlogPostLayout({
  title,
  date,
  readTime,
  image,
  relatedPosts,
  children,
}: BlogPostLayoutProps) {
  return (
    <>
      <div className="hero-wrapper">
        <section className="post-hero" aria-label="Blog post header">
          <div className="grain" aria-hidden="true" />
          <div className="post-hero-content">
            <h1>{title}</h1>
            <div className="post-meta">
              <span>{date}</span>
              <span className="post-meta-divider" aria-hidden="true" />
              <span>{readTime}</span>
            </div>
          </div>
          <div className="post-cover" aria-hidden="true">
            <Image src={image} alt="" width={900} height={500} style={{ width: '100%', height: 'auto' }} />
          </div>
        </section>
      </div>

      <main className="post-body" aria-label="Blog post content">
        <article className="post-content">
          {children}
        </article>
      </main>

      <section className="related-posts" aria-label="Related posts">
        <div className="related-posts-inner">
          <h2>More from the <span className="grad-text">Blog</span></h2>
          <div className="related-grid">
            {relatedPosts.map((post) => (
              <Link key={post.href} href={post.href} className="related-card">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
