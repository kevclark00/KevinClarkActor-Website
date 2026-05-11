# StringTune integration plan

Lightweight CSS animation runtime. Single singleton + declarative attributes; CSS does all the styling. Library: [`@fiddle-digital/string-tune`](https://www.npmjs.com/package/@fiddle-digital/string-tune) v`1.2.0`.

## Install

```bash
npm install @fiddle-digital/string-tune@1.2.0
```

## React + Vite gotchas (critical)

This site is React (Vite). Two non-negotiable consequences:

1. **Attribute prefix.** React strips unknown DOM attributes, so we MUST use the `data-string="..."` / `data-string-id="..."` form everywhere. StringTune looks for `string-*` first and falls back to `data-string-*`. Native `string="..."` markup will silently fail in React.
2. **Bootstrap in `useEffect`.** StringTune touches the DOM; it must run on the client and exactly once. We mount a tiny `<StringTuneInit />` component at the root of `App.tsx` and `start(60)` inside its effect.

## Bootstrap module

A single file `src/stringtune/StringTuneInit.tsx` owns the singleton. It registers only the modules we use (tree-shake friendly) and exposes the instance via a thin hook for code that needs to fire events programmatically (e.g., `scrollTo`).

Shape:

```tsx
'use client'; // no-op in Vite, harmless
import { useEffect } from 'react';
import StringTune, {
  StringProgress,
  StringParallax,
  StringSplit,
  StringCursor,
  StringMagnetic,
  StringLazy,
  StringResponsive,
  StringLoading,
} from '@fiddle-digital/string-tune';

export function StringTuneInit() {
  useEffect(() => {
    const st = StringTune.getInstance();
    st.setupSettings({
      'offset-top': '-10%',
      'offset-bottom': '-10%',
      'cursor-lerp': 0.75,
      timeout: 600,
    });
    st.use(StringProgress);
    st.use(StringParallax);
    st.use(StringSplit);
    st.use(StringCursor, { lerp: 0.8 });
    st.use(StringMagnetic);
    st.use(StringLazy);
    st.use(StringResponsive);
    st.use(StringLoading, { timeout: 600 });

    st.scrollDesktopMode = 'smooth';
    st.scrollMobileMode = 'default';
    st.speed = 0.1;
    st.speedAccelerate = 0.5;

    st.start(60);
  }, []);

  return null;
}
```

Mount once at the top of `App.tsx`, above the design `<main>`.

## Modules we will use

| Module | Why |
|---|---|
| `StringSplit` | The "Kevin Clark" H1 entrance for every design. Provides `.-s-char` / `.-s-line` wrappers with `--char-index` / `--line-index` CSS vars for stagger keyframes. Keeps `aria-label` on the source. |
| `StringProgress` | Drives a `--progress` 0→1 CSS variable on each section as it scrolls through the viewport. Used for parallax-y reveals and the cinema-bar tightening in design 05. |
| `StringParallax` | Subtle depth on photo placeholders. Default scope: desktop smooth-scroll. Mobile drops to flat — good. |
| `StringCursor` | Custom cursor portal. Only ships in designs that want it (07 Grid, 09 Mask Reveal). |
| `StringMagnetic` | One use only: the "Send" button in the intake form across all 10 designs. Tasteful, not gimmicky. |
| `StringLazy` | Photo placeholders fade in via `-loaded` class. Lets us swap real photos in later without rewiring. |
| `StringResponsive` | `data-string-mobile` / `data-string-desktop` toggles let some designs collapse safely on small screens (e.g., design 03's split halftone becomes stacked). |
| `StringLoading` | Adds `-loaded` to `<html>` after a 600ms timeout. Designs gate their entrance animations on `html.-loaded`. |

## Modules we will NOT use (yet)

- `StringMasonry` — no filmography grid in this scope; the site is 10 short pages, not a credits list.
- `StringVideoAutoplay` — no reels wired in yet. If Kevin sends a reel later, add it for designs 01 / 04 / 05.
- `StringForm` — our intake form is React-controlled and already validates client-side + server-side. Adding declarative validation would duplicate the existing flow.
- `StringImpulse`, `StringSpotlight` — flashy; out of step with the "calmer over flashier" rule.

## H1 entrance pattern (the wrapped/unwrapped split)

Every design renders a "Kevin Clark" headline with `class="kc-h1"`. To stay consistent with the dev contract already in `src/types.ts`, we add a single `data-mode` attribute:

- **`data-mode="letters"` ("wrapped")** — attach `data-string="split"` and `data-string-split="line|char-line"`. StringTune rewrites the text into `<span class="-s-char">` per character. Each design writes a keyframe targeting `.kc-h1[data-mode="letters"] .-s-char` keyed off `--char-index`.
- **`data-mode="single"` ("unwrapped")** — no StringTune attribute; we treat the H1 as a single block and animate it via `.kc-h1[data-mode="single"]` (translate / clip-path / mask sweep / etc.).

So the "wrapped/unwrapped" language maps 1:1 to "StringSplit attached vs. not."

## Per-design module map

Each design imports its own CSS (already established convention) and uses the `data-string-*` attributes listed below. Designs 1–10 are short — 1–3 viewports each — so module usage stays light.

| # | Name | H1 mode | StringTune attrs to add | CSS hook |
|---|---|---|---|---|
| 01 | Brutalist Bleed | `single` | `data-string="parallax"` on hero photo column. | Photo drift on scroll. |
| 02 | Editorial Grid | `letters` | H1 `data-string="split" data-string-split="line\|char-line[right]"`. `data-string="progress" data-string-id="edit"` on section. | Per-char stagger from right; fine rules slide from `--progress`. |
| 03 | Split Halftone | `letters` | H1 split. `data-string="parallax"` on each half-photo with opposite directions. `data-string-desktop` on the split container, `data-string-mobile` on a stacked fallback. | Per-char with `mix-blend-mode: difference`; halves drift opposed. |
| 04 | Marquee | `single` | `data-string="progress" data-string-id="marquee"` on band. (Marquee itself is pure CSS `@keyframes`; progress drives a vertical photo shift.) | Band scrolls; photo lifts as `--progress` advances. |
| 05 | Cinema | `single` | `data-string="progress" data-string-id="cinema"` on section. | Letterbox bars retract based on `--progress`; serif name fades in. |
| 06 | Stack Reveal | `letters` | H1 split with `data-string-split="line\|char-line[center]"`. | Per-line stagger via `--line-index` and per-char within line. |
| 07 | Grid Type | `letters` | H1 split. `data-string="cursor"` on each grid cell. Cursor portal lives in this design only (mount conditionally — see "Cursor scoping"). | Cursor grows on cell hover; cells reveal via `--char-index`. |
| 08 | Vertical Spine | `single` | `data-string="parallax" data-string-parallax="0.2"` on hero photo. | Sideways name held still; photo drifts under it. |
| 09 | Mask Reveal | `single` | `data-string="progress" data-string-id="mask"` on section. Optional `data-string="cursor"` with `data-string-cursor-class="-mask"` to scrub the mask via cursor in desktop. | `clip-path: inset(--progress…)` reveal. |
| 10 | Minimal Serif | `letters` | H1 split, very slow stagger. | Whisper-quiet character fade-in. |

**Wrapped vs unwrapped totals:** 5 wrapped (02, 03, 06, 07, 10) and 5 unwrapped (01, 04, 05, 08, 09). Meets the "at least 4 of each" rule.

**All designs:** the IntakeForm's Send button gets `data-string="magnetic" data-string-strength="0.4" data-string-radius="120"`. Wire this in `src/components/IntakeForm.tsx` once — covers all 10.

## Cursor scoping

Only designs 07 and 09 use `StringCursor`. The portal element (`<div data-string-cursor="default">`) must exist for those designs and NOT for others (otherwise the cursor portal lingers behind a design that didn't ask for it). Options:

- **Recommended:** render the portal inside `Design07` and `Design09` themselves. When the user navigates away via the switcher, the portal unmounts cleanly because `App.tsx` swaps designs via `key={active.id}`.
- Alternative: a single root portal gated by `data-design-id`. More state to manage. Skip.

## CSS variables we will read

From StringTune outputs:

- `--progress` (0..1) — written by `StringProgress` on the host element.
- `--char-index`, `--line-index` — written by `StringSplit` on each wrapper.
- `--parallax-y` (or transform set inline) — `StringParallax` handles the transform itself; we don't typically read it.
- `--magnetic-x`, `--magnetic-y` — `StringMagnetic` writes these; we consume via `transform: translate3d(var(--magnetic-x), var(--magnetic-y), 0)`.
- `--cursor-x`, `--cursor-y` — global cursor portal.

## Loading gate

Add `html:not(.-loaded) main { opacity: 0; }` to `global.css` so designs don't pop in before fonts are ready. `StringLoading` flips `.-loaded` on `<html>` 600ms after DOMContentLoaded.

## Accessibility

- `StringSplit` preserves `aria-label="Kevin Clark"` on the source `<h1>` and marks per-char spans `aria-hidden`. Screen readers still read "Kevin Clark."
- `@media (prefers-reduced-motion: reduce)` already nukes long transitions in `global.css`. Per-design `@keyframes` should be wrapped in the same query.
- Magnetic / cursor / parallax should all degrade silently — StringTune auto-disconnects parallax/lerp on mobile by default.

## Phasing

1. Install dep + write `StringTuneInit.tsx`, mount in `App.tsx`. Verify singleton boots without errors.
2. Wire `StringSplit` on all 10 H1s + write the two baseline keyframes (`letters` mode and `single` mode entrances).
3. Per-design pass: add the module attrs from the map above + the design-local CSS.
4. Wire the magnetic Send button in `IntakeForm.tsx` (one line; covers all designs).
5. Add the loading gate.
6. QA: reduced-motion, mobile, keyboard nav (switcher arrow keys must still work; `StringTune.scrollDesktopMode` doesn't intercept them).

## Files to add/touch when integration starts

- `src/stringtune/StringTuneInit.tsx` — new.
- `src/App.tsx` — mount `<StringTuneInit />` (one line above `<main>`).
- `src/styles/global.css` — add loading gate + baseline H1 entrance keyframes.
- `src/components/IntakeForm.tsx` — add `data-string="magnetic"` etc. on Send button.
- `src/designs/Design0N.tsx` (each) — add `data-string-*` attributes per the map.
- `src/designs/Design0N.css` (each) — add module-specific keyframes / consumers.

That's the plan.
