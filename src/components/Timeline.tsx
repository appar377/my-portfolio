import React, { useRef, useEffect } from "react";
import { motion, useScroll, useInView } from "framer-motion";
// @ts-expect-error
import confetti from "canvas-confetti";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Group } from "three";

type TimelineItem = {
  title: string;
  period: string;
  description?: string;
  technologies?: string[];
};

type TimelineProps = {
  items: TimelineItem[];
};

// Add a TimelineCard child component to handle hooks per card
function TimelineCard({ item, idx, isLeft }: { item: TimelineItem; idx: number; isLeft: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true });
  useEffect(() => {
    if (inView)
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { x: 0.5, y: 0.3 },
      });
  }, [inView]);
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.2 }}
      className="w-full md:w-96 bg-gray-900 rounded-2xl shadow-2xl p-6 border border-black/20"
    >
      <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
      <p className="text-sm text-gray-400 mb-4">{item.period}</p>
      {item.description && <p className="text-gray-200 mb-4">{item.description}</p>}
      {item.technologies && (
        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech, i) => (
            <span key={i} className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-300">
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function Timeline({ items }: TimelineProps) {
  // scroll-linked rocket
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={containerRef} className="relative py-20">
      {/* 3D Starfield & Rocket */}
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        className="absolute inset-0 -z-10"
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Stars radius={50} depth={50} count={1000} factor={4} fade speed={1} />
        <ScrollRocket scrollYProgress={scrollYProgress} />
      </Canvas>
      {/* Center spinal line */}
      <div className="absolute left-1/2 inset-y-0 w-px bg-black/20" />
      <div className="max-w-4xl mx-auto space-y-20 px-4">
        {items.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end"}`}
            >
              {/* Connector */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center top-8">
                {isLeft && <span className="block h-px w-12 bg-accent"></span>}
                <span className="block w-4 h-4 bg-accent rounded-full"></span>
                {!isLeft && <span className="block h-px w-12 bg-accent"></span>}
              </div>
              {/* Card */}
              <TimelineCard item={item} idx={idx} isLeft={isLeft} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Rocket mesh that moves along Y-axis based on scroll progress
function ScrollRocket({ scrollYProgress }: { scrollYProgress: { get: () => number } }) {
  const ref = useRef<Group>(null!);
  useFrame(() => {
    const t = scrollYProgress.get();
    if (ref.current) ref.current.position.y = 5 - t * 10;
    ref.current.rotation.y += 0.02;
  });
  return (
    <group
      ref={ref}
      position={[0, 5, 0]}
      scale={[0.5, 0.5, 0.5] as [number, number, number]}
    >
      {/* Body */}
      <mesh>
        <cylinderGeometry args={[0.2, 0.2, 1, 16]} />
        <meshStandardMaterial color="#ff4500" metalness={0.5} roughness={0.2} />
      </mesh>
      {/* Nose cone */}
      <mesh position={[0, 0.6, 0]}>
        <coneGeometry args={[0.2, 0.4, 16]} />
        <meshStandardMaterial color="#ffa500" metalness={0.5} roughness={0.2} />
      </mesh>
      {/* Fins */}
      <mesh position={[0.3, -0.3, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.05, 0.4, 0.1]} />
        <meshStandardMaterial color="#ff4500" />
      </mesh>
      <mesh position={[-0.3, -0.3, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <boxGeometry args={[0.05, 0.4, 0.1]} />
        <meshStandardMaterial color="#ff4500" />
      </mesh>
    </group>
  );
}

export type { TimelineItem };
