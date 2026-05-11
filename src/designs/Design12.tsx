import { IntakeForm } from '../components/IntakeForm';
import './Design12.css';

const NAME = 'Kevin Clark';

type Credit = {
  brand: string;
  role: string;
  year: string;
};

const CREDITS: Credit[] = [
  { brand: 'Post University', role: 'Model — campus campaign', year: '2024' },
  { brand: 'American Eagle', role: 'Model — apparel still', year: '2024' },
  { brand: 'Squid Game · Season 2', role: 'Live promotional appearance', year: '2024' },
  { brand: 'The Melting Pot', role: 'Hand model — tabletop', year: '2023' },
];

export function Design12() {
  return (
    <article className="design d12" data-design="two-column-manuscript">
      <div className="d12__page">
        {/* RUNNING HEADER — top of every "page" */}
        <header className="d12__running" aria-hidden="true">
          <span className="d12__running-l">Kevin Clark</span>
          <span className="d12__running-c">Chapter Index</span>
          <span className="d12__running-r">Pittsburgh, PA · 412</span>
        </header>
        <div className="d12__hairline d12__hairline--top" aria-hidden="true" />

        {/* CHAPTER LABEL */}
        <p className="d12__chapter-label">Chapter I — A Working Actor</p>

        {/* H1 — chapter title */}
        <h1
          className="kc-h1 d12__h1"
          data-mode="single"
          aria-label={NAME}
        >
          <span className="kc-word">Kevin</span>{' '}
          <span className="kc-word">Clark</span>
        </h1>

        {/* Epigraph — Pittsburgh hook */}
        <blockquote className="d12__epigraph">
          <p>
            <em>
              &ldquo;Where three rivers meet, a city of bridges holds its
              breath between takes.&rdquo;
            </em>
          </p>
          <footer className="d12__epigraph-by">— overheard, the Strip District</footer>
        </blockquote>

        {/* HERO PLATE — illustration between columns at the top of the chapter */}
        <figure
          className="d12__plate d12__plate--hero"
          data-string="lazy"
        >
          <img
            src="/photos/Actor%20in%20pittsburgh%20Kevin%20Clark.jpg"
            alt="Kevin Clark on location in Pittsburgh"
            loading="eager"
          />
          <figcaption>
            <em>Plate I.</em> On location · Lawrenceville, 2024.
          </figcaption>
        </figure>

        {/* OPENING BODY — two columns, drop cap, flowing manuscript */}
        <section className="d12__body" aria-labelledby="d12-body-title">
          <h2 id="d12-body-title" className="d12__body-title">
            <em>Non-Union</em> &middot; Actively Submitting
          </h2>

          <div className="d12__columns d12__columns--lead">
            <p className="d12__p d12__p--lead">
              Kevin Clark is an actor and model signed by The Talent Group,
              continuing to train in acting technique. He has acted in
              supporting and lead roles across several student and indie film
              productions since 2018.
            </p>
            <p className="d12__p">
              The work begins in Pittsburgh — a city of bridges, steel, and
              long winters that flatter a lens. Kevin keeps an even keel on
              set, takes direction without theatrics, and reads a slate the
              same way at six in the morning as he does at midnight. The
              casting notes write themselves: reliable, present, quiet between
              takes.
            </p>
            <p className="d12__p">
              Between productions he trains, lifts a phone for the agency, and
              keeps a clean book of stills. The work is steady rather than
              loud. That, finally, is the point.
            </p>
          </div>
        </section>

        {/* WORKS — credit list, set like a chapter's table */}
        <section className="d12__works" aria-labelledby="d12-works-title">
          <header className="d12__sec-head">
            <p className="d12__eyebrow">§ II · Selected Credits</p>
            <h2 id="d12-works-title" className="d12__sec-title">
              A short ledger of <em>booked</em> work.
            </h2>
          </header>

          <ol className="d12__credits">
            {CREDITS.map((c, i) => (
              <li key={c.brand} className="d12__credit">
                <span className="d12__credit-no">{String(i + 1).padStart(2, '0')}</span>
                <span className="d12__credit-brand">{c.brand}</span>
                <span className="d12__credit-role">{c.role}</span>
                <span className="d12__credit-year">{c.year}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* VIDEO — quiet 16:9 reel plate */}
        <section className="d12__video" aria-labelledby="d12-video-title">
          <header className="d12__sec-head">
            <p className="d12__eyebrow">§ III · Reel</p>
            <h2 id="d12-video-title" className="d12__sec-title">
              A moving <em>plate</em>.
            </h2>
          </header>

          <figure className="d12__reel">
            <div className="d12__reel-frame">
              <video
                className="d12__reel-video"
                poster="/photos/pittsburgh%20actor%205.jpg"
                preload="none"
                playsInline
                muted
                aria-label="Kevin Clark reel — placeholder"
              />
              <button
                type="button"
                className="d12__reel-play"
                aria-label="Play reel (placeholder)"
              >
                <span className="d12__reel-play-triangle" aria-hidden="true" />
              </button>
            </div>
            <figcaption className="d12__reel-cap">
              <em>Reel</em> &middot; Placeholder
            </figcaption>
          </figure>
        </section>

        {/* INFO — columned about + education + plate */}
        <section className="d12__info" aria-labelledby="d12-info-title">
          <header className="d12__sec-head">
            <p className="d12__eyebrow">§ IV · About</p>
            <h2 id="d12-info-title" className="d12__sec-title">
              Tag, <em>bio,</em> and a school.
            </h2>
          </header>

          <p className="d12__tag">Non-Union &middot; Actively Submitting</p>

          <figure
            className="d12__plate d12__plate--inset"
            data-string="parallax"
            data-string-parallax="0.18"
          >
            <img
              src="/photos/pittsburgh%20actor%203.jpg"
              alt="Kevin Clark, on-location frame, Pittsburgh"
              loading="lazy"
            />
            <figcaption>
              <em>Plate II.</em> South Side · 2024.
            </figcaption>
          </figure>

          <div className="d12__columns">
            <p className="d12__p">
              Pittsburgh is a working city. So is its talent. Kevin moves
              between sets in Lawrenceville, the Strip District, and the South
              Side without complaint and without a full-time call sheet. The
              412 is small enough to walk twice in a week and large enough to
              feed a casting director something new each month.
            </p>
            <p className="d12__p">
              On stills, he reads as a clean catalogue figure — quiet eyes, a
              steady jaw, hands that hold a product without fidgeting. On
              camera, he reads as a featured-background actor with the room
              to carry a small speaking moment when the scene asks for one.
            </p>
            <p className="d12__p">
              He is available across Pennsylvania, Ohio, and West Virginia,
              further with notice. The phone goes through the agency.
            </p>
          </div>

          <dl className="d12__edu">
            <dt>Education</dt>
            <dd>CCAC Theatre — A.S. Degree, 2017–2019.</dd>
          </dl>

          {/* Representation block — prominent */}
          <aside className="d12__rep" aria-label="Representation">
            <p className="d12__eyebrow d12__rep-eyebrow">§ V · Representation</p>
            <dl className="d12__rep-list">
              <div className="d12__rep-row">
                <dt>Agency</dt>
                <dd>The Talent Group</dd>
              </div>
              <div className="d12__rep-row">
                <dt>Phone</dt>
                <dd>
                  <a className="d12__phone" href="tel:+14124718011">
                    412-471-8011
                  </a>
                </dd>
              </div>
            </dl>
            <p className="d12__rep-note">
              <em>Route inquiries through the agency.</em>
            </p>
          </aside>

          <figure
            className="d12__plate d12__plate--end"
            data-string="parallax"
            data-string-parallax="0.12"
          >
            <img
              src="/photos/pittsburgh%20actor%204.jpg"
              alt="Kevin Clark, exterior frame, Pittsburgh"
              loading="lazy"
            />
            <figcaption>
              <em>Plate III.</em> Exterior · the 412.
            </figcaption>
          </figure>
        </section>

        {/* FOOTER — intake + colophon */}
        <footer className="d12__footer" aria-labelledby="d12-foot-title">
          <header className="d12__sec-head">
            <p className="d12__eyebrow">§ VI · Inquiries</p>
            <h2 id="d12-foot-title" className="d12__sec-title">
              A short <em>letter</em> is enough.
            </h2>
          </header>

          <IntakeForm designId="12" />

          <div className="d12__hairline d12__hairline--bottom" aria-hidden="true" />
          <p className="d12__colophon">
            From the colophon: <em>Pittsburgh, PA. 412. Set in Fraunces.</em>
            <span className="d12__colophon-sep"> · </span>
            Printed on the banks of the three rivers.
          </p>
        </footer>
      </div>
    </article>
  );
}
