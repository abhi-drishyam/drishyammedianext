import Link from 'next/link';

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  featured?: boolean;
}

export default function BlogCard({ slug, title, date, featured = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={`blog-card${featured ? ' blog-card--featured' : ''}`}
    >
      <div className="blog-card__thumb">
        {/* Image placeholder — replace with next/image when images are available */}
        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(145deg,#0a0818,#1e0848)' }} />
      </div>
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span>{date}</span>
        </div>
        <h2 className="blog-card__title">{title}</h2>
        <span className="blog-card__link">Read Article →</span>
      </div>
    </Link>
  );
}
