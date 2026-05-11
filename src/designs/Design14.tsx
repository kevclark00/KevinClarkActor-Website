import { IntakeForm } from '../components/IntakeForm';
import './Design14.css';

const NAME = 'Kevin Clark';

type Credit = {
  brand: string;
  role: string;
};

const CREDITS: Credit[] = [
  { brand: 'Post University', role: 'Model' },
  { brand: 'American Eagle', role: 'Model' },
  { brand: 'Squid Game · Season 2', role: 'Live Promo' },
  { brand: 'The Melting Pot', role: 'Hand Model' },
];

export function Design14() {
  return (
    <article className="design d14" data-design="asymmetric-grid">
      {/* Faint grid lines — fade in early, fade out completely by ~1700ms */}
      <div className="d14__grid-lines" aria-hidden="true">
        {Array.from({ length: 11 }).map((_, i) => (
          <span key={i} className="d14__grid-line" style={{ ['--n' as string]: i + 1 }} />
        ))}
      </div>

      <div className="d14__canvas">
        {/* MODULE A — top mark, cols 2-5 row 1 (slides from above) */}
        <header className="d14__mod d14__mark" aria-hidden="false">
          <span className="d14__mark-dot" />
          <span className="d14__mark-label">K · C</span>
          <span className="d14__mark-sep">/</span>
          <span className="d14__mark-tag">Non-Union · Actively Submitting</span>
        </header>

        {/* MODULE B — coordinates plate, cols 9-12 row 1 (slides from above-right) */}
        <aside className="d14__mod d14__coords" aria-label="Coordinates">
          <p className="d14__coords-eyebrow">Coordinates</p>
          <dl className="d14__coords-list">
            <div className="d14__coords-row">
              <dt>Lat</dt><dd>40.4406&deg; N</dd>
            </div>
            <div className="d14__coords-row">
              <dt>Lng</dt><dd>79.9959&deg; W</dd>
            </div>
            <div className="d14__coords-row">
              <dt>City</dt><dd>Pittsburgh, PA</dd>
            </div>
            <div className="d14__coords-row">
              <dt>Rivers</dt><dd>Three (Mon · Al · Ohio)</dd>
            </div>
          </dl>
        </aside>

        {/* MODULE C — H1 block, cols 2-6 row 2 (slides from left) */}
        <section className="d14__mod d14__hero" aria-labelledby="d14-hero-title">
          <p className="d14__hero-eyebrow">Module 01 / Identity</p>
          <h1
            id="d14-hero-title"
            className="kc-h1 d14__h1"
            data-mode="single"
            aria-label={NAME}
          >
            <span className="kc-word">Kevin</span>{' '}
            <span className="kc-word">Clark</span>
          </h1>
          <p className="d14__hero-sub">
            Actor &amp; model, signed &mdash; working out of the 412.
          </p>
        </section>

        {/* MODULE D — hero photo plate, cols 8-11 rows 1-2 spanning (slides from right) */}
        <figure className="d14__mod d14__photo d14__photo--hero">
          <img
            src="/photos/Actor%20in%20pittsburgh%20Kevin%20Clark.jpg"
            alt="Kevin Clark, on-location frame, Pittsburgh"
            loading="eager"
          />
          <figcaption>
            <span className="d14__photo-no">Plate 01</span>
            <span className="d14__photo-loc">Lawrenceville</span>
          </figcaption>
        </figure>

        {/* Big silent gap — module E sits low and offset */}

        {/* MODULE E — Works / Credits, cols 3-7 (slides from below-left) */}
        <section className="d14__mod d14__works" aria-labelledby="d14-works-title">
          <header className="d14__sec-head">
            <p className="d14__eyebrow">Module 02 / Booked Work</p>
            <h2 id="d14-works-title" className="d14__sec-title">A short ledger.</h2>
          </header>
          <ol className="d14__credits">
            {CREDITS.map((c, i) => (
              <li key={c.brand} className="d14__credit">
                <span className="d14__credit-no">{String(i + 1).padStart(2, '0')}</span>
                <span className="d14__credit-brand">{c.brand}</span>
                <span className="d14__credit-role">{c.role}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* MODULE F — secondary photo, cols 9-12 (slides from right, offset down from credits) */}
        <figure
          className="d14__mod d14__photo d14__photo--side"
          data-string="parallax"
          data-string-parallax="0.18"
        >
          <img
            src="/photos/pittsburgh%20actor%203.jpg"
            alt="Kevin Clark, portrait, Pittsburgh"
            loading="lazy"
          />
          <figcaption>
            <span className="d14__photo-no">Plate 02</span>
            <span className="d14__photo-loc">South Side</span>
          </figcaption>
        </figure>

        {/* MODULE G — Video plate, cols 2-9 (16:9 landscape, offset left) */}
        <section className="d14__mod d14__video" aria-labelledby="d14-video-title">
          <header className="d14__sec-head">
            <p className="d14__eyebrow">Module 03 / Reel</p>
            <h2 id="d14-video-title" className="d14__sec-title">A moving frame.</h2>
          </header>
          <figure className="d14__reel">
            <div className="d14__reel-frame">
              <video
                className="d14__reel-video"
                poster="/photos/pittsburgh%20actor%204.jpg"
                preload="none"
                playsInline
                muted
                aria-label="Kevin Clark reel — placeholder"
              />
              <button
                type="button"
                className="d14__reel-play"
                aria-label="Play reel (placeholder)"
              >
                <span className="d14__reel-play-triangle" aria-hidden="true" />
              </button>
            </div>
            <figcaption className="d14__reel-cap">Reel &middot; Placeholder</figcaption>
          </figure>
        </section>

        {/* MODULE H — Bridges count, cols 10-12 (tiny offset chit) */}
        <aside className="d14__mod d14__bridges" aria-label="Pittsburgh datum">
          <p className="d14__bridges-num">446</p>
          <p className="d14__bridges-label">bridges in the city &mdash; the 412 carries the most of any in the U.S.</p>
        </aside>

        {/* MODULE I — Info / Bio, cols 4-8 (centered-ish, but offset down) */}
        <section className="d14__mod d14__info" aria-labelledby="d14-info-title">
          <header className="d14__sec-head">
            <p className="d14__eyebrow">Module 04 / About</p>
            <h2 id="d14-info-title" className="d14__sec-title">The short of it.</h2>
          </header>
          <p className="d14__bio">
            Kevin Clark is an actor and model signed by The Talent Group,
            continuing to train in acting technique. He has acted in supporting
            and lead roles across several student and indie film productions
            since 2018.
          </p>
          <dl className="d14__edu">
            <div className="d14__edu-row">
              <dt>Education</dt>
              <dd>CCAC Theatre &mdash; A.S. Degree, 2017&ndash;2019</dd>
            </div>
            <div className="d14__edu-row">
              <dt>Based</dt>
              <dd>Pittsburgh &mdash; available across PA, OH, WV</dd>
            </div>
          </dl>
        </section>

        {/* MODULE J — Info-side photo, cols 9-11 (small portrait, slides from right) */}
        <figure className="d14__mod d14__photo d14__photo--info">
          <img
            src="/photos/model%20in%20pittsburgh%20portrait.jpg"
            alt="Kevin Clark, studio portrait, Pittsburgh"
            loading="lazy"
          />
          <figcaption>
            <span className="d14__photo-no">Plate 03</span>
            <span className="d14__photo-loc">Studio · 412</span>
          </figcaption>
        </figure>

        {/* MODULE K — Representation block, cols 2-6 (slides from left, prominent) */}
        <aside className="d14__mod d14__rep" aria-label="Representation">
          <p className="d14__eyebrow">Module 05 / Representation</p>
          <dl className="d14__rep-list">
            <div className="d14__rep-row">
              <dt>Agency</dt>
              <dd>The Talent Group</dd>
            </div>
            <div className="d14__rep-row">
              <dt>Phone</dt>
              <dd>
                <a className="d14__phone" href="tel:+14124718011">412-471-8011</a>
              </dd>
            </div>
          </dl>
          <p className="d14__rep-note">Route inquiries through the agency.</p>
        </aside>

        {/* MODULE L — Closing photo, cols 7-10 (final plate) */}
        <figure className="d14__mod d14__photo d14__photo--close">
          <img
            src="/photos/pittsburgh%20actor%205.jpg"
            alt="Kevin Clark, exterior frame, Pittsburgh"
            loading="lazy"
          />
          <figcaption>
            <span className="d14__photo-no">Plate 04</span>
            <span className="d14__photo-loc">Strip District</span>
          </figcaption>
        </figure>

        {/* MODULE M — Footer / intake, cols 3-9 */}
        <footer className="d14__mod d14__footer" aria-labelledby="d14-foot-title">
          <header className="d14__sec-head">
            <p className="d14__eyebrow">Module 06 / Inquiries</p>
            <h2 id="d14-foot-title" className="d14__sec-title">A short letter.</h2>
          </header>
          <IntakeForm designId="14" />
          <p className="d14__colophon">
            Pittsburgh, PA &middot; 40.44 N / 79.99 W &middot; the 412.
          </p>
        </footer>
      </div>
    </article>
  );
}
