import Link from 'next/link';

export const metadata = {
  title: '404 — Page Not Found | Drishyam Media',
};

export default function NotFound() {
  return (
    <div className="nf-wrapper">
      {/* Background layers */}
      <div className="nf-bg" aria-hidden="true" />
      <div className="bg-grain" aria-hidden="true" />
      <div className="nf-glow-l" aria-hidden="true" />
      <div className="nf-glow-r" aria-hidden="true" />

      <div className="nf-content">
        <div className="nf-code-badge">404</div>
        <h1 className="nf-title">
          Page Not <span className="grad-text">Found</span>
        </h1>
        <p className="nf-sub">
          Looks like this page went off-script. Let&apos;s get you back to something real.
        </p>
        <div className="nf-actions">
          <Link href="/" className="nf-btn-primary">Back to Home</Link>
          <Link href="/contact" className="nf-btn-ghost">Contact Us</Link>
        </div>
      </div>

      <style>{`
        .nf-wrapper {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #060510;
        }

        .nf-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 40%, rgba(75,63,255,0.12) 0%, transparent 70%),
                      radial-gradient(ellipse 50% 40% at 20% 80%, rgba(212,0,122,0.08) 0%, transparent 60%);
        }

        .nf-glow-l {
          position: absolute;
          left: -200px;
          top: 30%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(75,63,255,0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .nf-glow-r {
          position: absolute;
          right: -200px;
          bottom: 20%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(212,0,122,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .nf-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 24px;
          max-width: 600px;
        }

        .nf-code-badge {
          display: inline-block;
          font-family: var(--font-manrope), 'Manrope', sans-serif;
          font-size: clamp(96px, 18vw, 160px);
          font-weight: 800;
          line-height: 1;
          background: linear-gradient(90deg, #4b3fff 0%, #9b2fff 30%, #d4007a 60%, #ff3c2f 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -4px;
          margin-bottom: 8px;
          opacity: 0.9;
        }

        .nf-title {
          font-family: var(--font-manrope), 'Manrope', sans-serif;
          font-size: clamp(28px, 5vw, 44px);
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }

        .nf-sub {
          font-family: var(--font-manrope), 'Manrope', sans-serif;
          font-size: clamp(15px, 2vw, 17px);
          color: rgba(255,255,255,0.55);
          line-height: 1.65;
          margin-bottom: 40px;
          max-width: 420px;
          margin-left: auto;
          margin-right: auto;
        }

        .nf-actions {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .nf-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          border-radius: 100px;
          background: linear-gradient(90deg, #4b3fff 0%, #9b2fff 40%, #d4007a 70%, #ff3c2f 100%);
          color: #ffffff;
          font-family: var(--font-manrope), 'Manrope', sans-serif;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.2s;
        }

        .nf-btn-primary:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }

        .nf-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.80);
          font-family: var(--font-manrope), 'Manrope', sans-serif;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }

        .nf-btn-ghost:hover {
          background: rgba(255,255,255,0.10);
          border-color: rgba(255,255,255,0.28);
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
}
