"use client";
import { Canvas } from '@react-three/fiber';
import { WebGPURenderer } from 'three/webgpu';
import NeuralParticles from './NeuralParticles';
import NeuralVideoPlane from './NeuralVideoPlane';

export default function Scene() {
  return (
    <Canvas
      gl={(canvas) => new WebGPURenderer({ canvas, antialias: true })}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <NeuralParticles count={1000000} />
      <NeuralVideoPlane url="/club-bg.mp4" />
      <ambientLight intensity={0.5} />
    </Canvas>
  );
}
