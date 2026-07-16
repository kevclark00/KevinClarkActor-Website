import { useEffect, useMemo, useState } from 'react';
import { StringTuneInit } from './stringtune/StringTuneInit';
import { designs } from './designs';

function parseHashIndex(total: number): number {
  const m = window.location.hash.match(/^#\/(\d{1,2})$/);
  if (!m) return 0;
  const n = parseInt(m[1], 10) - 1;
  if (Number.isNaN(n)) return 0;
  return Math.max(0, Math.min(total - 1, n));
}

// Production ships Design01 only. In dev, #/NN in the URL can still preview
// the other sketches kept in the repo — there's no on-page switcher anymore.
const ALLOW_HASH_ROUTING = import.meta.env.DEV;

export function App() {
  const total = designs.length;
  const [index, setIndex] = useState(() => (ALLOW_HASH_ROUTING ? parseHashIndex(total) : 0));

  useEffect(() => {
    if (!ALLOW_HASH_ROUTING) return;
    function onHash() {
      setIndex(parseHashIndex(total));
    }
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [total]);

  const active = designs[index];
  const ActiveDesign = useMemo(() => active.Component, [active]);

  return (
    <>
      <StringTuneInit />
      <main key={active.id} data-design-id={active.id}>
        <ActiveDesign />
      </main>
    </>
  );
}
