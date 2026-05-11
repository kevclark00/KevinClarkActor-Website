import { IntakeForm } from '../components/IntakeForm';
import './Design06.css';

const NAME = 'Kevin Clark';
const WORDS = NAME.split(' ');

function Letters({ baseDelay = 0 }: { baseDelay?: number }) {
  return (
    <>
      {WORDS.map((word, wIdx) => (
        <span key={word} className="kc-word">
          {[...word].map((ch, lIdx) => {
            const i = (wIdx === 0 ? lIdx : lIdx + 6) + baseDelay;
            return (
              <span key={lIdx} style={{ ['--i' as never]: i }} aria-hidden>
                {ch}
              </span>
            );
          })}
        </span>
      )).reduce<React.ReactNode[]>(
        (acc, node, idx) => (idx === 0 ? [node] : [...acc, ' ', node]),
        []
      )}
    </>
  );
}

type Credit = {
  brand: string;
  role: string;
  year: string;
};

const CREDITS: Credit[] = [
  { brand: 'Post University', role: 'Modeling campaign', year: '2024' },
  { brand: 'American Eagle', role: 'Modeling', year: '2023' },
  { brand: 'Squid Game Season 2', role: 'Live promo', year: '2024' },
  { brand: 'The Melting Pot', role: 'Hand model', year: '2023' },
];

export function Design06() {
  return (
    <article className="design d06" data-design="stack-reveal">
      <header className="d06__top">
        <span>Kevin Clark — Portfolio</span>
        <span>Vol. 06</span>
      </header>

      <div className="d06__stackwrap">
        <figure className="d06__photo">
          <img
            src="/photos/Actor%20in%20pittsburgh%20Kevin%20Clark.jpg"
            alt="Kevin Clark on location in Pittsburgh"
            loading="lazy"
          />
        </figure>

        <div className="d06__stack">
          <h1
            className="kc-h1 d06__row d06__row--1"
            data-mode="letters"
            data-stringtune="d06-h1"
            aria-label={NAME}
          >
            <Letters />
          </h1>
        </div>
      </div>

      <div className="d06__meta">
        <span>Actor · Model · Pittsburgh</span>
        <span>Repped — Inquiries below</span>
      </div>

      <section className="d06-works" aria-labelledby="d06-works-heading">
        <header className="d06-works__head">
          <h2 id="d06-works-heading" className="d06-works__title">Selected works</h2>
          <span className="d06-works__count">{CREDITS.length.toString().padStart(2, '0')} credits</span>
        </header>

        <ol className="d06-works__list" role="list">
          {CREDITS.map((credit, idx) => (
            <li
              key={credit.brand}
              className="d06-works__row"
              style={{ ['--row' as never]: idx }}
            >
              <span className="d06-works__idx">{(idx + 1).toString().padStart(2, '0')}</span>
              <span className="d06-works__brand">{credit.brand}</span>
              <span className="d06-works__role">{credit.role}</span>
              <span className="d06-works__year">{credit.year}</span>
            </li>
          ))}
        </ol>

        <div className="d06-works__media" aria-hidden>
          <figure className="d06-works__shot d06-works__shot--1" style={{ ['--shot' as never]: 0 }}>
            <img
              src="/photos/model%20in%20pittsburgh%20portrait.jpg"
              alt=""
              loading="lazy"
            />
          </figure>
          <figure className="d06-works__shot d06-works__shot--2" style={{ ['--shot' as never]: 1 }}>
            <img
              src="/photos/pittsburgh%20actor%203.jpg"
              alt=""
              loading="lazy"
            />
          </figure>
          <figure className="d06-works__shot d06-works__shot--3" style={{ ['--shot' as never]: 2 }}>
            <img
              src="/photos/pittsburgh%20actor%204.jpg"
              alt=""
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="d06-video" aria-labelledby="d06-video-heading">
        <header className="d06-video__head">
          <h2 id="d06-video-heading" className="d06-video__title">Reel</h2>
          <span className="d06-video__tag">Landscape · 16:9</span>
        </header>

        <figure className="d06-video__frame">
          <video
            className="d06-video__player"
            poster="/photos/pittsburgh%20actor%205.jpg"
            preload="none"
            playsInline
            aria-label="Kevin Clark demo reel — placeholder"
          />
          <button
            type="button"
            className="d06-video__play"
            aria-label="Play reel (placeholder)"
            tabIndex={-1}
          >
            <span className="d06-video__play-glyph" aria-hidden>▶</span>
          </button>
          <figcaption className="d06-video__caption">
            <span className="d06-video__caption-rule" aria-hidden />
            <span className="d06-video__caption-text">Reel · Placeholder</span>
          </figcaption>
        </figure>
      </section>

      <section className="d06-info" aria-labelledby="d06-info-heading">
        <h2 id="d06-info-heading" className="d06-info__title">The stack</h2>

        <div className="d06-info__deck">
          <div className="d06-info__block" style={{ ['--b' as never]: 0 }}>
            <span className="d06-info__label">Status</span>
            <p className="d06-info__lead">Non-Union · Actively Submitting</p>
          </div>

          <div className="d06-info__block" style={{ ['--b' as never]: 1 }}>
            <span className="d06-info__label">Bio</span>
            <p className="d06-info__body">
              Kevin Clark is an actor and model signed by The Talent Group, continuing to train
              in acting technique. He has acted in supporting and lead roles across several
              student and indie film productions since 2018.
            </p>
            <p className="d06-info__body d06-info__body--dim">
              Pittsburgh-based — available across the city and the surrounding region.
            </p>
          </div>

          <div className="d06-info__block" style={{ ['--b' as never]: 2 }}>
            <span className="d06-info__label">Education</span>
            <p className="d06-info__body">CCAC Theatre — A.S. Degree, 2017–2019.</p>
          </div>

          <div className="d06-info__block" style={{ ['--b' as never]: 3 }}>
            <span className="d06-info__label">Training</span>
            <p className="d06-info__body">
              Ongoing technique work alongside booked sets.
            </p>
          </div>

          <div className="d06-info__block d06-info__block--rep" style={{ ['--b' as never]: 4 }}>
            <span className="d06-info__label">Representation</span>
            <p className="d06-info__rep-agency">The Talent Group</p>
            <p className="d06-info__rep-phone">
              <a href="tel:+14124718011">412-471-8011</a>
            </p>
            <p className="d06-info__rep-note">Route inquiries through the agency.</p>
          </div>
        </div>
      </section>

      <footer className="d06__footer">
        <IntakeForm designId="06" />
      </footer>
    </article>
  );
}
