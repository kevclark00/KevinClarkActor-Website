import { IntakeForm } from '../components/IntakeForm';
import './Design09.css';

type Credit = {
  index: string;
  brand: string;
  role: string;
  note: string;
  photo?: string;
  photoAlt?: string;
  /** When set, this credit's photo is loaded via StringLazy on viewport entry. */
  stringLazy?: boolean;
};

const CREDITS: Credit[] = [
  {
    index: 'i.',
    brand: 'Post University',
    role: 'On-camera talent',
    note: 'Editorial campaign placement.',
    photo: '/photos/pittsburgh%20actor%203.jpg',
    photoAlt: 'Kevin Clark — editorial frame',
  },
  {
    index: 'ii.',
    brand: 'American Eagle',
    role: 'Model',
    note: 'Brand campaign work.',
    photo: '/photos/pittsburgh%20actor%205.jpg',
    photoAlt: 'Kevin Clark — campaign frame',
    stringLazy: true,
  },
  {
    index: 'iii.',
    brand: 'Squid Game — Season 2',
    role: 'Live promo',
    note: 'On-camera activation.',
    photo: '/photos/model%20in%20pittsburgh%20portrait.jpg',
    photoAlt: 'Kevin Clark portrait',
  },
  {
    index: 'iv.',
    brand: 'The Melting Pot',
    role: 'Hand model',
    note: 'Featured product photography.',
  },
];

export function Design09() {
  return (
    <article className="design d09" data-design="mask-reveal">
      {/* HERO — serif-led, photo emerges through the letterforms. */}
      <section className="d09__stage">
        <div className="d09__bg" aria-hidden>
          <img
            src="/photos/Actor%20in%20pittsburgh%20Kevin%20Clark.jpg"
            alt=""
            loading="lazy"
          />
        </div>

        <div className="d09__stage-inner">
          <span className="d09__eyebrow">Portfolio &middot; Pittsburgh, PA</span>

          <h1
            className="kc-h1 d09__h1"
            data-mode="single"
            data-stringtune="d09-h1"
            aria-label="Kevin Clark"
          >
            <span className="d09__h1-text">Kevin Clark</span>
          </h1>

          <p className="d09__lede">
            <em>An actor and a model</em> &mdash; image as letterform,
            letterform as photograph. Pittsburgh based, signed, working.
          </p>
        </div>

        <div className="d09__caption" aria-hidden>
          <span>Mask &middot; Reveal</span>
          <span>09 / 10</span>
        </div>
      </section>

      {/* WORKS — second section. Essay rows of credits in serif. */}
      <section className="d09__section d09__works" aria-labelledby="d09-works-h">
        <header className="d09__section-head">
          <span className="d09__section-num">I.</span>
          <h2 id="d09-works-h" className="d09__section-h">
            <span className="d09__section-h-mask">
              <span>Selected Works</span>
            </span>
          </h2>
          <span className="d09__section-tag">Booked &amp; Featured &middot; 2024&ndash;2026</span>
        </header>

        <ol className="d09__credits">
          {CREDITS.map((c, i) => (
            <li key={c.index} className="d09__credit" style={{ ['--row' as never]: i }}>
              <span className="d09__credit-index" aria-hidden>{c.index}</span>
              <div className="d09__credit-body">
                <div className="d09__credit-headline">
                  <span className="d09__credit-brand">{c.brand}</span>
                  <span className="d09__credit-role">
                    <em>{c.role}</em>
                  </span>
                </div>
                <p className="d09__credit-note">{c.note}</p>
              </div>
              {c.photo ? (
                <figure
                  className={`d09__credit-photo${c.stringLazy ? ' d09__credit-photo--lazy' : ''}`}
                  style={{ ['--row' as never]: i }}
                >
                  {c.stringLazy ? (
                    // StringTune iteration #3 — StringLazy holds the image
                    // until this credit scrolls into view, then swaps src and
                    // adds a `-loaded` class for a serif-quiet fade reveal.
                    <img
                      data-string="lazy"
                      data-string-lazy={c.photo}
                      alt={c.photoAlt ?? ''}
                    />
                  ) : (
                    <img src={c.photo} alt={c.photoAlt ?? ''} loading="lazy" />
                  )}
                </figure>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      {/* VIDEO — quiet landscape player, serif essay treatment.
          Poster-only <video> (no src) with a CSS-rendered play overlay.
          Caption sits below in the serif voice. */}
      <section className="d09__section d09__video" aria-labelledby="d09-video-h">
        <header className="d09__section-head">
          <span className="d09__section-num">II.</span>
          <h2 id="d09-video-h" className="d09__section-h">
            <span className="d09__section-h-mask">
              <span>Reel</span>
            </span>
          </h2>
          <span className="d09__section-tag">Demo &middot; Landscape</span>
        </header>

        <figure className="d09__video-frame">
          <div className="d09__video-stage">
            <video
              className="d09__video-el"
              poster="/photos/pittsburgh%20actor%204.jpg"
              preload="none"
              playsInline
              muted
              aria-label="Kevin Clark — reel placeholder"
            />
            <span className="d09__video-play" aria-hidden>
              <span className="d09__video-play-glyph" />
            </span>
          </div>
          <figcaption className="d09__video-caption">
            <em>Reel</em> &middot; Placeholder
          </figcaption>
        </figure>
      </section>

      {/* INFO — serif essay treatment. */}
      <section className="d09__section d09__info" aria-labelledby="d09-info-h">
        <header className="d09__section-head">
          <span className="d09__section-num">III.</span>
          <h2 id="d09-info-h" className="d09__section-h">
            <span className="d09__section-h-mask">
              <span>About</span>
            </span>
          </h2>
          <span className="d09__section-tag">Non-Union &middot; Actively Submitting</span>
        </header>

        <div className="d09__essay">
          <p className="d09__bio">
            Kevin Clark is an actor and model signed by The Talent Group,
            continuing to train in acting technique. He has acted in
            supporting and lead roles across several student and indie film
            productions since 2018.
          </p>

          <p className="d09__blurb">
            Quiet on camera. Reads as listening &mdash; comfortable holding a
            frame without filling it. The work tends toward stillness over
            performance.
          </p>

          <dl className="d09__facts">
            <div className="d09__fact">
              <dt>Education</dt>
              <dd>CCAC Theatre &mdash; A.S. Degree, 2017&ndash;2019.</dd>
            </div>
            <div className="d09__fact">
              <dt>Home base</dt>
              <dd>Pittsburgh, PA &mdash; routed nationally from a 412 area code.</dd>
            </div>
            <div className="d09__fact">
              <dt>Availability</dt>
              <dd>Actively submitting for modeling &amp; acting work.</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* REPRESENTATION — set apart, serif headline, prominent phone. */}
      <section className="d09__section d09__rep" aria-labelledby="d09-rep-h">
        <header className="d09__section-head">
          <span className="d09__section-num">IV.</span>
          <h2 id="d09-rep-h" className="d09__section-h">
            <span className="d09__section-h-mask">
              <span>Representation</span>
            </span>
          </h2>
          <span className="d09__section-tag">Agency contact</span>
        </header>

        <div className="d09__rep-body">
          <p className="d09__rep-agency">The Talent Group</p>
          <a className="d09__rep-phone" href="tel:+14124718011">
            412&middot;471&middot;8011
          </a>
          <p className="d09__rep-close">
            <em>Route inquiries through the agency.</em>
          </p>
        </div>
      </section>

      <footer className="d09__footer">
        <IntakeForm designId="09" />
      </footer>
    </article>
  );
}
