import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Email config
const FROM_ADDRESS = 'Drishyam Media <contact@drishyammedia.com>';
const NOTIFY_INBOX = 'abhisheknagarinbox@gmail.com';
const CAL_LINK = 'https://cal.com/drishyam/discovery-call';
const WHATSAPP_DISPLAY = '+1 (813) 965-7606';
const WHATSAPP_LINK = 'https://wa.me/18139657606';

// Simple in-memory rate limiter: max 5 requests per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count += 1;
  return false;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const { firstName, lastName, email, message, honeypot } = body as Record<
    string,
    string
  >;

  // Honeypot check — bots fill this hidden field, humans don't
  if (honeypot) {
    return NextResponse.json({ success: true }); // silently discard
  }

  // Validation
  if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: 'All fields are required.' },
      { status: 400 }
    );
  }
  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: 'Please provide a valid email address.' },
      { status: 400 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const fullName = `${firstName.trim()} ${lastName.trim()}`;
  const cleanEmail = email.trim();
  const cleanMessage = message.trim();

  // 1) Lead notification to us — critical
  const notifyHtml = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px;">
      <h2 style="margin-top:0;color:#1f2937;">New Contact Form Message</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:8px 0;color:#6b7280;width:80px;vertical-align:top;">Name</td>
          <td style="padding:8px 0;color:#111827;font-weight:600;">${fullName}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#6b7280;vertical-align:top;">Email</td>
          <td style="padding:8px 0;"><a href="mailto:${cleanEmail}" style="color:#7c3aed;">${cleanEmail}</a></td>
        </tr>
      </table>
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
      <p style="color:#6b7280;margin:0 0 8px;">Message</p>
      <p style="color:#111827;white-space:pre-wrap;margin:0;">${cleanMessage}</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: NOTIFY_INBOX,
      replyTo: cleanEmail,
      subject: 'New Contact Form Message',
      html: notifyHtml,
      text: [
        'You have received a new message from your contact form.',
        '',
        `Name:    ${fullName}`,
        `Email:   ${cleanEmail}`,
        '',
        'Message:',
        cleanMessage,
      ].join('\n'),
    });
    if (error) throw error;
  } catch (err) {
    console.error('Lead notification email error:', err);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }

  // 2) Branded confirmation to the visitor — best-effort (never fails the request)
  const confirmHtml = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px 24px;border:1px solid #e5e7eb;border-radius:8px;">
      <h2 style="margin-top:0;color:#1f2937;">Thanks, ${firstName.trim()} — we got your message 🎬</h2>
      <p style="color:#374151;line-height:1.6;">Our team at <strong>Drishyam Media</strong> will get back to you within 12 hours. In the meantime, here are faster ways to reach us:</p>
      <p style="margin:24px 0;">
        <a href="${CAL_LINK}" style="display:inline-block;background:#7c3aed;color:#fff;text-decoration:none;font-weight:600;padding:12px 22px;border-radius:8px;">Book a free strategy call →</a>
      </p>
      <p style="color:#374151;line-height:1.6;">Prefer to chat? Message us on WhatsApp at <a href="${WHATSAPP_LINK}" style="color:#25d366;font-weight:600;">${WHATSAPP_DISPLAY}</a>.</p>
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
      <p style="color:#6b7280;font-size:13px;margin:0 0 6px;">Here's a copy of what you sent us:</p>
      <p style="color:#111827;white-space:pre-wrap;margin:0;font-size:13px;">${cleanMessage}</p>
      <p style="color:#9ca3af;font-size:12px;margin-top:24px;">— Drishyam Media · drishyammedia.com</p>
    </div>
  `;

  try {
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: cleanEmail,
      subject: 'Thanks — we got your message | Drishyam Media',
      html: confirmHtml,
    });
  } catch (err) {
    console.error('Confirmation email failed (non-fatal):', err);
  }

  return NextResponse.json({ success: true });
}
