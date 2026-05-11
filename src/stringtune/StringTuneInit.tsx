// StringTune singleton bootstrap. Mounted once at the root of App.tsx.
// Registers only the modules the site actually consumes (tree-shake friendly).
// Per the StringTune docs: in React, the attribute prefix MUST be data-string-*
// (React strips unknown DOM attributes). The library falls back to data-string-*
// when string-* isn't present.

import { useEffect } from 'react';
import StringTune, {
  StringParallax,
  StringProgress,
  StringLazy,
  StringResponsive,
  StringLoading,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
} from '@fiddle-digital/string-tune';

let booted = false;

export function StringTuneInit() {
  useEffect(() => {
    if (booted) return;
    booted = true;

    const st = StringTune.getInstance();

    st.setupSettings({
      'offset-top': '-10%',
      'offset-bottom': '-10%',
      timeout: 600,
    });

    st.use(StringParallax);
    st.use(StringProgress);
    st.use(StringLazy);
    st.use(StringResponsive);
    st.use(StringLoading, { timeout: 600 });

    st.scrollDesktopMode = 'default';
    st.scrollMobileMode = 'default';
    st.speed = 0.1;
    st.speedAccelerate = 0.5;

    st.start(60);
  }, []);

  return null;
}
