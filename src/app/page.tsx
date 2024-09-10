import Header from '@/components/header';
import Component from '@/app/component';

export default function Home() {
  return (
    <div className="flex h-screen min-h-[768px] w-full flex-col overflow-hidden">
      <Header />
      <main className="flex-1 overflow-hidden">
        <Component />
      </main>
    </div>
  );
}
