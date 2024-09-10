'use client';

import Map, { Layer, Source, NavigationControl } from 'react-map-gl/maplibre';
import { useAtom } from 'jotai';

import { layersAtom } from '@/store/layers';

const MapComponent: React.FC = () => {
  const [layerSpec] = useAtom(layersAtom);

  return (
    <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
      <Map
        initialViewState={{
          longitude: 20,
          latitude: 0,
          zoom: 3,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          userSelect: 'none',
        }}
      >
        {!!layerSpec && (
          <Source key={layerSpec.id} {...layerSpec.source}>
            {layerSpec.layers.map((layer) => (
              <Layer key={`layer-${layerSpec.id}`} {...layer} />
            ))}
          </Source>
        )}
        <NavigationControl />
      </Map>
    </div>
  );
};

export default MapComponent;
