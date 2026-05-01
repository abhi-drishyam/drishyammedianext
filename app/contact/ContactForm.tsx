'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <div className="contact-form-wrapper">
      <div className="form-header">
        <h3>Send us a message</h3>
        <p>Or fill out the form below and our team will get back to you within 12 hours.</p>
      </div>
      {submitted ? (
        <p style={{ color: '#c084ff', fontWeight: 600, fontSize: 16 }}>
          ✓ Thank you! We&apos;ll get back to you within 12 hours.
        </p>
      ) : (
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
          <button type="submit" className="form-submit">Send Message</button>
        </form>
      )}
    </div>
  );
}
