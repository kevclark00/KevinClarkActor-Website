// Contact intake form. POSTs JSON to /api/contact (Vercel serverless function).
// Designs may import this and render <IntakeForm designId={id} /> in their footer.
import { useState } from 'react';
import './IntakeForm.css';

type Props = { designId?: string };

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function IntakeForm({ designId }: Props) {
  const [state, setState] = useState<Status>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [company, setCompany] = useState(''); // honeypot

  const canSubmit =
    name.trim().length > 0 &&
    email.trim().length > 0 &&
    message.trim().length > 0 &&
    state !== 'sending';

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Honeypot — bots fill all fields. Silently no-op.
    if (company.trim().length > 0) {
      setState('sent');
      return;
    }

    if (!canSubmit) return;

    setState('sending');
    const payload = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      designId,
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });
      setState(res.ok ? 'sent' : 'error');
    } catch {
      setState('error');
    }
  }

  function reset() {
    setName('');
    setEmail('');
    setMessage('');
    setCompany('');
    setState('idle');
  }

  if (state === 'sent') {
    return (
      <div className="kc-form kc-form--sent">
        <p>Thanks — Kevin will be in touch.</p>
        <button type="button" className="kc-form__reset" onClick={reset}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="kc-form" onSubmit={onSubmit} noValidate={false}>
      <label className="kc-form__field">
        <span>Name</span>
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="kc-form__field">
        <span>Email</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="kc-form__field kc-form__field--wide">
        <span>Message</span>
        <textarea
          name="message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>

      {/* Honeypot — hidden from humans, irresistible to bots. */}
      <input
        className="kc-form__honeypot"
        name="company"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <div className="kc-form__actions">
        <button type="submit" className="kc-form__submit" disabled={!canSubmit}>
          {state === 'sending' ? 'Sending…' : 'Send'}
        </button>
      </div>

      {state === 'error' && (
        <p className="kc-form__error">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
