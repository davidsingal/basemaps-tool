'use client';

import dynamic from 'next/dynamic';

import { Media } from '@/components/media';
import Sidebar from '@/components/sidebar';
import ActiveLayers from '@/components/active-layers';

const Map = dynamic(() => import('@/components/map'), { ssr: false });

const Desktop: React.FC = () => (
  <>
    <Media greaterThanOrEqual="lg" className="flex h-full gap-6 p-6">
      <div className="flex grow">
        <div className="relative grow overflow-hidden rounded-md border">
          <Map />
          <ActiveLayers />
        </div>
      </div>
      <div className="min-w-[300px] space-y-6">
        <Sidebar />
      </div>
    </Media>
    <Media lessThan="lg" className="flex grow p-6">
      <p className="text-md text-center">
        Sorry, this application is only available on Desktop devices.
      </p>
    </Media>
  </>
);

export default Desktop;
