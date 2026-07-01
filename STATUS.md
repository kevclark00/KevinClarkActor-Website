# Status — 2026-05-11

Honest snapshot of where the project is. Ryan's call: *most designs landed unsightly*. This doc records what shipped, what didn't work, and what's next.

## Snapshot

- Repo went from `<h1>Hello World</h1>` to a full Vite + React + TS portfolio with 20 distinct design experiences, an intake form wired for Resend, video placeholders, and StringTune bootstrapped.
- Build: typecheck clean, `vite build` clean (~32 KB gzipped CSS, ~163 KB gzipped JS — StringTune accounts for most of the JS).
- Initial commit pushed to `kevclark00/KevinClarkActor-Website main` at `010e8ee`.
- Live site at `kevinclarkofficial.com` is **not yet running this build** — see Deploy section.

## Stack

- **Vite + React 18 + TypeScript** (strict, with `noUnusedLocals`/`noUnusedParameters`).
- **StringTune** (`@fiddle-digital/string-tune@1.2.0`) — singleton bootstrapped in `src/stringtune/StringTuneInit.tsx`, registered modules: `StringParallax`, `StringProgress`, `StringLazy`, `StringResponsive`, `StringLoading`. React requires the `data-string-*` attribute prefix.
- **Resend** — serverless endpoint at `api/contact.ts` (Vercel-style) using `leads@organicallyseo.com` per the Organically convention. The form in every design POSTs to `/api/contact` and includes a honeypot.

## What shipped today

- 20 design experiences (`src/designs/Design01.tsx` … `Design20.tsx`, each with sibling CSS).
- Bottom-right switcher (fixed pill + URL hash + arrow keys) in `src/components/Switcher.tsx`, wired in `src/App.tsx`.
- Intake form (`src/components/IntakeForm.tsx` + `.css`) — controlled inputs, validation, honeypot, "send another" reset.
- `api/contact.ts` — Vercel serverless function, POST-only, validates, sends via Resend, generic error responses.
- 5 hero photos in `public/photos/`. The "Actor in pittsburgh Kevin Clark" file is the only true landscape; the other four are portraits.
- StringTune iterations on three photos:
  - `pittsburgh actor 3.jpg` → D5, **StringParallax** (slow vertical drift)
  - `pittsburgh actor 4.jpg` → D7, **StringProgress** (scroll-progress scales/desaturates)
  - `pittsburgh actor 5.jpg` → D9, **StringLazy** (viewport-triggered blur reveal)
- Content brief (`KEVIN.md`), StringTune plan (`STRINGTUNE.md`), deploy notes (`DEPLOY.md`).

## Quality assessment — honest

Ryan's words after the full walkthrough: *"not great"*, *"a lot of repeats"*, *"most have too much noise"*. Treat the 20 designs as v1 sketches, not finished work.

**Specific calls from earlier sessions:**
- D1 hero — *"the best"*. The 4-stage cascade lands. Body is fine.
- D4 — *"cool with the ticker"*. One slower ticker + the giant outlined slab marquee work.
- D6 — *"ok"* (after stripping the 4-row stack down to one).
- D9 font (before rework) — *"terrible"*. Replaced with Fraunces serif treatment.
- D5, D9, D10 — all flagged as full reworks; results are an improvement but not landing yet.
- D11–D20 (the 10 net-new designs) — also flagged as not landing. The 20-subagent parallel dispatch produced output that converged on similar visual tropes (mono corner labels, italic Fraunces eyebrows, hairline rules, "section · N" kickers everywhere). Lots of surface motion that reads like noise.

**Persistent issues to fix next round:**
1. Designs over-rely on the same kit of tropes — mono uppercase eyebrows, hairline rules, corner labels, slash-separated meta lines. The "abstract minimalist" brief needs harder limits.
2. Photo aspect ratios are still inconsistent across designs — only one real landscape photo exists, but multiple designs crop portraits into 16:9 video placeholders.
3. Hero entrance sequences feel similar across the new builds (fade-down → rule-grow → letter-rise → photo-land cascade) — variety in the entrance choreography would help.
4. Pittsburgh wordage is in place but sometimes shows up as data ("412 · 30°", "40.44 N / 79.99 W") instead of voice. The literary touches that worked (D11 Index "Mt. Washington when a skyline is wanted") are stronger.
5. KevinBody component is now unused (all designs build their bodies inline). Can be deleted in a cleanup pass.

## Deploy — current situation

The `CNAME` file points `kevinclarkofficial.com` at GitHub Pages. GH Pages serves the repo root as a static site — **it does not run `vite build`**. So pushing the source does not update the live site.

Two paths forward, pick one when ready:

1. **GitHub Action build → `gh-pages` branch.** Keeps the domain on GitHub Pages. Run `vite build`, commit `dist/` to `gh-pages`, set Pages source to that branch. *Caveat:* the Resend `/api/contact` endpoint can't run on GH Pages — would need a separate worker (Cloudflare Worker or a Vercel function on a different subdomain) for the form to actually send.

2. **Vercel (recommended).** `DEPLOY.md` describes this. Vercel runs `vite build` automatically AND turns `api/contact.ts` into a working Serverless Function. Point `kevinclarkofficial.com` at Vercel via the Vercel dashboard (which means moving the CNAME off GitHub Pages). Required env vars on Vercel: `RESEND_API_KEY`, optional `CONTACT_EMAIL`.

Until one of these is set up, the live site is still showing the old `Hello World` (or whatever GH Pages last built).

## Next moves (suggested)

1. Decide which of the 20 designs are keepers and which to delete — probably keep 3–5, scrap the rest.
2. Iterate on the keepers individually rather than via mass parallel subagents (the parallel pattern produces convergent slop).
3. Real reel video: when Kevin sends an MP4, drop it into `public/video/reel.mp4` and add `src=` to the `<video>` element in each design — they're all using `<video poster=... preload="none">` with no `src` already.
4. Real photos: more hero photos, especially additional landscape orientations, would unlock more design treatments without aspect-ratio compromises.
5. Pick a deploy target (Vercel preferred for the form to work).
6. Ban the overused tropes (corner mono labels, italic Fraunces eyebrows, slash-meta-lines) in the next rework brief.
