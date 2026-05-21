import './AnnouncementBanner.css';

export default function AnnouncementBanner({ generic = false }: { generic?: boolean }) {
  return (
    <>
      <div className="ann-banner" role="region" aria-label="Promotional offer">
        <div className="ann-inner">
          <span className="ann-tag">INTRODUCTORY OFFER</span>
          <p className="ann-text">
            Everything is <strong>40% OFF</strong> for first-time customers
            {!generic && ' on all prices listed below'}.
          </p>
          <span className="ann-note">Limited-time offer&nbsp;•&nbsp;First booking only</span>
        </div>
      </div>
      <div className="ann-spacer" aria-hidden="true" />
    </>
  );
}
