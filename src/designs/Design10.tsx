import { IntakeForm } from '../components/IntakeForm';
import './Design10.css';

const NAME = 'Kevin Clark';

type Credit = {
  brand: string;
  role: string;
  year: string;
};

const CREDITS: Credit[] = [
  { brand: 'Post University', role: 'Model — campaign', year: '2024' },
  { brand: 'American Eagle', role: 'Model — lookbook', year: '2024' },
  { brand: 'Squid Game · Season 2', role: 'Live promo', year: '2024' },
  { brand: 'The Melting Pot', role: 'Hand model', year: '2023' },
];

export function Design10() {
  return (
    <article className="design d10" data-design="minimal-serif">
      <div className="d10__col">
        {/* HERO */}
        <header className="d10__hero">
          <div className="d10__meta">
            <span>Kevin Clark</span>
            <span>MMXXVI</span>
          </div>

          <div className="d10__rule d10__rule--top" aria-hidden />

          <h1
            className="kc-h1 d10__h1"
            data-mode="single"
            data-stringtune="d10-h1"
            aria-label={NAME}
          >
            <span className="kc-word">Kevin</span>{' '}
            <span className="kc-word d10__italic">Clark</span>
          </h1>

          <p className="d10__sub">
            Actor &amp; Model<span className="d10__sep"> / </span>
            Pittsburgh<span className="d10__sep"> / </span>
            Non-Union
          </p>

          <div className="d10__rule d10__rule--bottom" aria-hidden />

          <figure className="d10__portrait">
            <img
              src="/photos/model%20in%20pittsburgh%20portrait.jpg"
              alt="Kevin Clark portrait"
              loading="eager"
            />
          </figure>

          <p className="d10__lede">
            A small, quiet portfolio. Restraint is the work — selected stills,
            credits, and a phone number that goes through the agency.
          </p>
        </header>

        {/* WORKS — second section */}
        <section className="d10__section d10__works" aria-labelledby="d10-works-title">
          <header className="d10__sec-head">
            <p className="d10__eyebrow">I · Selected Work</p>
            <h2 id="d10-works-title" className="d10__sec-title">
              Booked, <em>on camera.</em>
            </h2>
          </header>

          <ol className="d10__credits-list">
            {CREDITS.map((c, i) => (
              <li key={c.brand} className="d10__credit-row">
                <span className="d10__credit-no">{String(i + 1).padStart(2, '0')}</span>
                <span className="d10__credit-brand">{c.brand}</span>
                <span className="d10__credit-role">{c.role}</span>
                <span className="d10__credit-year">{c.year}</span>
              </li>
            ))}
          </ol>

          <div className="d10__plates">
            <figure className="d10__plate d10__plate--a">
              <img
                src="/photos/Actor%20in%20pittsburgh%20Kevin%20Clark.jpg"
                alt="Kevin Clark, actor — Pittsburgh"
                loading="lazy"
              />
              <figcaption>On set · Pittsburgh, 2024</figcaption>
            </figure>
            <figure className="d10__plate d10__plate--b">
              <img
                src="/photos/pittsburgh%20actor%203.jpg"
                alt="Kevin Clark, editorial frame"
                loading="lazy"
              />
              <figcaption>Editorial · Strip District</figcaption>
            </figure>
            <figure className="d10__plate d10__plate--c">
              <img
                src="/photos/pittsburgh%20actor%204.jpg"
                alt="Kevin Clark, exterior frame"
                loading="lazy"
              />
              <figcaption>Exterior · 2024</figcaption>
            </figure>
          </div>
        </section>

        {/* VIDEO — quiet reel placeholder */}
        <section className="d10__section d10__video" aria-labelledby="d10-video-title">
          <header className="d10__sec-head">
            <p className="d10__eyebrow">II · Reel</p>
            <h2 id="d10-video-title" className="d10__sec-title">
              A few <em>seconds</em> of moving picture.
            </h2>
          </header>

          <figure className="d10__reel">
            <div className="d10__reel-frame">
              <video
                className="d10__reel-video"
                poster="/photos/pittsburgh%20actor%205.jpg"
                preload="none"
                playsInline
                muted
                aria-label="Kevin Clark reel — placeholder"
              />
              <span className="d10__reel-overlay" aria-hidden="true" />
            </div>
            <figcaption className="d10__reel-cap">
              <em>Reel · in preparation</em>
              <a className="d10__reel-watch" href="#reel" aria-label="Watch reel (placeholder)">
                <em>watch</em>
              </a>
            </figcaption>
          </figure>
        </section>

        {/* INFO */}
        <section className="d10__section d10__info" aria-labelledby="d10-info-title">
          <header className="d10__sec-head">
            <p className="d10__eyebrow">III · About</p>
            <h2 id="d10-info-title" className="d10__sec-title">
              <em>Non-Union</em> · Actively Submitting
            </h2>
          </header>

          <p className="d10__bio">
            Kevin Clark is an actor and model signed by The Talent Group,
            continuing to train in acting technique. He has acted in supporting
            and lead roles across several student and indie film productions
            since 2018.
          </p>

          <dl className="d10__edu">
            <dt>Education</dt>
            <dd>CCAC Theatre — A.S. Degree, 2017–2019.</dd>
          </dl>

          <p className="d10__blurb">
            Comfortable in front of a stills camera and inside a scene. Equally
            useful as a clean catalogue figure or a featured background actor
            with a small speaking moment.
          </p>

          <p className="d10__blurb">
            Based in the 412; available across Pennsylvania, Ohio, and West
            Virginia, further with notice.
          </p>

          <aside className="d10__rep" aria-label="Representation">
            <p className="d10__rep-eyebrow">IV · Representation</p>
            <dl className="d10__rep-list">
              <div className="d10__rep-row">
                <dt>Agency</dt>
                <dd>The Talent Group</dd>
              </div>
              <div className="d10__rep-row">
                <dt>Phone</dt>
                <dd>
                  <a className="d10__phone" href="tel:+14124718011">
                    412-471-8011
                  </a>
                </dd>
              </div>
            </dl>
            <p className="d10__rep-note">Route inquiries through the agency.</p>
          </aside>
        </section>

        {/* FOOTER — intake form */}
        <footer className="d10__footer" aria-labelledby="d10-foot-title">
          <p className="d10__eyebrow">V · Inquiries</p>
          <h2 id="d10-foot-title" className="d10__sec-title d10__sec-title--foot">
            A short <em>note</em> is fine.
          </h2>
          <IntakeForm designId="10" />
          <p className="d10__colophon">
            <span>Kevin Clark</span>
            <span>MMXXVI</span>
          </p>
        </footer>
      </div>
    </article>
  );
}
