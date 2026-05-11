import { useCallback, useEffect, useMemo, useState } from 'react';
import { Switcher } from './components/Switcher';
import { StringTuneInit } from './stringtune/StringTuneInit';
import { designs } from './designs';

const HASH_PREFIX = '#/';

function parseHashIndex(total: number): number {
  const m = window.location.hash.match(/^#\/(\d{1,2})$/);
  if (!m) return 0;
  const n = parseInt(m[1], 10) - 1;
  if (Number.isNaN(n)) return 0;
  return Math.max(0, Math.min(total - 1, n));
}

export function App() {
  const total = designs.length;
  const [index, setIndex] = useState(() => parseHashIndex(total));

  useEffect(() => {
    const id = String(index + 1).padStart(2, '0');
    const next = `${HASH_PREFIX}${id}`;
    if (window.location.hash !== next) {
      window.history.replaceState(null, '', next);
    }
  }, [index]);

  useEffect(() => {
    function onHash() {
      setIndex(parseHashIndex(total));
    }
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [total]);

  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  const active = designs[index];
  const ActiveDesign = useMemo(() => active.Component, [active]);

  return (
    <>
      <StringTuneInit />
      <main key={active.id} data-design-id={active.id}>
        <ActiveDesign />
      </main>
      <Switcher
        index={index}
        total={total}
        onPrev={prev}
        onNext={next}
        label={`${active.name} — ${active.blurb}`}
      />
    </>
  );
}
