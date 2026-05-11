import { IntakeForm } from '../components/IntakeForm';
import './Design18.css';

// Design 18 — OFF-BASELINE.
// Structural device: a modular CSS Grid drives placement, but every text
// element sits at a deliberately uneven vertical offset within its cell.
// The offsets are a pattern (-0.3em, +0.15em, -0.1em, +0.4em) rather than
// random — kinetic-but-still rather than chaos.
//
// Sequenced hero entrance:
//   Stage 1 (0ms)   : modular grid lines briefly visible behind everything.
//   Stage 2 (300ms) : words drop into their off-baseline slots from way off.
//   Stage 3 (800ms) : grid lines fade out, leaving the layout's ghost.
//   Stage 4 (1100ms): photo settles in.

type Credit = {
  index: string;
  brand: string;
  role: string;
  // offset key drives the translateY class — keeps the pattern deliberate.
  offset: 'up-lg' | 'down-sm' | 'up-sm' | 'down-lg';
  photo?: string;
  photoAlt?: string;
  note?: string;
};

// Credits cycle through the four offsets in the established pattern, so each
// row sits at a different baseline. Two carry photos so the section breathes
// without recycling any frame from elsewhere on the page.
const CREDITS: Credit[] = [
  {
    index: 'i',
    brand: 'Post University',
    role: 'Model',
    offset: 'up-lg',
    photo: '/photos/Actor%20in%20pittsburgh%20Kevin%20Clark.jpg',
    photoAlt: 'Kevin Clark — campaign still',
  },
  {
    index: 'ii',
    brand: 'American Eagle',
    role: 'Model',
    offset: 'down-sm',
    note: 'Shot near the Strip District',
  },
  {
    index: 'iii',
    brand: 'Squid Game · Season 2',
    role: 'Live Promo',
    offset: 'up-sm',
    photo: '/photos/model%20in%20pittsburgh%20portrait.jpg',
    photoAlt: 'Kevin Clark — portrait study',
  },
  {
    index: 'iv',
    brand: 'The Melting Pot',
    role: 'Hand Model',
    offset: 'down-lg',
  },
];

export function Design18() {
  return (
    <article className="design d18" data-design="off-baseline">
      {/* HERO — modular grid; words drop into uneven baselines on cue. */}
      <section className="d18__hero" aria-labelledby="d18-hero-h">
        {/* The grid lines that flash on briefly during stage 1, then fade. */}
        <div className="d18__grid-lines" aria-hidden>
          <span className="d18__grid-row" style={{ '--row': 1 } as React.CSSProperties} />
          <span className="d18__grid-row" style={{ '--row': 2 } as React.CSSProperties} />
          <span className="d18__grid-row" style={{ '--row': 3 } as React.CSSProperties} />
          <span className="d18__grid-row" style={{ '--row': 4 } as React.CSSProperties} />
          <span className="d18__grid-col" style={{ '--col': 1 } as React.CSSProperties} />
          <span className="d18__grid-col" style={{ '--col': 2 } as React.CSSProperties} />
          <span className="d18__grid-col" style={{ '--col': 3 } as React.CSSProperties} />
          <span className="d18__grid-col" style={{ '--col': 4 } as React.CSSProperties} />
        </div>

        <span className="d18__hero-tag d18__off--up-lg" data-stage="2">
          Non-Union · Actively Submitting
        </span>

        <h1
          id="d18-hero-h"
          className="kc-h1 d18__h1"
          data-mode="single"
          aria-label="Kevin Clark"
        >
          <span className="kc-word d18__word d18__word--kevin d18__off--down-sm" data-stage="2">
            Kevin
          </span>
          <span className="kc-word d18__word d18__word--clark d18__off--up-sm" data-stage="2">
            Clark
          </span>
        </h1>

        <span className="d18__hero-rivers d18__off--down-lg" data-stage="2">
          412 · Three Rivers
        </span>

        <span className="d18__hero-role d18__off--up-sm" data-stage="2">
          Actor &amp; Model
        </span>

        <figure className="d18__hero-photo d18__off--down-sm" data-stage="4">
          <img
            src="/photos/pittsburgh%20actor%203.jpg"
            alt="Kevin Clark — headshot"
            loading="eager"
          />
        </figure>
      </section>

      {/* WORKS — each row's index/brand/role sits on its own baseline within
          a shared modular row. Offsets repeat the pattern from the hero. */}
      <section className="d18__section d18__works" aria-labelledby="d18-works-h">
        <header className="d18__section-head">
          <span className="d18__section-num d18__off--up-lg">01</span>
          <h2 id="d18-works-h" className="d18__section-h d18__off--down-sm">
            Selected Works
          </h2>
          <span className="d18__section-tag d18__off--up-sm">Modeling · Acting</span>
        </header>

        <ol className="d18__credits">
          {CREDITS.map((c) => (
            <li
              key={c.index}
              className={`d18__credit d18__credit--${c.offset}`}
              data-has-photo={c.photo ? 'true' : 'false'}
            >
              <span className="d18__credit-index d18__off--up-lg">{c.index}</span>
              <span className="d18__credit-brand d18__off--down-sm">{c.brand}</span>
              <span className="d18__credit-role d18__off--up-sm">{c.role}</span>
              {c.photo ? (
                <figure className="d18__credit-photo d18__off--down-lg">
                  <img src={c.photo} alt={c.photoAlt ?? ''} loading="lazy" />
                </figure>
              ) : c.note ? (
                <span className="d18__credit-note d18__off--down-lg">{c.note}</span>
              ) : (
                <span className="d18__credit-rule d18__off--down-lg" aria-hidden />
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* VIDEO — landscape 16:9 poster-only with CSS play overlay. The frame
          itself sits slightly off-baseline within the section grid. */}
      <section className="d18__section d18__video" aria-labelledby="d18-video-h">
        <header className="d18__section-head">
          <span className="d18__section-num d18__off--up-lg">02</span>
          <h2 id="d18-video-h" className="d18__section-h d18__off--down-sm">
            Reel
          </h2>
          <span className="d18__section-tag d18__off--up-sm">Landscape · 16:9</span>
        </header>

        <figure className="d18__video-frame d18__off--down-sm">
          <div className="d18__video-stage">
            <video
              className="d18__video-el"
              poster="/photos/pittsburgh%20actor%204.jpg"
              preload="none"
              playsInline
              muted
              aria-label="Kevin Clark — reel placeholder"
            />
            <span className="d18__video-play" aria-hidden>
              <span className="d18__video-play-glyph" />
            </span>
          </div>
          <figcaption className="d18__video-caption">Reel · Placeholder</figcaption>
        </figure>
      </section>

      {/* INFO — bio, education, representation. Labels and values sit on
          different baselines within each fact, keeping the rhythm alive. */}
      <section className="d18__section d18__info" aria-labelledby="d18-info-h">
        <header className="d18__section-head">
          <span className="d18__section-num d18__off--up-lg">03</span>
          <h2 id="d18-info-h" className="d18__section-h d18__off--down-sm">
            About
          </h2>
          <span className="d18__section-tag d18__off--up-sm">Bio · Reps</span>
        </header>

        <div className="d18__info-grid">
          <p className="d18__bio d18__off--up-sm">
            Kevin Clark is an actor and model signed by The Talent Group,
            continuing to train in acting technique. He has acted in supporting
            and lead roles across several student and indie film productions
            since 2018.
          </p>

          <figure className="d18__info-photo d18__off--down-lg">
            <img
              src="/photos/pittsburgh%20actor%205.jpg"
              alt="Kevin Clark — frame study"
              loading="lazy"
            />
          </figure>

          <dl className="d18__facts">
            <div className="d18__fact">
              <dt className="d18__off--up-lg">Education</dt>
              <dd className="d18__off--down-sm">
                CCAC Theatre — A.S. Degree, 2017–2019
              </dd>
            </div>
            <div className="d18__fact">
              <dt className="d18__off--up-sm">Base</dt>
              <dd className="d18__off--down-lg">Pittsburgh · 412</dd>
            </div>
          </dl>

          <aside className="d18__rep">
            <span className="d18__rep-label d18__off--up-lg">Representation</span>
            <p className="d18__rep-agency d18__off--down-sm">The Talent Group</p>
            <a className="d18__rep-phone d18__off--up-sm" href="tel:+14124718011">
              412 · 471 · 8011
            </a>
            <p className="d18__rep-note d18__off--down-lg">
              Route inquiries through the agency.
            </p>
          </aside>
        </div>
      </section>

      {/* FOOTER — form sits inside the same modular rhythm; the design number
          and tagline punctuate the corners. */}
      <footer className="d18__footer">
        <div className="d18__footer-head">
          <span className="d18__section-num d18__off--up-lg">04</span>
          <h2 className="d18__section-h d18__off--down-sm">Contact</h2>
          <span className="d18__section-tag d18__off--up-sm">Direct · Replied</span>
        </div>

        <div className="d18__footer-form d18__off--down-sm">
          <IntakeForm designId="18" />
        </div>

        <div className="d18__footer-meta" aria-hidden>
          <span className="d18__off--up-lg">Off-Baseline</span>
          <span className="d18__off--down-sm">18 / 20</span>
        </div>
      </footer>
    </article>
  );
}
