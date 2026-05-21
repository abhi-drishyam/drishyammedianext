import './AnnouncementBanner.css';

export default function AnnouncementBanner() {
  return (
    <>
      {/* Fixed banner — always visible below the navbar */}
      <div className="ann-banner" role="region" aria-label="Promotional offer">
        <div className="ann-inner">
          <span className="ann-tag">INTRODUCTORY OFFER</span>
          <p className="ann-text">
            Everything is <strong>40% OFF</strong> for first-time customers on all prices listed below.
          </p>
          <span className="ann-note">Limited-time offer&nbsp;•&nbsp;First booking only</span>
        </div>
      </div>
      {/* Spacer so content below isn't hidden behind the fixed banner */}
      <div className="ann-spacer" aria-hidden="true" />
    </>
  );
}
