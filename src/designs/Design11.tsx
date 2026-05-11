import { IntakeForm } from '../components/IntakeForm';
import './Design11.css';

type IndexEntry = {
  brand: string;
  role: string;
  year: string;
  page: string;
};

// "Back-of-book index" entries — each credit reads as a single index line
// with a page-number-style numeral at the right margin.
const CREDITS: IndexEntry[] = [
  { brand: 'Post University', role: 'campaign · model', year: '2024', page: '012' },
  { brand: 'American Eagle', role: 'lookbook · model', year: '2024', page: '037' },
  { brand: 'Squid Game · Season 2', role: 'live promo', year: '2024', page: '058' },
  { brand: 'The Melting Pot', role: 'hand model', year: '2023', page: '091' },
];

// The "Kevin Clark" masthead types in letter by letter.
const NAME_LETTERS = ['K', 'e', 'v', 'i', 'n', ' ', 'C', 'l', 'a', 'r', 'k'] as const;

export function Design11() {
  return (
    <article className="design d11" data-design="index">
      <div className="d11__page">
        {/* HERO — literary index "main entry" */}
        <header className="d11__hero">
          <div className="d11__top-rule" aria-hidden />

          <p className="d11__masthead">
            <span>Index</span>
            <span>Clark, K. — Pittsburgh, PA</span>
            <span>MMXXVI</span>
          </p>

          <h1
            className="kc-h1 d11__h1"
            data-mode="single"
            aria-label="Kevin Clark"
          >
            <span className="d11__h1-inner" aria-hidden="true">
              {NAME_LETTERS.map((ch, i) => (
                <span
                  key={i}
                  className={ch === ' ' ? 'd11__letter d11__letter--space' : 'd11__letter'}
                  style={{ ['--i' as string]: i }}
                >
                  {ch}
                </span>
              ))}
            </span>
          </h1>

          <ol className="d11__subindex" aria-label="Cross-references">
            <li><span className="d11__sub-term"><em>actor</em></span><span className="d11__sub-dots" aria-hidden /><span className="d11__sub-page">004</span></li>
            <li><span className="d11__sub-term"><em>model</em></span><span className="d11__sub-dots" aria-hidden /><span className="d11__sub-page">006</span></li>
            <li><span className="d11__sub-term">non-union, actively submitting</span><span className="d11__sub-dots" aria-hidden /><span className="d11__sub-page">009</span></li>
            <li><span className="d11__sub-term">repr. <em>The Talent Group</em></span><span className="d11__sub-dots" aria-hidden /><span className="d11__sub-page">112</span></li>
          </ol>

          <figure className="d11__frontispiece">
            <img
              src="/photos/model%20in%20pittsburgh%20portrait.jpg"
              alt="Kevin Clark, portrait — Pittsburgh"
              loading="eager"
            />
            <figcaption>
              <em>Frontispiece.</em> Portrait — 412 area, 2024.
            </figcaption>
          </figure>

          <div className="d11__bottom-rule" aria-hidden />
        </header>

        {/* WORKS — index entries */}
        <section className="d11__section" aria-labelledby="d11-works-title">
          <header className="d11__sec-head">
            <p className="d11__eyebrow">§ I — Entries</p>
            <h2 id="d11-works-title" className="d11__sec-title">
              <em>Clark, Kevin</em> — selected booked work.
            </h2>
            <p className="d11__sec-note">
              Filed by client. Reproduction credits run through the agency;
              see § IV.
            </p>
          </header>

          <ol className="d11__index-list">
            {CREDITS.map((c, i) => (
              <li key={c.brand} className="d11__entry">
                <span className="d11__entry-no">{String(i + 1).padStart(2, '0')}.</span>
                <span className="d11__entry-body">
                  <span className="d11__entry-brand">
                    Clark, K. · m. <em>{c.brand}</em>
                  </span>
                  <span className="d11__entry-meta">
                    {c.role} · {c.year}
                  </span>
                </span>
                <span className="d11__entry-dots" aria-hidden />
                <span className="d11__entry-page">{c.page}</span>
              </li>
            ))}
          </ol>

          <div className="d11__plates">
            <figure className="d11__plate d11__plate--landscape">
              <img
                src="/photos/Actor%20in%20pittsburgh%20Kevin%20Clark.jpg"
                alt="Kevin Clark on set — Pittsburgh"
                loading="lazy"
                data-string="parallax"
                data-string-parallax="0.08"
              />
              <figcaption>
                <span>Plate i.</span>
                <em>On set</em>, Strip District — 2024.
              </figcaption>
            </figure>
            <figure className="d11__plate">
              <img
                src="/photos/pittsburgh%20actor%203.jpg"
                alt="Kevin Clark, editorial frame"
                loading="lazy"
                data-string="parallax"
                data-string-parallax="0.06"
              />
              <figcaption>
                <span>Plate ii.</span>
                Editorial — Lawrenceville.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* VIDEO — landscape 16:9 reel placeholder */}
        <section className="d11__section d11__reel-section" aria-labelledby="d11-reel-title">
          <header className="d11__sec-head">
            <p className="d11__eyebrow">§ II — Moving picture</p>
            <h2 id="d11-reel-title" className="d11__sec-title">
              The <em>reel</em>, when it is ready.
            </h2>
          </header>

          <figure className="d11__reel">
            <div className="d11__reel-frame">
              <video
                className="d11__reel-video"
                poster="/photos/pittsburgh%20actor%204.jpg"
                preload="none"
                playsInline
                muted
                aria-label="Kevin Clark reel — placeholder"
              />
              <button
                type="button"
                className="d11__reel-play"
                aria-label="Play reel (placeholder)"
              >
                <span className="d11__reel-triangle" aria-hidden />
                <span className="d11__reel-play-label">play</span>
              </button>
              <span className="d11__reel-corners" aria-hidden>
                <span /><span /><span /><span />
              </span>
            </div>
            <figcaption className="d11__reel-cap">
              <span>Reel · Placeholder</span>
              <em>cut in preparation</em>
            </figcaption>
          </figure>
        </section>

        {/* INFO — supplementary "Notes" */}
        <section className="d11__section d11__notes" aria-labelledby="d11-notes-title">
          <header className="d11__sec-head">
            <p className="d11__eyebrow">§ III — Notes</p>
            <h2 id="d11-notes-title" className="d11__sec-title">
              <em>Non-Union</em> · Actively Submitting
            </h2>
          </header>

          <div className="d11__notes-body">
            <p className="d11__bio">
              Kevin Clark is an actor and model signed by The Talent Group,
              continuing to train in acting technique. He has acted in
              supporting and lead roles across several student and indie film
              productions since 2018.
            </p>

            <dl className="d11__edu">
              <div className="d11__edu-row">
                <dt>Education</dt>
                <dd>CCAC Theatre — A.S. Degree, 2017–2019</dd>
              </div>
              <div className="d11__edu-row">
                <dt>Based</dt>
                <dd>Pittsburgh, PA — Three Rivers, 412 area.</dd>
              </div>
              <div className="d11__edu-row">
                <dt>Range</dt>
                <dd>
                  Local sets across the city — North Shore, East Liberty,
                  Mt. Washington when a skyline is wanted.
                </dd>
              </div>
            </dl>

            <p className="d11__blurb">
              Comfortable on a closed set and in front of a stills camera. Reads
              warmly enough for a campaign, sharply enough for a scene. Quick
              to mark, quicker to listen.
            </p>

            <p className="d11__blurb">
              Hand work and product modeling on request — the Melting Pot job
              still in the book. Wardrobe own or supplied.
            </p>

            <figure className="d11__inline-plate">
              <img
                src="/photos/pittsburgh%20actor%205.jpg"
                alt="Kevin Clark, exterior frame — Pittsburgh"
                loading="lazy"
                data-string="parallax"
                data-string-parallax="0.05"
              />
              <figcaption>
                <em>Plate iii.</em> Exterior — Mt. Washington overlook, 2024.
              </figcaption>
            </figure>
          </div>

          <aside className="d11__rep" aria-labelledby="d11-rep-title">
            <p className="d11__eyebrow">§ IV — Representation</p>
            <h3 id="d11-rep-title" className="d11__rep-title">
              Routed through the <em>agency</em>.
            </h3>
            <dl className="d11__rep-list">
              <div className="d11__rep-row">
                <dt>Agency</dt>
                <dd><em>The Talent Group</em></dd>
              </div>
              <div className="d11__rep-row">
                <dt>Phone</dt>
                <dd>
                  <a className="d11__phone" href="tel:+14124718011">
                    412-471-8011
                  </a>
                </dd>
              </div>
            </dl>
            <p className="d11__rep-note">Route inquiries through the agency.</p>
          </aside>
        </section>

        {/* FOOTER — intake form */}
        <footer className="d11__footer" aria-labelledby="d11-foot-title">
          <p className="d11__eyebrow">§ V — Correspondence</p>
          <h2 id="d11-foot-title" className="d11__sec-title">
            A short <em>note</em> reaches the desk.
          </h2>
          <IntakeForm designId="11" />
          <p className="d11__colophon">
            <span>Kevin Clark</span>
            <span>— end of entry —</span>
            <span>MMXXVI</span>
          </p>
        </footer>
      </div>
    </article>
  );
}
