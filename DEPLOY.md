# Deploy

**Chosen path (Kevin wants to stay on GitHub Pages):** the static site builds and
deploys to GitHub Pages via GitHub Actions; the contact form's `/api/contact`
function runs in a **separate**, tiny Vercel project (frontend not deployed
there — that project exists only to host the function). The public site only
ever renders Design01 (`src/App.tsx` hides the design switcher outside `DEV`
builds) — the other 19 sketches stay in the repo for reference but aren't
publicly reachable.

## 1. GitHub Pages (static site)

`.github/workflows/deploy.yml` builds with Vite and publishes `dist/` via
`actions/deploy-pages` on every push to `main`. One-time setup, done by hand
in the GitHub UI (not something the Actions file can do for itself):

1. Repo → **Settings → Pages** → Source: **GitHub Actions** (not "Deploy from a branch").
2. `public/CNAME` (committed) carries `kevinclarkofficial.com` into `dist/` so
   the custom domain survives the build. DNS for that domain should already
   point at GitHub Pages — no DNS change needed for this half.
3. Push to `main` and the workflow builds + deploys automatically.

## 2. Contact form function (separate Vercel project)

`api/contact.ts` is unreachable on GitHub Pages, so it's deployed on its own:

1. In Vercel, **import this same repo as a new project** (framework preset
   Vite is fine — its own frontend build is unused/ignored, only the
   `api/contact.ts` Serverless Function matters).
2. Project Settings → Environment Variables:
   - `RESEND_API_KEY` — required. Resend API key for the `organicallyseo.com` sender.
   - `CONTACT_EMAIL` — optional. Kevin's inbox. Falls back to `ryan.organically@gmail.com` if unset.
3. Deploy, note the resulting `https://<project>.vercel.app` URL.
4. Repo → **Settings → Secrets and variables → Actions → Variables** (not
   Secrets — it's just a URL, nothing sensitive) → add
   `VITE_CONTACT_API_URL` = `https://<project>.vercel.app/api/contact`.
5. Re-run the Pages workflow (or push again) so the build picks up the variable.

`api/contact.ts` sets CORS headers (`Access-Control-Allow-Origin`) scoped to
`https://kevinclarkofficial.com`, `https://www.kevinclarkofficial.com`, and
`http://localhost:5173` — cross-origin from the Pages domain to the Vercel
function only works because of this. Add any new origin (e.g. a Vercel
preview URL used for testing) to `ALLOWED_ORIGINS` in that file if needed.

Without `VITE_CONTACT_API_URL` set, `IntakeForm` falls back to the relative
`/api/contact`, which silently 404s on GitHub Pages — the form will look like
it's submitting but never send. Confirm the variable is set before calling
this done.

## Resend setup

The sender alias `Kevin Clark <leads@organicallyseo.com>` must be verified in Resend under the `organicallyseo.com` domain before the function will send. Cc + Reply-To are wired to `ryan.organically@gmail.com` per the monorepo convention.

## Local dev

`npm run dev` runs Vite only — `/api/contact` won't resolve locally unless
`VITE_CONTACT_API_URL` is set in a local `.env.local` pointing at the deployed
Vercel function, or you run `vercel dev` against the API-only project.
