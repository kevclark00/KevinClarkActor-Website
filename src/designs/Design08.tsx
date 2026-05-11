import { IntakeForm } from '../components/IntakeForm';
import './Design08.css';

type PhotoShape = 'landscape' | 'portrait';

type Credit = {
  index: string;
  brand: string;
  role: string;
  detail: string;
  photo?: string;
  photoAlt?: string;
  photoShape?: PhotoShape;
};

const CREDITS: Credit[] = [
  {
    index: '01',
    brand: 'Post University',
    role: 'On-camera talent',
    detail: 'Editorial campaign placement.',
    photo: '/photos/Actor%20in%20pittsburgh%20Kevin%20Clark.jpg',
    photoAlt: 'Kevin Clark on location in Pittsburgh',
    photoShape: 'landscape',
  },
  {
    index: '02',
    brand: 'American Eagle',
    role: 'Model',
    detail: 'Brand campaign work.',
  },
  {
    index: '03',
    brand: 'Squid Game · Season 2',
    role: 'Live promo',
    detail: 'On-camera activation, Pittsburgh.',
    photo: '/photos/pittsburgh%20actor%203.jpg',
    photoAlt: 'Kevin Clark on a Pittsburgh promo set',
    photoShape: 'portrait',
  },
  {
    index: '04',
    brand: 'The Melting Pot',
    role: 'Hand model',
    detail: 'Featured product photography.',
  },
];

export function Design08() {
  return (
    <article className="design d08" data-design="vertical-spine">
      <aside className="d08__rail">
        <span className="d08__mark">Portfolio · 26</span>
        <h1 className="kc-h1 d08__h1" data-mode="letters" data-stringtune="d08-h1" aria-label="Kevin Clark">
          <span className="kc-word">
            <span style={{ ['--i' as never]: 0 }}>K</span>
            <span style={{ ['--i' as never]: 1 }}>E</span>
            <span style={{ ['--i' as never]: 2 }}>V</span>
            <span style={{ ['--i' as never]: 3 }}>I</span>
            <span style={{ ['--i' as never]: 4 }}>N</span>
          </span>
          <span className="d08__h1-gap" aria-hidden> </span>
          <span className="kc-word">
            <span style={{ ['--i' as never]: 5 }}>C</span>
            <span style={{ ['--i' as never]: 6 }}>L</span>
            <span style={{ ['--i' as never]: 7 }}>A</span>
            <span style={{ ['--i' as never]: 8 }}>R</span>
            <span style={{ ['--i' as never]: 9 }}>K</span>
          </span>
        </h1>
        <span className="d08__index">08</span>
      </aside>

      <div className="d08__content">
        <section className="d08__hero">
          <figure className="d08__photo">
            <img
              className="d08__photo-img"
              src="/photos/model%20in%20pittsburgh%20portrait.jpg"
              alt="Kevin Clark portrait"
              loading="lazy"
            />
            <span className="d08__photo-sweep" aria-hidden>
              <span>KEVIN CLARK · KEVIN CLARK · KEVIN CLARK · KEVIN CLARK ·</span>
            </span>
          </figure>
          <p className="d08__lede">
            A spine of type, a body of work. Stillness, presence, restraint &mdash;
            selected from the year&rsquo;s editorial &amp; on-camera work.
          </p>
        </section>

        <div className="d08__meta-row">
          <div>Class<b>Lead / Co-Star</b></div>
          <div>Status<b>Non-Union</b></div>
          <div>Base<b>Pittsburgh, PA</b></div>
          <div>Reps<b>The Talent Group</b></div>
        </div>

        {/* WORKS — second section. Vertical numeric spine + rows. */}
        <section className="d08__section d08__works" aria-labelledby="d08-works-h">
          <div className="d08__section-rail">
            <span className="d08__rail-label">Works · 2024&ndash;2026</span>
          </div>
          <div className="d08__section-body">
            <h2 id="d08-works-h" className="d08__section-h">Booked &amp; Featured</h2>
            <ol className="d08__credits">
              {CREDITS.map((c, i) => (
                <li
                  key={c.index}
                  className="d08__credit"
                  style={{ ['--row' as never]: i }}
                >
                  <span className="d08__credit-index" aria-hidden>{c.index}</span>
                  <div className="d08__credit-body">
                    <div className="d08__credit-line">
                      <span className="d08__credit-brand">{c.brand}</span>
                      <span className="d08__credit-rule" aria-hidden />
                      <span className="d08__credit-role">{c.role}</span>
                    </div>
                    <p className="d08__credit-detail">{c.detail}</p>
                  </div>
                  {c.photo ? (
                    <figure
                      className="d08__credit-photo"
                      data-shape={c.photoShape ?? 'landscape'}
                      style={{ ['--row' as never]: i }}
                    >
                      <img src={c.photo} alt={c.photoAlt ?? ''} loading="lazy" />
                    </figure>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* VIDEO — reel placeholder, landscape player on the spine */}
        <section className="d08__section d08__reel" aria-labelledby="d08-reel-h">
          <div className="d08__section-rail">
            <span className="d08__rail-label">Reel</span>
          </div>
          <div className="d08__section-body">
            <h2 id="d08-reel-h" className="d08__section-h">Demo Reel</h2>
            <figure className="d08__reel-figure">
              <div className="d08__reel-frame">
                <video
                  className="d08__reel-video"
                  poster="/photos/pittsburgh%20actor%204.jpg"
                  preload="none"
                  playsInline
                  muted
                  aria-label="Demo reel placeholder"
                />
                <span className="d08__reel-sweep" aria-hidden>
                  <span>REEL · KEVIN CLARK · REEL · KEVIN CLARK ·</span>
                </span>
                <button
                  type="button"
                  className="d08__reel-play"
                  aria-label="Play demo reel (placeholder)"
                  disabled
                >
                  <span className="d08__reel-play-icon" aria-hidden>&#9654;</span>
                </button>
              </div>
              <figcaption className="d08__reel-cap">Reel &middot; Placeholder</figcaption>
            </figure>
          </div>
        </section>

        {/* INFO — bio, education, blurbs, representation */}
        <section className="d08__section d08__info" aria-labelledby="d08-info-h">
          <div className="d08__section-rail">
            <span className="d08__rail-label">Non-Union &middot; Actively Submitting</span>
          </div>
          <div className="d08__section-body">
            <h2 id="d08-info-h" className="d08__section-h">About</h2>

            <p className="d08__bio">
              Kevin Clark is an actor and model signed by The Talent Group,
              continuing to train in acting technique. He has acted in
              supporting and lead roles across several student and indie film
              productions since 2018.
            </p>

            <dl className="d08__facts">
              <div className="d08__fact">
                <dt>Education</dt>
                <dd>CCAC Theatre &mdash; A.S. Degree, 2017&ndash;2019.</dd>
              </div>
              <div className="d08__fact">
                <dt>Training</dt>
                <dd>Ongoing &mdash; acting technique, on-camera craft.</dd>
              </div>
              <div className="d08__fact">
                <dt>Availability</dt>
                <dd>Actively submitting for modeling &amp; acting work.</dd>
              </div>
            </dl>

            <div className="d08__blurbs">
              <p>Quiet on camera &mdash; reads as listening, holds the frame without filling it.</p>
              <p>Pittsburgh based, working regional and national bookings through the agency.</p>
            </div>
          </div>
        </section>

        <section className="d08__section d08__rep" aria-labelledby="d08-rep-h">
          <div className="d08__section-rail">
            <span className="d08__rail-label">Representation</span>
          </div>
          <div className="d08__section-body">
            <h2 id="d08-rep-h" className="d08__section-h">The Talent Group</h2>
            <div className="d08__rep-line">
              <a className="d08__rep-phone" href="tel:+14124718011">
                412-471-8011
              </a>
            </div>
            <p className="d08__rep-close">Route inquiries through the agency.</p>
          </div>
        </section>

        <footer className="d08__footer">
          <IntakeForm designId="08" />
        </footer>
      </div>
    </article>
  );
}
