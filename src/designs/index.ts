import type { Design } from '../types';
import { Design01 } from './Design01';
import { Design02 } from './Design02';
import { Design03 } from './Design03';
import { Design04 } from './Design04';
import { Design05 } from './Design05';
import { Design06 } from './Design06';
import { Design07 } from './Design07';
import { Design08 } from './Design08';
import { Design09 } from './Design09';
import { Design10 } from './Design10';
import { Design11 } from './Design11';
import { Design12 } from './Design12';
import { Design13 } from './Design13';
import { Design14 } from './Design14';
import { Design15 } from './Design15';
import { Design16 } from './Design16';
import { Design17 } from './Design17';
import { Design18 } from './Design18';
import { Design19 } from './Design19';
import { Design20 } from './Design20';

export const designs: Design[] = [
  { id: '01', name: 'Brutalist Bleed', blurb: 'Full-bleed type, single photo column', Component: Design01 },
  { id: '02', name: 'Editorial Grid', blurb: 'Magazine cover — wrapped letters, photo-right', Component: Design02 },
  { id: '03', name: 'Split Halftone', blurb: 'Two-tone restraint', Component: Design03 },
  { id: '04', name: 'Marquee', blurb: 'One slow ticker, loud anchor below', Component: Design04 },
  { id: '05', name: 'Cinema', blurb: 'Letterbox + film grain + cast list', Component: Design05 },
  { id: '06', name: 'Stack Reveal', blurb: 'One rising H1, stack-themed body', Component: Design06 },
  { id: '07', name: 'Grid Type', blurb: 'Restrained 3×3 + grid body', Component: Design07 },
  { id: '08', name: 'Vertical Spine', blurb: 'Spine of type, parallax photo', Component: Design08 },
  { id: '09', name: 'Mask Reveal', blurb: 'Serif essay, photo-through-type', Component: Design09 },
  { id: '10', name: 'Minimal Serif', blurb: 'Quiet typographic essay', Component: Design10 },
  { id: '11', name: 'Index', blurb: 'Literary index, italic Fraunces, paper', Component: Design11 },
  { id: '12', name: 'Two-Column', blurb: 'Manuscript columns, running heads', Component: Design12 },
  { id: '13', name: 'Negative Space', blurb: 'White voids, content in islands', Component: Design13 },
  { id: '14', name: 'Asymmetric Grid', blurb: 'Offset modules, big silence', Component: Design14 },
  { id: '15', name: 'Vertical Reading', blurb: 'Sideways type rails', Component: Design15 },
  { id: '16', name: 'Strict Column', blurb: 'Single tight column, rules', Component: Design16 },
  { id: '17', name: 'Centerline', blurb: 'Mirrored vertical centerline', Component: Design17 },
  { id: '18', name: 'Off-Baseline', blurb: 'Modular grid, varying baselines', Component: Design18 },
  { id: '19', name: 'Edge-Aligned', blurb: 'Content at edges, interior void', Component: Design19 },
  { id: '20', name: 'Diagonal', blurb: 'Diagonal accent cutting the layout', Component: Design20 },
];
