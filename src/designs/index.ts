import type { Design } from '../types';
import { Design01 } from './Design01';
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
