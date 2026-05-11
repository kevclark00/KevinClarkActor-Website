import { IntakeForm } from '../components/IntakeForm';
import './Design19.css';

// Design 19 — EDGE-ALIGNED.
// Angle: content is shoved to the four corners of every viewport. Each section
// reads like a survey marker — top-left index, top-right year, bottom-left
// role, bottom-right phone — with a deliberate void at the center. Only one
// element ever occupies the middle (the H1, a photo, a single line of body).
// The negative space is the design.

type Credit = {
  index: string;
  brand: string;
  role: string;
  year: string;
  detail: string;
  photo?: string;
  photoAlt?: string;
};

// Four credits. Each carries an edge-aligned "detail" line that fills the
// otherwise-empty fourth corner of its row. Two carry photos (Post + Squid
// Game) — those two land in the middle void of their row. American Eagle +
// Melting Pot stay type-only so the photo budget stays at five total across
// the whole page with zero repeats.
const CREDITS: Credit[] = [
  {
    index: '01',
    brand: 'Post University',
    role: 'Model · Campaign',
    year: '2023',
    detail: 'Shot on the South Side flats',
    photo: '/photos/Actor%20in%20pittsburgh%20Kevin%20Clark.jpg',
    photoAlt: 'Kevin Clark — Post University campaign frame',
  },
  {
    index: '02',
    brand: 'American Eagle',
    role: 'Model · Lookbook',
    year: '2022',
    detail: 'Lawrenceville fitting · denim',
  },
  {
    index: '03',
    brand: 'Squid Game · Season 2',
    role: 'Live Promo',
    year: '2024',
    detail: 'Activation talent · regional press',
    photo: '/photos/model%20in%20pittsburgh%20portrait.jpg',
    photoAlt: 'Kevin Clark — Squid Game promo portrait',
  },
  {
    index: '04',
    brand: 'The Melting Pot',
    role: 'Hand Model',
    year: '2021',
    detail: 'Studio plate · downtown',
  },
];

export function Design19() {
  return (
    <article className="design d19" data-design="edge-aligned">
      {/* HERO — sequenced entrance.
          Stage 1 (0ms): top-left anchor drops from above.
          Stage 2 (200ms): top-right anchor drops from above.
          Stage 3 (400ms): bottom-left anchor rises from below.
          Stage 4 (600ms): bottom-right anchor rises from below.
          Stage 5 (1000ms): the H1 lands into the central void. */}
      <section className="d19__hero" aria-labelledby="d19-hero-h">
        <span className="d19__edge d19__edge--tl" data-stage="1">
          <span className="d19__edge-tick">01</span>
          <span className="d19__edge-line">Kevin Clark · Pittsburgh</span>
        </span>

        <span className="d19__edge d19__edge--tr" data-stage="2">
          <span className="d19__edge-line">MMXXVI</span>
          <span className="d19__edge-tick">Folio</span>
        </span>

        <span className="d19__edge d19__edge--bl" data-stage="3">
          <span className="d19__edge-line">Actor &amp; Model</span>
          <span className="d19__edge-tick">Steel City rep</span>
        </span>

        <span className="d19__edge d19__edge--br" data-stage="4">
          <span className="d19__edge-line">Non-Union · 412</span>
          <a
            className="d19__edge-tick d19__edge-link"
            href="tel:+14124718011"
          >
            tel · 471 · 8011
          </a>
        </span>

        <div className="d19__hero-center" data-stage="5">
          <h1
            id="d19-hero-h"
            className="kc-h1 d19__h1"
            data-mode="single"
            aria-label="Kevin Clark"
          >
            <span className="kc-word">Kevin</span>{' '}
            <span className="kc-word">Clark</span>
          </h1>
          <p className="d19__hero-tag" aria-hidden>
            Actively Submitting
          </p>
        </div>
      </section>

      {/* WORKS — each credit is its own edge-aligned viewport. Index left,
          brand right, role top, year bottom. Two of them park a photo in the
          center; the other two leave the void empty save a hairline mark. */}
      <section className="d19__works" aria-labelledby="d19-works-h">
        <header className="d19__section-head" aria-hidden="false">
          <span className="d19__section-num">i.</span>
          <h2 id="d19-works-h" className="d19__section-h">
            Selected Works
          </h2>
          <span className="d19__section-meta">Four credits · 2021–2024</span>
        </header>

        <ol className="d19__credits">
          {CREDITS.map((c) => (
            <li
              key={c.index}
              className="d19__credit"
              data-has-photo={c.photo ? 'true' : 'false'}
            >
              <span className="d19__credit-role" aria-hidden>
                {c.role}
              </span>

              <span className="d19__credit-index">{c.index}</span>

              <span className="d19__credit-brand">{c.brand}</span>

              <span className="d19__credit-year">{c.year}</span>

              <span className="d19__credit-detail" aria-hidden>
                {c.detail}
              </span>

              {c.photo ? (
                <figure className="d19__credit-photo">
                  <img src={c.photo} alt={c.photoAlt ?? ''} loading="lazy" />
                </figure>
              ) : (
                <span className="d19__credit-void" aria-hidden />
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* VIDEO — landscape 16:9, anchored at the bottom-right corner. The top
          and left edges carry the section's edge-aligned metadata; the player
          itself is the bottom-right anchor. Centered captioning lives on the
          edge between them. Poster-only — no src — with a CSS play overlay. */}
      <section className="d19__video" aria-labelledby="d19-video-h">
        <span className="d19__edge d19__edge--tl d19__video-edge">
          <span className="d19__edge-tick">ii.</span>
          <h2 id="d19-video-h" className="d19__edge-line">
            Reel
          </h2>
        </span>

        <span className="d19__edge d19__edge--tr d19__video-edge">
          <span className="d19__edge-line">16 : 9 · placeholder</span>
          <span className="d19__edge-tick">awaiting Kevin's cut</span>
        </span>

        <span className="d19__edge d19__edge--bl d19__video-edge">
          <span className="d19__edge-line">Filmed across</span>
          <span className="d19__edge-tick">Pittsburgh, PA</span>
        </span>

        <figure className="d19__video-frame">
          <div className="d19__video-stage">
            <video
              className="d19__video-el"
              poster="/photos/pittsburgh%20actor%203.jpg"
              preload="none"
              playsInline
              muted
              aria-label="Kevin Clark — reel placeholder"
            />
            <span className="d19__video-play" aria-hidden>
              <span className="d19__video-play-glyph" />
            </span>
          </div>
          <figcaption className="d19__video-caption">
            Reel · Placeholder
          </figcaption>
        </figure>
      </section>

      {/* INFO — bio sits in the center void as a single column; representation
          and education are pinned to the corners as edge anchors so the section
          stays in the same visual language as the hero. */}
      <section className="d19__info" aria-labelledby="d19-info-h">
        <span className="d19__edge d19__edge--tl">
          <span className="d19__edge-tick">iii.</span>
          <h2 id="d19-info-h" className="d19__edge-line">
            About
          </h2>
        </span>

        <span className="d19__edge d19__edge--tr">
          <span className="d19__edge-line">Signed</span>
          <span className="d19__edge-tick">The Talent Group</span>
        </span>

        <span className="d19__edge d19__edge--bl">
          <span className="d19__edge-line">CCAC Theatre</span>
          <span className="d19__edge-tick">A.S. · 2017–2019</span>
        </span>

        <span className="d19__edge d19__edge--br">
          <a
            className="d19__edge-line d19__edge-link"
            href="tel:+14124718011"
          >
            412 · 471 · 8011
          </a>
          <span className="d19__edge-tick">Route via agency</span>
        </span>

        <div className="d19__info-center">
          <p className="d19__bio">
            Kevin Clark is an actor and model signed by The Talent Group,
            continuing to train in acting technique. He has acted in supporting
            and lead roles across several student and indie film productions
            since 2018.
          </p>
          <figure className="d19__info-photo">
            <img
              src="/photos/pittsburgh%20actor%204.jpg"
              alt="Kevin Clark — frame study"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* FOOTER — the intake form is the central object; the four edges carry
          the contact metadata so the footer reads as one final edge-aligned
          frame. The fifth photo lives here, pinned to the bottom-left edge
          as the closing anchor. */}
      <footer className="d19__footer" aria-labelledby="d19-footer-h">
        <span className="d19__edge d19__edge--tl">
          <span className="d19__edge-tick">iv.</span>
          <h2 id="d19-footer-h" className="d19__edge-line">
            Contact
          </h2>
        </span>

        <span className="d19__edge d19__edge--tr">
          <span className="d19__edge-line">Non-Union</span>
          <span className="d19__edge-tick">Actively Submitting</span>
        </span>

        <figure className="d19__footer-photo" aria-hidden="false">
          <img
            src="/photos/pittsburgh%20actor%205.jpg"
            alt="Kevin Clark — closing frame"
            loading="lazy"
          />
          <figcaption>Pittsburgh, PA</figcaption>
        </figure>

        <span className="d19__edge d19__edge--br">
          <span className="d19__edge-line">19 / 20</span>
          <span className="d19__edge-tick">Edge-Aligned</span>
        </span>

        <div className="d19__footer-form">
          <IntakeForm designId="19" />
        </div>
      </footer>
    </article>
  );
}
