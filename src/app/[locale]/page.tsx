'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaUserAlt, FaLaptopCode, FaBriefcase, FaBlog, FaEnvelope } from 'react-icons/fa';

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

// ナビゲーションアイテム
const navigationItems = [
  { path: '/about', icon: FaUserAlt, labelKey: 'navigation.about', color: 'from-purple-500 to-indigo-600' },
  { path: '/creations', icon: FaLaptopCode, labelKey: 'navigation.creations', color: 'from-cyan-500 to-blue-600' },
  { path: '/services', icon: FaBriefcase, labelKey: 'navigation.services', color: 'from-emerald-500 to-teal-600' },
  { path: '/blog', icon: FaBlog, labelKey: 'navigation.blog', color: 'from-amber-500 to-orange-600' },
  { path: '/contact', icon: FaEnvelope, labelKey: 'navigation.contact', color: 'from-rose-500 to-pink-600' }
];

export default function Home() {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 pb-10">
      {/* ロゴとタイトル */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-7xl font-display mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-accent">
          {t('home.hero.title')}
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
          {t('home.hero.subtitle')}
        </p>
      </motion.div>

      {/* ナビゲーションカード */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 max-w-6xl w-full"
      >
        {navigationItems.map((item) => {
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
                  <div className={`absolute -inset-1 rounded-full bg-gradient-to-r ${item.color} opacity-20 blur-md group-hover:opacity-70 group-hover:animate-pulse transition-opacity duration-500`}></div>
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
  );
}
