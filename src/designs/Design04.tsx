import { IntakeForm } from '../components/IntakeForm';
import './Design04.css';

type Credit = {
  brand: string;
  role: string;
  note?: string;
};

const CREDITS: Credit[] = [
  { brand: 'Post University', role: 'Model', note: 'Campaign' },
  { brand: 'American Eagle', role: 'Model', note: 'Brand' },
  { brand: 'Squid Game S2', role: 'Live Promo', note: 'Netflix activation' },
  { brand: 'The Melting Pot', role: 'Hand Model', note: 'Print' },
];

function Ticker({
  words,
  duration = 90,
  ariaLabel,
  size = 'lg',
}: {
  words: string[];
  duration?: number;
  ariaLabel?: string;
  size?: 'lg' | 'sm';
}) {
  // Single ticker row. Content duplicated for seamless loop. Exactly one element
  // (the first item of the first copy) is exposed to AT for ariaLabel cases.
  const loop = Array.from({ length: 8 });
  return (
    <div
      className={`d04__marquee d04__marquee--${size}`}
      aria-label={ariaLabel}
      style={{ ['--d04-dur' as string]: `${duration}s` }}
    >
      <div className="d04__track">
        {loop.map((_, i) => (
          <span key={`a-${i}`} className="d04__tick" aria-hidden={i !== 0 || undefined}>
            {words.map((w, j) => (
              <span key={j} className="d04__tick-word">
                {w}
                <span className="d04__dot" aria-hidden>●</span>
              </span>
            ))}
          </span>
        ))}
        {loop.map((_, i) => (
          <span key={`b-${i}`} className="d04__tick" aria-hidden>
            {words.map((w, j) => (
              <span key={j} className="d04__tick-word">
                {w}
                <span className="d04__dot" aria-hidden>●</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Design04() {
  return (
    <article className="design d04" data-design="marquee">
      <header className="d04__topbar">
        <span>Kevin Clark</span>
        <span>Reel · 2026</span>
      </header>

      {/* HERO — landscape actor photo + single slow ticker beside it */}
      <section className="d04__hero">
        <h1 className="kc-h1 d04__h1" data-mode="single" data-stringtune="d04-h1">
          <span className="kc-word">Kevin</span>{' '}
          <span className="kc-word">Clark</span>
        </h1>
        <figure className="d04__photo">
          <img
            src="/photos/Actor%20in%20pittsburgh%20Kevin%20Clark.jpg"
            alt="Kevin Clark, actor, Pittsburgh"
            loading="eager"
          />
        </figure>
        <div className="d04__hero-ticker">
          <Ticker
            words={['Kevin Clark', 'Actor', 'Model', 'Non-Union', 'Pittsburgh', '412', 'Three Rivers']}
            duration={90}
            ariaLabel="Kevin Clark — actor and model, non-union, Pittsburgh"
          />
        </div>
      </section>

      {/* WORKS — clean rowed list, ONE shared slow ticker beneath the whole list */}
      <section className="d04__works" aria-labelledby="d04-works-title">
        <header className="d04__section-head">
          <h2 id="d04-works-title" className="d04__section-title">Selected Works</h2>
          <span className="d04__section-meta">2024 — 2026</span>
        </header>

        <ol className="d04__credits">
          {CREDITS.map((c, i) => (
            <li key={c.brand} className="d04__credit" style={{ animationDelay: `${i * 90}ms` }}>
              <div className="d04__credit-row">
                <span className="d04__credit-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="d04__credit-brand">{c.brand}</span>
                <span className="d04__credit-role">{c.role}</span>
                {c.note && <span className="d04__credit-note">{c.note}</span>}
              </div>
            </li>
          ))}
        </ol>

        {/* ONE shared slow ticker that ties the credits to the photo strip */}
        <div className="d04__works-ticker">
          <Ticker
            words={['Model', 'Live Promo', 'Hand Model', 'Print', 'Campaign', 'Pittsburgh']}
            duration={120}
            size="sm"
          />
        </div>

        {/* Photo strip — three DISTINCT photos, no repeats with hero */}
        <div className="d04__photo-strip" aria-label="Headshots">
          <figure className="d04__strip-fig d04__strip-fig--a">
            <img src="/photos/model%20in%20pittsburgh%20portrait.jpg" alt="Kevin Clark — portrait" loading="lazy" />
          </figure>
          <figure className="d04__strip-fig d04__strip-fig--b">
            <img src="/photos/pittsburgh%20actor%203.jpg" alt="Kevin Clark — frame three" loading="lazy" />
          </figure>
          <figure className="d04__strip-fig d04__strip-fig--c">
            <img src="/photos/pittsburgh%20actor%204.jpg" alt="Kevin Clark — frame four" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* VIDEO — landscape 16:9 placeholder player with one slow caption ticker */}
      <section className="d04__video" aria-labelledby="d04-video-title">
        <header className="d04__section-head">
          <h2 id="d04-video-title" className="d04__section-title">Reel</h2>
          <span className="d04__section-meta">Placeholder · 16:9</span>
        </header>

        <div className="d04__video-stage">
          <figure className="d04__video-frame">
            <video
              className="d04__video-el"
              poster="/photos/pittsburgh%20actor%205.jpg"
              preload="none"
              playsInline
              muted
              aria-label="Kevin Clark reel — placeholder"
            />
            <button type="button" className="d04__video-play" aria-label="Play reel (placeholder)">
              <span className="d04__video-play-tri" aria-hidden>▶</span>
              <span className="d04__video-play-label">Play</span>
            </button>
            <figcaption className="d04__video-cap">Reel · Placeholder</figcaption>
          </figure>

          <div className="d04__video-ticker">
            <Ticker
              words={['Reel', 'Placeholder', 'Coming Soon', 'Pittsburgh', '412']}
              duration={140}
              size="sm"
            />
          </div>
        </div>
      </section>

      {/* LOUD MOMENT — giant outlined name slab crossing the viewport */}
      <section className="d04__slab" aria-hidden>
        <div className="d04__slab-inner">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={`s-a-${i}`} className="d04__slab-text">Kevin Clark</span>
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={`s-b-${i}`} className="d04__slab-text">Kevin Clark</span>
          ))}
        </div>
      </section>

      {/* INFO */}
      <section className="d04__info" aria-labelledby="d04-info-title">
        <header className="d04__section-head">
          <h2 id="d04-info-title" className="d04__section-title">Info</h2>
          <span className="d04__section-meta">Non-Union · Actively Submitting</span>
        </header>

        <div className="d04__info-grid">
          <div className="d04__info-bio">
            <p className="d04__bio">
              Kevin Clark is an actor and model signed by The Talent Group, continuing to train in
              acting technique. He has acted in supporting and lead roles across several student
              and indie film productions since 2018.
            </p>
            <p className="d04__edu">
              <span className="d04__label">Education</span>
              <span>CCAC Theatre — A.S. Degree, 2017–2019.</span>
            </p>
          </div>

          <div className="d04__info-blurbs">
            <div className="d04__blurb">
              <span className="d04__blurb-tag">01</span>
              <p>Print &amp; on-camera. Comfortable directing into stillness or motion across Strip District lofts and Lawrenceville sets.</p>
            </div>
            <div className="d04__blurb">
              <span className="d04__blurb-tag">02</span>
              <p>Pittsburgh-based — 412 area code, Three Rivers proximity, quick to East Liberty and Downtown calls.</p>
            </div>
            <div className="d04__blurb">
              <span className="d04__blurb-tag">03</span>
              <p>Submit through The Talent Group — fast turnaround on holds and confirms.</p>
            </div>
          </div>
        </div>

        <div className="d04__rep">
          <div className="d04__rep-line">
            <span className="d04__label">Agency</span>
            <span className="d04__rep-val">The Talent Group</span>
          </div>
          <div className="d04__rep-line">
            <span className="d04__label">Phone</span>
            <a className="d04__rep-val d04__rep-phone" href="tel:+14124718011">412-471-8011</a>
          </div>
          <p className="d04__rep-closer">Route inquiries through the agency.</p>
        </div>
      </section>

      <footer className="d04__footer">
        <IntakeForm designId="04" />
      </footer>
    </article>
  );
}
