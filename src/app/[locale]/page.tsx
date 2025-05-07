'use client';

import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaUserAlt, FaLaptopCode, FaBriefcase, FaBlog, FaComments, FaAngleDown, FaClipboardList } from 'react-icons/fa';
import { useEffect, useState, useRef } from 'react';

// スプラッシュアニメーションコンポーネント
const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  // グリッドアニメーション用の配列
  const gridItems = Array.from({ length: 25 }, (_, i) => i);
  
  // タイプライター効果用の文字配列
  const portfolioText = "PORTFOLIO";
  const [visibleCharIndex, setVisibleCharIndex] = useState(-1);
  
  useEffect(() => {
    // タイプライター効果
    if (visibleCharIndex < portfolioText.length - 1) {
      const timer = setTimeout(() => {
        setVisibleCharIndex(prev => prev + 1);
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
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center perspective-1000 bg-black/90 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.5 }
      }}
    >
      {/* 背景グリッド */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="relative w-screen h-screen">
          <div className="grid grid-cols-5 grid-rows-5 w-screen h-screen">
            {gridItems.map((item) => (
              <motion.div
                key={item}
                className="border border-cyan-500/10 bg-gradient-to-br from-blue-900/5 to-cyan-900/5"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.7, 0.1],
                  scale: 1,
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.03 * item,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>
      </div>
        
      {/* 浮遊する光の粒子 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-500"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: `blur(${Math.random() > 0.5 ? '1px' : '0px'})`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0, Math.random() * 0.7 + 0.3, 0],
              scale: [0, Math.random() + 0.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* 中央コンテンツ */}
      <motion.div 
        className="relative z-10 text-center"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* サイバーサークル */}
        <div className="relative inline-flex items-center justify-center mb-8">
          <motion.div
            className="absolute w-64 h-64 rounded-full border-4 border-cyan-500/30"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ 
              scale: [1.2, 1],
              opacity: [0, 0.8],
              rotate: [0, 90]
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          
          <motion.div
            className="absolute w-48 h-48 rounded-full border border-cyan-400/40"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1],
              opacity: [0, 1],
              rotate: [180, 0]
            }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          />
          
          {/* スキャンラインエフェクト */}
          <motion.div
            className="absolute h-64 w-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
            style={{ height: '256px' }}
            animate={{ 
              y: [-128, 128, -128],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
          
          {/* 名前エフェクト */}
          <div className="flex flex-col items-center justify-center text-center px-8 py-6">
            <div className="relative">
              {/* グリッチエフェクト */}
              <motion.div
                className="absolute -inset-1 rounded-lg bg-cyan-500/10 blur-sm"
                animate={{ 
                  opacity: [0.3, 0.7, 0.3],
                  scale: [0.98, 1.01, 0.98]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <div className="relative flex flex-col space-y-1">
                <motion.div className="flex justify-center overflow-hidden perspective-1000">
                  {["上", "垣", "内", "裕", "介"].map((char, i) => (
                    <motion.span
                      key={i}
                      className="text-3xl sm:text-4xl font-display inline-block px-[0.01em] text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-blue-300"
                      initial={{ 
                        opacity: 0, 
                        y: -100,
                        rotateX: -90
                      }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        rotateX: 0
                      }}
                      transition={{ 
                        type: "spring",
                        damping: 15,
                        stiffness: 150,
                        delay: 0.4 + (i * 0.1) 
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>

                {/* 未来的なディバイダー */}
                <motion.div 
                  className="flex items-center justify-center gap-1 mx-auto"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "100%" }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent flex-grow max-w-[80px]"></div>
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent flex-grow max-w-[80px]"></div>
                </motion.div>
                
                {/* タイプライターエフェクト */}
                <div className="text-lg sm:text-xl text-center h-6 font-mono tracking-wide">
                  <span className="text-white/70">
                    {portfolioText.split('').map((char, index) => (
                      <motion.span
                        key={index}
                        className={`inline-block ${index <= visibleCharIndex ? 'opacity-100' : 'opacity-0'}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index <= visibleCharIndex ? 1 : 0 }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                  <motion.span
                    className="inline-block w-[2px] h-4 bg-cyan-400 ml-1 align-middle"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* 外側の回転リング */}
          <motion.div
            className="absolute w-72 h-72 rounded-full border border-cyan-500/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1 w-2 h-2 rounded-full bg-cyan-500"></div>
          </motion.div>
          
          <motion.div
            className="absolute w-80 h-80 rounded-full border border-cyan-500/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1 w-2 h-2 rounded-full bg-blue-500"></div>
          </motion.div>
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
              ease: [0.4, 0.0, 0.2, 1] 
            }}
          />
          <div className="text-white/70 text-xs font-mono">
            Loading...
          </div>
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
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

// 文字のアニメーション
const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      damping: 12,
      stiffness: 100
    } 
  }
};

// 装飾的なエフェクト要素
const FloatingElement = ({ delay = 0, duration = 20, className }: { delay?: number; duration?: number; className: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 0.7, 0.3, 0.7, 0],
        scale: [0.8, 1.2, 1, 1.1, 0.9],
        x: [0, 10, -20, 15, 0],
        y: [0, -15, 10, -20, 0],
        rotate: [0, 5, -5, 3, 0]
      }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        delay, 
        ease: "linear",
        times: [0, 0.25, 0.5, 0.75, 1]
      }}
      className={className}
    />
  );
};

// ナビゲーションアイテム
const navigationItems = [
  { path: '/about', icon: FaUserAlt, labelKey: 'navigation.about', color: 'from-purple-500 to-indigo-600' },
  { path: '/creations', icon: FaLaptopCode, labelKey: 'navigation.creations', color: 'from-cyan-500 to-blue-600' },
  { path: '/services', icon: FaBriefcase, labelKey: 'navigation.services', color: 'from-emerald-500 to-teal-600' },
  { path: '/blog', icon: FaBlog, labelKey: 'navigation.blog', color: 'from-amber-500 to-orange-600' },
  { path: '/contact', icon: FaComments, labelKey: 'navigation.contact', color: 'from-rose-500 to-pink-600' }
];

export default function Home() {
  const t = useTranslations();
  const [mounted, setMounted] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const containerRef = useRef(null);
  
  // スクロールアニメーション用
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  
  // スプリングアニメーション
  const smoothY = useSpring(parallaxY, { damping: 15, stiffness: 100 });
  const smoothOpacity = useSpring(opacity, { damping: 15, stiffness: 100 });
  const smoothScale = useSpring(scale, { damping: 15, stiffness: 100 });

  useEffect(() => {
    setMounted(true);
    
    // セッションストレージをチェックして、初回のみスプラッシュ表示
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    if (!hasSeenSplash) {
      setShowSplash(true);
    }
  }, []);

  // スプラッシュアニメーションの完了ハンドラー
  const handleSplashComplete = () => {
    setShowSplash(false);
    // スプラッシュを見たフラグをセット
    sessionStorage.setItem('hasSeenSplash', 'true');
  };

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>
      <div className="flex flex-col min-h-screen" ref={containerRef}>
        {/* メインヒーローセクション */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
                ease: "easeInOut"
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
                delay: 1
              }}
            />
            
            {/* 光の粒子 */}
            {mounted && Array.from({ length: 15 }).map((_, index) => (
              <motion.div
                key={index}
                className={`absolute w-1 h-1 rounded-full bg-white opacity-70`}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 0.7, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          
          <motion.div 
            className="container mx-auto px-6 z-10"
            style={{ 
              y: smoothY,
              opacity: smoothOpacity,
              scale: smoothScale
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-full mx-auto"
            >
              <motion.h1
                className="font-display mb-6 leading-tight overflow-hidden"
              >
                {/* 名前のタイトル - サイズを調整して確実に収まるようにする */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative px-4 py-2 mx-auto overflow-x-hidden max-w-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-blue-600/10 rounded-lg blur-xl"></div>
                  {/* スマホでは2行に分ける、大きい画面では1行 */}
                  <div className="relative z-10 grid grid-cols-7 sm:flex sm:justify-center sm:items-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                    {["上", "垣", "内", "裕", "介", "の", ""].map((char, index) => (
                      <motion.span
                        key={`first-${index}`}
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-blue-300"
                        initial={{ opacity: 0, y: 40, rotateX: -90 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ 
                          duration: 0.7, 
                          delay: 0.05 * index,
                          ease: [0.215, 0.61, 0.355, 1] 
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                    {["ポ", "ー", "ト", "フ", "ォ", "リ", "オ"].map((char, index) => (
                      <motion.span
                        key={`second-${index}`}
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-blue-300"
                        initial={{ opacity: 0, y: 40, rotateX: -90 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ 
                          duration: 0.7, 
                          delay: 0.05 * (index + 7),
                          ease: [0.215, 0.61, 0.355, 1] 
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="text-xl md:text-2xl text-white/80 mb-12"
              >
                {t('home.hero.subtitle')}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
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
                    <span>作品を見る</span>
                    <motion.span 
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
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
                    href="/contact" 
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-500/50 text-white font-medium hover:bg-white/15 hover:border-cyan-400 transition-all duration-300"
                  >
                    <span>お問い合わせ</span>
                    <motion.span 
                      animate={{ rotate: [0, 15, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
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
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="flex flex-col items-center"
            >
              <span className="text-white/60 text-sm mb-2">スクロールして続きを見る</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ 
                  duration: 1.2, 
                  repeat: Infinity, 
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
              >
                <FaAngleDown className="text-white/60 text-xl" />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ナビゲーションセクション */}
        <section className="py-24 bg-gray-900/30 backdrop-blur-lg relative overflow-hidden">
          {/* 装飾要素 */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute w-1/2 h-1/2 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 blur-3xl rounded-full"
              style={{ top: '20%', left: '-10%' }}
              animate={{ 
                x: [0, 20, 0], 
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <motion.div
              className="absolute w-1/3 h-1/3 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 blur-3xl rounded-full"
              style={{ bottom: '10%', right: '5%' }}
              animate={{ 
                x: [0, -30, 0], 
                y: [0, 20, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse"
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
              ページを選択
            </motion.h2>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 max-w-6xl mx-auto"
            >
              {navigationItems.map((item, index) => {
                const Icon = item.icon;
                const colorName = item.color.split('-')[1]; // "purple", "cyan", etc.
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
                        damping: 10 
                      } 
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group"
                  >
                    <Link href={item.path} className="flex flex-col items-center justify-center h-40 md:h-52 w-full bg-gray-900/60 backdrop-blur-md rounded-2xl border-2 border-gray-800/50 hover:border-transparent transition-all duration-300 overflow-hidden relative">
                      {/* 背景グラデーション */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                      
                      {/* アクセントのボーダー */}
                      <div className={`absolute inset-0 rounded-2xl border-2 border-${colorName}-500/30 group-hover:border-${colorName}-500 transition-all duration-500`} />
                      
                      {/* アイコンと光の効果 */}
                      <div className="relative z-10">
                        <motion.div 
                          className={`absolute -inset-1 rounded-full bg-gradient-to-r ${item.color} opacity-20 blur-md group-hover:opacity-70 transition-opacity duration-500`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            ease: "easeInOut",
                            delay: index * 0.3
                          }}
                        />
                        <Icon className={`text-5xl md:text-6xl mb-4 text-${colorName}-400 group-hover:text-white relative z-10 transition-all duration-300`} />
                      </div>
                      
                      {/* テキスト */}
                      <span className="text-lg font-medium text-white group-hover:text-white relative z-10 transition-all duration-300">{t(item.labelKey)}</span>
                      
                      {/* 下線エフェクト */}
                      <div className={`absolute -bottom-1 left-0 w-1/3 h-1 bg-gradient-to-r ${item.color} transform scale-x-100 group-hover:w-full group-hover:h-1.5 transition-all duration-500`} />
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
                y: [0, -20, 0]
              }}
              transition={{ 
                duration: 18, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            
            <motion.div 
              className="absolute left-0 bottom-0 w-1/4 h-1/3 bg-blue-500/5 blur-3xl rounded-full"
              animate={{ 
                scale: [1.1, 1, 1.1], 
                opacity: [0.3, 0.5, 0.3],
                x: [0, 20, 0]
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 3
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
                注目のプロジェクト
              </h2>
              <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
                最近取り組んだ作品の一部をご紹介します
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        damping: 10
                      }
                    }}
                    className="bg-gray-900/40 backdrop-blur-sm rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-cyan-500/10 border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 relative overflow-hidden">
                      <motion.div 
                        className="absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all duration-500"
                        whileHover={{
                          background: "radial-gradient(circle at center, rgba(6, 182, 212, 0.3) 0%, rgba(6, 182, 212, 0.1) 70%)",
                        }}
                      />
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      >
                        <FaLaptopCode className="text-5xl text-white/50 group-hover:text-white/80 transition-all duration-300" />
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-display text-white mb-2">プロジェクト {item}</h3>
                      <p className="text-white/60 text-sm mb-4">最新のテクノロジーを活用した革新的なWebアプリケーション</p>
                      <div className="flex items-center">
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Link 
                            href="/creations/1" 
                            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            詳細を見る 
                            <motion.span
                              className="inline-block ml-2"
                              animate={{ x: [0, 4, 0] }}
                              transition={{ 
                                duration: 1.5, 
                                repeat: Infinity, 
                                repeatType: "loop",
                                ease: "easeInOut"
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
                    すべての作品を見る 
                    <motion.span
                      className="inline-block ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatType: "loop",
                        ease: "easeInOut"
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
              style={{ bottom: '-10%', right: '-5%' }}
              animate={{ 
                y: [0, -30, 0], 
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <motion.div
              className="absolute w-80 h-80 bg-blue-500/5 blur-3xl rounded-full"
              style={{ top: '10%', left: '-10%' }}
              animate={{ 
                x: [0, 20, 0], 
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* 光の粒子 */}
            {mounted && Array.from({ length: 8 }).map((_, index) => (
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
                  ease: "easeInOut"
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
                お問い合わせ
              </h2>
              
              <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
                プロジェクトのご相談やお仕事のご依頼は、専用フォームからお気軽にお問い合わせください。プライバシーを尊重し、個人情報の取り扱いに十分配慮いたします。
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-md hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                >
                  <span>お問い合わせはこちら</span>
                  <span className="bg-white/20 rounded-full p-2 flex items-center justify-center">
                    <motion.span
                      animate={{ 
                        y: [0, -3, 0],
                      }}
                      transition={{ 
                        duration: 1.8, 
                        repeat: Infinity, 
                        repeatType: "loop" 
                      }}
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
