'use client';

import AnimateButton from '@/components/AnimateButton';
import AnimatedCard from '@/components/AnimatedCard';
import ScrollParallex from '@/components/ScrollParallex';

export default function Home() {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center gap-20 bg-neutral-900 px-10 py-24"
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
        backgroundSize: '8px 8px',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="flex items-center justify-center perspective-distant transform-3d">
        <AnimateButton />
      </div>
      <div className="flex items-center justify-center">
        <ScrollParallex />
      </div>
      <div className="flex items-center justify-center">
        <AnimatedCard />
      </div>
    </div>
  );
}
