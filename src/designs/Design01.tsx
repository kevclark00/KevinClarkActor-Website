import { useEffect, useRef } from 'react';
import { IntakeForm } from '../components/IntakeForm';
import './Design01.css';

// Footer with a huge white "Taking on roles!" wordmark ghosted in the deep
// background that tilts in 3D toward the pointer — the form fields ride on top.
function FooterReel() {
  const stageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
    };

    const tick = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      el.style.setProperty('--ry', `${(cx * 34).toFixed(2)}deg`);
      el.style.setProperty('--rx', `${(-cy * 24).toFixed(2)}deg`);
      raf = requestAnimationFrame(tick);
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <footer className="d01__footer" ref={stageRef}>
      <div className="d01__footer-bg" aria-hidden="true">
        <span className="d01__footer-ghost">Taking on roles!</span>
      </div>
      <div className="d01__footer-inner">
        <p className="d01__footer-kicker">Inquiries — route through the work</p>
        <IntakeForm designId="01" />
      </div>
    </footer>
  );
}

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

type Cut = { id: string; title: string; caption: string; year: string; src: string; poster: string };

const CUTS: Cut[] = [
  {
    id: 'CUT_01',
    title: 'Scene 1',
    caption: 'Reel · Cut 01 — dramatic.',
    year: '2025',
    src: '/video/cut-1.mp4',
    poster: '/video/cut-1.jpg',
  },
  {
    id: 'CUT_02',
    title: 'Scene 2',
    caption: 'Reel · Cut 02 — dialogue.',
    year: '2025',
    src: '/video/cut-2.mp4',
    poster: '/video/cut-2.jpg',
  },
  {
    id: 'CUT_03',
    title: 'Scene 3',
    caption: 'Reel · Cut 03 — range.',
    year: '2025',
    src: '/video/cut-3.mp4',
    poster: '/video/cut-3.jpg',
  },
  {
    id: 'CUT_04',
    title: 'Scene 4',
    caption: 'Reel · Cut 04 — close.',
    year: '2025',
    src: '/video/cut-4.mp4',
    poster: '/video/cut-4.jpg',
  },
];

export function Design01() {
  return (
    <article className="design d01" data-design="brutalist-bleed">
      <header className="d01__topbar">
        <span>Kevin Clark — Actor &amp; Model</span>
      </header>

      <section className="d01__main">
        <h1 className="kc-h1 d01__h1" aria-label="Kevin Clark">
          {['Kevin', 'Clark'].map((word, i) => (
            <span key={word} className="d01__h1-line" aria-hidden="true">
              <span
                className="d01__h1-inner"
                style={{ ['--line' as string]: i }}
              >
                {word}
              </span>
            </span>
          ))}
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
          <dd>Pittsburgh, PA · 412</dd>
        </div>
      </dl>

      {/* ── WORKS ─────────────────────────────────────────────── */}
      <section className="d01__works" aria-labelledby="d01-works-h">
        <header className="d01__section-head">
          <h2 id="d01-works-h" className="d01__section-title">Selected Works</h2>
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
          <h2 id="d01-video-h" className="d01__section-title">Reel</h2>
        </header>

        <div className="d01__cuts">
          {CUTS.map((cut) => (
            <figure key={cut.id} className="d01__player">
              <div className="d01__player-stage">
                <video
                  className="d01__player-media"
                  src={cut.src}
                  poster={cut.poster}
                  preload="metadata"
                  controls
                  playsInline
                  aria-label={`Kevin Clark reel — ${cut.title}`}
                />
              </div>
              <figcaption className="d01__player-caption">
                <span>{cut.caption}</span>
                <span className="d01__player-year">{cut.year}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── INFO ──────────────────────────────────────────────── */}
      <section className="d01__info" aria-label="Profile">
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
                <dd>Non-Union · Actively Submitting</dd>
              </div>
            </dl>
          </div>

          <div className="d01__rep-col">
            <h3 className="d01__rep-lead">11 Yrs Experience in Drama</h3>
            <aside className="d01__rep">
              <p className="d01__rep-kicker">Representation</p>
              <p className="d01__rep-agency">The Talent Group</p>
              <a className="d01__rep-phone" href="tel:+14124718011">
                412.471.8011
              </a>
              <p className="d01__rep-closer">Route inquiries through the agency.</p>
            </aside>
          </div>
        </div>
      </section>

      <FooterReel />
    </article>
  );
}
