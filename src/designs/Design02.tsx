import { IntakeForm } from '../components/IntakeForm';
import './Design02.css';

const NAME = 'Kevin Clark';

type Credit = {
  brand: string;
  role: string;
  /** Optional thumbnail. Some credits intentionally run as type-only entries. */
  photo?: { src: string; alt: string; position?: string };
};

const CREDITS: Credit[] = [
  {
    brand: 'Post University',
    role: 'Model',
    photo: {
      src: '/photos/Actor%20in%20pittsburgh%20Kevin%20Clark.jpg',
      alt: 'Kevin Clark — Post University campaign still',
      position: 'center 28%',
    },
  },
  { brand: 'American Eagle', role: 'Model' },
  {
    brand: 'Squid Game Season 2',
    role: 'Live Promo',
    photo: {
      src: '/photos/pittsburgh%20actor%203.jpg',
      alt: 'Kevin Clark — Squid Game S2 live promo still',
      position: 'center 30%',
    },
  },
  { brand: 'The Melting Pot', role: 'Hand Model' },
];

export function Design02() {
  return (
    <article className="design d02" data-design="editorial-grid">
      {/* ── MASTHEAD ──────────────────────────────────────────── */}
      <header className="d02__masthead">
        <span>Issue No. 026</span>
        <span>The Portfolio</span>
        <span>Spring / Summer 2026</span>
      </header>

      {/* ── HERO / COVER ──────────────────────────────────────── */}
      <section className="d02__cover">
        <div className="d02__cover-text">
          <h1
            className="kc-h1 d02__h1"
            data-mode="letters"
            data-stringtune="d02-h1"
            aria-label={NAME}
          >
            {NAME.split(' ')
              .map((word, wIdx) => (
                <span key={word} className="kc-word">
                  {[...word].map((ch, lIdx) => {
                    const i = wIdx === 0 ? lIdx : lIdx + 6;
                    return (
                      <span key={lIdx} style={{ ['--i' as never]: i }} aria-hidden>
                        {ch}
                      </span>
                    );
                  })}
                </span>
              ))
              .reduce<React.ReactNode[]>(
                (acc, node, i) => (i === 0 ? [node] : [...acc, ' ', node]),
                []
              )}
          </h1>
          <p className="d02__deck">
            A quiet study in stillness — pages from a Pittsburgh portfolio.
          </p>
        </div>
        <figure className="d02__photo" data-string="parallax" data-string-parallax="0.15">
          <img
            src="/photos/model%20in%20pittsburgh%20portrait.jpg"
            alt="Kevin Clark — editorial portrait"
            loading="eager"
          />
          <figcaption className="d02__photo-cap">Plate 01 · Cover</figcaption>
        </figure>
      </section>

      {/* ── LOWER META ─────────────────────────────────────────── */}
      <section className="d02__lower">
        <div>Discipline<b>Film &amp; TV</b></div>
        <div>City<b>Pittsburgh, PA</b></div>
        <div>Status<b>Non-Union</b></div>
        <div>Year<b>2026</b></div>
      </section>

      {/* ── WORKS ──────────────────────────────────────────────── */}
      <section className="d02__section d02__works" aria-labelledby="d02-works-h">
        <header className="d02__section-head">
          <span className="d02__section-num">Section 02</span>
          <h2 id="d02-works-h" className="d02__section-title">Selected Work</h2>
          <span className="d02__section-rule" aria-hidden />
        </header>

        <ol className="d02__credits">
          {CREDITS.map((c, i) => (
            <li key={c.brand} className="d02__credit">
              <span className="d02__credit-idx">{String(i + 1).padStart(2, '0')}</span>
              <span className="d02__credit-brand">{c.brand}</span>
              <span className="d02__credit-role">{c.role}</span>
              {c.photo ? (
                <figure className="d02__credit-photo">
                  <img
                    src={c.photo.src}
                    alt={c.photo.alt}
                    loading="lazy"
                    style={{ objectPosition: c.photo.position ?? 'center' }}
                  />
                </figure>
              ) : (
                <span className="d02__credit-photo d02__credit-photo--empty" aria-hidden />
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* ── VIDEO / REEL PLATE ─────────────────────────────────── */}
      <section className="d02__section d02__reel" aria-labelledby="d02-reel-h">
        <header className="d02__section-head">
          <span className="d02__section-num">Section 03</span>
          <h2 id="d02-reel-h" className="d02__section-title">The Reel</h2>
          <span className="d02__section-rule" aria-hidden />
        </header>

        <figure className="d02__reel-plate">
          <div className="d02__reel-frame">
            <video
              className="d02__reel-video"
              poster="/photos/pittsburgh%20actor%204.jpg"
              preload="none"
              playsInline
              muted
              aria-label="Kevin Clark — reel placeholder"
            />
            <button
              type="button"
              className="d02__reel-play"
              aria-label="Play reel (forthcoming)"
              disabled
            >
              <span aria-hidden>▸</span>
            </button>
          </div>
          <figcaption className="d02__reel-cap">
            Reel · Plate 03 · <em>Forthcoming</em>
          </figcaption>
        </figure>
      </section>

      {/* ── INFO ───────────────────────────────────────────────── */}
      <section className="d02__section d02__info" aria-labelledby="d02-info-h">
        <header className="d02__section-head">
          <span className="d02__section-num">Section 04</span>
          <h2 id="d02-info-h" className="d02__section-title">Profile</h2>
          <span className="d02__section-rule" aria-hidden />
        </header>

        <p className="d02__eyebrow">Non-Union · Actively Submitting</p>

        <div className="d02__info-grid">
          <div className="d02__info-text">
            <p className="d02__bio">
              Kevin Clark is an actor and model signed by The Talent Group, continuing
              to train in acting technique. He has acted in supporting and lead roles
              across several student and indie film productions since 2018.
            </p>

            <dl className="d02__data">
              <div>
                <dt>Education</dt>
                <dd>CCAC Theatre — A.S. Degree, 2017–2019</dd>
              </div>
              <div>
                <dt>Base</dt>
                <dd>Pittsburgh, PA — Three Rivers, 412</dd>
              </div>
            </dl>
          </div>

          <aside className="d02__rep" aria-label="Representation">
            <p className="d02__rep-kicker">Representation</p>
            <p className="d02__rep-agency">The Talent Group</p>
            <a className="d02__rep-phone" href="tel:+14124718011">
              412-471-8011
            </a>
            <p className="d02__rep-note">Route inquiries through the agency.</p>
            <figure className="d02__rep-photo">
              <img
                src="/photos/pittsburgh%20actor%205.jpg"
                alt="Kevin Clark — studio portrait"
                loading="lazy"
              />
            </figure>
          </aside>
        </div>
      </section>

      {/* ── FOOTER / INTAKE ────────────────────────────────────── */}
      <footer className="d02__footer">
        <p className="d02__footer-kicker">Colophon · Inquiries</p>
        <IntakeForm designId="02" />
      </footer>
    </article>
  );
}
