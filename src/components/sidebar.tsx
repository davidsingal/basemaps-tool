'use client';

import { FormEventHandler, useCallback } from 'react';
import { useAtom } from 'jotai';
import { useForm, Controller } from 'react-hook-form';

import basemapsData from '@/data/basemaps.json';
import { layersAtom } from '@/store/layers';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import type { LayerSpec } from '@/types/layers';

type Inputs = {
  activeLayerId: LayerSpec['id'];
};

const basemaps = basemapsData as LayerSpec[];

const Sidebar: React.FC = () => {
  const [, setLayerSpec] = useAtom(layersAtom);
  const { control, getValues } = useForm<Inputs>({
    defaultValues: {
      activeLayerId: basemaps[0].id,
    },
    mode: 'onChange',
  });

  const handleChange: FormEventHandler<HTMLFormElement> = useCallback(() => {
    const activeLayerId = getValues('activeLayerId');
    const selectedLayer = basemaps.find((basemap) => basemap.id === activeLayerId);
    if (selectedLayer) setLayerSpec(selectedLayer);
  }, [getValues, setLayerSpec]);

  return (
    <form onChange={handleChange}>
      <Controller
        control={control}
        name="activeLayerId"
        render={({ field }) => (
          <RadioGroup
            value={field.value}
            onValueChange={field.onChange}
            onBlur={field.onBlur}
            className="gap-6"
          >
            {basemaps.map((basemap) => (
              <div
                key={`basemap-item-${basemap.id}`}
                className="relative h-[256px] w-[256px] rounded border bg-cover bg-center bg-no-repeat p-2"
                style={{ backgroundImage: `url(${basemap.thumbnail})` }}
              >
                <div className="absolute left-0 top-0 flex w-full items-center gap-2 bg-background/80 p-2">
                  <RadioGroupItem id={`${basemap.id}-basemap`} value={basemap.id} />
                  <label htmlFor={`${basemap.id}-basemap`}>{basemap.name}</label>
                </div>
              </div>
            ))}
          </RadioGroup>
        )}
      />
    </form>
  );
};

export default Sidebar;
