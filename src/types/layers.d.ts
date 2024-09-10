import type { LayerProps, SourceProps } from 'react-map-gl/maplibre';

export type LayerSpec = {
  id: string;
  name: string;
  source: SourceProps;
  layers: LayerProps[];
};
