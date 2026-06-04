import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'abhisheknagarinbox@gmail.com',
    replyTo: email,
    subject: 'New Contact Form Message',
    text: [
      'You have received a new message from your contact form.',
      '',
      `Name:    ${firstName.trim()} ${lastName.trim()}`,
      `Email:   ${email.trim()}`,
      '',
      'Message:',
      message.trim(),
    ].join('\n'),
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px;">
        <h2 style="margin-top:0;color:#1f2937;">New Contact Form Message</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:8px 0;color:#6b7280;width:80px;vertical-align:top;">Name</td>
            <td style="padding:8px 0;color:#111827;font-weight:600;">${firstName.trim()} ${lastName.trim()}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#6b7280;vertical-align:top;">Email</td>
            <td style="padding:8px 0;"><a href="mailto:${email.trim()}" style="color:#7c3aed;">${email.trim()}</a></td>
          </tr>
        </table>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
        <p style="color:#6b7280;margin:0 0 8px;">Message</p>
        <p style="color:#111827;white-space:pre-wrap;margin:0;">${message.trim()}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Email send error:', err);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
