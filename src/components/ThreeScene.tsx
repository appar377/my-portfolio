'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

// Props for ThreeScene
type ThreeSceneProps = { activeSection: number };

export default function ThreeScene({ activeSection }: ThreeSceneProps) {
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

      {/* Rotating wireframe sculpture varies by section */}
      <RotatingWireframe activeSection={activeSection} />
    </Canvas>
  );
}

function RotatingWireframe({ activeSection }: { activeSection: number }) {
  const meshRefs = useRef<any[]>([]);
  const shapes = [
    { type: 'icosahedron', args: [1.5, 0] as [number, number] },
    { type: 'box', args: [2, 2, 2] as [number, number, number] },
    { type: 'octahedron', args: [1.5, 0] as [number, number] },
    { type: 'dodecahedron', args: [1.5, 0] as [number, number] },
  ];
  const colors = ['#fff', '#aaa', '#555', '#222'];

  useFrame((_, delta) => {
    meshRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      // Rotate only active mesh
      if (i === activeSection) {
        mesh.rotation.x += delta * 0.2;
        mesh.rotation.y += delta * 0.3;
      }
      // Smoothly interpolate scale
      const currentScale = mesh.scale.x;
      const targetScale = i === activeSection ? 1 : 0;
      const newScale = currentScale + (targetScale - currentScale) * delta * 4;
      mesh.scale.set(newScale, newScale, newScale);
    });
  });

  return (
    <>
      {shapes.map((shape, i) => (
        <mesh key={i} ref={(el) => (meshRefs.current[i] = el)}>
          {shape.type === 'icosahedron' && <icosahedronGeometry args={shape.args} />}
          {shape.type === 'box' && <boxGeometry args={shape.args} />}
          {shape.type === 'octahedron' && <octahedronGeometry args={shape.args} />}
          {shape.type === 'dodecahedron' && <dodecahedronGeometry args={shape.args} />}
          <meshBasicMaterial color={colors[i % colors.length]} wireframe transparent />
        </mesh>
      ))}
    </>
  );
} 