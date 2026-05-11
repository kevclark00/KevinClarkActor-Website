import { IntakeForm } from '../components/IntakeForm';
import './Design16.css';

const NAME = 'Kevin Clark';

type Credit = {
  brand: string;
  role: string;
  year: string;
};

const CREDITS: Credit[] = [
  { brand: 'Post University', role: 'Model', year: '2024' },
  { brand: 'American Eagle', role: 'Model', year: '2024' },
  { brand: 'Squid Game · Season 2', role: 'Live Promo', year: '2024' },
  { brand: 'The Melting Pot', role: 'Hand Model', year: '2023' },
];

export function Design16() {
  return (
    <article className="design d16" data-design="strict-column">
      <div className="d16__col">
        {/* HERO */}
        <header className="d16__hero" aria-labelledby="d16-h1">
          {/* Stage 1: top rule grows L→R */}
          <div className="d16__rule d16__rule--top" aria-hidden />

          {/* Stage 2: masthead kicker */}
          <p className="d16__masthead">
            <span className="d16__masthead-no">01</span>
            <span className="d16__masthead-dot" aria-hidden>·</span>
            <span className="d16__masthead-name">Kevin Clark</span>
          </p>

          {/* Stage 3: h1 */}
          <h1
            id="d16-h1"
            className="kc-h1 d16__h1"
            data-mode="single"
            aria-label={NAME}
          >
            <span className="kc-word">Kevin</span>{' '}
            <span className="kc-word">Clark</span>
          </h1>

          {/* Stage 4: subtitle */}
          <p className="d16__sub">
            <span>Actor &amp; Model</span>
            <span className="d16__sub-slash" aria-hidden> / </span>
            <span>Pittsburgh</span>
            <span className="d16__sub-slash" aria-hidden> / </span>
            <span>Non-Union</span>
          </p>

          {/* Stage 5: bottom rule + portrait */}
          <div className="d16__rule d16__rule--bottom" aria-hidden />

          <figure className="d16__portrait">
            <img
              src="/photos/model%20in%20pittsburgh%20portrait.jpg"
              alt="Kevin Clark — portrait, Pittsburgh"
              loading="eager"
            />
            <figcaption className="d16__portrait-cap">
              <span>Plate 01</span>
              <span>Portrait · Pittsburgh, PA</span>
            </figcaption>
          </figure>
        </header>

        {/* WORKS */}
        <section className="d16__section" aria-labelledby="d16-works">
          <div className="d16__kicker">
            <span>02</span>
            <span aria-hidden>—</span>
            <span>Selected Booked Work</span>
          </div>
          <h2 id="d16-works" className="d16__h2">
            Credits, set in a single column.
          </h2>

          <ul className="d16__credits">
            {CREDITS.map((c, i) => (
              <li key={c.brand} className="d16__credit">
                <span className="d16__credit-no">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="d16__credit-brand">{c.brand}</span>
                <span className="d16__credit-role">{c.role}</span>
                <span className="d16__credit-year">{c.year}</span>
              </li>
            ))}
          </ul>

          <div className="d16__plates">
            <figure className="d16__plate">
              <img
                src="/photos/Actor%20in%20pittsburgh%20Kevin%20Clark.jpg"
                alt="Kevin Clark — on set, Pittsburgh"
                loading="lazy"
              />
              <figcaption>
                <span>Plate 02</span>
                <span>On Set · 412</span>
              </figcaption>
            </figure>
            <figure className="d16__plate">
              <img
                src="/photos/pittsburgh%20actor%203.jpg"
                alt="Kevin Clark — editorial frame, Pittsburgh"
                loading="lazy"
              />
              <figcaption>
                <span>Plate 03</span>
                <span>Editorial · Strip District</span>
              </figcaption>
            </figure>
            <figure className="d16__plate">
              <img
                src="/photos/pittsburgh%20actor%204.jpg"
                alt="Kevin Clark — exterior frame"
                loading="lazy"
              />
              <figcaption>
                <span>Plate 04</span>
                <span>Exterior · Allegheny</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* VIDEO */}
        <section className="d16__section" aria-labelledby="d16-reel">
          <div className="d16__kicker">
            <span>03</span>
            <span aria-hidden>—</span>
            <span>Moving Picture</span>
          </div>
          <h2 id="d16-reel" className="d16__h2">
            A short reel, in 16:9.
          </h2>

          <figure className="d16__reel">
            <div className="d16__reel-frame">
              <video
                className="d16__reel-video"
                poster="/photos/pittsburgh%20actor%205.jpg"
                preload="none"
                playsInline
                muted
                aria-label="Kevin Clark reel — placeholder"
              />
              <span className="d16__reel-play" aria-hidden>
                <span className="d16__reel-play-tri" />
              </span>
            </div>
            <figcaption className="d16__reel-cap">
              <span>Reel · Placeholder</span>
              <span className="d16__reel-cap-meta">16:9 · Muted Preview</span>
            </figcaption>
          </figure>
        </section>

        {/* INFO */}
        <section className="d16__section" aria-labelledby="d16-info">
          <div className="d16__kicker">
            <span>04</span>
            <span aria-hidden>—</span>
            <span>Notes from Pittsburgh</span>
          </div>
          <h2 id="d16-info" className="d16__h2">
            Non-Union · Actively Submitting
          </h2>

          <p className="d16__bio">
            Kevin Clark is an actor and model signed by The Talent Group,
            continuing to train in acting technique. He has acted in supporting
            and lead roles across several student and indie film productions
            since 2018.
          </p>

          <dl className="d16__data">
            <div className="d16__data-row">
              <dt>Base</dt>
              <dd>Pittsburgh, PA · 412</dd>
            </div>
            <div className="d16__data-row">
              <dt>Status</dt>
              <dd>Non-Union, actively submitting</dd>
            </div>
            <div className="d16__data-row">
              <dt>Education</dt>
              <dd>CCAC Theatre — A.S. Degree, 2017–2019</dd>
            </div>
            <div className="d16__data-row">
              <dt>Range</dt>
              <dd>Pennsylvania · Ohio · West Virginia</dd>
            </div>
          </dl>

          <aside className="d16__rep" aria-labelledby="d16-rep">
            <div className="d16__kicker d16__kicker--rep">
              <span>05</span>
              <span aria-hidden>—</span>
              <span id="d16-rep">Representation</span>
            </div>
            <dl className="d16__rep-list">
              <div className="d16__rep-row">
                <dt>Agency</dt>
                <dd>The Talent Group</dd>
              </div>
              <div className="d16__rep-row">
                <dt>Phone</dt>
                <dd>
                  <a className="d16__phone" href="tel:+14124718011">
                    412-471-8011
                  </a>
                </dd>
              </div>
            </dl>
            <p className="d16__rep-note">Route inquiries through the agency.</p>
          </aside>
        </section>

        {/* FOOTER */}
        <footer className="d16__footer" aria-labelledby="d16-foot">
          <div className="d16__kicker">
            <span>06</span>
            <span aria-hidden>—</span>
            <span>Direct Inquiries</span>
          </div>
          <h2 id="d16-foot" className="d16__h2">
            A short note works fine.
          </h2>
          <IntakeForm designId="16" />
          <p className="d16__colophon">
            <span>Kevin Clark</span>
            <span>Pittsburgh · MMXXVI</span>
          </p>
        </footer>
      </div>
    </article>
  );
}
