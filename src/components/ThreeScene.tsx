'use client';

import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';

const ThreeScene = () => (
  <Canvas
    camera={{ position: [0, 0, 5], fov: 45 }}
    className="absolute inset-0 -z-10"
  >
    {/* Lights */}
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} intensity={1} />

    {/* Distorted Sphere */}
    <Sphere args={[1.5, 64, 64]} scale={2}>
      <MeshDistortMaterial color="#0070F3" distort={0.7} speed={2} />
    </Sphere>

    {/* Controls */}
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
  </Canvas>
);

export default ThreeScene; 