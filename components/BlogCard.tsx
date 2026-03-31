import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  image: string;
  featured?: boolean;
}

export default function BlogCard({ slug, title, date, image, featured = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={`blog-card${featured ? ' blog-card--featured' : ''}`}
    >
      <div className="blog-card__thumb">
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
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
