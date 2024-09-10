'use client';

import { useCallback } from 'react';
import { useAtom } from 'jotai';
import { XIcon } from 'lucide-react';

import { layersAtom } from '@/store/layers';
import { Button } from '@/components/ui/button';

const ActiveLayers: React.FC = () => {
  const [layers, setLayers] = useAtom(layersAtom);

  const handleRemoveLayer = useCallback(
    (id: string) => {
      setLayers((prev) => prev.filter((layer) => layer.id !== id));
    },
    [setLayers],
  );

  return (
    <div className="absolute right-4 top-4">
      {layers.length > 0 && (
        <ul className="space-y-1">
          {layers.map((layer) => (
            <li
              key={layer.id}
              className="flex items-center justify-between gap-1 rounded-md border bg-background p-1"
            >
              <div className="flex items-center space-x-2">
                <h3 className="text-sm font-semibold">{layer.id}</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 shrink-0 grow-0 rounded-full p-0"
                onClick={handleRemoveLayer.bind(null, layer.id)}
              >
                <XIcon className="h-3 w-3" />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActiveLayers;
