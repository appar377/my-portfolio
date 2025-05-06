"use client";

import React from 'react';
import { useScroll, MotionValue, motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import type { Group } from 'three';
import { TimelineItem } from './Timeline';

// 内部用にcolorプロパティを持つ拡張インターフェース
interface EnhancedTimelineItem extends TimelineItem {
  color?: string;
}

interface PlanetTimelineProps {
  items: EnhancedTimelineItem[];
}

export default function PlanetTimeline({ items }: PlanetTimelineProps) {
  // windowスクロール進捗を取得
  const { scrollYProgress } = useScroll();

  // 3D惑星の座標を計算
  const positions: [number, number, number][] = items.map((_, idx) => [
    idx % 2 === 0 ? -3 : 3,
    -idx * 5,
    0,
  ]);

  return (
    <>
      {/* コンテンツ：ヘッダー下からスクロール */}
      <main className="relative z-10 pt-16 font-timeline pb-16">
        <div className="timeline-track" />
        <div className="timeline-container space-y-8">
          {items.map((item, idx) => (
            <section
              key={idx}
              className={`${idx % 2 === 0 ? 'justify-end pr-[52%]' : 'justify-start pl-[52%]'} flex items-center`}
            >
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-20px" }}
                className="card-timeline w-[420px] h-[280px] backdrop-blur-sm rounded-xl shadow-2xl relative timeline-item overflow-hidden"
              >
                {/* 接続線 */}
                <div className={`timeline-connector ${idx % 2 === 0 ? 'timeline-connector-right' : 'timeline-connector-left'}`} />
                
                {/* 年代マーカー */}
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-1 rounded-full text-xs font-bold shadow-lg z-10 whitespace-nowrap max-w-[90%] overflow-hidden text-ellipsis">
                  {item.period}
                </div>
                
                <div className="card-content h-full flex flex-col p-7 pt-9">
                  <div className="title-container mb-2">
                    <h3 className="text-xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">{item.title}</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mt-1 rounded-full"></div>
                  </div>
                  
                  {item.description && (
                    <div className="description-container overflow-auto pr-2 flex-1 text-xs">
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  )}
                  
                  {item.technologies && (
                    <div className={`tech-container flex flex-wrap gap-1.5 justify-start ${item.description ? 'mt-3' : 'mt-auto'}`}>
                      {item.technologies.map((tech, i) => (
                        <span key={i} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </section>
          ))}
        </div>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
        
        .font-timeline {
          font-family: 'Poppins', sans-serif;
        }
        
        .timeline-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        
        .timeline-track {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 3px;
          background: linear-gradient(to bottom, transparent, rgba(99, 102, 241, 0.5), rgba(99, 102, 241, 0.8), rgba(99, 102, 241, 0.5), transparent);
          transform: translateX(-50%);
          z-index: 5;
        }
        
        .timeline-connector {
          position: absolute;
          top: 50%;
          width: 70px;
          height: 3px;
          background: linear-gradient(to right, transparent, rgba(99, 102, 241, 0.8), rgba(99, 102, 241, 0.5));
          z-index: 5;
        }
        
        .timeline-connector-right {
          right: -70px;
        }
        
        .timeline-connector-left {
          left: -70px;
          background: linear-gradient(to left, transparent, rgba(99, 102, 241, 0.8), rgba(99, 102, 241, 0.5));
        }
        
        .timeline-item {
          position: relative;
        }
        
        .timeline-item::before {
          content: '';
          position: absolute;
          top: 50%;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: rgb(99, 102, 241);
          transform: translateY(-50%);
          z-index: 6;
          box-shadow: 0 0 15px 5px rgba(99, 102, 241, 0.4);
        }
        
        section:nth-child(odd) .timeline-item::before {
          left: -76px;
        }
        
        section:nth-child(even) .timeline-item::before {
          right: -76px;
        }
        
        .card-timeline {
          background: linear-gradient(135deg, rgba(23, 25, 35, 0.9), rgba(30, 41, 59, 0.8));
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06),
            0 0 0 1px rgba(255, 255, 255, 0.05) inset,
            0 10px 15px -3px rgba(0, 0, 0, 0.1);
          color: white;
          letter-spacing: 0.015em;
        }
        
        .description-container::-webkit-scrollbar {
          width: 4px;
        }
        
        .description-container::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        
        .description-container::-webkit-scrollbar-thumb {
          background: rgba(99, 102, 241, 0.5);
          border-radius: 10px;
        }
        
        .tech-badge {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          padding: 0.2rem 0.6rem;
          border-radius: 9999px;
          letter-spacing: 0.02em;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.2s ease;
        }
        
        .tech-badge:hover {
          background: rgba(99, 102, 241, 0.2);
          transform: translateY(-1px);
        }
      `}</style>
    </>
  );
}

function Planet({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function Rocket({ scrollYProgress, positions }: { scrollYProgress: MotionValue<number>; positions: [number, number, number][] }) {
  const ref = React.useRef<Group>(null!);
  useFrame(() => {
    const t = scrollYProgress.get() * (positions.length - 1);
    const idx = Math.floor(t);
    const frac = t - idx;
    const [x0, y0] = positions[idx];
    const [x1, y1] = positions[Math.min(idx + 1, positions.length - 1)];
    ref.current.position.set(
      x0 + (x1 - x0) * frac,
      y0 + (y1 - y0) * frac,
      0
    );
    ref.current.lookAt(x1, y1, 0);
  });
  return (
    <group ref={ref} scale={[0.5, 0.5, 0.5] as [number, number, number]}>
      <mesh>
        <cylinderGeometry args={[0.15, 0.15, 0.8, 16]} />
        <meshStandardMaterial color="#ff4500" metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.5, 0]}>
        <coneGeometry args={[0.15, 0.3, 16]} />
        <meshStandardMaterial color="#ffa500" metalness={0.5} roughness={0.2} />
      </mesh>
    </group>
  );
}

// ランダムな惑星の色を生成する関数
function getRandomColor() {
  const colors = ['#4C3575', '#5B4B8A', '#7858A6', '#A84448', '#E45826', '#4C6793', '#10B981'];
  return colors[Math.floor(Math.random() * colors.length)];
}

export type { TimelineItem };
