'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      gl={{ antialias: true }}
      className="absolute inset-0 -z-10"
    >
      {/* Set background to black */}
      <color attach="background" args={["#000"]} />

      {/* Lights for subtle shading */}
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Rotating wireframe sculpture */}
      <RotatingWireframe />
    </Canvas>
  );
}

function RotatingWireframe() {
  const ref = useRef<any>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.2;
      ref.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.5, 0]} />
      <meshBasicMaterial color="#fff" wireframe />
    </mesh>
  );
} 