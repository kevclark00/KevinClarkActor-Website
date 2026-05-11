import './KevinBody.css';

type Props = { designId: string };

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

const HEADSHOTS = [
  '/photos/placeholder-01.jpg',
  '/photos/placeholder-02.jpg',
  '/photos/placeholder-03.jpg',
];

export function KevinBody({ designId }: Props) {
  const bodyClass = `kc-body kc-body--d${designId}`;

  return (
    <section className={bodyClass} aria-labelledby="kc-body-bio">
      <div className="kc-body__pane kc-body__pane--intro">
        <p className="kc-body__eyebrow">Non-Union &middot; Actively Submitting</p>

        <p id="kc-body-bio" className="kc-body__bio">
          Kevin Clark is an actor and model signed by The Talent Group, continuing
          to train in acting technique. He has acted in supporting and lead roles
          across several student and indie film productions since 2018.
        </p>

        <p className="kc-body__edu">
          <span className="kc-body__edu-label">Education</span>
          <span className="kc-body__edu-body">CCAC Theatre &mdash; A.S. Degree, 2017&ndash;2019.</span>
        </p>

        <aside className="kc-body__rep" aria-label="Representation">
          <p className="kc-body__rep-kicker">Representation</p>
          <dl className="kc-body__rep-list">
            <div className="kc-body__rep-row">
              <dt>Agency</dt>
              <dd>The Talent Group</dd>
            </div>
            <div className="kc-body__rep-row">
              <dt>Phone</dt>
              <dd>
                <a className="kc-body__phone" href="tel:+14124718011">412-471-8011</a>
              </dd>
            </div>
          </dl>
          <p className="kc-body__rep-note">Route inquiries through the agency.</p>
        </aside>
      </div>

      <div className="kc-body__pane kc-body__pane--work">
        <header className="kc-body__work-head">
          <p className="kc-body__eyebrow">Selected Work</p>
          <h2 className="kc-body__work-title">Booked &amp; on camera.</h2>
        </header>

        <ul className="kc-body__credits">
          {CREDITS.map((credit) => (
            <li key={credit.brand} className="kc-body__credit">
              <span className="kc-body__credit-brand">{credit.brand}</span>
              <span className="kc-body__credit-role">{credit.role}</span>
            </li>
          ))}
        </ul>

        <div className="kc-body__headshots" aria-label="Headshots">
          {HEADSHOTS.map((src, i) => (
            <figure key={src} className="kc-body__shot">
              <img
                src={src}
                alt={`Kevin Clark headshot ${i + 1}`}
                loading="lazy"
              />
            </figure>
          ))}
        </div>

        <nav className="kc-body__links" aria-label="Media">
          <a className="kc-body__link" href="#" data-pending="true">
            <span className="kc-body__link-arrow" aria-hidden>&rarr;</span>
            <span className="kc-body__link-text">Watch demo reel</span>
          </a>
          <a className="kc-body__link" href="#" data-pending="true">
            <span className="kc-body__link-arrow" aria-hidden>&rarr;</span>
            <span className="kc-body__link-text">Download resume</span>
          </a>
        </nav>
      </div>
    </section>
  );
}
