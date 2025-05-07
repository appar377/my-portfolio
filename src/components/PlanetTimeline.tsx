"use client";

import React from "react";
import { useScroll, MotionValue, motion } from "framer-motion";
import { TimelineItem } from "./Timeline";

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
        <div className="timeline-container space-y-6 xs:space-y-8">
          {items.map((item, idx) => (
            <section
              key={idx}
              className={`flex flex-col items-center w-full ${
                // Only alternate on md+, always center on mobile
                (typeof window !== 'undefined' && window.innerWidth < 768)
                  ? ''
                  : (idx % 2 === 0 ? 'md:justify-end md:pr-[52%]' : 'md:justify-start md:pl-[52%]')
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-20px" }}
                className="card-timeline w-full max-w-[95vw] xs:max-w-xs sm:max-w-md md:w-[420px] h-auto min-h-[160px] xs:min-h-[200px] sm:min-h-[240px] md:h-[280px] backdrop-blur-sm rounded-xl shadow-2xl relative timeline-item overflow-hidden"
              >
                {/* 接続線 */}
                <div
                  className={`hidden md:block timeline-connector ${idx % 2 === 0 ? "timeline-connector-right" : "timeline-connector-left"}`}
                />

                {/* 年代マーカー */}
                <div className="absolute top-2 xs:top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 px-3 xs:px-4 py-0.5 xs:py-1 rounded-full text-[11px] xs:text-xs font-bold shadow-lg z-10 whitespace-nowrap max-w-[90%] overflow-hidden text-ellipsis">
                  {item.period}
                </div>

                <div className="card-content h-full flex flex-col p-3 xs:p-4 sm:p-7 pt-8 xs:pt-9">
                  <div className="title-container mb-1 xs:mb-2">
                    <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                      {item.title}
                    </h3>
                    <div className="w-6 xs:w-8 sm:w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mt-1 rounded-full"></div>
                  </div>

                  {item.description && (
                    <div className="description-container overflow-auto pr-1 xs:pr-2 flex-1 text-xs xs:text-sm">
                      <p className="text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  )}

                  {item.technologies && (
                    <div
                      className={`tech-container flex flex-wrap gap-1 xs:gap-1.5 justify-start ${item.description ? "mt-2 xs:mt-3" : "mt-auto"}`}
                    >
                      {item.technologies.map((tech, i) => (
                        <span key={i} className="tech-badge text-[10px] xs:text-xs px-1.5 xs:px-2 py-0.5 bg-indigo-700/30 rounded-full text-indigo-200 border border-indigo-500/20">
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
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap");

        .font-timeline {
          font-family: "Poppins", sans-serif;
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
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(99, 102, 241, 0.5),
            rgba(99, 102, 241, 0.8),
            rgba(99, 102, 241, 0.5),
            transparent
          );
          transform: translateX(-50%);
          z-index: 5;
        }

        .timeline-connector {
          position: absolute;
          top: 50%;
          width: 70px;
          height: 3px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(99, 102, 241, 0.8),
            rgba(99, 102, 241, 0.5)
          );
          z-index: 5;
        }

        .timeline-connector-right {
          right: -70px;
        }

        .timeline-connector-left {
          left: -70px;
          background: linear-gradient(
            to left,
            transparent,
            rgba(99, 102, 241, 0.8),
            rgba(99, 102, 241, 0.5)
          );
        }

        .timeline-item {
          position: relative;
        }

        .timeline-item::before {
          content: "";
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
          background: linear-gradient(
            135deg,
            rgba(23, 25, 35, 0.9),
            rgba(30, 41, 59, 0.8)
          );
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
          font-family: "Inter", sans-serif;
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

        @media (max-width: 768px) {
          .timeline-track {
            display: none;
          }
          .timeline-connector {
            display: none;
          }
          .timeline-item::before {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
