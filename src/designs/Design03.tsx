import { IntakeForm } from '../components/IntakeForm';
import './Design03.css';

const FIRST = 'Kevin';
const LAST = 'Clark';

type Credit = {
  brand: string;
  role: string;
};

const CREDITS: Credit[] = [
  { brand: 'Post University', role: 'Model' },
  { brand: 'American Eagle', role: 'Model' },
  { brand: 'Squid Game Season 2', role: 'Live promo' },
  { brand: 'The Melting Pot', role: 'Hand model' },
];

// Five distinct photos, distributed once each across the design.
const PORTRAIT = '/photos/model%20in%20pittsburgh%20portrait.jpg';
const ACTOR = '/photos/Actor%20in%20pittsburgh%20Kevin%20Clark.jpg';
const SHOT_3 = '/photos/pittsburgh%20actor%203.jpg';
const SHOT_4 = '/photos/pittsburgh%20actor%204.jpg';
const SHOT_5 = '/photos/pittsburgh%20actor%205.jpg';

export function Design03() {
  let i = 0;
  return (
    <article className="design d03" data-design="split-halftone">
      {/* HERO ---------------------------------------------------------- */}
      <section className="d03__hero" aria-label="Kevin Clark">
        <div className="d03__hero-halves" aria-hidden>
          <div className="d03__hero-half d03__hero-half--dark" />
          <div className="d03__hero-half d03__hero-half--paper" />
        </div>

        <div className="d03__hero-portrait" aria-hidden>
          <img src={PORTRAIT} alt="" loading="eager" />
        </div>

        <div className="d03__hero-eyebrow">
          <span>Split / Two-Tone &middot; 412</span>
          <span>03</span>
        </div>

        <div className="d03__hero-name">
          <h1
            className="kc-h1 d03__h1"
            data-mode="letters"
            data-stringtune="d03-h1"
            aria-label={`${FIRST} ${LAST}`}
          >
            <span className="kc-word d03__word d03__word--first">
              {[...FIRST].map((ch) => (
                <span key={`f-${i}`} style={{ ['--i' as never]: i++ }} aria-hidden>{ch}</span>
              ))}
            </span>
            <span className="d03__break" aria-hidden />
            <span className="kc-word d03__word d03__word--last">
              {[...LAST].map((ch) => (
                <span key={`l-${i}`} style={{ ['--i' as never]: i++ }} aria-hidden>{ch}</span>
              ))}
            </span>
          </h1>
          <p className="d03__hero-tag">Actor &amp; Model &middot; Pittsburgh PA</p>
        </div>
      </section>

      {/* WORKS (second) ------------------------------------------------ */}
      <section className="d03__works" aria-labelledby="d03-works-title">
        <div className="d03__works-rail">
          <p className="d03__eyebrow">Selected Work &middot; 412</p>
          <h2 id="d03-works-title" className="d03__works-title">
            Booked<br />&amp; on camera.
          </h2>
          <p className="d03__works-note">
            A short list of recent on-camera and modeling credits, shot in and
            around the Three Rivers.
          </p>
        </div>

        <ul className="d03__credits" role="list">
          {CREDITS.map((credit) => (
            <li key={credit.brand} className="d03__credit">
              <span className="d03__credit-brand">{credit.brand}</span>
              <span className="d03__credit-role">{credit.role}</span>
            </li>
          ))}
        </ul>

        <div className="d03__works-strip" aria-label="Credit photos">
          <figure className="d03__shot d03__shot--01">
            <img src={ACTOR} alt="Kevin Clark on set" loading="lazy" />
          </figure>
          <figure className="d03__shot d03__shot--02">
            <img src={SHOT_3} alt="Kevin Clark, frame 02" loading="lazy" />
          </figure>
          <figure className="d03__shot d03__shot--03">
            <img src={SHOT_4} alt="Kevin Clark, frame 03" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* VIDEO --------------------------------------------------------- */}
      <section className="d03__video" aria-labelledby="d03-video-title">
        <div className="d03__video-side d03__video-side--dark">
          <div
            className="d03__video-frame"
            data-stringtune="d03-video"
            data-string-parallax="0.04"
          >
            {/* poster only; src intentionally absent — reel pending */}
            <video
              className="d03__video-el"
              poster={SHOT_5}
              preload="none"
              playsInline
              muted
              aria-label="Demo reel placeholder"
            />
            <button
              type="button"
              className="d03__video-play"
              aria-label="Play reel (placeholder)"
              disabled
            >
              <span className="d03__video-play-glyph" aria-hidden>&#9654;</span>
            </button>
          </div>
        </div>

        <div className="d03__video-side d03__video-side--paper">
          <p className="d03__eyebrow">Reel &middot; Placeholder</p>
          <h2 id="d03-video-title" className="d03__video-title">
            Reel<br />in transit.
          </h2>
          <p className="d03__video-caption">
            Demo reel pending delivery. Edit will land here in 16:9; in the
            meantime a stilled frame stands in.
          </p>
          <dl className="d03__video-meta">
            <div>
              <dt>Format</dt>
              <dd>16:9, landscape</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>Reel &middot; Placeholder</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* INFO (split) -------------------------------------------------- */}
      <section className="d03__info" aria-labelledby="d03-info-title">
        <div className="d03__info-side d03__info-side--dark">
          <p className="d03__eyebrow d03__eyebrow--inverse">Non-Union &middot; Actively Submitting</p>
          <h2 id="d03-info-title" className="d03__info-title">About Kevin.</h2>
          <p className="d03__bio">
            Kevin Clark is an actor and model signed by The Talent Group, continuing
            to train in acting technique. He has acted in supporting and lead roles
            across several student and indie film productions since 2018.
          </p>
          <dl className="d03__edu">
            <dt>Education</dt>
            <dd>CCAC Theatre &mdash; A.S. Degree, 2017&ndash;2019.</dd>
          </dl>
        </div>

        <div className="d03__info-side d03__info-side--paper">
          <ul className="d03__blurbs" role="list">
            <li>
              <span className="d03__blurb-kicker">Range</span>
              <p>Editorial, promotional, and indie narrative &mdash; equally
              comfortable on stage, on set, and in front of the still camera.</p>
            </li>
            <li>
              <span className="d03__blurb-kicker">On set &middot; 412</span>
              <p>Quick to direction. Open to day-of bookings across the Three
              Rivers and reasonable steel-country radius.</p>
            </li>
          </ul>

          <aside className="d03__rep" aria-label="Representation">
            <p className="d03__rep-kicker">Representation</p>
            <dl className="d03__rep-list">
              <div className="d03__rep-row">
                <dt>Agency</dt>
                <dd>The Talent Group</dd>
              </div>
              <div className="d03__rep-row">
                <dt>Phone</dt>
                <dd>
                  <a className="d03__rep-phone" href="tel:+14124718011">412-471-8011</a>
                </dd>
              </div>
            </dl>
            <p className="d03__rep-note">Route inquiries through the agency.</p>
          </aside>
        </div>
      </section>

      {/* FOOTER -------------------------------------------------------- */}
      <footer className="d03__footer">
        <IntakeForm designId="03" />
      </footer>
    </article>
  );
}
