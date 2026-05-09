import '../privacy-policy/privacy-policy.css';
import './terms-of-service.css';
import HeroSection from '@/components/HeroSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Drishyam Media',
  description:
    'Read the Drishyam Media Terms and Conditions governing all creative media production and marketing engagements.',
  alternates: { canonical: '/terms-of-service' },
};

export default function TermsOfServicePage() {
  return (
    <>
      <HeroSection
        badge="Service Terms"
        heading={
          <>
            Terms of <span className="grad-text">Service</span>
          </>
        }
        description="These Terms and Conditions constitute a legally binding agreement governing all engagements with Drishyam Media. Please read carefully before engaging our services."
        ariaLabel="Terms of Service hero"
        categories={[
          { href: '#services', label: 'Services & Scope' },
          { href: '#payment', label: 'Payment Terms' },
          { href: '#ip', label: 'Intellectual Property' },
          { href: '#disputes', label: 'Dispute Resolution' },
        ]}
      />

      <div className="pp-page">
        <div className="pp-container">

          {/* Important Notice */}
          <div className="pp-notice-card">
            <p className="pp-notice-heading">Important Notice — Please Read Carefully</p>
            <p>
              These Terms contain a binding arbitration agreement, a class-action waiver, a limitation of liability, a non-refundable deposit policy, a no-chargeback covenant, and a Florida choice of law and venue provision. By accepting these Terms, you agree to be bound by all of them.
            </p>
          </div>

          {/* Meta Card */}
          <div className="pp-meta-card">
            <div className="pp-meta-row">
              <span className="pp-meta-label">Effective Date</span>
              <span className="pp-meta-value">May 9, 2026</span>
            </div>
            <p className="pp-disclaimer">
              Draft for legal review — not a substitute for licensed legal counsel. These Terms apply to all clients and engagements regardless of geographic location.
            </p>
          </div>

          {/* ── Article 1 ── */}
          <section className="pp-section" aria-labelledby="art1-heading">
            <h2 id="art1-heading"><span className="pp-art-num">1.</span> Acceptance of Terms</h2>

            <div className="pp-sub-section">
              <h3>1.1</h3>
              <p>These Terms and Conditions (&ldquo;Terms,&rdquo; &ldquo;Agreement&rdquo;) constitute a legally binding agreement between <strong>Drishyam Media</strong> (&ldquo;Drishyam Media,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) and the individual or entity engaging our services (&ldquo;Client,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;).</p>
            </div>

            <div className="pp-sub-section">
              <h3>1.2</h3>
              <p>You accept these Terms by any of the following: (a) clicking &ldquo;I Agree&rdquo; or a similar button; (b) signing a proposal, statement of work, or invoice that incorporates these Terms by reference; (c) paying a deposit, retainer, or invoice; (d) submitting a booking-form acknowledgment; or (e) commencing any work with us. The parties consent to electronic execution under the <strong>Florida Uniform Electronic Transaction Act, Fla. Stat. § 668.50</strong>, and the federal <strong>E-SIGN Act, 15 U.S.C. § 7001 et seq.</strong></p>
            </div>

            <div className="pp-sub-section">
              <h3>1.3</h3>
              <p>If you accept these Terms on behalf of an entity, you represent and warrant you have authority to bind that entity. The individual signing remains personally liable for all obligations until the entity is duly registered and has accepted in writing.</p>
            </div>

            <div className="pp-sub-section">
              <h3>1.4</h3>
              <p>If you do not agree to these Terms in their entirety, do not engage our Services.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 2 ── */}
          <section className="pp-section" id="services" aria-labelledby="art2-heading">
            <h2 id="art2-heading"><span className="pp-art-num">2.</span> Services and Scope</h2>

            <div className="pp-sub-section">
              <h3>2.1 Services offered.</h3>
              <p>Drishyam Media provides creative media production and marketing services, which may include: videography; photography; video editing; social media marketing and management; reels and short-form content; advertising creative and ad management; branding and brand identity; event coverage; concert and live-event coverage; podcast production; business and commercial shoots; real estate content; aerial content services (subject to availability and legal restrictions); and related digital creative services (collectively, &ldquo;Services&rdquo;).</p>
            </div>

            <div className="pp-sub-section">
              <h3>2.2 Specific scope per engagement.</h3>
              <p>The specific Services for each engagement are defined in a written proposal, statement of work, quote, booking confirmation, or invoice (&ldquo;Project Document&rdquo;). The Project Document, together with these Terms, forms the entire agreement for that engagement. In the event of conflict, the Project Document controls for project-specific terms; these Terms control for all general terms.</p>
            </div>

            <div className="pp-sub-section">
              <h3>2.3 No obligation to accept.</h3>
              <p>We reserve the right to decline any project, request, or client at our sole discretion, including for reasons of conflict of interest, capacity, content concerns, legal risk, or non-payment history.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 3 ── */}
          <section className="pp-section" aria-labelledby="art3-heading">
            <h2 id="art3-heading"><span className="pp-art-num">3.</span> Quotes, Proposals, and Project Scope</h2>

            <div className="pp-sub-section">
              <h3>3.1 Quote validity.</h3>
              <p>Quotes and proposals are valid for thirty (30) days from issuance unless otherwise stated. Pricing, availability, and scope may change after expiration.</p>
            </div>

            <div className="pp-sub-section">
              <h3>3.2 Booking confirmation.</h3>
              <p>A project is <strong>booked and confirmed only upon</strong> (a) execution of the Project Document by both parties (electronic acceptance is sufficient) <strong>and</strong> (b) receipt of the required non-refundable deposit. Until both conditions are met, no date is reserved and no Services are guaranteed.</p>
            </div>

            <div className="pp-sub-section">
              <h3>3.3 Scope is what is written.</h3>
              <p>The scope of work is <strong>exactly and only</strong> what is described in the Project Document. Anything not expressly listed is out of scope, including specific shot lists not previously approved, additional locations, additional editing rounds, additional deliverable formats, additional crew, or additional days.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 4 ── */}
          <section className="pp-section" aria-labelledby="art4-heading">
            <h2 id="art4-heading"><span className="pp-art-num">4.</span> Scope Creep and Additional Work</h2>

            <div className="pp-sub-section">
              <h3>4.1 Change orders required.</h3>
              <p>Any addition, modification, expansion, or substitution of the agreed scope (a &ldquo;Change Order&rdquo;) requires a written change order signed (electronically or otherwise) by both parties <strong>before</strong> the additional work commences. &ldquo;Written&rdquo; includes email confirmation.</p>
            </div>

            <div className="pp-sub-section">
              <h3>4.2 Additional fees.</h3>
              <p>Change Orders are billed at our then-current rates and are subject to our then-current availability. Change Orders may extend the delivery timeline.</p>
            </div>

            <div className="pp-sub-section">
              <h3>4.3 Verbal requests.</h3>
              <p>Verbal or informal requests for out-of-scope work are not binding on Drishyam Media and will not be performed without a written Change Order. We are not obligated to perform any work outside the original scope, and refusal to perform out-of-scope work without a Change Order is not a breach of this Agreement.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 5 ── */}
          <section className="pp-section" aria-labelledby="art5-heading">
            <h2 id="art5-heading"><span className="pp-art-num">5.</span> Client Responsibilities and Cooperation</h2>

            <div className="pp-sub-section">
              <h3>5.1</h3>
              <p>Client agrees to provide, in a timely manner: (a) all required brand assets, logos, brand guidelines, talent, location access, permits, and reference materials; (b) timely feedback, approvals, and revision notes within deadlines stated in the Project Document or, if none, within five (5) business days; (c) a single primary point of contact authorized to approve work and provide direction; (d) a safe, lawful, and appropriate environment for any on-location work; and (e) timely payment under Article 7.</p>
            </div>

            <div className="pp-sub-section">
              <h3>5.2 Approvals.</h3>
              <p>Approval of pre-production deliverables (shot lists, scripts, storyboards, schedules) is required before production. Once approved, changes to those approved items are out-of-scope and require a Change Order.</p>
            </div>

            <div className="pp-sub-section">
              <h3>5.3 Consents and releases.</h3>
              <p>Client is solely responsible for obtaining, in writing and in advance, all necessary consents, model releases, talent releases, location releases, and event-attendee notices for any persons, properties, brands, or trademarks appearing in the content. Client warrants that all such consents are valid, current, and sufficient for the agreed uses, and indemnifies Drishyam Media for any claim arising from a missing, defective, or revoked consent.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 6 ── */}
          <section className="pp-section" aria-labelledby="art6-heading">
            <h2 id="art6-heading"><span className="pp-art-num">6.</span> Scheduling, Rescheduling, and Client-Caused Delays</h2>

            <div className="pp-sub-section">
              <h3>6.1 Reserved dates.</h3>
              <p>Booked dates are reserved exclusively for Client; we decline competing engagements for those dates in reliance on the booking.</p>
            </div>

            <div className="pp-sub-section">
              <h3>6.2 Client delay defined.</h3>
              <p>&ldquo;Client Delay&rdquo; means any delay caused by Client&apos;s failure to (a) provide required materials, approvals, access, or feedback within stated deadlines; (b) appear at scheduled shoots or meetings; (c) make required payments; (d) secure required permits, releases, or consents; or (e) otherwise cooperate as required.</p>
            </div>

            <div className="pp-sub-section">
              <h3>6.3 Effect of Client Delay.</h3>
              <p>Client Delay extends every affected deadline on a day-for-day basis (or longer, based on our calendar availability), does not entitle Client to any refund or fee reduction, and does not constitute breach by Drishyam Media. We may invoice for additional time, rescheduling fees, and standby fees caused by Client Delay.</p>
            </div>

            <div className="pp-sub-section">
              <h3>6.4 Rescheduling.</h3>
              <p>Rescheduling is governed by the Refund and Cancellation Policy.</p>
            </div>

            <div className="pp-sub-section">
              <h3>6.5 Weather and unsafe conditions.</h3>
              <p>Outdoor shoots, travel shoots, and certain productions are dependent on safe weather and environmental conditions. Drishyam Media may reschedule, delay, modify, or suspend any shoot where weather, lighting, environmental hazards, venue restrictions, illness, safety concerns, or other conditions could negatively affect safety, equipment, crew, or production quality. Such rescheduling does not constitute breach of this Agreement and does not automatically entitle Client to a refund.</p>
            </div>

            <div className="pp-sub-section">
              <h3>6.6 No-shows.</h3>
              <p>If Client fails to appear at a confirmed shoot or session without at least seventy-two (72) hours&apos; written notice, Client forfeits the deposit applicable to that session and is liable for the full session fee. Crew, equipment, and travel costs incurred are non-refundable.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 7 ── */}
          <section className="pp-section" id="payment" aria-labelledby="art7-heading">
            <h2 id="art7-heading"><span className="pp-art-num">7.</span> Fees, Payment Terms, and Deposits</h2>

            <div className="pp-sub-section">
              <h3>7.1 Fees.</h3>
              <p>Fees are as stated in the Project Document. All fees are exclusive of applicable taxes, third-party costs, travel, parking, lodging, permits, royalty-free media licensing, and equipment rental, which are passed through at cost or with a reasonable handling fee as disclosed.</p>
            </div>

            <div className="pp-sub-section">
              <h3>7.2 Non-refundable deposit.</h3>
              <p>A non-refundable deposit (typically 50% of the project total, or as specified in the Project Document) is due upon booking. <strong>THE DEPOSIT IS EARNED UPON RECEIPT</strong> and compensates Drishyam Media for (a) reserving the calendar date(s); (b) declining competing engagements; (c) pre-production planning, research, and creative development; and (d) administrative setup. <strong>The deposit is non-refundable except where required by law or where Drishyam Media is unable to perform the Services without lawful justification.</strong>, including but not limited to client cancellation, change of mind, change of plans, or subjective dissatisfaction. The parties acknowledge actual damages from cancellation would be difficult to ascertain, the deposit is a reasonable estimate of such damages, and the deposit is <strong>not a penalty</strong> but a bargained-for liquidated-damages allocation under <strong>Lefemine v. Baron, 573 So. 2d 326 (Fla. 1991)</strong>.</p>
            </div>

            <div className="pp-sub-section">
              <h3>7.3 Balance and milestones.</h3>
              <p>Remaining balances are due as stated in the Project Document. Unless otherwise specified, the balance is due <strong>before final delivery</strong>. Final files are not released until payment is received in full and cleared.</p>
            </div>

            <div className="pp-sub-section">
              <h3>7.4 Retainers.</h3>
              <p>Monthly social-media, content, or marketing retainers are billed in advance on the same calendar day each month. Retainer fees are non-refundable for the month in which they are billed. Retainer hours and deliverables do not roll over absent written agreement.</p>
            </div>

            <div className="pp-sub-section">
              <h3>7.5 Late payment.</h3>
              <p>Past-due balances accrue interest at <strong>one and one-half percent (1.5%) per month (eighteen percent (18%) per annum)</strong>, or the maximum rate permitted by Florida law, whichever is lower, consistent with <strong>Fla. Stat. §§ 687.02, 687.03</strong>. A late charge of five percent (5%) of the past-due amount is assessed after a ten (10) day grace period. Client agrees to pay all collection costs, court costs, and reasonable attorneys&apos; fees incurred to collect past-due balances.</p>
            </div>

            <div className="pp-sub-section">
              <h3>7.6 Suspension and termination for non-payment.</h3>
              <p>We may suspend or terminate Services, withhold deliverables, and revoke any license to use prior deliverables if any invoice is more than ten (10) days past due. Re-engagement after suspension is subject to a reinstatement fee and revised scheduling.</p>
            </div>

            <div className="pp-sub-section">
              <h3>7.7 Taxes.</h3>
              <p>Client is responsible for all sales, use, and similar taxes (excluding taxes based on our net income).</p>
            </div>

            <div className="pp-sub-section">
              <h3>7.8 Currency and methods.</h3>
              <p>All amounts are in U.S. Dollars. We accept payment by credit card, ACH, wire, or other methods we designate. Card-payment data is processed by Stripe; we do not store full card numbers.</p>
            </div>

            <div className="pp-sub-section">
              <h3>7.9 Refunds.</h3>
              <p>Refunds are governed by the Refund and Cancellation Policy, incorporated by reference.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 8 ── */}
          <section className="pp-section" aria-labelledby="art8-heading">
            <h2 id="art8-heading"><span className="pp-art-num">8.</span> Rush Fees</h2>

            <div className="pp-sub-section">
              <h3>8.1 Standard turnaround.</h3>
              <p>Standard delivery timelines are stated in the Project Document; if not stated, our standard turnaround applies (typically two (2) to four (4) weeks for video, one (1) to two (2) weeks for photography, and as agreed for retainer deliverables).</p>
            </div>

            <div className="pp-sub-section">
              <h3>8.2 Rush surcharge.</h3>
              <p>Any request for delivery faster than standard turnaround is a &ldquo;Rush&rdquo; request and is billed at a surcharge of <strong>thirty percent (30%) to fifty percent (50%)</strong> of the affected project fee, depending on urgency and impact on our schedule. Rush is offered at our sole discretion and capacity.</p>
            </div>

            <div className="pp-sub-section">
              <h3>8.3 Same-day or under-72-hour delivery</h3>
              <p>is available only when expressly accepted in writing and is subject to a higher Rush surcharge. Quality of Rush deliverables is held to the same professional standard, but minor refinements ordinarily addressed in revision rounds may be deferred or omitted by mutual agreement.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 9 ── */}
          <section className="pp-section" aria-labelledby="art9-heading">
            <h2 id="art9-heading"><span className="pp-art-num">9.</span> Revisions and Creative Direction</h2>

            <div className="pp-sub-section">
              <h3>9.1 Included revisions.</h3>
              <p>Each Project Document specifies the number of included revision rounds (typically two (2) rounds for video and one (1) round for photography selections). A &ldquo;round&rdquo; means a single, consolidated set of revision notes from Client&apos;s authorized point of contact.</p>
            </div>

            <div className="pp-sub-section">
              <h3>9.2 Additional revisions.</h3>
              <p>Revisions beyond the included rounds, or revisions submitted after Client has approved the deliverable, are billed at our then-current hourly rate (minimum one (1) hour), require a Change Order, and may extend the timeline.</p>
            </div>

            <div className="pp-sub-section">
              <h3>9.3 Creative direction reserved.</h3>
              <p>Drishyam Media exercises professional creative judgment in all aspects of production and post-production, including selection, color, sound, pacing, music, transitions, framing, lighting, and editorial sequencing. Client may direct subject matter and brand requirements; <strong>creative execution remains within our discretion</strong>.</p>
            </div>

            <div className="pp-sub-section">
              <h3>9.4 Subjective dissatisfaction is not a basis for refund or claim.</h3>
              <p className="pp-legal-caps">CLIENT EXPRESSLY ACKNOWLEDGES THAT CREATIVE WORK IS SUBJECTIVE AND THAT CLIENT&apos;S SUBJECTIVE DISSATISFACTION WITH STYLE, AESTHETIC, MOOD, COLOR, EDIT CHOICES, MUSIC, PACING, OR OTHER ARTISTIC ELEMENTS — INCLUDING TASTE-BASED DISAGREEMENTS — IS NOT GROUNDS FOR A REFUND, FEE REDUCTION, CHARGEBACK, BREACH CLAIM, OR ANY OTHER REMEDY.</p>
              <p>Our obligation is to deliver work meeting professional industry standards consistent with the agreed scope, not to deliver work matching a subjective ideal not specified in writing.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 10 ── */}
          <section className="pp-section" aria-labelledby="art10-heading">
            <h2 id="art10-heading"><span className="pp-art-num">10.</span> Delivery Timelines</h2>

            <div className="pp-sub-section">
              <h3>10.1 Estimates.</h3>
              <p>Delivery dates stated in any Project Document are good-faith estimates, not guarantees, except where expressly designated &ldquo;GUARANTEED&rdquo; in writing.</p>
            </div>

            <div className="pp-sub-section">
              <h3>10.2 Causes of permitted delay.</h3>
              <p>Delivery dates are extended day-for-day for: Client Delay (Article 6); Force Majeure (Article 21); Change Orders; equipment failure (Article 20); and any cause outside our reasonable control.</p>
            </div>

            <div className="pp-sub-section">
              <h3>10.3 Delivery method.</h3>
              <p>Final deliverables are delivered electronically via cloud link (e.g., Google Drive, Dropbox, Frame.io, WeTransfer). Links remain active for thirty (30) days after delivery; Client is responsible for downloading and archiving files. We are not obligated to retain files beyond ninety (90) days after delivery; archive retrieval after ninety (90) days incurs a retrieval fee.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 11 ── */}
          <section className="pp-section" id="ip" aria-labelledby="art11-heading">
            <h2 id="art11-heading"><span className="pp-art-num">11.</span> Intellectual Property and Copyright</h2>

            <div className="pp-sub-section">
              <h3>11.1 Pre-existing IP.</h3>
              <p>Each party retains ownership of all intellectual property it owned before the engagement. Drishyam Media retains ownership of all proprietary tools, templates, processes, methodologies, presets, LUTs, plug-ins, code, and know-how used in delivering the Services.</p>
            </div>

            <div className="pp-sub-section">
              <h3>11.2 Ownership of deliverables until paid in full.</h3>
              <p className="pp-legal-caps">ALL CREATIVE WORK PRODUCED BY DRISHYAM MEDIA, INCLUDING DRAFTS, EDITS, RAW FOOTAGE, RAW IMAGES, AND FINAL DELIVERABLES, REMAINS THE EXCLUSIVE INTELLECTUAL PROPERTY OF DRISHYAM MEDIA UNTIL CLIENT HAS PAID ALL AMOUNTS DUE IN FULL.</p>
              <p>Until full payment, Client has no right to use, reproduce, distribute, display, modify, or publish any deliverable. Any such use prior to full payment is unauthorized and constitutes copyright infringement.</p>
            </div>

            <div className="pp-sub-section">
              <h3>11.3 Work-for-hire and back-up assignment.</h3>
              <p>Upon receipt of full payment, to the maximum extent permitted by law, audiovisual deliverables created hereunder are deemed &ldquo;works made for hire&rdquo; under <strong>17 U.S.C. § 101</strong>. To the extent any deliverable does not qualify as a work made for hire, Drishyam Media hereby assigns to Client, effective only upon receipt of full payment, all right, title, and interest in the <strong>final delivered version</strong> of those deliverables, including copyright, subject to the licenses retained in Articles 11.4 and 13.</p>
            </div>

            <div className="pp-sub-section">
              <h3>11.4 Excluded from transfer.</h3>
              <p>Notwithstanding Article 11.3, the following are <strong>excluded</strong> from any transfer or assignment to Client and remain the exclusive property of Drishyam Media: (a) raw and unused footage, photographs, audio, and outtakes; (b) project files (Premiere, After Effects, DaVinci Resolve, Photoshop, Lightroom, Logic, Pro Tools, etc.); (c) presets, LUTs, templates, and proprietary tools; (d) pre-existing or third-party assets used under license; and (e) behind-the-scenes content. Raw files and project files are available for separate purchase at our then-current rates. RAW footage, RAW images, and editable project files are not included in standard deliverables unless expressly stated in the Project Document.</p>
            </div>

            <div className="pp-sub-section">
              <h3>11.5 Third-party assets.</h3>
              <p>Stock footage, stock music, fonts, plug-ins, and similar third-party assets used in deliverables are licensed to Client only to the extent permitted by the applicable third-party license, which Client agrees to comply with.</p>
            </div>

            <div className="pp-sub-section">
              <h3>11.6 Moral rights.</h3>
              <p>To the extent permitted by law, Client and Drishyam Media each waive any &ldquo;moral rights&rdquo; claims that would conflict with the rights granted in this Agreement, but Drishyam Media reserves the right to be credited where industry practice or applicable law requires.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 12 ── */}
          <section className="pp-section" aria-labelledby="art12-heading">
            <h2 id="art12-heading"><span className="pp-art-num">12.</span> License Granted to Client</h2>

            <div className="pp-sub-section">
              <h3>12.1 Scope of license.</h3>
              <p>Conditioned on full payment, Client receives the rights to the <strong>final delivered version</strong> of the deliverables as described in Article 11.3, for use as defined in the Project Document. Unless the Project Document specifies broader rights, the license is for Client&apos;s use in its own marketing, business, and personal/internal purposes.</p>
            </div>

            <div className="pp-sub-section">
              <h3>12.2 Restrictions.</h3>
              <p>Client may not (a) resell, license, or sublicense the deliverables to third parties as standalone creative assets; (b) submit the deliverables to stock-content marketplaces; (c) use the deliverables in a manner that is unlawful, defamatory, or that violates third-party rights; (d) materially alter the deliverables in a way that misrepresents Drishyam Media&apos;s work; or (e) remove credits or watermarks intended to remain.</p>
            </div>

            <div className="pp-sub-section">
              <h3>12.3 Credit.</h3>
              <p>Where reasonable and consistent with industry practice, Client agrees to credit Drishyam Media in social-media captions, project end-cards, and similar contexts. Failure to credit is not a refund event but is a material consideration in pricing.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 13 ── */}
          <section className="pp-section" aria-labelledby="art13-heading">
            <h2 id="art13-heading"><span className="pp-art-num">13.</span> Portfolio and Showcase Rights</h2>

            <div className="pp-sub-section">
              <h3>13.1 Reserved license.</h3>
              <p>Client grants Drishyam Media a <strong>perpetual, irrevocable, worldwide, royalty-free, fully paid-up, sublicensable, non-exclusive license</strong> to use, reproduce, display, distribute, transmit, publicly perform, and create derivatives of the deliverables, behind-the-scenes content, and outtakes for: portfolio; website; social media; case studies; awards and competition submissions; reels; pitch decks; advertising; and other marketing and promotional purposes (the &ldquo;Portfolio License&rdquo;).</p>
            </div>

            <div className="pp-sub-section">
              <h3>13.2 Use of name and likeness.</h3>
              <p>Client consents to Drishyam Media&apos;s use of Client&apos;s business name, logo, and trademarks in connection with the Portfolio License, and represents it has obtained equivalent consents from any individuals appearing in the deliverables.</p>
            </div>

            <div className="pp-sub-section">
              <h3>13.3 Confidential projects.</h3>
              <p>Where Client requires confidentiality and opt-out of the Portfolio License, Client must request the same in writing before the Project Document is signed; a confidentiality fee uplift of up to twenty-five percent (25%) of project fees applies. Without express written opt-out, the Portfolio License applies in full.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 14 ── */}
          <section className="pp-section" aria-labelledby="art14-heading">
            <h2 id="art14-heading"><span className="pp-art-num">14.</span> Client-Provided Materials</h2>

            <div className="pp-sub-section">
              <h3>14.1 Warranties.</h3>
              <p>Client represents and warrants that any content, materials, brand assets, music, footage, photographs, talent, locations, trademarks, or other items it provides to Drishyam Media (a) are owned by Client or licensed to Client with all rights necessary for the agreed use; (b) do not infringe any third-party copyright, trademark, right of publicity, right of privacy, or other right; (c) do not contain unlawful, defamatory, or harmful content; and (d) comply with all applicable laws.</p>
            </div>

            <div className="pp-sub-section">
              <h3>14.2 Indemnity.</h3>
              <p>Client indemnifies Drishyam Media for all claims, damages, losses, and expenses (including reasonable attorneys&apos; fees) arising from or related to Client-provided materials, in accordance with Article 23.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 15 ── */}
          <section className="pp-section" aria-labelledby="art15-heading">
            <h2 id="art15-heading"><span className="pp-art-num">15.</span> Music Licensing</h2>

            <div className="pp-sub-section">
              <h3>15.1 Default — royalty-free libraries.</h3>
              <p>Drishyam Media&apos;s standard practice is to license music from royalty-free libraries (e.g., Artlist, Epidemic Sound, Musicbed, Soundstripe) under licenses that include synchronization and master-use rights for the agreed use. Client is licensed to use only the agreed audio in the agreed deliverable, subject to the underlying library&apos;s terms.</p>
            </div>

            <div className="pp-sub-section">
              <h3>15.2 Client-requested copyrighted music.</h3>
              <p>If Client requests use of any specific copyrighted song or recording (commercial music), <strong>Client is solely responsible</strong> for: (a) obtaining a synchronization license from the publisher of the underlying composition; (b) obtaining a master-use license from the owner of the specific sound recording; (c) any public-performance licenses (ASCAP, BMI, SESAC, GMR) where applicable; and (d) providing written proof of all such licenses to Drishyam Media before the music is incorporated into any deliverable.</p>
            </div>

            <div className="pp-sub-section">
              <h3>15.3 No PRO sync coverage.</h3>
              <p>Client acknowledges that ASCAP, BMI, SESAC, and GMR public-performance licenses <strong>do not</strong> authorize synchronization to video, and that streaming or posting a video with unlicensed music is direct copyright infringement.</p>
            </div>

            <div className="pp-sub-section">
              <h3>15.4 Indemnity.</h3>
              <p>Client indemnifies Drishyam Media for all claims arising from Client-requested music. Drishyam Media reserves the right to refuse any music request and to substitute royalty-free music at its discretion.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 16 ── */}
          <section className="pp-section" aria-labelledby="art16-heading">
            <h2 id="art16-heading"><span className="pp-art-num">16.</span> Drone Operations and Legal Compliance</h2>

            <div className="pp-sub-section">
              <h3>16.1 Third-party aerial operators.</h3>
              <p>Any drone or aerial content requested by Client may be performed by independent third-party drone operators or subcontractors, subject to availability, legal restrictions, weather conditions, airspace limitations, venue restrictions, and safety requirements.</p>
            </div>

            <div className="pp-sub-section">
              <h3>16.2 No guarantee of aerial coverage.</h3>
              <p>Drone or aerial coverage is not guaranteed. Drishyam Media reserves the right to modify, substitute, delay, reschedule, or cancel aerial coverage where conditions are unsafe, restricted, unlawful, impractical, or outside reasonable operational control.</p>
            </div>

            <div className="pp-sub-section">
              <h3>16.3 Client responsibility for permissions.</h3>
              <p>Client is responsible for obtaining any permissions, approvals, property access, or venue authorization required for aerial coverage at Client-controlled locations.</p>
            </div>

            <div className="pp-sub-section">
              <h3>16.4 Limitation regarding third-party operators.</h3>
              <p>Where aerial services are performed by independent third-party operators, such operators are independently responsible for their own licensing, compliance, insurance, equipment, and flight operations.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 17 ── */}
          <section className="pp-section" aria-labelledby="art17-heading">
            <h2 id="art17-heading"><span className="pp-art-num">17.</span> Social Media, Digital Marketing, and Performance Disclaimers</h2>

            <div className="pp-sub-section">
              <h3>17.1 No performance guarantee.</h3>
              <p className="pp-legal-caps">DRISHYAM MEDIA MAKES NO GUARANTEE, REPRESENTATION, OR WARRANTY REGARDING ANY PARTICULAR LEVEL OF FOLLOWERS, GROWTH, REACH, IMPRESSIONS, ENGAGEMENT, LEADS, INQUIRIES, BOOKINGS, SALES, REVENUE, RETURN ON AD SPEND, ALGORITHMIC PERFORMANCE, SEARCH RANKINGS, OR ANY OTHER METRIC OR OUTCOME.</p>
              <p>Social-media and digital-marketing results depend on factors outside our control, including platform algorithms, content trends, ad-account history, audience composition, competitive activity, market conditions, and Client&apos;s product, pricing, and operations.</p>
            </div>

            <div className="pp-sub-section">
              <h3>17.2 Platform compliance and account access.</h3>
              <p>Client retains ownership of and ultimate responsibility for its social-media accounts, ad accounts, business managers, websites, domains, and analytics properties. Client warrants that any access granted to us is authorized. Client is responsible for compliance with each platform&apos;s terms of service. Client is solely responsible for maintaining account ownership, passwords, authentication methods, recovery access, backup email addresses, and administrative control of all platforms and accounts.</p>
            </div>

            <div className="pp-sub-section">
              <h3>17.3 Advertising spend.</h3>
              <p>Ad spend is paid by Client directly to the platform unless otherwise agreed. Drishyam Media is not responsible for ad-account suspensions, disapprovals, or platform policy enforcement. Where we manage ad accounts, our fee is for management services and is <strong>separate from</strong> ad spend.</p>
            </div>

            <div className="pp-sub-section">
              <h3>17.4 FTC endorsement compliance.</h3>
              <p>Where Services involve influencer or testimonial content, Client and any endorser are responsible for clear and conspicuous disclosure of material connections under the <strong>FTC Endorsement Guides, 16 C.F.R. Part 255</strong>, and compliance with the <strong>FTC Rule on Use of Consumer Reviews and Testimonials, 16 C.F.R. Part 465</strong>. Client warrants that all testimonials and reviews used in Client&apos;s campaigns are genuine, accurate, and lawfully obtained. Client indemnifies Drishyam Media for any claim arising from non-disclosure or fabricated endorsements.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 18 ── */}
          <section className="pp-section" aria-labelledby="art18-heading">
            <h2 id="art18-heading"><span className="pp-art-num">18.</span> AI-Assisted Content</h2>

            <div className="pp-sub-section">
              <h3>18.1 Use of AI tools.</h3>
              <p>Client acknowledges and agrees that Drishyam Media may use artificial-intelligence-assisted tools as part of its production workflow, including but not limited to generative imagery and video, transcription, captioning, color correction, audio cleanup, mastering assistance, editing assistants, copywriting drafts, and related tools, <strong>without separately disclosing each tool used</strong>. Drishyam Media exercises substantial human creative authorship over all final deliverables.</p>
            </div>

            <div className="pp-sub-section">
              <h3>18.2 Copyrightability disclosure.</h3>
              <p>Consistent with the <strong>U.S. Copyright Office&apos;s January 2025 guidance</strong> on copyright and artificial intelligence and related case law (including <em>Thaler v. Perlmutter</em>), purely AI-generated content is not protectable by copyright in the United States, while human-authored elements (selection, arrangement, modification, and creative direction over AI output) are protectable. Drishyam Media warrants that final deliverables reflect substantial human creative authorship; we do not warrant the independent copyrightability of any incidental AI-generated portions.</p>
            </div>

            <div className="pp-sub-section">
              <h3>18.3 Honest representation.</h3>
              <p>Drishyam Media will not present AI-generated personas as real people in testimonial or endorsement contexts. Where deepfake-style synthetic media is created at Client request, Client is responsible for all disclosure obligations under applicable law and the FTC Act.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 19 ── */}
          <section className="pp-section" aria-labelledby="art19-heading">
            <h2 id="art19-heading"><span className="pp-art-num">19.</span> Event Coverage Limitations</h2>

            <div className="pp-sub-section">
              <h3>19.1 Best-efforts standard.</h3>
              <p>For events, concerts, and live productions, Drishyam Media provides best-efforts coverage of the agreed scope. We do not guarantee capture of every specific moment, person, speech, or detail, particularly where multiple events occur simultaneously, where access is restricted, or where lighting, sound, or crowd conditions are uncontrollable.</p>
            </div>

            <div className="pp-sub-section">
              <h3>19.2 Venue and access.</h3>
              <p>Client is responsible for venue access, vendor coordination, electrical and Wi-Fi availability, secure storage for equipment, and reasonable accommodations for crew (including breaks for events exceeding four (4) hours and meals for events exceeding six (6) hours).</p>
            </div>

            <div className="pp-sub-section">
              <h3>19.3 Overtime.</h3>
              <p>Coverage beyond the contracted hours is billed in fifteen-minute (15) increments at our then-current overtime rate, with a one-hour (1) minimum. Crew may decline to extend if overtime conflicts with safety, transportation, or subsequent commitments.</p>
            </div>

            <div className="pp-sub-section">
              <h3>19.4 Multi-camera and crew sizing.</h3>
              <p>Crew and camera count are as stated in the Project Document. Larger events require additional crew and equipment, which require a Change Order.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 20 ── */}
          <section className="pp-section" aria-labelledby="art20-heading">
            <h2 id="art20-heading"><span className="pp-art-num">20.</span> Equipment Failure and Technical Contingencies</h2>

            <div className="pp-sub-section">
              <h3>20.1 Redundancy.</h3>
              <p>We use professional-grade equipment and dual-card recording, on-set backup, and professional protocols where reasonably feasible.</p>
            </div>

            <div className="pp-sub-section">
              <h3>20.2 Limit of liability for technical failure.</h3>
              <p>Notwithstanding redundancy, electronic equipment can fail, memory cards can corrupt, files can be lost, and cloud storage can experience outages. <strong>In the event of equipment failure, file corruption, or technical malfunction beyond our reasonable control, Drishyam Media&apos;s liability is limited to a refund or credit of the fee allocable to the affected portion of the project, less expenses already incurred,</strong> and we will use commercially reasonable efforts to reschedule a re-shoot where feasible. We are not liable for consequential damages of any kind, consistent with Article 24.</p>
            </div>

            <div className="pp-sub-section">
              <h3>20.3 Internet, cloud, and platform outages.</h3>
              <p>Drishyam Media is not liable for delays caused by internet, cloud-service, hosting, or platform outages.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 21 ── */}
          <section className="pp-section" aria-labelledby="art21-heading">
            <h2 id="art21-heading"><span className="pp-art-num">21.</span> Force Majeure</h2>

            <div className="pp-sub-section">
              <h3>21.1 Events.</h3>
              <p>Neither party is liable for any delay or failure to perform (other than payment obligations) caused by an event beyond its reasonable control, including: act of God; hurricane; tropical storm; flood; fire; earthquake; <strong>pandemic, epidemic, or public-health emergency</strong>; quarantine, lockdown, or government order or shutdown; war, terrorism, riot, or civil unrest; labor strike or shortage; <strong>internet, cloud-service, hosting, or utility outage</strong>; equipment failure; supply-chain disruption; serious illness or injury of key personnel; airspace closure or Temporary Flight Restriction; or other comparable events (each, a &ldquo;Force Majeure Event&rdquo;).</p>
            </div>

            <div className="pp-sub-section">
              <h3>21.2 Notice.</h3>
              <p>The affected party must provide written notice within five (5) business days of becoming aware of a Force Majeure Event, describing the event and expected impact on performance.</p>
            </div>

            <div className="pp-sub-section">
              <h3>21.3 Effect.</h3>
              <p>Performance is suspended for the duration of the Force Majeure Event. Both parties shall use reasonable efforts to mitigate. If a Force Majeure Event continues for more than thirty (30) days, either party may terminate the affected engagement on written notice.</p>
            </div>

            <div className="pp-sub-section">
              <h3>21.4 No refund of work performed.</h3>
              <p className="pp-legal-caps">A FORCE MAJEURE EVENT IS A SHIELD FROM LIABILITY, NOT A BASIS FOR A REFUND OF WORK ALREADY PERFORMED OR EXPENSES ALREADY INCURRED.</p>
              <p>Drishyam Media will retain all sums attributable to work performed and non-recoverable third-party costs through the termination date. Any rescheduling is governed by the Refund and Cancellation Policy.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 22 ── */}
          <section className="pp-section" aria-labelledby="art22-heading">
            <h2 id="art22-heading"><span className="pp-art-num">22.</span> Confidentiality</h2>

            <div className="pp-sub-section">
              <h3>22.1 Confidential Information.</h3>
              <p>Each party may receive non-public information of the other (&ldquo;Confidential Information&rdquo;), including business plans, marketing strategies, pricing, customer lists, brand guidelines in development, unreleased content, and personal information. Each party shall protect the other&apos;s Confidential Information with at least the same degree of care it uses for its own and shall not disclose it except to personnel and contractors with a need to know who are bound by equivalent obligations.</p>
            </div>

            <div className="pp-sub-section">
              <h3>22.2 Exclusions.</h3>
              <p>Confidential Information does not include information that is or becomes public through no breach, was known before disclosure, is independently developed, or is rightfully obtained from a third party.</p>
            </div>

            <div className="pp-sub-section">
              <h3>22.3 Required disclosure.</h3>
              <p>A party may disclose Confidential Information as required by law, subpoena, or court order, provided it gives prompt notice (where lawful) and cooperates in seeking protective treatment.</p>
            </div>

            <div className="pp-sub-section">
              <h3>22.4 Survival.</h3>
              <p>Confidentiality obligations survive termination for three (3) years; trade secrets are protected for so long as they qualify as such under <strong>the Florida Uniform Trade Secrets Act, Fla. Stat. § 688.001 et seq.</strong></p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 23 ── */}
          <section className="pp-section" aria-labelledby="art23-heading">
            <h2 id="art23-heading"><span className="pp-art-num">23.</span> Indemnification</h2>

            <div className="pp-sub-section">
              <h3>23.1 Client indemnification.</h3>
              <p><strong>Client shall defend, indemnify, and hold harmless Drishyam Media, its owners, members, officers, employees, contractors, and agents from and against any and all claims, demands, suits, actions, judgments, losses, damages, liabilities, costs, and expenses (including reasonable attorneys&apos; fees and court costs) arising out of or related to:</strong> (a) Client-provided materials, instructions, music, talent, locations, brand assets, or trademarks; (b) Client&apos;s use of the deliverables (including in violation of any applicable law or third-party right); (c) Client&apos;s failure to obtain required releases, consents, or permits; (d) Client&apos;s breach of these Terms or any Project Document; (e) bodily injury, death, or property damage occurring on Client-controlled premises; (f) Client&apos;s misrepresentations to third parties about the deliverables or Drishyam Media; (g) any claim that Client-supplied content infringes a third-party copyright, trademark, right of publicity, or right of privacy; and (h) any FTC or platform-rule violation arising from Client&apos;s endorsement, testimonial, or advertising practices.</p>
            </div>

            <div className="pp-sub-section">
              <h3>23.2 Process.</h3>
              <p>Drishyam Media will give prompt written notice of any claim, give Client reasonable control of the defense (subject to Drishyam Media&apos;s right to participate at its own expense), and reasonably cooperate. Client may not settle any claim that imposes obligations on Drishyam Media without Drishyam Media&apos;s prior written consent.</p>
            </div>

            <div className="pp-sub-section">
              <h3>23.3 Carve-outs.</h3>
              <p>Indemnification does not extend to claims caused solely by Drishyam Media&apos;s gross negligence or willful misconduct, consistent with Florida public policy.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 24 ── */}
          <section className="pp-section" aria-labelledby="art24-heading">
            <h2 id="art24-heading"><span className="pp-art-num">24.</span> Limitation of Liability and Damages Cap</h2>

            <div className="pp-sub-section">
              <h3>24.1 Exclusion of Consequential Damages.</h3>
              <p className="pp-legal-caps">TO THE MAXIMUM EXTENT PERMITTED BY LAW, DRISHYAM MEDIA SHALL NOT BE LIABLE TO CLIENT OR ANY THIRD PARTY FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, LOST REVENUE, LOST BUSINESS, LOST GOODWILL, LOST DATA, OR BUSINESS INTERRUPTION, ARISING OUT OF OR RELATED TO THE SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, AND REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE).</p>
            </div>

            <div className="pp-sub-section">
              <h3>24.2 Aggregate Cap.</h3>
              <p className="pp-legal-caps">DRISHYAM MEDIA&apos;S AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO ANY ENGAGEMENT, FROM ALL CLAIMS AND CAUSES OF ACTION COMBINED, SHALL NOT EXCEED THE TOTAL FEES ACTUALLY PAID BY CLIENT TO DRISHYAM MEDIA FOR THE SPECIFIC PROJECT GIVING RISE TO THE CLAIM.</p>
            </div>

            <div className="pp-sub-section">
              <h3>24.3 Bargained-for allocation.</h3>
              <p>The parties acknowledge that these limitations are a material part of the bargain, are reflected in the pricing, and would not have been agreed to absent these allocations. The limitations apply notwithstanding the failure of essential purpose of any limited remedy.</p>
            </div>

            <div className="pp-sub-section">
              <h3>24.4 Carve-outs.</h3>
              <p>The cap and exclusions do not apply to (a) Client&apos;s payment obligations; (b) Client&apos;s indemnification obligations under Article 23; (c) either party&apos;s confidentiality breaches involving willful misconduct; or (d) liability that cannot be limited as a matter of law (e.g., fraud, gross negligence, willful misconduct).</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 25 ── */}
          <section className="pp-section" aria-labelledby="art25-heading">
            <h2 id="art25-heading"><span className="pp-art-num">25.</span> Chargebacks and Payment Reversals</h2>

            <div className="pp-sub-section">
              <h3>25.1 Billing disputes and chargebacks.</h3>
              <p>Client agrees to contact Drishyam Media in good faith to attempt resolution of any billing concern before initiating a credit-card chargeback, ACH reversal, or payment dispute. Initiating a chargeback without first providing written notice and a reasonable opportunity to resolve the matter may constitute a material breach of this Agreement.</p>
            </div>

            <div className="pp-sub-section">
              <h3>25.2 Chargeback Administrative Fee.</h3>
              <p>For each disputed transaction in breach of Article 25.1, Client shall pay a <strong>One Hundred Fifty Dollar ($150) Chargeback Administrative Fee</strong> per transaction. The fee represents a reasonable pre-estimate of administrative time, processor fees, banking fees, documentation costs, and management review attributable to processing the dispute, and is <strong>not a penalty</strong>. Multiple disputed transactions accrue separate fees.</p>
            </div>

            <div className="pp-sub-section">
              <h3>25.3 Recovery of amounts and fees.</h3>
              <p>Where a chargeback is reversed or determined invalid, Client remains liable for the full original amount, the Chargeback Administrative Fee, late fees, interest, and reasonable attorneys&apos; fees and collection costs.</p>
            </div>

            <div className="pp-sub-section">
              <h3>25.4 Suspension and termination.</h3>
              <p>A chargeback constitutes grounds for immediate suspension of all Services, revocation of any license to use deliverables (per Article 11.2), and termination of all engagements at our sole discretion.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 26 ── */}
          <section className="pp-section" id="disputes" aria-labelledby="art26-heading">
            <h2 id="art26-heading"><span className="pp-art-num">26.</span> Dispute Resolution and Arbitration</h2>

            <div className="pp-sub-section">
              <h3>26.1 Pre-suit notice and cure.</h3>
              <p>Before initiating any legal proceeding, mediation, or arbitration, the complaining party must deliver written notice to the other party at the contact address on file, describing the dispute and requested resolution with reasonable specificity. The recipient has <strong>thirty (30) days</strong> to cure or respond. The parties shall engage in good-faith discussions during the notice period, including at least one telephonic or videoconference meeting on request. <strong>Compliance with this Article 26.1 is an express condition precedent to any arbitration, lawsuit, or chargeback.</strong></p>
            </div>

            <div className="pp-sub-section">
              <h3>26.2 Binding arbitration.</h3>
              <p>Except as carved out below, any dispute, claim, or controversy arising out of or relating to these Terms, any Project Document, or the Services shall be finally resolved by <strong>binding arbitration administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules</strong> (or, if the amount in controversy is $250,000 or less, the AAA Streamlined or Consumer Rules, whichever applies). Where the parties mutually agree, <strong>JAMS</strong> may be substituted with equivalent rules.</p>
            </div>

            <div className="pp-sub-section">
              <h3>26.3 Seat and locale.</h3>
              <p>The arbitration shall be seated in <strong>Tampa, Hillsborough County, Florida</strong>, and conducted in English, before a single neutral arbitrator. Hearings may be conducted by videoconference.</p>
            </div>

            <div className="pp-sub-section">
              <h3>26.4 Delegation.</h3>
              <p>The arbitrator has exclusive authority to resolve all questions of arbitrability, scope, formation, applicability, and enforceability of this arbitration agreement, except that a court may decide whether an agreement to arbitrate exists.</p>
            </div>

            <div className="pp-sub-section">
              <h3>26.5 Class-action waiver.</h3>
              <p className="pp-legal-caps">THE PARTIES WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS, COLLECTIVE, REPRESENTATIVE, OR CONSOLIDATED ACTION OR PROCEEDING.</p>
              <p>Disputes shall be arbitrated only on an individual basis. The arbitrator may not consolidate claims of multiple parties. <strong>If this class-action waiver is held unenforceable, the entire arbitration agreement is null and void with respect to the affected claim only</strong>, which shall then proceed in court under Article 27, while the remainder of these Terms remains in effect.</p>
            </div>

            <div className="pp-sub-section">
              <h3>26.6 Carve-outs.</h3>
              <p>Either party may bring (a) an action in small-claims court for claims within that court&apos;s jurisdiction; (b) an action for injunctive or equitable relief to protect intellectual property, confidentiality, or to enforce non-compete or non-solicitation obligations; or (c) collection actions for liquidated past-due amounts.</p>
            </div>

            <div className="pp-sub-section">
              <h3>26.7 Costs and fees.</h3>
              <p>Each party bears its own attorneys&apos; fees and costs unless the arbitrator or applicable law (including <strong>Fla. Stat. § 57.105</strong>, which makes one-way fee-shifting reciprocal) provides otherwise. The prevailing party is entitled to recover reasonable attorneys&apos; fees and costs to the extent permitted.</p>
            </div>

            <div className="pp-sub-section">
              <h3>26.8 Federal Arbitration Act and Florida Arbitration Code.</h3>
              <p>This arbitration agreement is governed by the <strong>Federal Arbitration Act, 9 U.S.C. § 1 et seq.</strong>, and, to the extent applicable, the <strong>Florida Arbitration Code, Fla. Stat. § 682.01 et seq.</strong></p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 27 ── */}
          <section className="pp-section" aria-labelledby="art27-heading">
            <h2 id="art27-heading"><span className="pp-art-num">27.</span> Governing Law and Venue</h2>

            <div className="pp-sub-section">
              <h3>27.1 Governing law.</h3>
              <p>These Terms and any Project Document are governed by the laws of the <strong>State of Florida</strong>, without regard to conflict-of-laws principles, and applicable U.S. federal law.</p>
            </div>

            <div className="pp-sub-section">
              <h3>27.2 Exclusive venue.</h3>
              <p>For any dispute not subject to arbitration, the parties consent to the <strong>exclusive personal jurisdiction and venue of the state and federal courts located in Hillsborough County, Florida</strong>.</p>
            </div>

            <div className="pp-sub-section">
              <h3>27.3 Jury-trial waiver.</h3>
              <p className="pp-legal-caps">THE PARTIES KNOWINGLY AND VOLUNTARILY WAIVE ANY RIGHT TO TRIAL BY JURY</p>
              <p>in any action arising out of or relating to these Terms.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 28 ── */}
          <section className="pp-section" aria-labelledby="art28-heading">
            <h2 id="art28-heading"><span className="pp-art-num">28.</span> Severability</h2>
            <p>If any provision of these Terms is held invalid or unenforceable, that provision shall be modified to the minimum extent necessary to make it enforceable, or, if not possible, severed; all other provisions remain in full force and effect. The class-action waiver in Article 26.5 is governed by its own severability rule.</p>
          </section>

          <div className="pp-rule" />

          {/* ── Article 29 ── */}
          <section className="pp-section" aria-labelledby="art29-heading">
            <h2 id="art29-heading"><span className="pp-art-num">29.</span> Entire Agreement</h2>
            <p>These Terms, together with the applicable Project Document, the Privacy Policy, and the Refund and Cancellation Policy, constitute the entire agreement between the parties and supersede all prior or contemporaneous communications, proposals, and understandings, whether oral or written. No course of dealing, course of performance, or trade usage modifies these Terms.</p>
          </section>

          <div className="pp-rule" />

          {/* ── Article 30 ── */}
          <section className="pp-section" aria-labelledby="art30-heading">
            <h2 id="art30-heading"><span className="pp-art-num">30.</span> Amendments</h2>

            <div className="pp-sub-section">
              <h3>30.1 Negotiated amendments.</h3>
              <p>No amendment to a Project Document is effective unless in writing and signed (electronically or otherwise) by both parties.</p>
            </div>

            <div className="pp-sub-section">
              <h3>30.2 Unilateral updates to general terms.</h3>
              <p>Drishyam Media may update these general Terms from time to time by posting the updated version with a new Effective Date. Material changes will be communicated to active clients by email. Continued use of the Services or commencement of a new engagement after the Effective Date constitutes acceptance.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 31 ── */}
          <section className="pp-section" aria-labelledby="art31-heading">
            <h2 id="art31-heading"><span className="pp-art-num">31.</span> Additional Provisions</h2>

            <div className="pp-sub-section">
              <h3>31.1 Notices.</h3>
              <p>Notices must be in writing and delivered to the addresses on file by email (with confirmation of receipt) and by either certified mail or recognized overnight courier. Email notice is effective on transmission absent bounce-back.</p>
            </div>

            <div className="pp-sub-section">
              <h3>31.2 Assignment.</h3>
              <p>Client may not assign this Agreement without our prior written consent, which will not be unreasonably withheld. Drishyam Media may assign in connection with a sale of all or substantially all of its assets or a successor entity (including assignment to a Florida-registered LLC or corporation upon completion of registration).</p>
            </div>

            <div className="pp-sub-section">
              <h3>31.3 Independent contractor.</h3>
              <p>The parties are independent contractors. Nothing creates an employment, agency, partnership, or joint-venture relationship.</p>
            </div>

            <div className="pp-sub-section">
              <h3>31.4 Non-solicitation of personnel.</h3>
              <p>During any engagement and for twelve (12) months after, Client shall not directly or indirectly solicit, hire, or engage any Drishyam Media employee or contractor without our prior written consent. If Client breaches this provision, Client shall pay a placement fee equal to thirty percent (30%) of the individual&apos;s prior twelve months&apos; compensation from Drishyam Media, as liquidated damages.</p>
            </div>

            <div className="pp-sub-section">
              <h3>31.5 Survival.</h3>
              <p>Articles 7 (Fees), 9.4 (subjective dissatisfaction), 11–13 (IP, license, portfolio), 14.2 (indemnity), 15.4 (music indemnity), 22 (Confidentiality), 23 (Indemnification), 24 (Limitation of Liability), 25 (Chargebacks), 26 (Dispute Resolution), 27 (Governing Law), 28 (Severability), and 31 survive any termination or expiration.</p>
            </div>

            <div className="pp-sub-section">
              <h3>31.6 Headings; interpretation.</h3>
              <p>Headings are for convenience only. &ldquo;Including&rdquo; means &ldquo;including without limitation.&rdquo;</p>
            </div>

            <div className="pp-sub-section">
              <h3>31.7 Counterparts and electronic signatures.</h3>
              <p>This Agreement may be executed in counterparts and by electronic signatures, each of which has the same effect as a handwritten original.</p>
            </div>

            <div className="pp-sub-section">
              <h3>31.8 Retainer cancellation.</h3>
              <p>Retainer engagements may be cancelled by either party on <strong>thirty (30) days&apos; written notice</strong>. Retainer fees for the notice period are earned and non-refundable. Outstanding deliverables are completed during the notice period to the extent practicable.</p>
            </div>

            <div className="pp-sub-section">
              <h3>31.9 Contact for legal notices.</h3>
              <div className="pp-address-card">
                <p className="pp-address-label">Drishyam Media</p>
                <p>9946 Brompton Drive, Tampa, Florida</p>
                <p>Email: <a href="mailto:contact@drishyammedia.com" className="pp-link">contact@drishyammedia.com</a></p>
                <p>Phone: <a href="tel:+18139657606" className="pp-link">+1 (813) 965-7606</a></p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
