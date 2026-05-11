import { IntakeForm } from '../components/IntakeForm';
import './Design20.css';

// Design 20 — DIAGONAL.
// A thin -32deg accent line cuts top-right to bottom-left across each
// viewport. Content blocks align to the angle; the H1 tilts -10deg to ride
// it; photos clip on the diagonal so they meet the line cleanly. Pittsburgh
// hook: the slash is treated as the "Three Rivers axis", and a small
// "412 · 30deg" annotation appears as a quiet typographic note.

type Credit = {
  index: string;
  brand: string;
  role: string;
  // Two credits carry a photo; the other two are type-only.
  photo?: string;
  photoAlt?: string;
};

const CREDITS: Credit[] = [
  {
    index: '01',
    brand: 'Post University',
    role: 'Model',
    photo: '/photos/model%20in%20pittsburgh%20portrait.jpg',
    photoAlt: 'Kevin Clark — portrait frame',
  },
  {
    index: '02',
    brand: 'American Eagle',
    role: 'Model',
  },
  {
    index: '03',
    brand: 'Squid Game · Season 2',
    role: 'Live Promo',
    photo: '/photos/pittsburgh%20actor%203.jpg',
    photoAlt: 'Kevin Clark — campaign frame',
  },
  {
    index: '04',
    brand: 'The Melting Pot',
    role: 'Hand Model',
  },
];

export function Design20() {
  return (
    <article className="design d20" data-design="diagonal">
      {/* HERO — sequenced sleek entrance.
          Stage 1 (0ms): diagonal line draws (scaleX 0→1, origin top-left) over ~800ms.
          Stage 2 (400ms): H1 tilts in parallel to the diagonal and fades up.
          Stage 3 (800ms): photo enters via diagonal clip-path reveal.
          Stage 4 (1100ms): supporting metadata fades along the diagonal. */}
      <section className="d20__hero" aria-labelledby="d20-hero-h">
        {/* The diagonal accent. Draws across the hero on load. */}
        <span className="d20__slash d20__slash--hero" aria-hidden />

        <div className="d20__hero-frame">
          <div className="d20__hero-text">
            <span className="d20__eyebrow" data-stage="4">
              Pittsburgh · Three Rivers axis
            </span>
            <h1
              id="d20-hero-h"
              className="kc-h1 d20__h1"
              data-mode="single"
              data-stage="2"
              aria-label="Kevin Clark"
            >
              <span className="kc-word">Kevin</span>{' '}
              <span className="kc-word">Clark</span>
            </h1>
            <p className="d20__hero-tag" data-stage="4">
              Non-Union · Actively Submitting
            </p>
          </div>

          <figure className="d20__hero-photo" data-stage="3">
            <img
              src="/photos/Actor%20in%20pittsburgh%20Kevin%20Clark.jpg"
              alt="Kevin Clark — headshot"
              loading="eager"
            />
          </figure>

          {/* Quiet typographic annotation tying Pittsburgh to the angle. */}
          <span className="d20__hero-note" data-stage="4" aria-hidden>
            412 · 30deg
          </span>
        </div>
      </section>

      {/* WORKS — credits stack down a soft diagonal stair. Each row sits
          slightly further right than the last so the list traces the angle.
          Two rows carry a clipped photo. */}
      <section className="d20__section d20__works" aria-labelledby="d20-works-h">
        <span className="d20__slash d20__slash--small" aria-hidden />
        <header className="d20__section-head">
          <span className="d20__section-num">i.</span>
          <h2 id="d20-works-h" className="d20__section-h">
            Selected Works
          </h2>
        </header>

        <ol className="d20__credits">
          {CREDITS.map((c, i) => (
            <li
              key={c.index}
              className="d20__credit"
              style={{ '--step': i } as React.CSSProperties}
              data-has-photo={c.photo ? 'true' : 'false'}
            >
              {c.photo ? (
                <figure className="d20__credit-photo">
                  <img src={c.photo} alt={c.photoAlt ?? ''} loading="lazy" />
                </figure>
              ) : (
                <span className="d20__credit-tick" aria-hidden />
              )}
              <div className="d20__credit-body">
                <span className="d20__credit-index">{c.index}</span>
                <span className="d20__credit-brand">{c.brand}</span>
                <span className="d20__credit-role">{c.role}</span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* VIDEO — landscape 16:9 poster frame, clipped on the diagonal so the
          top-right and bottom-left corners get shaved. Poster only, no src,
          CSS play overlay. */}
      <section className="d20__section d20__video" aria-labelledby="d20-video-h">
        <span className="d20__slash d20__slash--small" aria-hidden />
        <header className="d20__section-head">
          <span className="d20__section-num">ii.</span>
          <h2 id="d20-video-h" className="d20__section-h">
            Reel
          </h2>
        </header>

        <figure className="d20__video-frame">
          <div className="d20__video-stage">
            <video
              className="d20__video-el"
              poster="/photos/pittsburgh%20actor%204.jpg"
              preload="none"
              playsInline
              muted
              aria-label="Kevin Clark — reel placeholder"
            />
            {/* Diagonal slash overlay echoes the page axis through the frame. */}
            <span className="d20__video-slash" aria-hidden />
            <span className="d20__video-play" aria-hidden>
              <span className="d20__video-play-glyph" />
            </span>
          </div>
          <figcaption className="d20__video-caption">
            Reel · Placeholder
          </figcaption>
        </figure>
      </section>

      {/* INFO — bio sits beneath the slash; representation block angles up to
          meet it. Photo clips on the diagonal. */}
      <section className="d20__section d20__info" aria-labelledby="d20-info-h">
        <span className="d20__slash d20__slash--small" aria-hidden />
        <header className="d20__section-head">
          <span className="d20__section-num">iii.</span>
          <h2 id="d20-info-h" className="d20__section-h">
            About
          </h2>
        </header>

        <div className="d20__info-grid">
          <div className="d20__info-col d20__info-col--bio">
            <p className="d20__bio">
              Kevin Clark is an actor and model signed by The Talent Group,
              continuing to train in acting technique. He has acted in
              supporting and lead roles across several student and indie film
              productions since 2018.
            </p>
            <dl className="d20__facts">
              <div className="d20__fact">
                <dt>Education</dt>
                <dd>CCAC Theatre — A.S. Degree, 2017–2019</dd>
              </div>
              <div className="d20__fact">
                <dt>Base</dt>
                <dd>Pittsburgh, PA — 412 corridor</dd>
              </div>
            </dl>
          </div>

          <div className="d20__info-col d20__info-col--media">
            <figure className="d20__info-photo">
              <img
                src="/photos/pittsburgh%20actor%205.jpg"
                alt="Kevin Clark — frame study"
                loading="lazy"
              />
            </figure>
            <div className="d20__rep">
              <span className="d20__rep-label">Representation</span>
              <p className="d20__rep-agency">The Talent Group</p>
              <a className="d20__rep-phone" href="tel:+14124718011">
                412 · 471 · 8011
              </a>
              <p className="d20__rep-note">
                Route inquiries through the agency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER — intake form sits angled off the final slash. */}
      <footer className="d20__footer">
        <span className="d20__slash d20__slash--small" aria-hidden />
        <div className="d20__footer-head">
          <span className="d20__section-num">iv.</span>
          <h2 className="d20__section-h">Contact</h2>
        </div>
        <div className="d20__footer-form">
          <IntakeForm designId="20" />
        </div>
        <div className="d20__footer-meta" aria-hidden>
          <span>Diagonal</span>
          <span>20 / 20</span>
        </div>
      </footer>
    </article>
  );
}
