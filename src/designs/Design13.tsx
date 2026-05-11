import { IntakeForm } from '../components/IntakeForm';
import './Design13.css';

// D13 — Negative Space.
// ~80% empty canvas. Content sits in tight islands separated by huge margins.
// Tiny mono labels live at the edges (gallery-wall feel).

type Credit = {
  no: string;
  brand: string;
  role: string;
  year: string;
};

const CREDITS: Credit[] = [
  { no: '01', brand: 'Post University', role: 'Model · campaign', year: '2024' },
  { no: '02', brand: 'American Eagle', role: 'Model · lookbook', year: '2024' },
  { no: '03', brand: 'Squid Game · Season 2', role: 'Live promo', year: '2024' },
  { no: '04', brand: 'The Melting Pot', role: 'Hand model', year: '2023' },
];

export function Design13() {
  return (
    <article className="design d13" data-design="negative-space">
      {/* ============================================================
         HERO — single small name mark, centered on a near-empty canvas,
         tiny mono labels in the 4 corners. Sequenced sleek entrance.
         ============================================================ */}
      <section className="d13__hero" aria-labelledby="d13-name">
        <p className="d13__corner d13__corner--tl" data-stage="1">
          <span>K.C. 13 / 20</span>
        </p>
        <p className="d13__corner d13__corner--tr" data-stage="2">
          <span>Pittsburgh · 2026</span>
        </p>
        <p className="d13__corner d13__corner--bl" data-stage="3">
          <span>Reel forthcoming</span>
        </p>
        <p className="d13__corner d13__corner--br" data-stage="4">
          <span>p. 01 / 05</span>
        </p>

        <h1
          id="d13-name"
          className="kc-h1 d13__name"
          data-mode="single"
          data-stage="5"
        >
          <span className="kc-word">Kevin</span>{' '}
          <span className="kc-word">Clark</span>
        </h1>
      </section>

      {/* ============================================================
         WORKS — 4 credits as widely-spaced minimal entries.
         One row per credit with significant whitespace above/below.
         ============================================================ */}
      <section className="d13__works" aria-labelledby="d13-works-title">
        <p className="d13__edge d13__edge--tl">§ I · Selected work</p>
        <p className="d13__edge d13__edge--br">412 · area</p>

        <header className="d13__works-head">
          <h2 id="d13-works-title" className="d13__h2">
            Selected
          </h2>
          <p className="d13__deck">A short list, filed by client.</p>
        </header>

        <ol className="d13__credits">
          {CREDITS.map((c) => (
            <li key={c.brand} className="d13__credit">
              <span className="d13__credit-no">{c.no}</span>
              <span className="d13__credit-brand">{c.brand}</span>
              <span className="d13__credit-meta">
                <span>{c.role}</span>
                <span aria-hidden>·</span>
                <span>{c.year}</span>
              </span>
            </li>
          ))}
        </ol>

        {/* A single small plate — far right, breathing room. Portrait. */}
        <figure className="d13__plate d13__plate--portrait">
          <img
            src="/photos/model%20in%20pittsburgh%20portrait.jpg"
            alt="Kevin Clark — portrait, Pittsburgh"
            loading="lazy"
            data-string="parallax"
            data-string-parallax="0.04"
          />
          <figcaption>
            <span>Plate i.</span>
            <span>Portrait, Strip District.</span>
          </figcaption>
        </figure>
      </section>

      {/* ============================================================
         VIDEO — small (not full-width) 16:9 player floating in canvas
         with heavy whitespace around it.
         ============================================================ */}
      <section className="d13__video-section" aria-labelledby="d13-video-title">
        <p className="d13__edge d13__edge--tl">§ II · Moving image</p>
        <p className="d13__edge d13__edge--br">p. 03 / 05</p>

        <header className="d13__video-head">
          <h2 id="d13-video-title" className="d13__h2">
            Reel
          </h2>
          <p className="d13__deck">Cut in preparation.</p>
        </header>

        <figure className="d13__reel">
          <div className="d13__reel-frame">
            <video
              className="d13__reel-video"
              poster="/photos/pittsburgh%20actor%204.jpg"
              preload="none"
              playsInline
              muted
              aria-label="Kevin Clark reel — placeholder"
            />
            <button
              type="button"
              className="d13__reel-play"
              aria-label="Play reel (placeholder)"
            >
              <span className="d13__reel-triangle" aria-hidden />
            </button>
          </div>
          <figcaption className="d13__reel-cap">
            <span>Reel · Placeholder</span>
            <span>16:9</span>
          </figcaption>
        </figure>
      </section>

      {/* ============================================================
         INFO — bio paragraph in a narrow column, alone on a generous
         spread. Representation block sits below, set apart.
         ============================================================ */}
      <section className="d13__info" aria-labelledby="d13-info-title">
        <p className="d13__edge d13__edge--tl">§ III · Notes</p>
        <p className="d13__edge d13__edge--br">Pittsburgh, PA</p>

        <header className="d13__info-head">
          <p className="d13__eyebrow">Non-Union · Actively Submitting</p>
          <h2 id="d13-info-title" className="d13__h2">
            About
          </h2>
        </header>

        <div className="d13__bio-col">
          <p className="d13__bio">
            Kevin Clark is an actor and model signed by The Talent Group,
            continuing to train in acting technique. He has acted in
            supporting and lead roles across several student and indie
            film productions since 2018.
          </p>

          <p className="d13__bio-note">
            Based in the Three Rivers — works locally across Pittsburgh,
            with frames pulled from Lawrenceville to the Mt. Washington
            overlook.
          </p>
        </div>

        <dl className="d13__facts">
          <div className="d13__fact">
            <dt>Education</dt>
            <dd>CCAC Theatre — A.S. Degree, 2017–2019</dd>
          </div>
          <div className="d13__fact">
            <dt>Based</dt>
            <dd>Pittsburgh, PA · 412 area</dd>
          </div>
          <div className="d13__fact">
            <dt>Status</dt>
            <dd>Non-Union · Actively Submitting</dd>
          </div>
        </dl>

        <figure className="d13__plate d13__plate--landscape">
          <img
            src="/photos/Actor%20in%20pittsburgh%20Kevin%20Clark.jpg"
            alt="Kevin Clark — on set, Pittsburgh"
            loading="lazy"
            data-string="parallax"
            data-string-parallax="0.05"
          />
          <figcaption>
            <span>Plate ii.</span>
            <span>On set, Lawrenceville.</span>
          </figcaption>
        </figure>

        <aside className="d13__rep" aria-labelledby="d13-rep-title">
          <p className="d13__eyebrow">§ IV · Representation</p>
          <h3 id="d13-rep-title" className="d13__h3">
            The Talent Group
          </h3>
          <p className="d13__rep-phone">
            <a href="tel:+14124718011">412-471-8011</a>
          </p>
          <p className="d13__rep-note">
            Route inquiries through the agency.
          </p>
        </aside>

        <figure className="d13__plate d13__plate--small">
          <img
            src="/photos/pittsburgh%20actor%205.jpg"
            alt="Kevin Clark — exterior frame, Pittsburgh"
            loading="lazy"
            data-string="parallax"
            data-string-parallax="0.03"
          />
          <figcaption>
            <span>Plate iii.</span>
            <span>Mt. Washington.</span>
          </figcaption>
        </figure>
      </section>

      {/* ============================================================
         FOOTER — intake form, alone on the page.
         ============================================================ */}
      <footer className="d13__footer" aria-labelledby="d13-foot-title">
        <p className="d13__edge d13__edge--tl">§ V · Correspondence</p>
        <p className="d13__edge d13__edge--br">— end —</p>

        <header className="d13__foot-head">
          <h2 id="d13-foot-title" className="d13__h2">
            Note
          </h2>
          <p className="d13__deck">A line on the wall.</p>
        </header>

        <div className="d13__form-col">
          <IntakeForm designId="13" />
        </div>

        <p className="d13__colophon">
          <span>Kevin Clark</span>
          <span>Pittsburgh · 412</span>
          <span>MMXXVI</span>
        </p>
      </footer>
    </article>
  );
}
