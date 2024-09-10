import { atom } from 'jotai';

import basemapsData from '@/data/basemaps.json';

import type { LayerSpec } from '@/types/layers';

const basemaps = basemapsData as LayerSpec[];

export const layersAtom = atom<LayerSpec>(basemaps[0]);
