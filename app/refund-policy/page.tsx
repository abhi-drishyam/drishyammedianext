import '../privacy-policy/privacy-policy.css';
import '../terms-of-service/terms-of-service.css';
import HeroSection from '@/components/HeroSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy — Drishyam Media',
  description:
    'Understand Drishyam Media\'s refund and cancellation policy covering deposits, project cancellations, rescheduling, and dispute procedures.',
  alternates: { canonical: '/refund-policy' },
};

export default function RefundPolicyPage() {
  return (
    <>
      <HeroSection
        badge="Legal Document"
        heading={
          <>
            Refund &amp; <span className="grad-text">Cancellation Policy</span>
          </>
        }
        description="This Policy governs all refunds, cancellations, and rescheduling for every engagement with Drishyam Media. It is incorporated by reference into our Terms of Service."
        ariaLabel="Refund and Cancellation Policy hero"
        categories={[
          { href: '#deposits', label: 'Deposits' },
          { href: '#cancellation', label: 'Cancellation Windows' },
          { href: '#rescheduling', label: 'Rescheduling' },
          { href: '#disputes', label: 'Disputes' },
        ]}
      />

      <div className="pp-page">
        <div className="pp-container">

          {/* Important Notice */}
          <div className="pp-notice-card">
            <p className="pp-notice-heading">Important — Please Read Carefully</p>
            <p>
              All deposits and retainers are non-refundable. Subjective dissatisfaction is not a basis for refund. Chargebacks without prior written notice and a 30-day cure period are a breach of contract and incur a $150 administrative fee.
            </p>
          </div>

          {/* Meta Card */}
          <div className="pp-meta-card">
            <div className="pp-meta-row">
              <span className="pp-meta-label">Effective Date</span>
              <span className="pp-meta-value">May 9, 2026</span>
            </div>
            <p className="pp-disclaimer">
              Draft for legal review — not a substitute for licensed legal counsel. This Policy applies to all clients and engagements regardless of geographic location. Capitalized terms not defined here have the meaning given in the Terms and Conditions.
            </p>
          </div>

          {/* ── Article 1 ── */}
          <section className="pp-section" id="deposits" aria-labelledby="art1-heading">
            <h2 id="art1-heading"><span className="pp-art-num">1.</span> Deposits and Non-Refundable Retainers</h2>

            <div className="pp-sub-section">
              <h3>1.1</h3>
              <p>A non-refundable deposit (typically fifty percent (50%) of the project total, or as otherwise stated in the Project Document) is required to confirm any project booking. <strong>THE DEPOSIT IS EARNED UPON RECEIPT</strong> and compensates Drishyam Media for: (a) reserving the calendar date(s) and turning away other work; (b) pre-production planning and creative development; (c) administrative setup, contracting, and onboarding; and (d) opportunity cost.</p>
            </div>

            <div className="pp-sub-section">
              <h3>1.2</h3>
              <p>The deposit is non-refundable except where required by applicable law or where Drishyam Media is unable to perform the Services without lawful justification. The deposit remains non-refundable in cases including, but not limited to: client cancellation, scheduling conflicts, change of plans, change of budget, change of vendor, or subjective dissatisfaction.</p>
            </div>

            <div className="pp-sub-section">
              <h3>1.3</h3>
              <p>The parties expressly agree that the deposit is a reasonable estimate of damages from cancellation, that actual damages would be difficult to ascertain, and that the deposit is <strong>not a penalty</strong> but a bargained-for liquidated-damages allocation under <strong>Lefemine v. Baron, 573 So. 2d 326 (Fla. 1991)</strong>, and <strong>Fla. Stat. § 672.718</strong>.</p>
            </div>

            <div className="pp-sub-section">
              <h3>1.4</h3>
              <p>Monthly retainers are billed in advance and are non-refundable for the billing month in which payment is made. Retainer fees are not refundable based on under-utilization of allocated hours or deliverables.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 2 ── */}
          <section className="pp-section" id="cancellation" aria-labelledby="art2-heading">
            <h2 id="art2-heading"><span className="pp-art-num">2.</span> Project Cancellation Windows</h2>

            <div className="pp-sub-section">
              <h3>2.1 Project-based engagements.</h3>
              <p>Cancellations made <strong>more than seventy-two (72) hours</strong> before the scheduled session start time forfeit the deposit only and are not liable for additional fees, <strong>except</strong> for non-recoverable third-party costs (permits, equipment rental, travel deposits, royalty-free licenses) already incurred, which are also non-refundable.</p>
            </div>

            <div className="pp-sub-section">
              <h3>2.2 Within seventy-two (72) hours.</h3>
              <p>Cancellations made within seventy-two (72) hours before the scheduled session forfeit the deposit <strong>and</strong> fifty percent (50%) of the remaining contract balance, plus all non-recoverable third-party costs.</p>
            </div>

            <div className="pp-sub-section">
              <h3>2.3 Within twenty-four (24) hours, no-shows, and same-day cancellations.</h3>
              <p>Cancellations within twenty-four (24) hours, same-day cancellations, and no-shows forfeit the <strong>full contract amount</strong>, including the deposit, the balance, and all third-party costs.</p>
            </div>

            <div className="pp-sub-section">
              <h3>2.4 Retainer engagements.</h3>
              <p>Cancellation of a monthly retainer requires <strong>thirty (30) days&apos; written notice</strong>. Retainer fees during the thirty-day notice period are earned and non-refundable. Drishyam Media will continue providing Services during the notice period to the extent operationally practicable.</p>
            </div>

            <div className="pp-sub-section">
              <h3>2.5 Multi-day or multi-session engagements.</h3>
              <p>Each scheduled session is treated as a separate cancellation event for purposes of this Policy, unless the Project Document expressly groups them.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 3 ── */}
          <section className="pp-section" aria-labelledby="art3-heading">
            <h2 id="art3-heading"><span className="pp-art-num">3.</span> Cancellation by Client</h2>

            <div className="pp-sub-section">
              <h3>3.1 Required form.</h3>
              <p>All cancellations must be submitted in writing to <a href="mailto:contact@drishyammedia.com" className="pp-link">contact@drishyammedia.com</a> with the subject line &ldquo;Cancellation Request&rdquo; and identify the project. Verbal cancellations are not effective.</p>
            </div>

            <div className="pp-sub-section">
              <h3>3.2 Effective time.</h3>
              <p>Cancellation is effective when our written acknowledgment is sent. Until acknowledgment, the booking remains active and continues to accrue obligations.</p>
            </div>

            <div className="pp-sub-section">
              <h3>3.3 No refund of work performed or third-party costs.</h3>
              <p>Regardless of cancellation timing, Drishyam Media is entitled to retain (a) the deposit; (b) fees attributable to work already performed (pre-production, scouting, scripting, scheduling, creative development, shoots completed, edits in progress); and (c) all non-recoverable third-party costs. Where a partial refund is owed under this Policy, it is calculated <strong>after</strong> these deductions.</p>
            </div>

            <div className="pp-sub-section">
              <h3>3.4 No refund for change of mind, change of vendor, or change of plans.</h3>
              <p>Cancellations driven by Client&apos;s change of mind, decision to use a different vendor, internal business changes, or non-business preference are subject to the cancellation windows above and do not entitle Client to any further refund.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 4 ── */}
          <section className="pp-section" aria-labelledby="art4-heading">
            <h2 id="art4-heading"><span className="pp-art-num">4.</span> Cancellation by Drishyam Media</h2>

            <div className="pp-sub-section">
              <h3>4.1 Drishyam Media&apos;s right.</h3>
              <p>Drishyam Media may cancel an engagement at its discretion, including (a) for non-payment after a ten (10) day grace period; (b) breach of the Terms; (c) Client behavior that is unsafe, threatening, harassing, or unlawful; (d) discovery of material misrepresentation by Client; (e) inability to perform due to illness, injury, or unavailability of key personnel where substitution is not feasible; or (f) Force Majeure exceeding thirty (30) days.</p>
            </div>

            <div className="pp-sub-section">
              <h3>4.2 Refund where Drishyam Media cancels for its own convenience.</h3>
              <p>If Drishyam Media cancels an engagement <strong>for its own convenience and not for Client breach</strong>, we will refund all unearned, prepaid amounts within thirty (30) days, less (a) work already performed at our standard rates and (b) non-recoverable third-party costs. We will use reasonable efforts to refer Client to a comparable service provider where appropriate.</p>
            </div>

            <div className="pp-sub-section">
              <h3>4.3 No refund where Drishyam Media cancels for cause.</h3>
              <p>If Drishyam Media cancels for Client breach, non-payment, unsafe conduct, or material misrepresentation, no refund is owed and all amounts paid are forfeit; Client remains liable for any unpaid amounts and damages caused by the breach.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 5 ── */}
          <section className="pp-section" id="rescheduling" aria-labelledby="art5-heading">
            <h2 id="art5-heading"><span className="pp-art-num">5.</span> Rescheduling Policy</h2>

            <div className="pp-sub-section">
              <h3>5.1 First reschedule (project-based).</h3>
              <p>Client may reschedule a project-based session <strong>once</strong>, at no additional fee, provided written notice is given at least seventy-two (72) hours before the scheduled start time and a new date is mutually agreed within sixty (60) days. The deposit transfers to the new date.</p>
            </div>

            <div className="pp-sub-section">
              <h3>5.2 Second and subsequent reschedules.</h3>
              <p>A rescheduling fee equal to twenty-five percent (25%) of the affected session fee applies to each reschedule beyond the first, plus all non-recoverable third-party costs incurred.</p>
            </div>

            <div className="pp-sub-section">
              <h3>5.3 Rescheduling within seventy-two (72) hours.</h3>
              <p>Rescheduling within seventy-two (72) hours of the scheduled start is treated as a late cancellation under Article 2.2 unless waived in writing in our discretion.</p>
            </div>

            <div className="pp-sub-section">
              <h3>5.4 Failure to reschedule within sixty (60) days.</h3>
              <p>If Client does not confirm a new date within sixty (60) days, the deposit is forfeit and the engagement is terminated. Re-engagement requires a new Project Document and a new deposit.</p>
            </div>

            <div className="pp-sub-section">
              <h3>5.5 Weather and venue-driven reschedules.</h3>
              <p>For outdoor, location-dependent, or aerial-content shoots, Drishyam Media may reschedule at no charge where weather conditions, safety concerns, venue restrictions, environmental conditions, legal restrictions, or access limitations make performance unsafe, impractical, or unreasonable.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 6 ── */}
          <section className="pp-section" aria-labelledby="art6-heading">
            <h2 id="art6-heading"><span className="pp-art-num">6.</span> Refunds for Completed Work</h2>

            <div className="pp-sub-section">
              <h3>6.1 No refunds after delivery.</h3>
              <p>Once Drishyam Media has delivered final files to Client (by cloud link, email transfer, or other electronic delivery), <strong>no refund is available</strong> for that deliverable, except as expressly required by applicable law. RAW footage, RAW images, and editable project files are not included in standard delivery unless expressly stated in writing.</p>
            </div>

            <div className="pp-sub-section">
              <h3>6.2 Approval is final.</h3>
              <p>Once Client approves a deliverable in writing (including by email or by issuing payment of the final balance), the deliverable is deemed accepted and final.</p>
            </div>

            <div className="pp-sub-section">
              <h3>6.3 Industry-standard performance.</h3>
              <p>Drishyam Media&apos;s obligation is to deliver work meeting professional industry standards consistent with the agreed scope.</p>
              <p className="pp-legal-caps">CLIENT&apos;S SUBJECTIVE DISLIKE OF STYLE, AESTHETIC, COLOR, MUSIC, EDITING CHOICES, OR OTHER ARTISTIC ELEMENTS IS NOT GROUNDS FOR A REFUND.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 7 ── */}
          <section className="pp-section" aria-labelledby="art7-heading">
            <h2 id="art7-heading"><span className="pp-art-num">7.</span> Refunds for Digital and Editing Services</h2>

            <div className="pp-sub-section">
              <h3>7.1 Editing in progress.</h3>
              <p>Where Client cancels a project after editing has begun but before final delivery, fees attributable to time already spent on editing are non-refundable. The deposit and any milestone payments allocable to completed editing work are retained.</p>
            </div>

            <div className="pp-sub-section">
              <h3>7.2 Social media, ad management, content creation, and marketing services.</h3>
              <p>Fees for digital marketing, ad management, social-media management, and content-creation services are paid in advance and are <strong>non-refundable</strong> once the billing period has begun.</p>
              <p className="pp-legal-caps">NO REFUND IS AVAILABLE BASED ON LACK OF GROWTH, ENGAGEMENT, LEADS, SALES, CONVERSIONS, RETURN ON AD SPEND, OR ANY OTHER PERFORMANCE METRIC</p>
              <p>consistent with Article 17 of the Terms.</p>
            </div>

            <div className="pp-sub-section">
              <h3>7.3 Ad spend and platform fees.</h3>
              <p>Ad spend paid to platforms (Meta, Google, LinkedIn, TikTok, etc.) is paid directly by Client to the platform unless otherwise agreed and is governed by each platform&apos;s own refund rules. Drishyam Media has no control over and is not responsible for refunds of ad spend.</p>
            </div>

            <div className="pp-sub-section">
              <h3>7.4 Hosting, domain, software, and third-party tool fees.</h3>
              <p>Fees paid to third parties for hosting, domains, scheduling tools, design tools, stock libraries, and similar third-party services are non-refundable.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 8 ── */}
          <section className="pp-section" aria-labelledby="art8-heading">
            <h2 id="art8-heading"><span className="pp-art-num">8.</span> Partial Refunds and Conditions</h2>

            <div className="pp-sub-section">
              <h3>8.1 When a partial refund may be issued.</h3>
              <p>A partial refund may be issued, at Drishyam Media&apos;s discretion, only when <strong>all</strong> of the following conditions are met: (a) Client has fully complied with the pre-suit notice and cure procedure in Article 26.1 of the Terms; (b) the refund request is supported by an objective, documented failure of Drishyam Media to perform the contracted scope (not subjective dissatisfaction); (c) Drishyam Media has been given a reasonable opportunity to cure and has not done so; and (d) the calculation accounts for work performed, third-party costs, the non-refundable deposit, and the value of any deliverables already provided.</p>
            </div>

            <div className="pp-sub-section">
              <h3>8.2 Calculation.</h3>
              <p>Any partial refund is calculated as: (Total fees paid) — (Non-refundable deposit) — (Hourly value of all time spent at our standard rates) — (Non-recoverable third-party costs) — (Value of any deliverables provided). The result is the maximum partial refund; the actual refund may be lower in our reasonable discretion.</p>
            </div>

            <div className="pp-sub-section">
              <h3>8.3 Form and timing.</h3>
              <p>Partial refunds are issued by the original payment method within thirty (30) days of agreement on the amount.</p>
            </div>

            <div className="pp-sub-section">
              <h3>8.4 Settlement and release.</h3>
              <p>Acceptance of any partial refund is conditioned on Client signing a mutual release of all claims arising from the affected engagement.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 9 ── */}
          <section className="pp-section" aria-labelledby="art9-heading">
            <h2 id="art9-heading"><span className="pp-art-num">9.</span> Social Media and Retainer Services</h2>

            <div className="pp-sub-section">
              <h3>9.1 Monthly billing.</h3>
              <p>Retainer engagements are billed monthly in advance.</p>
            </div>

            <div className="pp-sub-section">
              <h3>9.2 Non-refundable monthly fee.</h3>
              <p>The monthly retainer fee is non-refundable for the billing month, regardless of how much of the allocated time, deliverables, or ad-management activity is utilized by Client.</p>
            </div>

            <div className="pp-sub-section">
              <h3>9.3 No rollover.</h3>
              <p>Unused hours, posts, deliverables, or ad-management capacity do not roll over to subsequent months unless expressly agreed in writing.</p>
            </div>

            <div className="pp-sub-section">
              <h3>9.4 Pause vs. cancel.</h3>
              <p>Drishyam Media may, at its discretion, accommodate a temporary pause of a retainer for up to thirty (30) days, but is not obligated to do so. A pause does not relieve Client of any unpaid amount accrued before the pause.</p>
            </div>

            <div className="pp-sub-section">
              <h3>9.5 Cancellation requires thirty (30) days&apos; notice.</h3>
              <p>Retainer cancellations require thirty (30) days&apos; written notice (Article 2.4). Mid-month cancellations do not result in a prorated refund.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 10 ── */}
          <section className="pp-section" id="disputes" aria-labelledby="art10-heading">
            <h2 id="art10-heading"><span className="pp-art-num">10.</span> Dispute Process — No Chargebacks</h2>

            <div className="pp-sub-section">
              <h3>10.1 Billing disputes and resolution process.</h3>
              <p>Before initiating any payment dispute (including chargebacks or ACH reversals), Client agrees to provide written notice describing the concern and allow Drishyam Media a reasonable opportunity to resolve the matter in good faith.</p>
            </div>

            <div className="pp-sub-section">
              <h3>10.2 Failure to follow dispute procedure.</h3>
              <p>Initiating a chargeback or payment dispute without first attempting good-faith resolution under Article 10.1 may constitute a material breach of this Agreement.</p>
            </div>

            <div className="pp-sub-section">
              <h3>10.3 Chargeback Administrative Fee.</h3>
              <p>Each disputed transaction in breach of Article 10.1 triggers a <strong>One Hundred Fifty Dollar ($150) Chargeback Administrative Fee</strong> per transaction. This fee compensates Drishyam Media for staff time, processor and bank fees, documentation, and management review reasonably attributable to a chargeback. The fee is <strong>not a penalty</strong> and is enforceable as agreed liquidated damages under <strong>Fla. Stat. § 672.718</strong> and <strong>Lefemine v. Baron, 573 So. 2d 326 (Fla. 1991)</strong>.</p>
            </div>

            <div className="pp-sub-section">
              <h3>10.4 Recovery and consequences.</h3>
              <p>Where a chargeback is reversed or determined invalid, Client remains liable for: (a) the original disputed amount; (b) the $150 Chargeback Administrative Fee per dispute; (c) one and one-half percent (1.5%) per month interest on the unpaid balance under Article 7.5 of the Terms; (d) reasonable attorneys&apos; fees and collection costs; and (e) any additional damages caused by the chargeback (including processor reserve holds and account-status impacts). A chargeback also entitles Drishyam Media to immediately revoke any license to use deliverables and suspend all Services.</p>
            </div>

            <div className="pp-sub-section">
              <h3>10.5 No waiver of contract terms.</h3>
              <p>Initiating a chargeback does not waive, modify, or terminate any provision of the Terms or this Policy. The arbitration agreement in Article 26 of the Terms remains binding.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 11 ── */}
          <section className="pp-section" aria-labelledby="art11-heading">
            <h2 id="art11-heading"><span className="pp-art-num">11.</span> Force Majeure Refunds</h2>

            <div className="pp-sub-section">
              <h3>11.1 Force Majeure governs refunds during Force Majeure Events.</h3>
              <p>Where performance is affected by a Force Majeure Event (Article 21 of the Terms), the parties shall use reasonable efforts to reschedule. Article 5 (Rescheduling) governs.</p>
            </div>

            <div className="pp-sub-section">
              <h3>11.2 No refund for work performed.</h3>
              <p className="pp-legal-caps">A FORCE MAJEURE EVENT IS NOT A BASIS FOR A REFUND OF WORK ALREADY PERFORMED OR EXPENSES ALREADY INCURRED.</p>
              <p>Drishyam Media is entitled to retain all sums attributable to work performed, the non-refundable deposit, and non-recoverable third-party costs through the termination date.</p>
            </div>

            <div className="pp-sub-section">
              <h3>11.3 Termination after thirty (30) days.</h3>
              <p>If a Force Majeure Event continues for more than thirty (30) days and the parties do not agree on a rescheduled date, either party may terminate the affected engagement under Article 21.3 of the Terms. Drishyam Media will refund any prepaid amounts that are unearned and not allocable to non-recoverable costs, calculated as in Article 8.2.</p>
            </div>

            <div className="pp-sub-section">
              <h3>11.4 Hurricane and Florida-specific events.</h3>
              <p>Tampa Bay is subject to hurricanes, tropical storms, and related evacuation orders. Where mandatory evacuation, government order, or unsafe weather requires postponement, Drishyam Media will reschedule once at no additional fee under Article 5.5 if a new date is confirmed within ninety (90) days; otherwise, deposit and incurred costs remain non-refundable.</p>
            </div>
          </section>

          <div className="pp-rule" />

          {/* ── Article 12 ── */}
          <section className="pp-section" aria-labelledby="art12-heading">
            <h2 id="art12-heading"><span className="pp-art-num">12.</span> How to Request a Refund</h2>
            <p>
              To request a refund, send a written request to{' '}
              <a href="mailto:contact@drishyammedia.com" className="pp-link">contact@drishyammedia.com</a>{' '}
              with the subject line <strong>&ldquo;Refund Request&rdquo;</strong> and include: (a) Client name and project name; (b) date of the engagement; (c) amount paid and amount requested; (d) detailed description of the basis for the refund; and (e) any supporting documentation. Drishyam Media will respond within fifteen (15) business days. All refund requests are subject to the procedure in Article 8 and the pre-suit notice and cure procedure in Article 26.1 of the Terms.
            </p>
          </section>

          <div className="pp-rule" />

          {/* ── Article 13 ── */}
          <section className="pp-section" aria-labelledby="art13-heading">
            <h2 id="art13-heading"><span className="pp-art-num">13.</span> Governing Law, Venue, and Arbitration</h2>
            <p>
              This Policy is governed by the laws of the <strong>State of Florida</strong> and is enforceable in the <strong>state and federal courts of Hillsborough County, Florida</strong>, subject to the binding arbitration agreement in Article 26 of the Terms. The class-action waiver, jury-trial waiver, limitation of liability, and indemnification provisions of the Terms apply to any dispute arising from this Policy.
            </p>
          </section>

          <div className="pp-rule" />

          {/* ── Article 14 ── */}
          <section className="pp-section" aria-labelledby="art14-heading">
            <h2 id="art14-heading"><span className="pp-art-num">14.</span> Severability and Integration</h2>
            <p>
              If any provision of this Policy is held unenforceable, that provision is modified or severed to the minimum extent necessary, and the remainder remains in full force. This Policy, together with the Terms and Privacy Policy, constitutes the parties&apos; entire agreement on cancellation and refunds.
            </p>
          </section>

          <div className="pp-rule" />

          {/* ── Article 15 ── */}
          <section className="pp-section" aria-labelledby="art15-heading">
            <h2 id="art15-heading"><span className="pp-art-num">15.</span> Contact</h2>
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
