import { IntakeForm } from '../components/IntakeForm';
import './Design15.css';

const NAME = 'Kevin Clark';

type Credit = {
  brand: string;
  role: string;
};

const CREDITS: Credit[] = [
  { brand: 'Post University', role: 'Model' },
  { brand: 'American Eagle', role: 'Model' },
  { brand: 'Squid Game Season 2', role: 'Live Promo' },
  { brand: 'The Melting Pot', role: 'Hand Model' },
];

const RAIL_LEFT = [
  { numeral: 'I', label: 'Hero' },
  { numeral: 'II', label: 'Works' },
  { numeral: 'III', label: 'Reel' },
  { numeral: 'IV', label: 'About' },
];

export function Design15() {
  return (
    <article className="design d15" data-design="vertical-reading">
      {/* LEFT RAIL — sideways section labels, structural accent */}
      <aside className="d15__rail d15__rail--left" aria-hidden="true">
        <div className="d15__rail-inner">
          {RAIL_LEFT.map((r, i) => (
            <span
              key={r.label}
              className="d15__rail-label"
              style={{ ['--rail-i' as string]: String(i) }}
            >
              <span className="d15__rail-numeral">{r.numeral}</span>
              <span className="d15__rail-dot" aria-hidden="true">·</span>
              <span className="d15__rail-text">{r.label}</span>
            </span>
          ))}
        </div>
        <span className="d15__rail-mark d15__rail-mark--bottom">
          <span className="d15__rail-text">Pittsburgh · PA</span>
        </span>
      </aside>

      {/* RIGHT RAIL — Pittsburgh / 412 vertical mark */}
      <aside className="d15__rail d15__rail--right" aria-hidden="true">
        <span className="d15__rail-mark d15__rail-mark--top">
          <span className="d15__rail-text">Kevin Clark · The Talent Group</span>
        </span>
        <span className="d15__rail-mark d15__rail-mark--bottom">
          <span className="d15__rail-text">Pittsburgh · 412</span>
        </span>
      </aside>

      <div className="d15__col">
        {/* ============================================================ HERO */}
        <section className="d15__hero" aria-labelledby="d15-hero-title">
          <div className="d15__hero-edge" aria-hidden="true">
            <span
              className="d15__edge-label"
              style={{ ['--rail-i' as string]: '0' }}
            >
              KEVIN
            </span>
            <span
              className="d15__edge-label d15__edge-label--alt"
              style={{ ['--rail-i' as string]: '1' }}
            >
              412 · The Talent Group
            </span>
          </div>

          <div className="d15__hero-main">
            <div className="d15__hero-meta">
              <span
                className="d15__meta-item"
                style={{ ['--rail-i' as string]: '0' }}
              >
                Non-Union · Actively Submitting
              </span>
              <span
                className="d15__meta-item"
                style={{ ['--rail-i' as string]: '1' }}
              >
                Pittsburgh, PA
              </span>
            </div>

            <div className="d15__divider" aria-hidden="true" />

            <h1
              id="d15-hero-title"
              className="kc-h1 d15__h1"
              data-mode="single"
              aria-label={NAME}
            >
              <span className="kc-word">Kevin</span>{' '}
              <span className="kc-word">Clark</span>
            </h1>

            <p className="d15__hero-sub">
              Actor &amp; model — read top-down, framed by the rail.
            </p>
          </div>

          <figure className="d15__hero-photo">
            <img
              src="/photos/Actor%20in%20pittsburgh%20Kevin%20Clark.jpg"
              alt="Kevin Clark — portrait, Pittsburgh"
              loading="eager"
            />
            <figcaption className="d15__hero-caption">
              <span className="d15__hero-caption-num">01 /</span>
              <span>On location · the 412</span>
            </figcaption>
          </figure>
        </section>

        {/* ========================================================== WORKS */}
        <section className="d15__works" aria-labelledby="d15-works-title">
          <header className="d15__sec-head">
            <p className="d15__eyebrow">II · Works</p>
            <h2 id="d15-works-title" className="d15__sec-title">
              Booked, on record.
            </h2>
          </header>

          <ol className="d15__credits">
            {CREDITS.map((c, i) => (
              <li key={c.brand} className="d15__credit">
                <span className="d15__credit-no">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="d15__credit-brand">{c.brand}</span>
                <span className="d15__credit-role">{c.role}</span>
              </li>
            ))}
          </ol>

          <figure
            className="d15__works-plate"
            data-string="parallax"
            data-string-parallax="0.14"
          >
            <img
              src="/photos/pittsburgh%20actor%203.jpg"
              alt="Kevin Clark, frame from Pittsburgh shoot"
              loading="lazy"
            />
            <figcaption>
              <span className="d15__hero-caption-num">02 /</span>
              <span>Selected stills · Pittsburgh</span>
            </figcaption>
          </figure>
        </section>

        {/* =========================================================== REEL */}
        <section className="d15__video" aria-labelledby="d15-video-title">
          <header className="d15__sec-head">
            <p className="d15__eyebrow">III · Reel</p>
            <h2 id="d15-video-title" className="d15__sec-title">
              A moving frame.
            </h2>
          </header>

          <figure className="d15__reel">
            <div className="d15__reel-frame">
              <video
                className="d15__reel-video"
                poster="/photos/pittsburgh%20actor%205.jpg"
                preload="none"
                playsInline
                muted
                aria-label="Kevin Clark reel — placeholder"
              />
              <button
                type="button"
                className="d15__reel-play"
                aria-label="Play reel (placeholder)"
              >
                <span className="d15__reel-play-triangle" aria-hidden="true" />
              </button>
            </div>
            <figcaption className="d15__reel-cap">
              <span>Reel · Placeholder</span>
              <span className="d15__reel-cap-meta">16 : 9 · forthcoming</span>
            </figcaption>
          </figure>
        </section>

        {/* ========================================================== ABOUT */}
        <section className="d15__info" aria-labelledby="d15-info-title">
          <header className="d15__sec-head">
            <p className="d15__eyebrow">IV · About</p>
            <h2 id="d15-info-title" className="d15__sec-title">
              The tag, the bio, the agency.
            </h2>
          </header>

          <p className="d15__tag">Non-Union · Actively Submitting</p>

          <div className="d15__info-grid">
            <p className="d15__bio">
              Kevin Clark is an actor and model signed by The Talent Group,
              continuing to train in acting technique. He has acted in
              supporting and lead roles across several student and indie film
              productions since 2018.
            </p>

            <figure
              className="d15__info-plate"
              data-string="parallax"
              data-string-parallax="0.12"
            >
              <img
                src="/photos/model%20in%20pittsburgh%20portrait.jpg"
                alt="Kevin Clark, model portrait"
                loading="lazy"
              />
              <figcaption>
                <span className="d15__hero-caption-num">03 /</span>
                <span>Studio · model book</span>
              </figcaption>
            </figure>
          </div>

          <dl className="d15__edu">
            <dt>Education</dt>
            <dd>CCAC Theatre — A.S. Degree, 2017–2019</dd>
          </dl>

          <aside className="d15__rep" aria-label="Representation">
            <p className="d15__eyebrow d15__rep-eyebrow">Representation</p>
            <dl className="d15__rep-list">
              <div className="d15__rep-row">
                <dt>Agency</dt>
                <dd>The Talent Group</dd>
              </div>
              <div className="d15__rep-row">
                <dt>Phone</dt>
                <dd>
                  <a className="d15__phone" href="tel:+14124718011">
                    412-471-8011
                  </a>
                </dd>
              </div>
            </dl>
            <p className="d15__rep-note">
              Route inquiries through the agency.
            </p>
          </aside>
        </section>

        {/* ========================================================= FOOTER */}
        <footer className="d15__footer" aria-labelledby="d15-foot-title">
          <header className="d15__sec-head">
            <p className="d15__eyebrow">V · Inquiries</p>
            <h2 id="d15-foot-title" className="d15__sec-title">
              A short note is enough.
            </h2>
          </header>

          <div className="d15__footer-grid">
            <IntakeForm designId="15" />
            <figure
              className="d15__footer-plate"
              data-string="parallax"
              data-string-parallax="0.10"
            >
              <img
                src="/photos/pittsburgh%20actor%204.jpg"
                alt="Kevin Clark, exterior frame, Pittsburgh"
                loading="lazy"
              />
              <figcaption>
                <span className="d15__hero-caption-num">04 /</span>
                <span>Exterior · the 412</span>
              </figcaption>
            </figure>
          </div>

          <div className="d15__colophon">
            <span>Vertical Reading</span>
            <span>Pittsburgh · 412</span>
            <span>Design 15 / 20</span>
          </div>
        </footer>
      </div>
    </article>
  );
}
