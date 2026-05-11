import { useEffect } from 'react';

type Props = {
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  label?: string;
};

export function Switcher({ index, total, onPrev, onNext, label }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.target instanceof HTMLElement) {
        const tag = e.target.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      }
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onNext, onPrev]);

  const display = `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;

  return (
    <nav className="kc-switcher" aria-label="Design switcher" title={label}>
      <button
        type="button"
        className="kc-switcher__btn"
        onClick={onPrev}
        aria-label="Previous design"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path d="M7.5 2.5L4 6l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <span className="kc-switcher__count">{display}</span>
      <button
        type="button"
        className="kc-switcher__btn"
        onClick={onNext}
        aria-label="Next design"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path d="M4.5 2.5L8 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </nav>
  );
}
