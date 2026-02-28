import { Suspense } from 'react';
import Scene from '@/components/Scene';
import NeuralHUD from '@/components/NeuralHUD';

export default function Home() {
  return (
    <main className="relative h-screen w-screen bg-black overflow-hidden">
      {/* HUD Layer - Prerendered for instant load */}
      <NeuralHUD />

      {/* 3D Layer - Streamed via WebGPU */}
      <Suspense fallback={<div className="bg-black h-full w-full" />}>
        <div className="absolute inset-0 z-0">
          <Scene />
        </div>
      </Suspense>
    </main>
  );
}
