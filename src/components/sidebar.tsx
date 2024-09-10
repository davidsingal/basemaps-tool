'use client';

import { useCallback } from 'react';
import { useAtom } from 'jotai';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import basemapsData from '@/data/basemaps.json';
import { layersAtom } from '@/store/layers';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { LayerSpec } from '@/types/layers';

type Inputs = {
  activeLayer: LayerSpec['id'];
};

const basemaps = basemapsData as LayerSpec[];

const Sidebar: React.FC = () => {
  const [layers, setLayers] = useAtom(layersAtom);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      activeLayer: undefined,
    },
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<Inputs> = useCallback(
    (data) => {
      console.log(data);
    },
    [layers, setLayers],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Controller
        control={control}
        name="activeLayer"
        render={({ field }) => (
          <RadioGroup value={field.value} onValueChange={field.onChange}>
            {basemaps.map((basemap) => (
              <div key={`basemap-item-${basemap.id}`} className="rounded border p-2">
                <div className="flex gap-2">
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

  // return (
  //   <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
  //     <div className="space-y-2">
  //       <label>Type</label>
  //       <Controller
  //         control={control}
  //         name="service"
  //         render={({ field }) => (
  //           <Select name={field.name} onValueChange={field.onChange} value={field.value}>
  //             <SelectTrigger className="w-full">
  //               <SelectValue placeholder="Select a service" />
  //             </SelectTrigger>
  //             <SelectContent>
  //               <SelectItem value="cog">Cloud Optimized GeoTIF</SelectItem>
  //               <SelectItem value="tiles">Raster tiles</SelectItem>
  //               <SelectItem value="wms">WMS</SelectItem>
  //             </SelectContent>
  //           </Select>
  //         )}
  //       />
  //     </div>
  //     <div className="space-y-2">
  //       <label htmlFor={`layerName`}>Layer Name</label>
  //       <Input
  //         id={`layerName`}
  //         {...register('layerName', { required: 'Layer name field is required' })}
  //         className={errors.layerName && 'border-red-500'}
  //         placeholder="e.g. Landsat 8"
  //       />
  //       {errors.layerName && <div className="text-sm text-red-500">{errors.layerName.message}</div>}
  //     </div>
  //     <div className="space-y-2">
  //       <label htmlFor={`url`}>Dataset URL</label>
  //       <Input
  //         id={`url`}
  //         {...register('url', { required: 'URL field is required' })}
  //         type="url"
  //         className={errors.url && 'border-red-500'}
  //         placeholder='e.g. "https://example.com/{z}/{x}/{y}.png"'
  //       />
  //       {errors.url && <div className="text-sm text-red-500">{errors.url.message}</div>}
  //     </div>
  //     {watch('service') === 'cog' && (
  //       <div className="space-y-2">
  //         <label htmlFor={`band`}>Band</label>
  //         <Input
  //           id={`band`}
  //           {...register('band')}
  //           type="number"
  //           className={errors.band && 'border-red-500'}
  //         />
  //         {errors.band && <div className="text-sm text-red-500">{errors.band.message}</div>}
  //       </div>
  //     )}
  //     {watch('service') === 'cog' && (
  //       <div className="space-y-2">
  //         <label htmlFor={`colorMap`}>Color map</label>
  //         <Textarea
  //           id={`colorMap`}
  //           {...register('colorMap')}
  //           placeholder={'{ "key": "#ff0000" }'}
  //           className={errors.colorMap && 'border-red-500'}
  //         />
  //         {errors.colorMap && <div className="text-sm text-red-500">{errors.colorMap.message}</div>}
  //       </div>
  //     )}
  //     <Button type="submit" size="sm">
  //       Add layer
  //     </Button>
  //   </form>
  // );
};

export default Sidebar;
