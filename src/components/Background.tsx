"use client";

import { useEffect, useState } from "react";
import ThreeScene from "./ThreeScene";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

// 色とりどりの背景パーティクル定義
const coloredParticles = [
  {
    top: "15%",
    left: "10%",
    size: "2",
    color: "purple-500",
    delay: 0,
    duration: 8,
  },
  {
    top: "60%",
    left: "85%",
    size: "1.5",
    color: "blue-500",
    delay: 1,
    duration: 7,
  },
  {
    top: "35%",
    left: "20%",
    size: "3",
    color: "cyan-500",
    delay: 2,
    duration: 10,
  },
  {
    top: "80%",
    left: "30%",
    size: "2",
    color: "emerald-500",
    delay: 0.5,
    duration: 9,
  },
  {
    top: "25%",
    left: "75%",
    size: "1.5",
    color: "amber-500",
    delay: 1.5,
    duration: 8,
  },
  {
    top: "70%",
    left: "15%",
    size: "2.5",
    color: "rose-500",
    delay: 2.5,
    duration: 9,
  },
  {
    top: "10%",
    left: "50%",
    size: "2",
    color: "indigo-500",
    delay: 0.8,
    duration: 7,
  },
  {
    top: "45%",
    left: "90%",
    size: "1.8",
    color: "teal-500",
    delay: 1.8,
    duration: 8,
  },
  {
    top: "90%",
    left: "60%",
    size: "2.2",
    color: "orange-500",
    delay: 0.3,
    duration: 8,
  },
  {
    top: "55%",
    left: "5%",
    size: "1.7",
    color: "pink-500",
    delay: 2.2,
    duration: 10,
  },
];

// 光の線
const lightRays = [
  {
    top: 0,
    left: "20%",
    width: "1px",
    height: "100%",
    color: "purple-500/30",
    blur: "3px",
  },
  {
    top: 0,
    left: "40%",
    width: "1px",
    height: "100%",
    color: "cyan-500/30",
    blur: "2px",
  },
  {
    top: 0,
    left: "60%",
    width: "1px",
    height: "100%",
    color: "emerald-500/30",
    blur: "4px",
  },
  {
    top: 0,
    left: "80%",
    width: "1px",
    height: "100%",
    color: "amber-500/30",
    blur: "3px",
  },
];

const Background = ({ className = "" }: { className?: string }) => {
  const [activeSection, setActiveSection] = useState(0);
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleWindowScroll = () => {
      const idx = Math.round(window.scrollY / window.innerHeight);
      setActiveSection(idx);
    };
    window.addEventListener("scroll", handleWindowScroll);

    const container = document.querySelector(".snap-y") as HTMLElement | null;
    const handleDivScroll = () => {
      if (!container) return;
      const idx = Math.round(container.scrollTop / container.clientHeight);
      setActiveSection(idx);
    };
    if (container) {
      container.addEventListener("scroll", handleDivScroll);
    }

    // initialize
    handleWindowScroll();
    handleDivScroll();

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
      if (container) container.removeEventListener("scroll", handleDivScroll);
    };
  }, []);

  // 基本的な背景要素のみを最初にレンダリング
  if (!isMounted) {
    return (
      <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background/80 opacity-60"></div>
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none"></div>
      </div>
    );
  }

  return (
    <>
      <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`}>
        {/* 3D Scene with section-based variation */}
        <ThreeScene activeSection={activeSection} />

        {/* オーバーレイグラデーション効果 */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background/80 opacity-60"></div>

        {/* カラフルな光の線 */}
        {lightRays.map((ray, index) => (
          <div
            key={`ray-${index}`}
            style={{
              position: "absolute",
              top: ray.top,
              left: ray.left,
              width: ray.width,
              height: ray.height,
              background: `var(--tw-gradient-from, rgb(${
                ray.color.includes("purple")
                  ? "168, 85, 247"
                  : ray.color.includes("cyan")
                    ? "6, 182, 212"
                    : ray.color.includes("emerald")
                      ? "16, 185, 129"
                      : "245, 158, 11"
              }, 0.3))`,
              filter: `blur(${ray.blur})`,
            }}
          ></div>
        ))}

        {/* カラフルな浮遊粒子 */}
        {coloredParticles.map((particle, index) => (
          <motion.div
            key={`particle-${index}`}
            style={{
              position: "absolute",
              top: particle.top,
              left: particle.left,
              width: `${particle.size}rem`,
              height: `${particle.size}rem`,
              borderRadius: "9999px",
              background: `var(--${
                particle.color.includes("purple")
                  ? "purple"
                  : particle.color.includes("blue")
                    ? "blue"
                    : particle.color.includes("cyan")
                      ? "cyan"
                      : particle.color.includes("emerald")
                        ? "emerald"
                        : particle.color.includes("amber")
                          ? "amber"
                          : particle.color.includes("rose")
                            ? "rose"
                            : particle.color.includes("indigo")
                              ? "indigo"
                              : particle.color.includes("teal")
                                ? "teal"
                                : particle.color.includes("orange")
                                  ? "orange"
                                  : "pink"
              }-500, rgb(${
                particle.color.includes("purple")
                  ? "168, 85, 247"
                  : particle.color.includes("blue")
                    ? "59, 130, 246"
                    : particle.color.includes("cyan")
                      ? "6, 182, 212"
                      : particle.color.includes("emerald")
                        ? "16, 185, 129"
                        : particle.color.includes("amber")
                          ? "245, 158, 11"
                          : particle.color.includes("rose")
                            ? "244, 63, 94"
                            : particle.color.includes("indigo")
                              ? "99, 102, 241"
                              : particle.color.includes("teal")
                                ? "20, 184, 166"
                                : particle.color.includes("orange")
                                  ? "234, 88, 12"
                                  : "236, 72, 153"
              }))`,
              opacity: 0.8,
              filter: "blur(4px)",
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.8, 0.5, 0.8],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          ></motion.div>
        ))}

        {/* 放射状グラデーション */}
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none"></div>

        {/* パスに応じた特別な装飾 */}
        {pathname?.includes("about") && (
          <div
            className="absolute bottom-0 left-0 w-full h-1/3"
            style={{
              background:
                "linear-gradient(to top, rgba(88, 28, 135, 0.2), transparent)",
            }}
          ></div>
        )}
        {pathname?.includes("creations") && (
          <div
            className="absolute bottom-0 left-0 w-full h-1/3"
            style={{
              background:
                "linear-gradient(to top, rgba(8, 145, 178, 0.2), transparent)",
            }}
          ></div>
        )}
        {pathname?.includes("services") && (
          <div
            className="absolute bottom-0 left-0 w-full h-1/3"
            style={{
              background:
                "linear-gradient(to top, rgba(5, 150, 105, 0.2), transparent)",
            }}
          ></div>
        )}
        {pathname?.includes("blog") && (
          <div
            className="absolute bottom-0 left-0 w-full h-1/3"
            style={{
              background:
                "linear-gradient(to top, rgba(217, 119, 6, 0.2), transparent)",
            }}
          ></div>
        )}
        {pathname?.includes("contact") && (
          <div
            className="absolute bottom-0 left-0 w-full h-1/3"
            style={{
              background:
                "linear-gradient(to top, rgba(225, 29, 72, 0.2), transparent)",
            }}
          ></div>
        )}
      </div>
    </>
  );
};

export default Background;
