import { IntakeForm } from '../components/IntakeForm';
import './Design01.css';

type Credit = {
  brand: string;
  role: string;
  year: string;
  /** photo | placeholder text */
  photo?: { src: string; alt: string; position?: string };
  placeholder?: string;
};

const CREDITS: Credit[] = [
  {
    brand: 'Post University',
    role: 'Model',
    year: '2024',
    photo: {
      src: '/photos/pittsburgh%20actor%203.jpg',
      alt: 'Kevin Clark — Post University campaign still',
      position: 'center 25%',
    },
  },
  {
    brand: 'American Eagle',
    role: 'Model',
    year: '2024',
    photo: {
      src: '/photos/pittsburgh%20actor%204.jpg',
      alt: 'Kevin Clark — American Eagle campaign still',
      position: 'center 20%',
    },
  },
  {
    brand: 'Squid Game S2',
    role: 'Live Promo',
    year: '2024',
    photo: {
      src: '/photos/pittsburgh%20actor%205.jpg',
      alt: 'Kevin Clark — Squid Game S2 live promo still',
      position: 'center 25%',
    },
  },
  {
    brand: 'The Melting Pot',
    role: 'Hand Model',
    year: '2023',
    placeholder: 'MP',
  },
];

export function Design01() {
  return (
    <article className="design d01" data-design="brutalist-bleed">
      <header className="d01__topbar">
        <span>Kevin Clark — Actor &amp; Model</span>
        <span>Pittsburgh, PA · 412</span>
      </header>

      <section className="d01__main">
        <h1 className="kc-h1 d01__h1" data-mode="single" data-stringtune="d01-h1">
          <span>Kevin Clark</span>
        </h1>
        <figure className="d01__photo">
          <img
            src="/photos/model%20in%20pittsburgh%20portrait.jpg"
            alt="Kevin Clark portrait"
            loading="eager"
          />
        </figure>
      </section>

      <dl className="d01__meta">
        <div>
          <dt>Height</dt>
          <dd>6&apos;1&quot;</dd>
        </div>
        <div>
          <dt>Reps</dt>
          <dd>The Talent Group</dd>
        </div>
        <div>
          <dt>Base</dt>
          <dd>Three Rivers</dd>
        </div>
      </dl>

      {/* ── WORKS ─────────────────────────────────────────────── */}
      <section className="d01__works" aria-labelledby="d01-works-h">
        <header className="d01__section-head">
          <span className="d01__section-num">02</span>
          <h2 id="d01-works-h" className="d01__section-title">Selected Works</h2>
          <span className="d01__section-count">{String(CREDITS.length).padStart(2, '0')} credits</span>
        </header>

        <ol className="d01__credits">
          {CREDITS.map((c, i) => (
            <li
              key={c.brand}
              className="d01__credit"
              style={{ ['--pop-delay' as string]: `${300 + i * 140}ms` }}
            >
              <span className="d01__credit-idx">{String(i + 1).padStart(2, '0')}</span>
              <div className="d01__credit-photo" aria-hidden="true">
                {c.photo ? (
                  <img
                    src={c.photo.src}
                    alt={c.photo.alt}
                    loading="lazy"
                    style={{ objectPosition: c.photo.position ?? 'center' }}
                  />
                ) : (
                  <div className="d01__credit-placeholder">{c.placeholder}</div>
                )}
              </div>
              <span className="d01__credit-brand">{c.brand}</span>
              <span className="d01__credit-role">{c.role}</span>
              <span className="d01__credit-year">{c.year}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* ── VIDEO ─────────────────────────────────────────────── */}
      <section className="d01__video" aria-labelledby="d01-video-h">
        <header className="d01__section-head">
          <span className="d01__section-num">03</span>
          <h2 id="d01-video-h" className="d01__section-title">Reel</h2>
          <span className="d01__section-count">16:9 · Placeholder</span>
        </header>

        <figure className="d01__player">
          <div className="d01__player-stage">
            <video
              className="d01__player-media"
              poster="/photos/Actor%20in%20pittsburgh%20Kevin%20Clark.jpg"
              preload="none"
              playsInline
              aria-label="Kevin Clark demo reel — placeholder"
            />
            <button
              type="button"
              className="d01__player-play"
              aria-label="Play reel (placeholder — file pending)"
              disabled
            >
              <span className="d01__player-play-mark" aria-hidden="true" />
              <span className="d01__player-play-label">Play</span>
            </button>
            <div className="d01__player-hud" aria-hidden="true">
              <span>REEL_001</span>
              <span>00:00 / —:—</span>
              <span>PGH · 2026</span>
            </div>
          </div>
          <figcaption className="d01__player-caption">
            Reel · Placeholder — file pending from agency.
          </figcaption>
        </figure>
      </section>

      {/* ── INFO ──────────────────────────────────────────────── */}
      <section className="d01__info" aria-labelledby="d01-info-h">
        <header className="d01__section-head">
          <span className="d01__section-num">04</span>
          <h2 id="d01-info-h" className="d01__section-title">Profile</h2>
          <span className="d01__section-count">Data Sheet</span>
        </header>

        <p className="d01__eyebrow">Non-Union · Actively Submitting</p>

        <div className="d01__info-grid">
          <div className="d01__info-block">
            <p className="d01__bio">
              Kevin Clark is an actor and model signed by The Talent Group, continuing to
              train in acting technique. He has acted in supporting and lead roles across
              several student and indie film productions since 2018.
            </p>
            <dl className="d01__data">
              <div>
                <dt>Education</dt>
                <dd>CCAC Theatre — A.S. Degree, 2017–2019</dd>
              </div>
              <div>
                <dt>Base</dt>
                <dd>Pittsburgh, PA — Available Nationally</dd>
              </div>
              <div>
                <dt>Range</dt>
                <dd>Lawrenceville · Strip District · North Shore</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>Non-Union · Submitting</dd>
              </div>
            </dl>
          </div>

          <aside className="d01__rep">
            <p className="d01__rep-kicker">Representation</p>
            <p className="d01__rep-agency">The Talent Group</p>
            <a className="d01__rep-phone" href="tel:+14124718011">
              412.471.8011
            </a>
            <p className="d01__rep-closer">Route inquiries through the agency.</p>
          </aside>
        </div>
      </section>

      <footer className="d01__footer">
        <IntakeForm designId="01" />
      </footer>
    </article>
  );
}
