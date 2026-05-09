import './privacy-policy.css';
import HeroSection from '@/components/HeroSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Drishyam Media',
  description:
    'Learn how Drishyam Media collects, uses, discloses, retains, and protects your personal information when you use our services.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <HeroSection
        badge="Policy Information"
        heading={
          <>
            Privacy <span className="grad-text">Policy</span>
          </>
        }
        description="This Privacy Policy describes how Drishyam Media collects, uses, discloses, retains, and protects your information when you use our services."
        ariaLabel="Privacy Policy hero"
        categories={[
          { href: '#collection', label: 'Data Collection' },
          { href: '#cookies', label: 'Cookies & Tracking' },
          { href: '#california', label: 'California Rights' },
          { href: '#pp-contact', label: 'Contact' },
        ]}
      />

      <div className="pp-page">
        <div className="pp-container">

          {/* Meta / Disclaimer Card */}
          <div className="pp-meta-card">
            <div className="pp-meta-row">
              <span className="pp-meta-label">Effective Date</span>
              <span className="pp-meta-value">May 9, 2026</span>
            </div>
            <div className="pp-meta-divider" />
            <div className="pp-meta-row">
              <span className="pp-meta-label">Last Updated</span>
              <span className="pp-meta-value">May 9, 2026</span>
            </div>
            <p className="pp-disclaimer">
              Draft for legal review — not a substitute for licensed legal counsel. These Terms apply to all clients and website visitors regardless of geographic location.
            </p>
          </div>

          {/* ── Article 1 ── */}
          <section className="pp-section" id="introduction" aria-labelledby="art1-heading">
            <h2 id="art1-heading">
              <span className="pp-art-num">1.</span> Introduction and Scope
            </h2>
            <p>
              This Privacy Policy (&ldquo;Policy&rdquo;) describes how <strong>Drishyam Media</strong> (&ldquo;Drishyam Media,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), a creative media production and marketing based in Tampa, Florida, collects, uses, discloses, retains, and protects information when you (a) visit our website at [WEBSITE URL] (the &ldquo;Site&rdquo;), (b) submit a contact, booking, or quote-request form, (c) engage us for professional services, (d) subscribe to our email or SMS communications, or (e) interact with our content on third-party platforms (collectively, the &ldquo;Services&rdquo;).
            </p>
            <p>
              By accessing or using the Services, you acknowledge that you have read and understood this Policy. If you do not agree, do not use the Services. This Policy applies to all users worldwide, supplemented by jurisdiction-specific sections in Article 11 (California), Article 12 (Florida), and Article 13 (International).
            </p>
          </section>

          <div className="pp-rule" />

          {/* ── Article 2 ── */}
          <section className="pp-section" id="pp-contact" aria-labelledby="art2-heading">
            <h2 id="art2-heading">
              <span className="pp-art-num">2.</span> Who We Are and How to Contact Us
            </h2>
            <div className="pp-contact-grid">
              <div className="pp-contact-item">
                <span className="pp-contact-label">Controller</span>
                <span>Drishyam Media</span>
              </div>
              <div className="pp-contact-item">
                <span className="pp-contact-label">Mailing Address</span>
                <span>9946 Brompton Drive, Tampa, Florida</span>
              </div>
              <div className="pp-contact-item">
                <span className="pp-contact-label">Privacy Requests</span>
                <a href="mailto:privacy@drishyammedia.com" className="pp-link">privacy@drishyammedia.com</a>
              </div>
              <div className="pp-contact-item">
                <span className="pp-contact-label">General Email</span>
                <a href="mailto:contact@drishyammedia.com" className="pp-link">contact@drishyammedia.com</a>
              </div>
              <div className="pp-contact-item">
                <span className="pp-contact-label">Phone</span>
                <a href="tel:+18139657606" className="pp-link">+1 (813) 965-7606</a>
              </div>
            </div>
            <p>
              For all data-subject rights requests, complaints, or inquiries about this Policy, contact us at{' '}
              <a href="mailto:privacy@drishyammedia.com" className="pp-link">privacy@drishyammedia.com</a>{' '}
              with the subject line &ldquo;Privacy Request.&rdquo;
            </p>
          </section>

          <div className="pp-rule" />

          {/* ── Article 3 ── */}
          <section className="pp-section" id="collection" aria-labelledby="art3-heading">
            <h2 id="art3-heading">
              <span className="pp-art-num">3.</span> Information We Collect
            </h2>
            <p>We collect the following categories of information.</p>

            <div className="pp-sub-section">
              <h3>(a) Information you provide directly.</h3>
              <p>Name, business name, email address, phone number, mailing/billing address, project description, event date, location, social media handles, brand assets, creative briefs, scheduling preferences, signed agreements, and any other information you submit through forms, email, calls, or our booking flow.</p>
            </div>

            <div className="pp-sub-section">
              <h3>(b) Payment information.</h3>
              <p>When you pay an invoice or deposit, payment-card data is collected and processed directly by our payment processor (Stripe, Inc.) and is <strong>not stored on our servers</strong>. We receive only transaction confirmation, billing name, billing email, transaction amount, and the last four digits of the payment card.</p>
            </div>

            <div className="pp-sub-section">
              <h3>(c) Booking and scheduling information.</h3>
              <p>When you book a meeting through our scheduling tool (Calendly), we receive your name, email, time zone, IP address, calendar selections, and any custom-form responses.</p>
            </div>

            <div className="pp-sub-section">
              <h3>(d) Content and project materials.</h3>
              <p>Photos, videos, audio recordings, scripts, brand guidelines, talent releases, location permissions, and other materials you upload, send, or authorize us to capture during pre-production, production, or post-production.</p>
            </div>

            <div className="pp-sub-section">
              <h3>(e) Automatically collected information.</h3>
              <p>When you visit the Site, we and our analytics and advertising vendors automatically collect: IP address, device type, operating system, browser type and version, language, referring URL, pages viewed, links clicked, scroll depth, session duration, mouse movements, page interactions, device identifiers, and approximate location derived from IP address.</p>
            </div>

            <div className="pp-sub-section">
              <h3>(f) Communications.</h3>
              <p>Email correspondence, SMS messages, call records, voicemails, and chat transcripts you send to or exchange with us.</p>
            </div>

            <div className="pp-sub-section">
              <h3>(g) Marketing and engagement data.</h3>
              <p>Email open, click, and unsubscribe events; campaign-source identifiers; lead-source attribution; and engagement with our content on third-party platforms.</p>
            </div>

            <p>
              We do <strong>not</strong> intentionally collect Social Security numbers, driver&apos;s license numbers, government IDs, precise geolocation, biometric identifiers, health information, or financial-account credentials. Do not submit such information to us unless we expressly request it for a specific engagement.
            </p>
          </section>

          <div className="pp-rule" />

          {/* ── Article 4 ── */}
          <section className="pp-section" id="cookies" aria-labelledby="art4-heading">
            <h2 id="art4-heading">
              <span className="pp-art-num">4.</span> Cookies, Analytics, and Tracking Technologies
            </h2>
            <p>We and our service providers use cookies, pixels, software development kits, web beacons, and similar technologies. We use the following named tools:</p>

            <div className="pp-sub-section">
              <h3>(a) Google Analytics 4 (GA4).</h3>
              <p>
                Measures Site traffic, sessions, conversions, and user paths. GA4 collects pseudonymous identifiers, IP-derived approximate location, device data, and event data. Retention is set to 14 months. Opt out:{' '}
                <a href="https://tools.google.com/dlpage/gaoptout" className="pp-link" target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a>.
              </p>
            </div>

            <div className="pp-sub-section">
              <h3>(b) Meta Pixel (Facebook/Instagram).</h3>
              <p>
                Tracks conversions, builds custom audiences, and supports retargeting. Meta Pixel transmits page views, button clicks, and standard events to Meta. Manage Meta ad preferences:{' '}
                <a href="https://www.facebook.com/adpreferences" className="pp-link" target="_blank" rel="noopener noreferrer">facebook.com/adpreferences</a>.
              </p>
            </div>

            <div className="pp-sub-section">
              <h3>(c) LinkedIn Insight Tag.</h3>
              <p>
                Enables conversion tracking and audience-building for LinkedIn campaigns. LinkedIn opt-out:{' '}
                <a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" className="pp-link" target="_blank" rel="noopener noreferrer">linkedin.com/psettings/guest-controls/retargeting-opt-out</a>.
              </p>
            </div>

            <div className="pp-sub-section">
              <h3>(d) Microsoft Clarity.</h3>
              <p>Records aggregated session-replay data, including mouse movements, clicks, scroll behavior, and page interactions, to help us improve user experience. Microsoft Clarity may capture form-field interactions; we configure Clarity to mask sensitive fields. We do not use Clarity on pages that collect health, financial, or other sensitive personal information.</p>
            </div>

            <div className="pp-sub-section">
              <h3>(e) Strictly necessary cookies.</h3>
              <p>Used for site security, load-balancing, and form functionality. These cannot be disabled.</p>
            </div>

            <p>
              <strong>Consent management.</strong> Where required by applicable law (including for visitors from California, the European Economic Area, the United Kingdom, or other jurisdictions requiring opt-in cookie consent), non-essential trackers are gated behind a cookie-consent banner. We honor the <strong>Global Privacy Control (GPC)</strong> browser signal as a valid opt-out of &ldquo;sale&rdquo; and &ldquo;sharing&rdquo; of personal information for visitors who transmit it.
            </p>
            <p>
              <strong>Third-party tracker liability disclaimer.</strong> Each third-party analytics, advertising, and tracking vendor named above operates as an <strong>independent controller</strong> under its own privacy policy and terms. Drishyam Media&apos;s responsibility is limited to its configuration of these tools on the Site. We do not control, and are not responsible for, the downstream collection, retention, or use of data by these vendors once data is transmitted to them. We disclaim liability for any change in vendor behavior, vendor data breach, or vendor practice that is outside our reasonable configuration control.
            </p>
          </section>

          <div className="pp-rule" />

          {/* ── Article 5 ── */}
          <section className="pp-section" aria-labelledby="art5-heading">
            <h2 id="art5-heading">
              <span className="pp-art-num">5.</span> Sources of Information
            </h2>
            <p>
              We obtain information from (a) you directly, (b) automated collection on the Site, (c) third-party service providers (Stripe, Calendly, email service providers, CRM, project-management platforms), (d) public sources (e.g., your business website or public social-media profiles), and (e) referrals from existing clients.
            </p>
          </section>

          <div className="pp-rule" />

          {/* ── Article 6 ── */}
          <section className="pp-section" aria-labelledby="art6-heading">
            <h2 id="art6-heading">
              <span className="pp-art-num">6.</span> How We Use Information
            </h2>
            <p>We use information for the following purposes:</p>

            <div className="pp-sub-section">
              <h3>(a) Service delivery.</h3>
              <p>To respond to inquiries, prepare proposals, schedule and conduct shoots, deliver creative work, manage retainers, communicate about projects, issue invoices, and provide support.</p>
            </div>

            <div className="pp-sub-section">
              <h3>(b) Payments and accounting.</h3>
              <p>To process payments, collect outstanding balances, maintain financial records, and comply with tax and accounting obligations.</p>
            </div>

            <div className="pp-sub-section">
              <h3>(c) Site operation, analytics, and improvement.</h3>
              <p>To operate, secure, maintain, and improve the Site and our marketing channels; measure campaign performance; and understand visitor behavior in aggregate.</p>
            </div>

            <div className="pp-sub-section">
              <h3>(d) Marketing and business development.</h3>
              <p>To send newsletters, promotional content, case studies, and event invitations; to deliver and measure advertising; and to remarket to past Site visitors. You may opt out at any time (Article 8).</p>
            </div>

            <div className="pp-sub-section">
              <h3>(e) Portfolio, case studies, and showcase.</h3>
              <p>To display deliverables, behind-the-scenes content, and project case studies on our website, social media, awards submissions, and marketing materials, subject to the license granted in our Terms of Service.</p>
            </div>

            <div className="pp-sub-section">
              <h3>(f) Legal, compliance, and enforcement.</h3>
              <p>To comply with applicable laws (including FAA, tax, and consumer-protection laws); enforce our agreements; respond to lawful requests, subpoenas, and court orders; investigate and prevent fraud, abuse, and security incidents; and establish, exercise, or defend legal claims.</p>
            </div>

            <div className="pp-sub-section">
              <h3>(g) Business transfers.</h3>
              <p>To facilitate a merger, acquisition, financing, reorganization, or sale of all or substantially all of our assets, in which case information may be transferred to the successor entity.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 7 ── */}
          <section className="pp-section" aria-labelledby="art7-heading">
            <h2 id="art7-heading">
              <span className="pp-art-num">7.</span> How We Share Information
            </h2>
            <p>
              We share information only as described below. <strong>We do not sell personal information for monetary consideration.</strong> Certain disclosures to advertising and analytics partners may constitute &ldquo;sharing&rdquo; or &ldquo;sale&rdquo; under California law; see Article 11.
            </p>

            <div className="pp-sub-section">
              <h3>(a) Service providers and vendors.</h3>
              <p>Stripe (payments), Calendly (scheduling), Google (analytics, workspace), Meta (advertising), LinkedIn (advertising), Microsoft (analytics, productivity), our email-service provider, our CRM, our cloud-storage provider, our project-management platform, our accounting software, professional advisors (legal, tax, insurance), and contractors and freelance creatives engaged on a project (each bound by confidentiality).</p>
            </div>

            <div className="pp-sub-section">
              <h3>(b) Subcontractors and crew.</h3>
              <p>Photographers, videographers, drone pilots, editors, designers, audio engineers, and other creative professionals engaged for a project may receive information necessary to perform their work.</p>
            </div>

            <div className="pp-sub-section">
              <h3>(c) Clients and authorized recipients.</h3>
              <p>If you are an end-recipient of content (e.g., subject of a shoot), we may share relevant information with the client commissioning the work.</p>
            </div>

            <div className="pp-sub-section">
              <h3>(d) Business transfers.</h3>
              <p>As described in Article 6(g).</p>
            </div>

            <div className="pp-sub-section">
              <h3>(e) Legal disclosures.</h3>
              <p>When required by law, regulation, legal process, or governmental request, or to protect rights, property, or safety.</p>
            </div>

            <div className="pp-sub-section">
              <h3>(f) With your consent.</h3>
              <p>For any purpose disclosed at the time of collection.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 8 ── */}
          <section className="pp-section" aria-labelledby="art8-heading">
            <h2 id="art8-heading">
              <span className="pp-art-num">8.</span> Marketing Communications and Your Choices
            </h2>
            <p>
              You may opt out of marketing communications at any time by (a) clicking the &ldquo;unsubscribe&rdquo; link in any marketing email, (b) replying STOP to any marketing SMS, or (c) emailing{' '}
              <a href="mailto:privacy@drishyammedia.com" className="pp-link">privacy@drishyammedia.com</a>{' '}
              with the subject line &ldquo;Unsubscribe.&rdquo; We honor unsubscribe requests within ten (10) business days, consistent with the <strong>CAN-SPAM Act, 15 U.S.C. §§ 7701–7713</strong>. Transactional and service-related communications (project updates, invoices, contract notices) are not subject to opt-out while you have an active engagement.
            </p>
          </section>

          <div className="pp-rule" />

          {/* ── Article 9 ── */}
          <section className="pp-section" aria-labelledby="art9-heading">
            <h2 id="art9-heading">
              <span className="pp-art-num">9.</span> Data Retention
            </h2>
            <p>
              We retain information only as long as necessary for the purposes described in this Policy, to comply with legal obligations, to resolve disputes, and to enforce agreements. Specific defaults:
            </p>

            <div className="pp-table-wrapper">
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Default Retention</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Active client engagement records and final deliverables</td>
                    <td>Seven (7) years after engagement ends</td>
                  </tr>
                  <tr>
                    <td>Raw footage, RAW images, and project files</td>
                    <td>Ninety (90) days after final delivery, unless purchased separately</td>
                  </tr>
                  <tr>
                    <td>Contact-form and lead inquiries that do not become clients</td>
                    <td>Twenty-four (24) months from last contact</td>
                  </tr>
                  <tr>
                    <td>Email-marketing subscriber records</td>
                    <td>Until opt-out, plus twelve (12) months for suppression-list compliance</td>
                  </tr>
                  <tr>
                    <td>Analytics data (GA4)</td>
                    <td>Fourteen (14) months</td>
                  </tr>
                  <tr>
                    <td>Advertising-pixel and cookie data</td>
                    <td>Thirteen (13) months (vendor default)</td>
                  </tr>
                  <tr>
                    <td>Payment, invoice, and tax records</td>
                    <td>Seven (7) years</td>
                  </tr>
                  <tr>
                    <td>Backup archives</td>
                    <td>Up to twelve (12) months in encrypted backup, then purged</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              After the applicable retention period, we securely delete, anonymize, or destroy the information in a manner consistent with <strong>Florida Statutes § 501.171(8)</strong>.
            </p>
          </section>

          <div className="pp-rule" />

          {/* ── Article 10 ── */}
          <section className="pp-section" aria-labelledby="art10-heading">
            <h2 id="art10-heading">
              <span className="pp-art-num">10.</span> Security and Breach Notification
            </h2>
            <p>
              We maintain administrative, technical, and physical safeguards designed to protect personal information, including encryption in transit (TLS 1.2 or higher), access controls, principle-of-least-privilege user permissions, multi-factor authentication on key accounts, encrypted cloud storage, secure disposal practices, and contractual confidentiality obligations on subcontractors. <strong>No system is perfectly secure</strong>, and we cannot guarantee absolute security.
            </p>
            <p>
              In the event of a security incident affecting personal information, we will investigate, contain, and notify affected individuals and applicable authorities consistent with <strong>the Florida Information Protection Act (Fla. Stat. § 501.171)</strong>, which requires notification as expeditiously as practicable and <strong>no later than thirty (30) days</strong> after determination of a breach affecting Florida residents, and consistent with the <strong>CCPA/CPRA</strong> and other applicable laws for residents of other jurisdictions. Our service providers and processors are contractually required to notify us within ten (10) days of any incident affecting our data.
            </p>
            <p>
              If you suspect unauthorized access to your information, contact us immediately at{' '}
              <a href="mailto:privacy@drishyammedia.com" className="pp-link">privacy@drishyammedia.com</a>.
            </p>
          </section>

          <div className="pp-rule" />

          {/* ── Article 11 ── */}
          <section className="pp-section" id="california" aria-labelledby="art11-heading">
            <h2 id="art11-heading">
              <span className="pp-art-num">11.</span> Your California Privacy Rights (CCPA/CPRA)
            </h2>
            <p>
              This Article applies to natural persons who reside in California. Drishyam Media may not currently meet the thresholds for &ldquo;business&rdquo; status under the <strong>California Consumer Privacy Act, Cal. Civ. Code § 1798.100 et seq.</strong> (as amended by the CPRA), but we voluntarily extend the following rights to California residents as a matter of good practice.
            </p>

            <div className="pp-sub-section">
              <h3>(a) Categories of personal information collected.</h3>
              <p>Identifiers (name, email, phone, IP address, device IDs); commercial information (services purchased, transaction history); internet/network activity (browsing, clickstream, pixel data); geolocation (approximate, IP-derived); audio/visual (project content, when applicable); professional/employment information (when relevant); inferences (audience segments).</p>
            </div>

            <div className="pp-sub-section">
              <h3>(b) Sources, purposes, and recipients.</h3>
              <p>As described in Articles 5, 6, and 7.</p>
            </div>

            <div className="pp-sub-section">
              <h3>(c) Sensitive personal information.</h3>
              <p>We do not intentionally collect &ldquo;sensitive personal information&rdquo; as defined by Cal. Civ. Code § 1798.140(ae) and do not use any such information for purposes requiring a &ldquo;Limit the Use of My Sensitive Personal Information&rdquo; link.</p>
            </div>

            <div className="pp-sub-section">
              <h3>(d) Sale and sharing.</h3>
              <p>We do not &ldquo;sell&rdquo; personal information for monetary consideration. Our use of advertising cookies and pixels (Meta Pixel, LinkedIn Insight Tag) for cross-context behavioral advertising may constitute <strong>&ldquo;sharing&rdquo;</strong> under the CPRA. To opt out, click <strong>&ldquo;Do Not Sell or Share My Personal Information&rdquo;</strong> in our cookie banner or website footer, or transmit a Global Privacy Control signal from a supported browser.</p>
            </div>

            <div className="pp-sub-section" id="rights">
              <h3>(e) California rights.</h3>
              <p>California residents have the right to: (i) know and access categories and specific pieces of personal information collected; (ii) delete personal information, subject to legal exceptions; (iii) correct inaccurate personal information; (iv) opt out of sale and sharing; (v) limit use of sensitive personal information (if applicable); and (vi) be free from retaliation for exercising these rights.</p>
            </div>

            <div className="pp-sub-section">
              <h3>(f) How to exercise rights.</h3>
              <p>
                Submit a verifiable request to{' '}
                <a href="mailto:privacy@drishyammedia.com" className="pp-link">privacy@drishyammedia.com</a>{' '}
                with the subject line &ldquo;California Privacy Request.&rdquo; We will verify your identity and respond within forty-five (45) days, with a one-time forty-five-day extension if necessary. You may designate an authorized agent in writing.
              </p>
            </div>

            <div className="pp-sub-section">
              <h3>(g) Shine the Light.</h3>
              <p>
                California residents may request information about disclosures of personal information to third parties for direct-marketing purposes once per calendar year. Email{' '}
                <a href="mailto:privacy@drishyammedia.com" className="pp-link">privacy@drishyammedia.com</a>.
              </p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 12 ── */}
          <section className="pp-section" aria-labelledby="art12-heading">
            <h2 id="art12-heading">
              <span className="pp-art-num">12.</span> Florida Residents — Courtesy Disclosures
            </h2>
            <p>
              The <strong>Florida Digital Bill of Rights, Fla. Stat. §§ 501.701–501.721</strong>, applies to controllers exceeding certain revenue and operational thresholds (including a $1 billion global gross annual revenue threshold). Drishyam Media does not meet those thresholds and is <strong>not</strong> a &ldquo;controller&rdquo; subject to the FDBR. Nevertheless, as a courtesy, Florida residents may request access, correction, or deletion of personal information by contacting{' '}
              <a href="mailto:privacy@drishyammedia.com" className="pp-link">privacy@drishyammedia.com</a>. We comply with <strong>Fla. Stat. § 501.171</strong> breach-notification obligations as described in Article 10. We comply with <strong>the Florida Telephone Solicitation Act</strong> for any SMS or telephone marketing campaigns.
            </p>
          </section>

          <div className="pp-rule" />

          {/* ── Article 13 ── */}
          <section className="pp-section" aria-labelledby="art13-heading">
            <h2 id="art13-heading">
              <span className="pp-art-num">13.</span> International Users (EU, UK, and Other Jurisdictions)
            </h2>
            <p>
              Our Services are operated from the United States. If you access the Services from outside the United States, your information will be transferred to, stored in, and processed in the United States, which may not provide the same level of protection as your home jurisdiction. By using the Services, you consent to such transfer.
            </p>
            <p>
              For visitors from the European Economic Area or United Kingdom, our lawful bases under <strong>Regulation (EU) 2016/679</strong> and the <strong>UK GDPR</strong> are: (a) performance of a contract for clients; (b) legitimate interests for marketing, analytics, and security; (c) consent for non-essential cookies and electronic marketing; and (d) compliance with legal obligations. EU/UK data subjects have rights of access, rectification, erasure, restriction, portability, objection, and to lodge a complaint with a supervisory authority. Cross-border transfers rely on Standard Contractual Clauses and the UK International Data Transfer Addendum where applicable. Clients with GDPR-scoped engagements should request our <strong>Data Processing Addendum</strong> before commencement.
            </p>
          </section>

          <div className="pp-rule" />

          {/* ── Article 14 ── */}
          <section className="pp-section" aria-labelledby="art14-heading">
            <h2 id="art14-heading">
              <span className="pp-art-num">14.</span> Children&apos;s Privacy
            </h2>
            <p>
              The Services are intended for businesses, professionals, and adults aged eighteen (18) and over. We do not direct the Services to children under thirteen (13) and do not knowingly collect personal information from children under thirteen, consistent with the <strong>Children&apos;s Online Privacy Protection Act, 15 U.S.C. §§ 6501–6506</strong> and <strong>16 C.F.R. Part 312</strong>. If we learn we have collected personal information from a child under thirteen without verifiable parental consent, we will promptly delete it. Parents and guardians may contact{' '}
              <a href="mailto:privacy@drishyammedia.com" className="pp-link">privacy@drishyammedia.com</a>{' '}
              for deletion requests.
            </p>
            <p>
              When children are subjects of commissioned content (e.g., a family event, school performance, or commercial shoot), the commissioning client is responsible for obtaining all necessary parental consents and releases, and warrants the same in our Terms of Service.
            </p>
          </section>

          <div className="pp-rule" />

          {/* ── Article 15 ── */}
          <section className="pp-section" aria-labelledby="art15-heading">
            <h2 id="art15-heading">
              <span className="pp-art-num">15.</span> Third-Party Links and Platforms
            </h2>
            <p>
              The Services contain links to, embeds from, and integrations with third-party websites, social-media platforms, and tools, including but not limited to Instagram, Facebook, YouTube, TikTok, LinkedIn, Vimeo, Google, Stripe, and Calendly. We do not control and are not responsible for the content, privacy practices, security, or availability of any third-party site, embed, or platform. Your use of third-party services is at your own risk and is governed by their own terms and privacy policies. Inclusion of a link or embed does not imply endorsement.
            </p>
          </section>

          <div className="pp-rule" />

          {/* ── Article 16 ── */}
          <section className="pp-section" aria-labelledby="art16-heading">
            <h2 id="art16-heading">
              <span className="pp-art-num">16.</span> DMCA — Copyright Complaints
            </h2>
            <p>
              We respect intellectual property rights and respond to valid notices under the <strong>Digital Millennium Copyright Act, 17 U.S.C. § 512</strong>. To report infringement on the Site or in content we host, send a written notice to our designated agent containing all elements required by 17 U.S.C. § 512(c)(3): (a) physical or electronic signature; (b) identification of the copyrighted work; (c) identification of the allegedly infringing material with sufficient detail to locate it (including URL); (d) your contact information; (e) a statement of good-faith belief; and (f) a statement, under penalty of perjury, that the information is accurate and you are authorized to act.
            </p>

            <div className="pp-address-card">
              <p className="pp-address-label">DMCA Designated Agent</p>
              <p>9946 Brompton Drive, Tampa, Florida</p>
              <p>Email: <a href="mailto:privacy@drishyammedia.com" className="pp-link">privacy@drishyammedia.com</a></p>
              <p>Subject Line: &ldquo;DMCA Notice&rdquo;</p>
            </div>

            <p>
              We will respond expeditiously and may remove or disable access to the material. A counter-notice procedure consistent with 17 U.S.C. § 512(g) is available. We maintain a policy of terminating, in appropriate circumstances, the access of repeat infringers.
            </p>
          </section>

          <div className="pp-rule" />

          {/* ── Article 17 ── */}
          <section className="pp-section" aria-labelledby="art17-heading">
            <h2 id="art17-heading">
              <span className="pp-art-num">17.</span> Do Not Track Signals
            </h2>
            <p>
              Because there is no industry consensus on the meaning of &ldquo;Do Not Track&rdquo; browser signals, the Site does not respond to DNT signals. We do honor the <strong>Global Privacy Control</strong> signal as described in Article 4.
            </p>
          </section>

          <div className="pp-rule" />

          {/* ── Article 18 ── */}
          <section className="pp-section" aria-labelledby="art18-heading">
            <h2 id="art18-heading">
              <span className="pp-art-num">18.</span> Changes to This Policy
            </h2>
            <p>
              We may update this Policy from time to time to reflect changes in our practices, technology, or legal requirements. Material changes will be communicated by updating the &ldquo;Effective Date&rdquo; above and, where appropriate, providing a banner on the Site or sending email notice to active clients. Continued use of the Services after the effective date constitutes acceptance of the updated Policy.
            </p>
          </section>

          <div className="pp-rule" />

          {/* ── Article 19 ── */}
          <section className="pp-section" aria-labelledby="art19-heading">
            <h2 id="art19-heading">
              <span className="pp-art-num">19.</span> Contact
            </h2>
            <p>For all privacy questions, requests, and complaints, contact us at:</p>
            <div className="pp-address-card">
              <p className="pp-address-label">Drishyam Media</p>
              <p>9946 Brompton Drive, Tampa, Florida</p>
              <p>Email: <a href="mailto:contact@drishyammedia.com" className="pp-link">contact@drishyammedia.com</a></p>
              <p>Phone: <a href="tel:+18139657606" className="pp-link">+1 (813) 965-7606</a></p>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
