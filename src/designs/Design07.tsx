import { IntakeForm } from '../components/IntakeForm';
import './Design07.css';

// 3x3 layout — letters that compose "KEVIN CLARK" with one cell as photo
// and one cell as a meta-mark. Reading order across rows: K E V / I N [photo] / C L ARK
const CELLS: Array<{ kind: 'letter' | 'photo' | 'mark'; value?: string }> = [
  { kind: 'letter', value: 'K' },
  { kind: 'letter', value: 'E' },
  { kind: 'letter', value: 'V' },
  { kind: 'letter', value: 'I' },
  { kind: 'letter', value: 'N' },
  { kind: 'photo' },
  { kind: 'letter', value: 'C' },
  { kind: 'letter', value: 'L' },
  { kind: 'mark' },
];

const CREDITS: Array<{ brand: string; role: string; note: string }> = [
  { brand: 'Post University', role: 'Modeling', note: 'Campaign work — print + digital.' },
  { brand: 'American Eagle', role: 'Modeling', note: 'Retail brand campaign.' },
  { brand: 'Squid Game Season 2', role: 'Live Promo', note: 'On-camera promotional appearance.' },
  { brand: 'The Melting Pot', role: 'Hand Model', note: 'Tabletop / hospitality detail work.' },
];

export function Design07() {
  return (
    <article className="design d07" data-design="grid-type">
      <header className="d07__top">
        <span>Kevin Clark — Grid 03</span>
        <span>9 × Cells</span>
      </header>

      <section className="d07__hero">
        <div className="d07__grid">
          <h1 className="kc-h1 d07__sr" data-mode="letters" data-stringtune="d07-h1" aria-label="Kevin Clark">
            <span className="kc-word">
              <span>K</span><span>e</span><span>v</span><span>i</span><span>n</span>
            </span>
            {' '}
            <span className="kc-word">
              <span>C</span><span>l</span><span>a</span><span>r</span><span>k</span>
            </span>
          </h1>

          {CELLS.map((cell, i) => {
            if (cell.kind === 'photo') {
              return (
                <div key={i} className="d07__cell d07__cell--photo">
                  <img src="/photos/pittsburgh%20actor%203.jpg" alt="Kevin Clark, Pittsburgh" loading="lazy" />
                </div>
              );
            }
            if (cell.kind === 'mark') {
              return (
                <div key={i} className="d07__cell d07__cell--mark">
                  <span style={{ ['--i' as never]: i }} aria-hidden>
                    Actor<br />Model<br />2026
                  </span>
                </div>
              );
            }
            return (
              <div key={i} className="d07__cell" aria-hidden>
                <span style={{ ['--i' as never]: i }}>{cell.value}</span>
              </div>
            );
          })}
        </div>

        <p className="d07__lede" aria-hidden="true">
          <span>Actor &amp; Model</span>
          <span aria-hidden>/</span>
          <span>Pittsburgh, PA</span>
          <span aria-hidden>/</span>
          <span>Repped by The Talent Group</span>
        </p>
      </section>

      <section className="d07__works" aria-labelledby="d07-works-h">
        <header className="d07__section-head">
          <span className="d07__section-num">01</span>
          <h2 id="d07-works-h" className="d07__section-title">Works</h2>
          <span className="d07__section-meta">Selected · 2024 — 2026</span>
        </header>

        <ol className="d07__credits">
          {CREDITS.map((c, i) => (
            <li key={c.brand} className="d07__credit" style={{ ['--i' as never]: i }}>
              <span className="d07__credit-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="d07__credit-brand">{c.brand}</span>
              <span className="d07__credit-role">{c.role}</span>
              <span className="d07__credit-note">{c.note}</span>
            </li>
          ))}
        </ol>

        <div className="d07__work-photos">
          <figure className="d07__work-photo d07__work-photo--a" style={{ ['--i' as never]: 0 }}>
            <img src="/photos/Actor%20in%20pittsburgh%20Kevin%20Clark.jpg" alt="Kevin Clark, on-camera" loading="lazy" />
            <figcaption>Plate A · On-camera</figcaption>
          </figure>
          <figure className="d07__work-photo d07__work-photo--b" style={{ ['--i' as never]: 1 }}>
            <img src="/photos/model%20in%20pittsburgh%20portrait.jpg" alt="Kevin Clark, portrait" loading="lazy" />
            <figcaption>Plate B · Portrait</figcaption>
          </figure>
          {/* StringTune iteration #2 — StringProgress writes a --progress var
              from 0→1 as this plate scrolls through the viewport. CSS reads
              the var to scale + clip + tint, so the plate "unfolds" on scroll. */}
          <figure
            className="d07__work-photo d07__work-photo--c d07__work-photo--progress"
            style={{ ['--i' as never]: 2 }}
            data-string="progress"
            data-string-id="d07-plate-c"
          >
            <img src="/photos/pittsburgh%20actor%204.jpg" alt="Kevin Clark on location" loading="lazy" />
            <figcaption>Plate C · Editorial · Scroll-scrubbed</figcaption>
          </figure>
        </div>
      </section>

      <section className="d07__reel" aria-labelledby="d07-reel-h">
        <header className="d07__section-head">
          <span className="d07__section-num">02</span>
          <h2 id="d07-reel-h" className="d07__section-title">Reel</h2>
          <span className="d07__section-meta">Landscape · 16:9 · Placeholder</span>
        </header>

        <figure className="d07__reel-frame">
          <div className="d07__reel-player">
            <video
              className="d07__reel-video"
              poster="/photos/pittsburgh%20actor%205.jpg"
              preload="none"
              playsInline
              controls
              aria-label="Kevin Clark — demo reel placeholder"
            />
            <span className="d07__reel-play" aria-hidden="true">
              <span className="d07__reel-play-tri" />
            </span>
            <span className="d07__reel-tick d07__reel-tick--tl" aria-hidden="true" />
            <span className="d07__reel-tick d07__reel-tick--tr" aria-hidden="true" />
            <span className="d07__reel-tick d07__reel-tick--bl" aria-hidden="true" />
            <span className="d07__reel-tick d07__reel-tick--br" aria-hidden="true" />
          </div>
          <figcaption className="d07__reel-cap">Reel · Placeholder</figcaption>
        </figure>
      </section>

      <section className="d07__info" aria-labelledby="d07-info-h">
        <header className="d07__section-head">
          <span className="d07__section-num">03</span>
          <h2 id="d07-info-h" className="d07__section-title">Info</h2>
          <span className="d07__section-meta">Bio · Education · Representation</span>
        </header>

        <div className="d07__info-grid">
          <div className="d07__info-cell d07__info-cell--tag">
            <span className="d07__info-kicker">Status</span>
            <p className="d07__info-tag">Non-Union · Actively Submitting</p>
          </div>

          <div className="d07__info-cell d07__info-cell--bio">
            <span className="d07__info-kicker">Bio</span>
            <p>
              Kevin Clark is an actor and model signed by The Talent Group, continuing to train in
              acting technique. He has acted in supporting and lead roles across several student
              and indie film productions since 2018.
            </p>
          </div>

          <div className="d07__info-cell">
            <span className="d07__info-kicker">Education</span>
            <p>CCAC Theatre — A.S. Degree, 2017–2019.</p>
          </div>

          <div className="d07__info-cell">
            <span className="d07__info-kicker">Based</span>
            <p>Pittsburgh, PA. Travels for booked work across the region and beyond.</p>
          </div>

          <div className="d07__info-cell">
            <span className="d07__info-kicker">Disciplines</span>
            <p>On-camera acting, print modeling, live promo, hand work, indie &amp; student film.</p>
          </div>

          <div className="d07__info-cell d07__info-cell--rep">
            <span className="d07__info-kicker">Representation</span>
            <p className="d07__rep-agency">The Talent Group</p>
            <p className="d07__rep-phone">
              <a href="tel:+14124718011">412-471-8011</a>
            </p>
            <p className="d07__rep-closer">Route inquiries through the agency.</p>
          </div>
        </div>
      </section>

      <footer className="d07__footer">
        <IntakeForm designId="07" />
      </footer>
    </article>
  );
}
