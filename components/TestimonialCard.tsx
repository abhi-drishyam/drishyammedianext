interface TestimonialCardProps {
  quote: string;
  initials: string;
  name: string;
  role: string;
  avatarGradient?: string;
  featured?: boolean;
}

export default function TestimonialCard({
  quote,
  initials,
  name,
  role,
  avatarGradient = 'linear-gradient(135deg,#4b3fff,#9b2fff)',
  featured = false,
}: TestimonialCardProps) {
  return (
    <div className={`tm-quote-card${featured ? ' tm-quote-card-featured' : ''}`}>
      <div className="tm-quote-mark" aria-hidden="true">&ldquo;</div>
      <p className="tm-quote-text">{quote}</p>
      <div className="tm-quote-author">
        <div className="tm-avatar tm-avatar-sm" style={{ background: avatarGradient }} aria-hidden="true">{initials}</div>
        <div>
          <div className="tm-author-name">{name}</div>
          <div className="tm-author-role">{role}</div>
        </div>
      </div>
    </div>
  );
}
