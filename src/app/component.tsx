'use client';

import dynamic from 'next/dynamic';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Media } from '@/components/media';
import Sidebar from '@/components/sidebar';
import ActiveLayer from '@/components/active-layer';

const Map = dynamic(() => import('@/components/map'), { ssr: false });

const Desktop: React.FC = () => (
  <>
    <Media greaterThanOrEqual="lg" className="h-full w-full">
      <div className="flex h-full w-full gap-6 p-6">
        <div className="flex grow flex-col gap-6">
          <div className="relative grow overflow-hidden rounded-md border">
            <Map />
          </div>
          <div>
            <ActiveLayer />
          </div>
        </div>
        <div className="shrink-0 space-y-6">
          <ScrollArea className="h-full w-full grow">
            <Sidebar />
          </ScrollArea>
        </div>
      </div>
    </Media>
    <Media lessThan="lg">
      <div className="flex grow p-6">
        <p className="text-md text-center">
          Sorry, this application is only available on Desktop devices.
        </p>
      </div>
    </Media>
  </>
);

export default Desktop;
