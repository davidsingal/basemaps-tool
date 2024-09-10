'use client';

import { useAtom } from 'jotai';
import JsonView from '@uiw/react-json-view';

import { layersAtom } from '@/store/layers';

const ActiveLayer: React.FC = () => {
  const [layerSpec] = useAtom(layersAtom);

  return (
    <>
      {!!layerSpec && (
        <JsonView
          value={layerSpec.source}
          displayObjectSize={false}
          displayDataTypes={false}
          enableClipboard
          shortenTextAfterLength={0}
          objectSortKeys={false}
          className="min-h-[250px] overflow-auto rounded-md border p-2"
        />
      )}
    </>
  );
};

export default ActiveLayer;
