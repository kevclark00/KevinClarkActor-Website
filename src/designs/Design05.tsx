import { IntakeForm } from '../components/IntakeForm';
import './Design05.css';

// Design 05 — Cinema. End-credits cast list, letterboxed hero, restrained
// motion suggestive of film grain + projection. Body is inline (no KevinBody).
const ACTOR_PHOTO = '/photos/Actor%20in%20pittsburgh%20Kevin%20Clark.jpg';
const PORTRAIT_PHOTO = '/photos/model%20in%20pittsburgh%20portrait.jpg';
const STILL_A_PHOTO = '/photos/pittsburgh%20actor%204.jpg';
const PARALLAX_PHOTO = '/photos/pittsburgh%20actor%203.jpg';
const REEL_POSTER = '/photos/pittsburgh%20actor%205.jpg';

type Credit = {
  no: string;
  brand: string;
  role: string;
  format: string;
};

const CREDITS: ReadonlyArray<Credit> = [
  { no: '01', brand: 'Post University', role: 'Model', format: 'Campaign' },
  { no: '02', brand: 'American Eagle', role: 'Model', format: 'Campaign' },
  { no: '03', brand: 'Squid Game · Season 2', role: 'Live Promo', format: 'Activation' },
  { no: '04', brand: 'The Melting Pot', role: 'Hand Model', format: 'Print' },
];

export function Design05() {
  return (
    <article className="design d05" data-design="cinema">
      {/* ============================ HERO ============================ */}
      <section className="d05__stage" aria-label="Kevin Clark — title card">
        <div className="d05__photo" aria-hidden="true">
          <img src={ACTOR_PHOTO} alt="" loading="eager" />
          <div className="d05__grain" />
          <div className="d05__vignette" />
        </div>

        <div className="d05__bar d05__bar--top" aria-hidden="true" />
        <div className="d05__bar d05__bar--bottom" aria-hidden="true" />

        <span className="d05__slate d05__slate--tl">A Portfolio in One Reel</span>
        <span className="d05__slate d05__slate--tr">MMXXVI</span>
        <span className="d05__slate d05__slate--bl">Reel No. 05 / Cinema</span>
        <span className="d05__slate d05__slate--br">2.39 : 1</span>

        <div className="d05__title">
          <p className="d05__pretitle">A Talent Group Production</p>
          <h1 className="kc-h1 d05__h1" data-mode="single" data-stringtune="d05-h1">
            <span>Kevin Clark</span>
          </h1>
          <p className="d05__subtitle">
            <span>Actor</span>
            <span className="d05__dot" aria-hidden="true">·</span>
            <span>Model</span>
            <span className="d05__dot" aria-hidden="true">·</span>
            <span>Non-Union</span>
          </p>
          <p className="d05__year">Pittsburgh · Three Rivers · 2018 — Present</p>
        </div>
      </section>

      {/* ============================ WORKS ============================ */}
      <section className="d05__reel" aria-labelledby="d05-reel-head">
        <header className="d05__reel-head">
          <span className="d05__reel-eyebrow">Roll One · 24 fps</span>
          <h2 id="d05-reel-head" className="d05__reel-title">Selected Credits</h2>
          <p className="d05__reel-sub">
            In order of appearance — booked and on file with The Talent Group.
          </p>
        </header>

        <ol className="d05__cast" role="list">
          {CREDITS.map((c, i) => (
            <li
              key={c.no}
              className="d05__cast-row"
              style={{ ['--i' as string]: i }}
            >
              <span className="d05__cast-no">{c.no}</span>
              <span className="d05__cast-credit">{c.role}</span>
              <span className="d05__cast-rule" aria-hidden="true" />
              <span className="d05__cast-brand">{c.brand}</span>
              <span className="d05__cast-format">{c.format}</span>
            </li>
          ))}
        </ol>

        <div className="d05__stills" aria-label="Production stills">
          <figure className="d05__still d05__still--a">
            <img src={STILL_A_PHOTO} alt="Kevin Clark on location, Strip District" loading="lazy" />
            <figcaption>
              <span>Still 01</span>
              <span>Strip District · exterior</span>
            </figcaption>
          </figure>
          <figure className="d05__still d05__still--b">
            <img src={PORTRAIT_PHOTO} alt="Kevin Clark — studio portrait" loading="lazy" />
            <figcaption>
              <span>Still 02</span>
              <span>Studio · interior</span>
            </figcaption>
          </figure>
          {/* StringTune iteration #1 — StringParallax on the img inside an
              overflow:hidden figure gives the still a slow depth drift. */}
          <figure className="d05__still d05__still--c d05__still--parallax">
            <img
              data-string="parallax"
              data-string-parallax="0.18"
              src={PARALLAX_PHOTO}
              alt="Kevin Clark — on set near the Allegheny"
              loading="lazy"
            />
            <figcaption>
              <span>Still 03</span>
              <span>Allegheny riverfront · day</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ============================ VIDEO =========================== */}
      <section className="d05__screening" aria-labelledby="d05-screening-head">
        <header className="d05__screening-head">
          <span className="d05__reel-eyebrow">Roll Two · Screening</span>
          <h2 id="d05-screening-head" className="d05__reel-title">Demo Reel</h2>
          <p className="d05__reel-sub">
            A short selection — currently held for a final cut.
          </p>
        </header>

        <div className="d05__screen" role="group" aria-label="Demo reel placeholder">
          <div className="d05__screen-frame">
            <video
              className="d05__screen-video"
              poster={REEL_POSTER}
              preload="none"
              playsInline
              aria-label="Kevin Clark demo reel — placeholder"
            />
            <div className="d05__screen-grain" aria-hidden="true" />
            <div className="d05__screen-vignette" aria-hidden="true" />
            <div className="d05__screen-bar d05__screen-bar--top" aria-hidden="true" />
            <div className="d05__screen-bar d05__screen-bar--bottom" aria-hidden="true" />
            <span className="d05__screen-slate d05__screen-slate--tl" aria-hidden="true">Reel · 35mm</span>
            <span className="d05__screen-slate d05__screen-slate--tr" aria-hidden="true">16 : 9</span>
            <button
              type="button"
              className="d05__screen-play"
              aria-label="Play demo reel (placeholder)"
              disabled
            >
              <span className="d05__screen-play-mark" aria-hidden="true" />
            </button>
          </div>
          <figcaption className="d05__screen-caption">Reel · Placeholder</figcaption>
        </div>
      </section>

      {/* ============================ INFO ============================ */}
      <section className="d05__notes" aria-labelledby="d05-notes-head">
        <header className="d05__notes-head">
          <span className="d05__reel-eyebrow">Production Notes</span>
          <h2 id="d05-notes-head" className="d05__notes-title">Synopsis</h2>
          <p className="d05__tag">Non-Union · Actively Submitting</p>
        </header>

        <div className="d05__notes-grid">
          <div className="d05__synopsis">
            <p className="d05__bio">
              Kevin Clark is an actor and model signed by The Talent Group, continuing
              to train in acting technique. He has acted in supporting and lead roles
              across several student and indie film productions since 2018.
            </p>
            <p className="d05__edu">
              <span className="d05__edu-label">Education</span>
              <span className="d05__edu-rule" aria-hidden="true" />
              <span className="d05__edu-body">CCAC Theatre — A.S. Degree, 2017–2019.</span>
            </p>
          </div>

          <aside className="d05__bible" aria-label="Production bible">
            <p className="d05__blurb">
              <span className="d05__blurb-no">i.</span>
              Based out of Pittsburgh — Strip District to South Side, Lawrenceville
              to the Mon. Quick call times, easy access to river and rooftop
              exteriors, and a working knowledge of the city's location grid.
            </p>
            <p className="d05__blurb">
              <span className="d05__blurb-no">ii.</span>
              Camera-trained and redirectable on set. Comfortable in tight
              close-ups, hand-model details, brand activations, and the dense
              one-day shoots common to indie productions.
            </p>
          </aside>
        </div>

        <div className="d05__rep" role="group" aria-label="Representation">
          <div className="d05__rep-row">
            <span className="d05__rep-label">Representation</span>
            <span className="d05__rep-value">The Talent Group</span>
          </div>
          <div className="d05__rep-row">
            <span className="d05__rep-label">Booking</span>
            <a className="d05__rep-value d05__rep-link" href="tel:+14124718011">
              412-471-8011
            </a>
          </div>
          <p className="d05__rep-closer">Route inquiries through the agency.</p>
        </div>
      </section>

      {/* ============================ FOOTER ============================ */}
      <footer className="d05__footer" aria-label="End titles">
        <div className="d05__end-mark" aria-hidden="true">
          <span>FIN</span>
        </div>
        <IntakeForm designId="05" />
        <p className="d05__copyright">© MMXXVI · Kevin Clark · All Rights Reserved</p>
      </footer>
    </article>
  );
}
