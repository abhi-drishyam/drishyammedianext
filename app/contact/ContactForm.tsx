'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setErrorMsg(json.error ?? 'Something went wrong. Please try again.');
        setStatus('error');
        return;
      }

      setStatus('success');
      form.reset();
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-form-wrapper">
        <div className="form-header">
          <h3>Send us a message</h3>
          <p>Or fill out the form below and our team will get back to you within 12 hours.</p>
        </div>
        <p style={{ color: '#c084ff', fontWeight: 600, fontSize: 16 }}>
          ✓ Thank you! We&apos;ll get back to you within 12 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="contact-form-wrapper">
      <div className="form-header">
        <h3>Send us a message</h3>
        <p>Or fill out the form below and our team will get back to you within 12 hours.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" placeholder="John" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" placeholder="Doe" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="john@example.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Tell us about your project..." required />
        </div>

        {/* Honeypot — hidden from real users, bots fill it */}
        <input
          type="text"
          name="honeypot"
          autoComplete="off"
          tabIndex={-1}
          aria-hidden="true"
          style={{ display: 'none' }}
        />

        {status === 'error' && (
          <p style={{ color: '#f87171', fontSize: 14, margin: '0 0 8px' }}>
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          className="form-submit"
          disabled={status === 'loading'}
          style={{ opacity: status === 'loading' ? 0.65 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
        >
          {status === 'loading' ? 'Sending…' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
