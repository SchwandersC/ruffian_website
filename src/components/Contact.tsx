import React, { useState } from 'react';
import '../styles/Contact.scss';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/mpwddzgp', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) setStatus('success');
      else throw new Error('Network error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Get In Touch</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" required placeholder="you@example.com" />
        </label>
        <label>
          Message:
          <textarea name="message" required rows={4} />
        </label>
        <button type="submit" disabled={status==='sending'}>
          {status==='sending' ? 'Sending…' : 'Send'}
        </button>
      </form>

      {status==='success' && <p className="success">Thanks! We got your message.</p>}
      {status==='error'   && <p className="error">Something went wrong. 😢</p>}
    </section>
  );
};

export default Contact;