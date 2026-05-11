import { IntakeForm } from '../components/IntakeForm';
import './Design17.css';

// Design 17 — CENTERLINE.
// Structural device: a single 1px vertical rule down the middle of the
// viewport. Every section's content alternates sides around this axis;
// text-align mirrors which side the block lives on so the line never
// feels arbitrary. The line itself is the page.

type Credit = {
  index: string;
  brand: string;
  role: string;
  side: 'left' | 'right';
  photo?: string;
  photoAlt?: string;
};

// Credits alternate sides. Two carry photos (left-of-line tiles), two are
// type-only — keeps the axis breathing and avoids photo repetition.
const CREDITS: Credit[] = [
  {
    index: '01',
    brand: 'Post University',
    role: 'Model',
    side: 'right',
    photo: '/photos/Actor%20in%20pittsburgh%20Kevin%20Clark.jpg',
    photoAlt: 'Kevin Clark — campaign frame',
  },
  {
    index: '02',
    brand: 'American Eagle',
    role: 'Model',
    side: 'left',
  },
  {
    index: '03',
    brand: 'Squid Game · Season 2',
    role: 'Live Promo',
    side: 'right',
    photo: '/photos/model%20in%20pittsburgh%20portrait.jpg',
    photoAlt: 'Kevin Clark — portrait',
  },
  {
    index: '04',
    brand: 'The Melting Pot',
    role: 'Hand Model',
    side: 'left',
  },
];

export function Design17() {
  return (
    <article className="design d17" data-design="centerline">
      {/* The centerline. A single fixed-position 1px column that anchors the
          entire page. It draws downward from the top on load as stage 1 of
          the hero entrance, then stays put as the page scrolls under it. */}
      <div className="d17__line" aria-hidden />

      {/* HERO — sequenced entrance.
          Stage 1 (0ms): centerline scaleY 0→1.
          Stage 2 (400ms): h1 slides in from far-left.
          Stage 3 (700ms): photo slides in from far-right.
          Stage 4 (1000ms): metadata fades on both sides. */}
      <section className="d17__hero" aria-labelledby="d17-hero-h">
        <div className="d17__hero-left">
          <span className="d17__eyebrow d17__eyebrow--right" data-stage="4">
            Pittsburgh · 412
          </span>
          <h1
            id="d17-hero-h"
            className="kc-h1 d17__h1"
            data-mode="single"
            data-stage="2"
            aria-label="Kevin Clark"
          >
            <span className="kc-word">Kevin</span>{' '}
            <span className="kc-word">Clark</span>
          </h1>
          <p className="d17__hero-tag" data-stage="4">
            Non-Union · Actively Submitting
          </p>
        </div>

        <div className="d17__hero-right">
          <figure className="d17__hero-photo" data-stage="3">
            <img
              src="/photos/pittsburgh%20actor%203.jpg"
              alt="Kevin Clark — headshot"
              loading="eager"
            />
          </figure>
          <span className="d17__hero-meta" data-stage="4">
            Actor · Model
          </span>
        </div>
      </section>

      {/* PITTSBURGH PLATE — sits flush against the centerline, halfway
          between hero and works. Reads like a milestone on the axis. */}
      <aside className="d17__plate" aria-hidden>
        <span className="d17__plate-num">412</span>
        <span className="d17__plate-rule" />
        <span className="d17__plate-label">Three Rivers</span>
      </aside>

      {/* WORKS — credits hug the line, alternating sides. Two carry photos
          on the opposite side of the line from the credit itself, so each
          row reads as a complete sentence across the axis. */}
      <section className="d17__section d17__works" aria-labelledby="d17-works-h">
        <header className="d17__section-head">
          <span className="d17__section-num d17__section-num--left">i.</span>
          <h2 id="d17-works-h" className="d17__section-h d17__section-h--right">
            Selected Works
          </h2>
        </header>

        <ol className="d17__credits">
          {CREDITS.map((c) => (
            <li
              key={c.index}
              className={`d17__credit d17__credit--${c.side}`}
              data-has-photo={c.photo ? 'true' : 'false'}
            >
              {c.photo ? (
                <figure
                  className={`d17__credit-photo d17__credit-photo--${
                    c.side === 'right' ? 'left' : 'right'
                  }`}
                >
                  <img src={c.photo} alt={c.photoAlt ?? ''} loading="lazy" />
                </figure>
              ) : (
                <span
                  className={`d17__credit-tick d17__credit-tick--${
                    c.side === 'right' ? 'left' : 'right'
                  }`}
                  aria-hidden
                />
              )}
              <div className={`d17__credit-body d17__credit-body--${c.side}`}>
                <span className="d17__credit-index">{c.index}</span>
                <span className="d17__credit-brand">{c.brand}</span>
                <span className="d17__credit-role">{c.role}</span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* VIDEO — sits centered on the line. Landscape 16:9 poster-only video
          with a CSS play overlay. The centerline runs visibly through the
          poster like a film-strip perforation. */}
      <section className="d17__section d17__video" aria-labelledby="d17-video-h">
        <header className="d17__section-head">
          <span className="d17__section-num d17__section-num--left">ii.</span>
          <h2 id="d17-video-h" className="d17__section-h d17__section-h--right">
            Reel
          </h2>
        </header>

        <figure className="d17__video-frame">
          <div className="d17__video-stage">
            <video
              className="d17__video-el"
              poster="/photos/pittsburgh%20actor%204.jpg"
              preload="none"
              playsInline
              muted
              aria-label="Kevin Clark — reel placeholder"
            />
            <span className="d17__video-play" aria-hidden>
              <span className="d17__video-play-glyph" />
            </span>
          </div>
          <figcaption className="d17__video-caption">
            Reel · Placeholder
          </figcaption>
        </figure>
      </section>

      {/* INFO — bio left of the line, representation right. Mirrors the
          hero rhythm so the page reads as a pair of bookends. */}
      <section className="d17__section d17__info" aria-labelledby="d17-info-h">
        <header className="d17__section-head">
          <span className="d17__section-num d17__section-num--left">iii.</span>
          <h2 id="d17-info-h" className="d17__section-h d17__section-h--right">
            About
          </h2>
        </header>

        <div className="d17__info-grid">
          <div className="d17__info-left">
            <p className="d17__bio">
              Kevin Clark is an actor and model signed by The Talent Group,
              continuing to train in acting technique. He has acted in
              supporting and lead roles across several student and indie film
              productions since 2018.
            </p>
            <dl className="d17__facts">
              <div className="d17__fact">
                <dt>Education</dt>
                <dd>CCAC Theatre — A.S. Degree, 2017–2019</dd>
              </div>
              <div className="d17__fact">
                <dt>Base</dt>
                <dd>Pittsburgh, PA — routed via 412</dd>
              </div>
            </dl>
          </div>

          <div className="d17__info-right">
            <figure className="d17__info-photo">
              <img
                src="/photos/pittsburgh%20actor%205.jpg"
                alt="Kevin Clark — frame study"
                loading="lazy"
              />
            </figure>
            <div className="d17__rep">
              <span className="d17__rep-label">Representation</span>
              <p className="d17__rep-agency">The Talent Group</p>
              <a className="d17__rep-phone" href="tel:+14124718011">
                412 · 471 · 8011
              </a>
              <p className="d17__rep-note">
                Route inquiries through the agency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER — intake form sits centered on the line, bordered by it. */}
      <footer className="d17__footer">
        <div className="d17__footer-head">
          <span className="d17__section-num d17__section-num--left">iv.</span>
          <h2 className="d17__section-h d17__section-h--right">Contact</h2>
        </div>
        <div className="d17__footer-form">
          <IntakeForm designId="17" />
        </div>
        <div className="d17__footer-meta" aria-hidden>
          <span>Centerline</span>
          <span>17 / 20</span>
        </div>
      </footer>
    </article>
  );
}
