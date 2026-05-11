# Deploy

Static Vite build (`npm run build` → `dist/`). The contact form needs a server-side function, so production needs **Vercel** (or any host that can run `api/contact.ts`).

## Vercel (recommended)

1. Import the repo into Vercel. Framework preset: **Vite** (project root).
2. Build command: `npm run build`. Output directory: `dist`.
3. `api/contact.ts` is auto-detected as a Serverless Function — no extra config.
4. Add environment variables in **Project Settings → Environment Variables**:
   - `RESEND_API_KEY` — required. Resend API key for the `organicallyseo.com` sender.
   - `CONTACT_EMAIL` — optional. Kevin's inbox. Falls back to `ryan.organically@gmail.com` if unset.
5. Point `kevinclarkofficial.com` DNS at Vercel (replace the current GitHub Pages CNAME).

## Resend setup

The sender alias `Kevin Clark <leads@organicallyseo.com>` must be verified in Resend under the `organicallyseo.com` domain before the function will send. Cc + Reply-To are wired to `ryan.organically@gmail.com` per the monorepo convention.

## Keeping GitHub Pages as the host

GitHub Pages can't run `api/contact.ts`. If we want to keep Pages as the host for the static site, the contact endpoint needs to live somewhere else:

- **Option A:** A separate Vercel project containing only `api/contact.ts`. Change `fetch('/api/contact')` in `src/components/IntakeForm.tsx` to the absolute URL (e.g. `https://kevin-clark-api.vercel.app/api/contact`).
- **Option B:** Port the handler to a Cloudflare Worker. Same env vars, same Resend payload — change the fetch URL accordingly.

Either way the form's payload shape (`{ name, email, message, designId? }`) and Resend config stay identical.

## Local dev

`npm run dev` runs Vite only — `/api/contact` won't resolve locally. For end-to-end testing use `vercel dev` (requires the Vercel CLI) or deploy a preview.
