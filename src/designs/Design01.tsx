import { useEffect, useRef } from 'react';
import { IntakeForm } from '../components/IntakeForm';
import './Design01.css';

// Reel cuts autoplay muted so the section feels alive on arrival, but respect
// the same reduced-motion opt-out the hero/photo/credit animations already use.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
      <div className="d01__footer-inner">
        <div className="d01__footer-form-col">
          <h2 className="d01__footer-heading">Kevin Clark</h2>
          <p className="d01__footer-subtext">Taking on roles! Get in touch for inquiries, auditions, or collaboration.</p>
          <IntakeForm designId="01" />
        </div>
        <figure className="d01__footer-photo">
          <img
            src="/photos/pittsburgh%20actor%203.jpg"
            alt="Kevin Clark"
            loading="lazy"
            style={{ objectPosition: 'center 25%' }}
          />
        </figure>
      </div>
      <p className="d01__footer-copyright">Copyright 2026 © Kevin Clark</p>
    </footer>
  );
}

type Credit = {
  brand: string;
  role: string;
  /** year for commercial/print work, production/school for film & TV */
  note: string;
  /** secondary line under the brand — used for film & TV genre */
  sub?: string;
  /** photo | placeholder text */
  photo?: { src: string; alt: string; position?: string };
  placeholder?: string;
};

const COMMERCIAL_CREDITS: Credit[] = [
  {
    brand: 'Post University',
    role: 'Model',
    note: '2024',
    photo: {
      src: '/photos/pittsburgh%20actor%203.jpg',
      alt: 'Kevin Clark — Post University campaign still',
      position: 'center 25%',
    },
  },
  {
    brand: 'The Melting Pot',
    role: 'Hand Model',
    note: '2023',
    placeholder: 'MP',
  },
  {
    brand: 'Squid Game S2',
    role: 'Live Promo',
    note: '2024',
    photo: {
      src: '/photos/pittsburgh%20actor%205.jpg',
      alt: 'Kevin Clark — Squid Game S2 live promo still',
      position: 'center 25%',
    },
  },
  {
    brand: 'American Eagle',
    role: 'Internal Training Video',
    note: '2024',
    photo: {
      src: '/photos/pittsburgh%20actor%204.jpg',
      alt: 'Kevin Clark — American Eagle campaign still',
      position: 'center 20%',
    },
  },
  {
    brand: 'Head & Shoulders',
    role: 'Background Talent',
    note: 'Commercial',
    placeholder: 'HS',
  },
];

const FILM_TV_CREDITS: Credit[] = [
  {
    brand: 'Wedges',
    sub: 'Family Drama',
    role: 'Lead',
    note: 'Carnegie Mellon University',
    placeholder: 'W',
  },
  {
    brand: 'Thy Dreary Rebel',
    sub: 'Horror',
    role: 'Lead',
    note: 'CCAC',
    placeholder: 'TD',
  },
  {
    brand: 'Cuteness Aggression',
    sub: 'Comedy',
    role: 'Lead',
    note: 'Point Park University',
    placeholder: 'CA',
  },
  {
    brand: 'Math Test',
    sub: 'Comedy',
    role: 'Lead',
    note: 'UnderTheRadarMedia',
    placeholder: 'MT',
  },
  {
    brand: 'Public Speaking 101',
    sub: 'Comedy',
    role: 'Lead',
    note: 'Chatham University',
    placeholder: 'PS',
  },
];

const MEASUREMENTS: Array<[label: string, value: string]> = [
  ['Height', '5’11″'],
  ['Weight', '155 lbs'],
  ['Hair', 'Brown'],
  ['Eyes', 'Hazel'],
  ['Chest', '35.5″'],
  ['Waist', '30″'],
  ['Inseam', '32″'],
  ['Neck', '15.2″'],
  ['Sleeve', '33″'],
  ['Jacket', 'Medium'],
  ['Shirt', 'Medium'],
  ['Shoe', '9.5'],
  ['Hat', '7 US'],
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

function CreditList({ credits }: { credits: Credit[] }) {
  return (
    <ol className="d01__credits">
      {credits.map((c, i) => (
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
          <div className="d01__credit-titlewrap">
            <span className="d01__credit-brand">{c.brand}</span>
            {c.sub && <span className="d01__credit-sub">{c.sub}</span>}
          </div>
          <span className="d01__credit-role">{c.role}</span>
          <span className="d01__credit-year">{c.note}</span>
        </li>
      ))}
    </ol>
  );
}

export function Design01() {
  return (
    <article className="design d01" data-design="brutalist-bleed">
      {/* ── HERO — kicker, h1, photo. Nothing else. ── */}
      <section className="d01__hero">
        <header className="d01__topbar">
          <div className="d01__topbar-id">
            <span className="d01__topbar-status">Non-Union</span>
            <span className="d01__topbar-rep">
              Rep: The Talent Group - <a href="tel:+14124718011">412.471.8011</a>
            </span>
            <span className="d01__topbar-cats">Film &amp; Television | Commercial &amp; Print</span>
          </div>
        </header>
        <div className="d01__main">
          <div className="d01__name-block">
            <p className="d01__kicker">Actor | Model</p>
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
          </div>
          <figure className="d01__photo">
            <img
              src="/photos/model%20in%20pittsburgh%20portrait.jpg"
              alt="Kevin Clark portrait"
              loading="eager"
            />
          </figure>
        </div>
      </section>

      {/* ── WORKS ─────────────────────────────────────────────── */}
      <section className="d01__works" aria-labelledby="d01-works-h">
        <header className="d01__section-head">
          <h2 id="d01-works-h" className="d01__section-title">Selected Works</h2>
        </header>

        <div className="d01__works-columns">
          <div className="d01__works-col">
            <h3 className="d01__works-col-title">Film &amp; Television</h3>
            <CreditList credits={FILM_TV_CREDITS} />
          </div>
          <div className="d01__works-col">
            <h3 className="d01__works-col-title">Commercial &amp; Print</h3>
            <CreditList credits={COMMERCIAL_CREDITS} />
          </div>
        </div>
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
                  preload="auto"
                  controls
                  playsInline
                  autoPlay={!prefersReducedMotion}
                  loop
                  muted
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
                <dd>CCAC Theatre - A.S. Degree, 2017-2019</dd>
              </div>
              <div>
                <dt>Training</dt>
                <dd>
                  Stephen Black, Chris Clavelli, Cynthia Dallas, Diana Ifft, George Jaber,
                  Tonya Lynn, Sharon McCune, Jaime Slavinsky, Justin Zeno
                </dd>
              </div>
              <div>
                <dt>Base</dt>
                <dd>Pittsburgh, PA - Available Nationally</dd>
              </div>
              <div>
                <dt>Range</dt>
                <dd>Comedy | Drama | Commercial | Supporting &amp; Lead Roles</dd>
              </div>
              <div>
                <dt>Skills</dt>
                <dd>
                  On-Camera Acting | Improvisation | Cold Reading | Professional Set
                  Etiquette | Taking Direction
                </dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>Non-Union · Actively Submitting</dd>
              </div>
              <div>
                <dt>Resume</dt>
                <dd>
                  <a href="/resume/kevin-clark-resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download PDF
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="d01__rep-col">
            <h3 className="d01__rep-lead">{new Date().getFullYear() - 2018} Yrs Experience in Drama</h3>
            <aside className="d01__rep">
              <p className="d01__rep-kicker">Representation</p>
              <p className="d01__rep-agency">The Talent Group</p>
              <a className="d01__rep-phone" href="tel:+14124718011">
                412.471.8011
              </a>
              <p className="d01__rep-closer">Route inquiries through the agency.</p>
              <div className="d01__rep-social">
                <a
                  href="https://www.instagram.com/kevinclark.official?igsh=MTlzd2hwYmpwbmM2dQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61584919451796&mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── DIMENSIONS ────────────────────────────────────────── */}
      <section className="d01__dimensions" aria-labelledby="d01-dimensions-h">
        <header className="d01__section-head">
          <h2 id="d01-dimensions-h" className="d01__section-title">Dimensions</h2>
        </header>

        <div className="d01__dimensions-content">
          <h3 className="d01__ready-heading">Ready in a moment's notice</h3>
          <figure className="d01__dimensions-photo">
            <img
              src="/photos/pittsburgh%20actor%204.jpg"
              alt="Kevin Clark dimensions portrait"
              loading="lazy"
              style={{ objectPosition: 'center 20%' }}
            />
          </figure>
          <dl className="d01__meta">
            {MEASUREMENTS.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <FooterReel />
    </article>
  );
}
