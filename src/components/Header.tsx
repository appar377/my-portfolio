"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import SettingLang from "@/components/SettingLang";
import { motion } from "framer-motion";

// ナビゲーションアイテム定義
const navItems = [
  {
    path: "/about",
    label: "About",
    color: "gradient-to-r from-purple-500 to-indigo-600",
    textColor: "text-purple-200",
  },
  {
    path: "/creations",
    label: "Creations",
    color: "gradient-to-r from-cyan-500 to-blue-600",
    textColor: "text-cyan-200",
  },
  {
    path: "/services",
    label: "Services",
    color: "gradient-to-r from-emerald-500 to-teal-600",
    textColor: "text-emerald-200",
  },
  {
    path: "https://rootscope.blog/",
    label: "Blog",
    color: "gradient-to-r from-amber-500 to-orange-600",
    textColor: "text-amber-200",
    external: true,
  },
  {
    path: "/contact",
    label: "Contact",
    color: "gradient-to-r from-rose-500 to-pink-600",
    textColor: "text-rose-200",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // スクロール位置に応じてヘッダーの背景を変更
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-lg shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              href="/"
              className="text-2xl font-display text-white hover:text-accent transition-colors duration-300"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Yusuke Uwagaichi
              </span>
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = !item.external && pathname?.includes(item.path);
              return (
                <motion.div
                  key={item.path}
                  className="relative"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={item.path}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={`${item.textColor} font-medium relative group transition-all duration-300`}
                  >
                    <span>{item.label}</span>
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                      initial={{
                        width: isActive ? "100%" : "30%",
                        opacity: isActive ? 1 : 0.4,
                      }}
                      whileHover={{
                        width: "100%",
                        opacity: 1,
                        transition: { duration: 0.3 },
                      }}
                      style={{
                        background: `linear-gradient(to right, ${
                          item.color.includes("purple")
                            ? "#8B5CF6, #6366F1"
                            : item.color.includes("cyan")
                              ? "#06B6D4, #2563EB"
                              : item.color.includes("emerald")
                                ? "#10B981, #0D9488"
                                : item.color.includes("amber")
                                  ? "#F59E0B, #EA580C"
                                  : "#F43F5E, #DB2777"
                        })`,
                      }}
                    />
                  </Link>
                </motion.div>
              );
            })}
            <SettingLang />
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
