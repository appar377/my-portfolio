"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useSpring, a } from "@react-spring/three";
import { useEffect, useState } from "react";

// Props for ThreeScene to receive scroll section index
export type ThreeSceneProps = { activeSection: number };

export default function ThreeScene({ activeSection }: ThreeSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      gl={{ antialias: true }}
      className="absolute inset-0 -z-10"
    >
      {/* Black background */}
      <color attach="background" args={["#000"]} />

      {/* Subtle lights */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Dynamic mesh, fixed in center */}
      <DynamicMesh activeSection={activeSection} />
    </Canvas>
  );
}

// Single mesh that smoothly transitions rotation, scale, color per section
function DynamicMesh({ activeSection }: { activeSection: number }) {
  const geometries = [
    { type: "icosahedron", args: [1.5, 0] },
    { type: "box", args: [2, 2, 2] },
    { type: "octahedron", args: [1.5, 0] },
  ];
  const geometryIndex = activeSection % geometries.length;

  // 色・スケール
  const hue = (activeSection * 60) % 360;
  const color = `hsl(${hue}, 80%, 60%)`;
  const targetScale = 1 + activeSection * 0.3;

  // クロスフェード用
  const [prevGeometry, setPrevGeometry] = useState(geometryIndex);
  const [nextGeometry, setNextGeometry] = useState<number | null>(null);
  const [isFading, setIsFading] = useState(false);
  const fadeDuration = 600; // ms

  // クロスフェード開始
  useEffect(() => {
    if (geometryIndex !== prevGeometry) {
      setNextGeometry(geometryIndex);
      setIsFading(true);
      const timeout = setTimeout(() => {
        setPrevGeometry(geometryIndex);
        setNextGeometry(null);
        setIsFading(false);
      }, fadeDuration);
      return () => clearTimeout(timeout);
    }
  }, [geometryIndex, prevGeometry]);

  // spring for prev (fade out if fading), next (fade in if fading)
  const prevSpring = useSpring({
    color,
    scale: targetScale,
    opacity: isFading ? 0 : 0.8,
    config: { mass: 1, tension: 90, friction: 30, duration: fadeDuration },
  });
  const nextSpring = useSpring({
    color,
    scale: targetScale,
    opacity: isFading ? 0.8 : 0,
    config: { mass: 1, tension: 90, friction: 30, duration: fadeDuration },
  });

  // 回転・パルスアニメーション
  const prevRef = useRef<THREE.Mesh>(null!);
  const nextRef = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    const animate = (ref: React.RefObject<THREE.Mesh>) => {
      if (ref.current) {
        const speed = 0.2 + activeSection * 0.1;
        ref.current.rotation.x += delta * speed;
        ref.current.rotation.y += delta * speed;
        const t = state.clock.getElapsedTime();
        const pulse = 1 + 0.15 * Math.sin(t * 2 + activeSection);
        const currentScale = ref.current.scale.x;
        const newScale =
          currentScale + (targetScale * pulse - currentScale) * delta * 3;
        ref.current.scale.set(newScale, newScale, newScale);
      }
    };
    animate(prevRef);
    animate(nextRef);
  });

  // geometryノード
  const getGeometryNode = (idx: number) => {
    const g = geometries[idx];
    if (g.type === "icosahedron")
      return <icosahedronGeometry args={g.args as [number, number]} />;
    if (g.type === "box")
      return <boxGeometry args={g.args as [number, number, number]} />;
    if (g.type === "octahedron")
      return <octahedronGeometry args={g.args as [number, number]} />;
    return null;
  };

  return (
    <>
      {/* 前のgeometry（fade out） */}
      <a.mesh
        ref={prevRef}
        scale={prevSpring.scale}
        visible={prevGeometry !== null}
      >
        {getGeometryNode(prevGeometry)}
        <a.meshBasicMaterial
          color={prevSpring.color}
          wireframe
          opacity={prevSpring.opacity}
          transparent
        />
      </a.mesh>
      {/* 新しいgeometry（fade in） */}
      {nextGeometry !== null && (
        <a.mesh ref={nextRef} scale={nextSpring.scale}>
          {getGeometryNode(nextGeometry)}
          <a.meshBasicMaterial
            color={nextSpring.color}
            wireframe
            opacity={nextSpring.opacity}
            transparent
          />
        </a.mesh>
      )}
    </>
  );
}
