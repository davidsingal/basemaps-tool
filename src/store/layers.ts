import { atom } from 'jotai';

import type { LayerSpec } from '@/types/layers';

export const layersAtom = atom<LayerSpec[]>([]);
