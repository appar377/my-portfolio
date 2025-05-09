"use client";

import { useTranslations } from "next-intl";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import {
  FaArrowRight,
  FaUserAlt,
  FaLaptopCode,
  FaBriefcase,
  FaBlog,
  FaComments,
  FaAngleDown,
  FaClipboardList,
} from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";

// スプラッシュアニメーションコンポーネント
const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  // タイプライター効果用の文字配列
  const portfolioText = "PORTFOLIO";
  const [visibleCharIndex, setVisibleCharIndex] = useState(-1);

  // パーティクル情報をuseStateで管理
  const [particles, setParticles] = useState<
    {
      top: number;
      left: number;
      width: number;
      height: number;
      blur: string;
      opacity: number;
    }[]
  >([]);

  useEffect(() => {
    // タイプライター効果
    if (visibleCharIndex < portfolioText.length - 1) {
      const timer = setTimeout(() => {
        setVisibleCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [visibleCharIndex]);

  useEffect(() => {
    // 5秒後に強制的に完了とする
    const timer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 36 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        width: 6 + Math.random() * 10,
        height: 6 + Math.random() * 10,
        blur: Math.random() > 0.5 ? "2px" : "0px",
        opacity: Math.random() * 0.5 + 0.3,
      })),
    );
  }, []);

  useEffect(() => {
    // スプラッシュ中はbodyスクロール禁止
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center perspective-1000 bg-black overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 1 },
      }}
    >
      {/* サイバーグリッド背景 */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-full bg-gradient-to-b from-cyan-500/10 via-blue-500/10 to-indigo-500/0 pointer-events-none z-0"
            style={{
              left: `${(i + 1) * 5.2}%`,
              transform: `rotate(-18deg)`,
            }}
          />
        ))}
      </div>
      {/* 浮遊する光の粒子 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/80 shadow-lg"
            style={{
              width: `${p.width}px`,
              height: `${p.height}px`,
              top: `${p.top}%`,
              left: `${p.left}%`,
              filter: `blur(${p.blur})`,
              opacity: p.opacity,
              zIndex: 10,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      {/* 中央サイバーコンテンツ */}
      <motion.div
        className="relative z-20 text-center"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* 多重回転リング＋グリッチ・グロー */}
        <div className="relative inline-flex items-center justify-center mb-8">
          {/* グローオーラ */}
          <motion.div
            className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-400/10 to-indigo-400/10 blur-3xl"
            animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* 多重リング */}
          <motion.div
            className="absolute w-64 h-64 rounded-full border-4 border-cyan-500/30 shadow-cyan-400/10 shadow-2xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-48 h-48 rounded-full border-2 border-blue-400/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-36 h-36 rounded-full border-2 border-transparent"
            style={{
              background:
                "conic-gradient(from 0deg, #06b6d4 0%, #6366f1 40%, #a21caf 80%, #06b6d4 100%)",
              WebkitMaskImage:
                "radial-gradient(circle, white 60%, transparent 100%)",
              maskImage: "radial-gradient(circle, white 60%, transparent 100%)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          {/* グリッチ・グローエフェクト */}
          <motion.div
            className="absolute w-64 h-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-400/10 blur-2xl rounded-xl"
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.98, 1.01, 0.98] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {/* PORTFOLIOテキスト（グリッチ・グロー・タイプライター） */}
          <div className="relative flex flex-col items-center justify-center text-center px-8 py-6">
            <div className="relative">
              <div className="relative flex flex-col space-y-1">
                <motion.div className="flex justify-center overflow-hidden perspective-1000">
                  {portfolioText.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      className="text-4xl sm:text-5xl md:text-6xl font-display inline-block px-[0.01em] text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-blue-300 drop-shadow-[0_2px_16px_#0ff6]"
                      initial={{
                        opacity: 0,
                        y: -100,
                        rotateX: -90,
                      }}
                      animate={{
                        opacity: i <= visibleCharIndex ? 1 : 0.2,
                        y: 0,
                        rotateX: 0,
                        textShadow: [
                          "0 0 8px #0ff8, 0 2px 16px #0ff6",
                          "0 0 24px #0ff8, 0 2px 32px #0ff6",
                          "0 0 8px #0ff8, 0 2px 16px #0ff6",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        type: "tween",
                        delay: 0.2 + i * 0.08,
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
                {/* タイプライターカーソル */}
                <motion.span
                  className="inline-block w-[2px] h-8 bg-cyan-400 ml-1 align-middle"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* 読み込みインジケーター */}
        <motion.div
          className="flex items-center justify-center gap-2 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "180px" }}
            transition={{
              duration: 3.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
          />
          <div className="text-white/70 text-xs font-mono">Loading...</div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// アニメーションバリアント
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

// 装飾的なエフェクト要素
const FloatingElement = ({
  delay = 0,
  duration = 20,
  className,
}: {
  delay?: number;
  duration?: number;
  className: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.7, 0.3, 0.7, 0],
        scale: [0.8, 1.2, 1, 1.1, 0.9],
        x: [0, 10, -20, 15, 0],
        y: [0, -15, 10, -20, 0],
        rotate: [0, 5, -5, 3, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "linear",
        times: [0, 0.25, 0.5, 0.75, 1],
      }}
      className={className}
    />
  );
};

// ナビゲーションアイテム
const navigationItems = [
  {
    path: "/about",
    icon: FaUserAlt,
    labelKey: "home.navigation.about",
    color: "from-purple-500 to-indigo-600",
  },
  {
    path: "/creations",
    icon: FaLaptopCode,
    labelKey: "home.navigation.creations",
    color: "from-cyan-500 to-blue-600",
  },
  {
    path: "/services",
    icon: FaBriefcase,
    labelKey: "home.navigation.services",
    color: "from-emerald-500 to-teal-600",
  },
  {
    path: "https://rootscope.blog/",
    icon: FaBlog,
    labelKey: "home.navigation.blog",
    color: "from-amber-500 to-orange-600",
    external: true,
  },
  {
    path: "/contact",
    icon: FaComments,
    labelKey: "home.navigation.contact",
    color: "from-rose-500 to-pink-600",
  },
];

export default function Home() {
  const t = useTranslations();
  const params = useParams();
  const locale = typeof params.locale === 'string' ? params.locale : Array.isArray(params.locale) ? params.locale[0] : 'ja';
  const [mounted, setMounted] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const containerRef = useRef(null);

  // スクロールアニメーション用
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // スプリングアニメーション
  const smoothY = useSpring(parallaxY, { damping: 15, stiffness: 100 });
  const smoothOpacity = useSpring(opacity, { damping: 15, stiffness: 100 });
  const smoothScale = useSpring(scale, { damping: 15, stiffness: 100 });

  // ヒーローセクション用パーティクル
  const [heroParticles, setHeroParticles] = useState<
    {
      top: number;
      left: number;
      width: number;
      height: number;
      zIndex: number;
      y: number;
      x: number;
      opacity: number;
      delay: number;
      duration: number;
    }[]
  >([]);

  const [mainVisible, setMainVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    // セッションストレージをチェックして、初回のみスプラッシュ表示
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    if (!hasSeenSplash) {
      setShowSplash(true);
    }
    // ヒーローセクションのパーティクル生成
    setHeroParticles(
      Array.from({ length: 10 }).map(() => ({
        top: 10 + Math.random() * 80,
        left: 10 + Math.random() * 80,
        width: 8 + Math.random() * 8,
        height: 8 + Math.random() * 8,
        zIndex: 2,
        y: Math.random() * 30 - 15,
        x: Math.random() * 30 - 15,
        opacity: 0.7 + Math.random() * 0.3,
        delay: Math.random() * 2,
        duration: 6 + Math.random() * 4,
      })),
    );
  }, []);

  // スプラッシュが消えたらメインをフェードイン
  useEffect(() => {
    if (!showSplash) {
      const timer = setTimeout(() => setMainVisible(true), 200); // 少し遅延してからフェードイン
      return () => clearTimeout(timer);
    } else {
      setMainVisible(false);
    }
  }, [showSplash]);

  // スプラッシュアニメーションの完了ハンドラー
  const handleSplashComplete = () => {
    setShowSplash(false);
    // スプラッシュを見たフラグをセット
    sessionStorage.setItem("hasSeenSplash", "true");
  };

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>
      <div className="flex flex-col min-h-screen" ref={containerRef}>
        {/* メインヒーローセクション */}
        <motion.section
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: mainVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          {/* 装飾的な背景エレメント */}
          <div className="absolute inset-0 pointer-events-none">
            <FloatingElement
              delay={0}
              duration={25}
              className="absolute top-40 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
            />
            <FloatingElement
              delay={5}
              duration={22}
              className="absolute bottom-40 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
            />
            <FloatingElement
              delay={2.5}
              duration={20}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            />

            {/* 追加の装飾要素 */}
            <motion.div
              className="absolute top-[10%] right-[15%] w-20 h-20 rounded-full bg-gradient-to-r from-pink-400 to-purple-600 opacity-20 blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute bottom-[20%] left-[15%] w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 opacity-20 blur-lg"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            {/* 光の粒子 */}
            {mounted &&
              heroParticles.map((p, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-1 h-1 rounded-full bg-white opacity-70`}
                  style={{
                    top: `${p.top}%`,
                    left: `${p.left}%`,
                  }}
                  animate={{
                    opacity: [0, 0.7, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: "easeInOut",
                  }}
                />
              ))}
          </div>

          <motion.div
            className="container mx-auto px-6 z-10"
            style={{
              y: smoothY,
              opacity: smoothOpacity,
              scale: smoothScale,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-full mx-auto"
            >
              {/* タイトル全体を包み込むグラデーションオーラ＋パーティクル＋サイバーグリッド */}
              <div className="relative flex flex-col items-center justify-center">
                {/* サイバーグリッド（斜めライン） */}
                <div className="absolute inset-0 pointer-events-none z-0">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span
                      key={i}
                      className="absolute w-[2px] h-full bg-gradient-to-b from-cyan-500/10 via-blue-500/10 to-indigo-500/0 pointer-events-none z-0"
                      style={{
                        left: `${(i + 1) * 7}%`,
                        transform: `rotate(-18deg)`,
                      }}
                    />
                  ))}
                </div>
                {/* グラデーションオーラ（複数重ねる） */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[220px] sm:w-[600px] sm:h-[320px] rounded-full bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-indigo-500/10 blur-3xl pointer-events-none z-0"
                  initial={{ scale: 0.95, opacity: 0.7 }}
                  animate={{
                    scale: [0.95, 1.05, 0.95],
                    opacity: [0.7, 0.9, 0.7],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                  style={{ zIndex: 1 }}
                />
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[120px] sm:w-[420px] sm:h-[180px] rounded-full bg-gradient-to-br from-indigo-400/20 via-cyan-400/10 to-blue-400/10 blur-2xl pointer-events-none z-0"
                  initial={{ scale: 1.1, opacity: 0.5 }}
                  animate={{
                    scale: [1.1, 0.95, 1.1],
                    opacity: [0.5, 0.7, 0.5],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                  style={{ zIndex: 1 }}
                />
                {/* パーティクル */}
                {heroParticles.map((p, i) => (
                  <motion.span
                    key={i}
                    className="absolute rounded-full bg-white/60 shadow-lg"
                    style={{
                      width: `${p.width}px`,
                      height: `${p.height}px`,
                      left: `${p.left}%`,
                      top: `${p.top}%`,
                      zIndex: p.zIndex,
                    }}
                    animate={{
                      y: [0, p.y, 0],
                      x: [0, p.x, 0],
                      opacity: [p.opacity, 1, p.opacity],
                    }}
                    transition={{
                      duration: p.duration,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                      delay: p.delay,
                    }}
                  />
                ))}
                {/* タイトル本体 */}
                <motion.h1
                  className="font-display mb-4 md:mb-6 py-6 md:py-12 leading-tight overflow-hidden text-center
                    text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl
                    bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 tracking-tight drop-shadow-lg relative z-10"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <span className="block break-words max-w-full">{t("home.hero.title")}</span>
                  <span
                    className="block text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold
                      bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-400
                      mt-2"
                  >
                    Full Stack Engineer × Designer
                  </span>
                </motion.h1>
                {/* サブタイトルをオシャレに */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.1 }}
                  className="text-base xs:text-lg md:text-2xl text-center font-semibold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-300 drop-shadow-md mb-6 max-w-2xl mx-auto animate-float"
                  style={{ textShadow: "0 2px 16px #0ff6, 0 1px 2px #0ff2" }}
                >
                  {t("home.hero.subtitle")}
                </motion.p>
                {/* サブタイトル下のグラデーションライン */}
                <span className="block mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 opacity-70 mb-2" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="flex flex-wrap gap-6 justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/creations"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-md hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                  >
                    <span>{t("home.hero.cta.creations")}</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    >
                      <FaArrowRight />
                    </motion.span>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={`/${locale}/contact`}
                    className="relative z-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-500/50 text-white font-medium hover:bg-white/15 hover:border-cyan-400 transition-all duration-300"
                  >
                    <span>{t("home.hero.cta.contact")}</span>
                    <motion.span
                      animate={{ rotate: [0, 15, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    >
                      <FaComments className="text-cyan-300" />
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* スクロールインジケーター - 中央に修正 */}
          <motion.div
            className="absolute bottom-12 inset-x-0 mx-auto flex justify-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="flex flex-col items-center"
            >
              <span className="text-white/60 text-sm mb-2">
                {t("home.hero.scrollIndicator")}
              </span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <FaAngleDown className="text-white/60 text-xl" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ナビゲーションセクション */}
        <section className="py-24 bg-gray-900/30 backdrop-blur-lg relative overflow-hidden">
          {/* 装飾要素 */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute w-1/2 h-1/2 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 blur-3xl rounded-full"
              style={{ top: "20%", left: "-10%" }}
              animate={{
                x: [0, 20, 0],
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            <motion.div
              className="absolute w-1/3 h-1/3 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 blur-3xl rounded-full"
              style={{ bottom: "10%", right: "5%" }}
              animate={{
                x: [0, -30, 0],
                y: [0, 20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70"
            >
              {t("home.navigation.title")}
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 max-w-full md:max-w-6xl mx-auto"
            >
              {navigationItems.map((item, index) => {
                const Icon = item.icon;
                const colorName = item.color.split("-")[1]; // "purple", "cyan", etc.
                return (
                  <motion.div
                    key={item.path}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.08,
                      y: -8,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group"
                  >
                    <Link
                      href={item.path}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex flex-col items-center justify-center h-40 md:h-52 w-full bg-gray-900/60 backdrop-blur-md rounded-2xl border-2 border-gray-800/50 hover:border-transparent transition-all duration-300 overflow-hidden relative"
                    >
                      {/* 背景グラデーション */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                      />

                      {/* アクセントのボーダー */}
                      <div
                        className={`absolute inset-0 rounded-2xl border-2 border-${colorName}-500/30 group-hover:border-${colorName}-500 transition-all duration-500`}
                      />

                      {/* アイコンと光の効果 */}
                      <div className="relative z-10">
                        <motion.div
                          className={`absolute -inset-1 rounded-full bg-gradient-to-r ${item.color} opacity-20 blur-md group-hover:opacity-70 transition-opacity duration-500`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.3,
                          }}
                        />
                        <Icon
                          className={`text-5xl md:text-6xl mb-4 text-${colorName}-400 group-hover:text-white relative z-10 transition-all duration-300`}
                        />
                      </div>

                      {/* テキスト */}
                      <span className="text-lg font-medium text-white group-hover:text-white relative z-10 transition-all duration-300">
                        {t(item.labelKey)}
                      </span>

                      {/* 下線エフェクト */}
                      <div
                        className={`absolute -bottom-1 left-0 w-1/3 h-1 bg-gradient-to-r ${item.color} transform scale-x-100 group-hover:w-full group-hover:h-1.5 transition-all duration-500`}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* フィーチャーセクション */}
        <section className="py-24 relative">
          {/* 装飾的な背景 */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute right-0 top-0 w-1/3 h-1/2 bg-cyan-500/5 blur-3xl rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute left-0 bottom-0 w-1/4 h-1/3 bg-blue-500/5 blur-3xl rounded-full"
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.3, 0.5, 0.3],
                x: [0, 20, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3,
              }}
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-display text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                {t("home.featured.title")}
              </h2>
              <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
                {t("home.featured.description")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {/* フィーチャードプロジェクト カード (例示用) */}
                {[1, 2, 3].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: item * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    whileHover={{
                      y: -10,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      },
                    }}
                    className="bg-gray-900/40 backdrop-blur-sm rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-cyan-500/10 border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all duration-500"
                        whileHover={{
                          background:
                            "radial-gradient(circle at center, rgba(6, 182, 212, 0.3) 0%, rgba(6, 182, 212, 0.1) 70%)",
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 10,
                        }}
                      >
                        <FaLaptopCode className="text-5xl text-white/50 group-hover:text-white/80 transition-all duration-300" />
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-display text-white mb-2">
                        {t("home.featured.projectTitle", { item })}
                      </h3>
                      <p className="text-white/60 text-sm mb-4">
                        {t("home.featured.projectDescription")}
                      </p>
                      <div className="flex items-center">
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link
                            href="/creations/1"
                            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            {t("home.featured.detail")}
                            <motion.span
                              className="inline-block ml-2"
                              animate={{ x: [0, 4, 0] }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                              }}
                            >
                              <FaArrowRight className="text-sm" />
                            </motion.span>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href="/creations"
                    className="inline-flex items-center px-6 py-3 rounded-full border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all duration-300"
                  >
                    {t("home.featured.all")}
                    <motion.span
                      className="inline-block ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                      }}
                    >
                      <FaArrowRight />
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* お問い合わせセクション - 新規追加 */}
        <section className="py-24 bg-gradient-to-b from-gray-900/30 to-blue-900/20 backdrop-blur-lg relative overflow-hidden">
          {/* 装飾要素 */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              className="absolute w-96 h-96 bg-cyan-500/5 blur-3xl rounded-full"
              style={{ bottom: "-10%", right: "-5%" }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            <motion.div
              className="absolute w-80 h-80 bg-blue-500/5 blur-3xl rounded-full"
              style={{ top: "10%", left: "-10%" }}
              animate={{
                x: [0, 20, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* 光の粒子 */}
            {mounted &&
              Array.from({ length: 8 }).map((_, index) => (
                <motion.div
                  key={`particle-${index}`}
                  className="absolute w-1 h-1 rounded-full bg-cyan-400 opacity-70"
                  style={{
                    top: `${30 + Math.random() * 40}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: "easeInOut",
                  }}
                />
              ))}
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-display mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400">
                {t("home.contact.title")}
              </h2>

              <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
                {t("home.contact.description")}
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-md hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 w-full sm:w-auto justify-center text-base sm:text-lg"
                >
                  <span>{t("home.contact.cta")}</span>
                  <span className="bg-white/20 rounded-full p-2 flex items-center justify-center">
                    <motion.span
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity, repeatType: "loop" }}
                    >
                      <FaClipboardList className="text-white" />
                    </motion.span>
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
