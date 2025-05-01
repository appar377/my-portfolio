'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Torus, Box, MeshDistortMaterial, OrbitControls, Stars, Sparkles } from '@react-three/drei';
import { useRef } from 'react';

// Consolidated animated shapes to be used within Canvas
function Shapes() {
  const torusRef = useRef<any>(null);
  const boxRef = useRef<any>(null);

  useFrame((_, delta) => {
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.3;
      torusRef.current.rotation.y += delta * 0.2;
    }
    if (boxRef.current) {
      boxRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <>
      <Sphere args={[1.5, 64, 64]} position={[-2.5, 0, 0]}>
        <MeshDistortMaterial color="#ff0055" distort={0.6} speed={2} />
      </Sphere>
      <Torus ref={torusRef} args={[1, 0.4, 32, 100]} position={[2.5, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>  
        <meshStandardMaterial color="#00ffcc" />
      </Torus>
      <Box ref={boxRef} args={[1, 1, 1]} position={[0, 2.5, 0]} scale={[1.3, 1.3, 1.3]}>  
        <meshStandardMaterial color="#ffcc00" />
      </Box>
    </>
  );
}

// Main ThreeScene rendering the Canvas and background
export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }} className="absolute inset-0 -z-10">
      {/* Lights */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Stars and Sparkles */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <Sparkles count={100} scale={[10, 10, 10]} size={1} speed={0.5} color="#ffffff" />

      {/* Consolidated shapes with continuous animations */}
      <Shapes />

      {/* Controls */}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
    </Canvas>
  );
} 