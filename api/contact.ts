// Vercel-style serverless function for the Kevin Clark contact form.
// Typed loosely so we don't need a `@vercel/node` dependency.

import { Resend } from 'resend';

type ReqLike = {
  method?: string;
  body?: unknown;
  headers: Record<string, string | string[] | undefined>;
};

type ResLike = {
  status: (n: number) => ResLike;
  json: (data: unknown) => void;
  setHeader: (k: string, v: string) => void;
  end: (s?: string) => void;
};

type Payload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  designId?: unknown;
  company?: unknown; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DESIGN_ID_RE = /^\d{2}$/;

// The static site lives on kevinclarkofficial.com (GitHub Pages) while this
// function runs on a separate Vercel project, so the browser treats calls
// here as cross-origin and requires these headers plus an OPTIONS preflight.
const ALLOWED_ORIGINS = new Set([
  'https://kevinclarkofficial.com',
  'https://www.kevinclarkofficial.com',
  'http://localhost:5173',
]);

function corsOrigin(req: ReqLike): string | undefined {
  const origin = req.headers.origin;
  const value = Array.isArray(origin) ? origin[0] : origin;
  return value && ALLOWED_ORIGINS.has(value) ? value : undefined;
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isNonEmptyString(v: unknown): v is string {
  return typeof v === 'string' && v.trim().length > 0;
}

export default async function handler(req: ReqLike, res: ResLike): Promise<void> {
  res.setHeader('Cache-Control', 'no-store');

  const origin = corsOrigin(req);
  if (origin) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
  }

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  // Parse body: it may be a string (raw) or already-parsed object depending on host config.
  let body: Payload;
  try {
    if (typeof req.body === 'string') {
      body = req.body.length === 0 ? {} : (JSON.parse(req.body) as Payload);
    } else if (req.body && typeof req.body === 'object') {
      body = req.body as Payload;
    } else {
      body = {};
    }
  } catch {
    res.status(400).json({ error: 'Invalid JSON body' });
    return;
  }

  // Honeypot: bots fill every field. Silently accept and don't send.
  if (typeof body.company === 'string' && body.company.trim().length > 0) {
    res.status(200).json({ ok: true });
    return;
  }

  if (!isNonEmptyString(body.name)) {
    res.status(400).json({ error: 'Name is required' });
    return;
  }
  if (!isNonEmptyString(body.email)) {
    res.status(400).json({ error: 'Email is required' });
    return;
  }
  if (!isNonEmptyString(body.message)) {
    res.status(400).json({ error: 'Message is required' });
    return;
  }

  const name = body.name.trim();
  const email = body.email.trim();
  const message = body.message.trim();

  if (!EMAIL_RE.test(email)) {
    res.status(400).json({ error: 'Please enter a valid email address' });
    return;
  }

  let designId: string | undefined;
  if (body.designId !== undefined && body.designId !== null && body.designId !== '') {
    if (typeof body.designId !== 'string' || !DESIGN_ID_RE.test(body.designId)) {
      res.status(400).json({ error: 'Invalid designId' });
      return;
    }
    designId = body.designId;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('contact: RESEND_API_KEY is not configured');
    res.status(500).json({ error: 'Email service is not configured' });
    return;
  }

  const to = process.env.CONTACT_EMAIL ?? 'ryan.organically@gmail.com';

  const subject = designId
    ? `New inquiry from kevinclarkofficial.com — ${name} (design ${designId})`
    : `New inquiry from kevinclarkofficial.com — ${name}`;

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');
  const safeDesignId = designId ? escapeHtml(designId) : '';

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #1a1a1a; max-width: 560px;">
      <h2 style="font-size: 18px; font-weight: 600; margin: 0 0 16px;">New inquiry from kevinclarkofficial.com</h2>
      <table style="border-collapse: collapse; width: 100%; font-size: 14px;">
        <tr>
          <td style="padding: 8px 12px 8px 0; color: #6b6660; vertical-align: top; width: 96px;">Name</td>
          <td style="padding: 8px 0;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px 8px 0; color: #6b6660; vertical-align: top;">Email</td>
          <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #1a1a1a;">${safeEmail}</a></td>
        </tr>
        ${
          designId
            ? `<tr>
          <td style="padding: 8px 12px 8px 0; color: #6b6660; vertical-align: top;">Design</td>
          <td style="padding: 8px 0;">${safeDesignId}</td>
        </tr>`
            : ''
        }
        <tr>
          <td style="padding: 8px 12px 8px 0; color: #6b6660; vertical-align: top;">Message</td>
          <td style="padding: 8px 0; line-height: 1.5;">${safeMessage}</td>
        </tr>
      </table>
      <p style="margin: 24px 0 0; padding-top: 16px; border-top: 1px solid #e5e5e5; font-size: 12px; color: #6b6660;">
        Sent from the contact form on kevinclarkofficial.com. Reply directly to respond to ${safeName}.
      </p>
    </div>
  `;

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: 'Kevin Clark <leads@organicallyseo.com>',
      to: [to],
      cc: ['ryan.organically@gmail.com'],
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      console.error('contact: Resend error', error);
      res.status(502).json({ error: 'Could not send your message right now. Please try again.' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('contact: unexpected error', err);
    res.status(502).json({ error: 'Could not send your message right now. Please try again.' });
  }
}
