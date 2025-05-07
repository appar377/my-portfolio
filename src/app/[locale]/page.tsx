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
  { path: '/about', icon: FaUserAlt, labelKey: 'navigation.about' },
  { path: '/creations', icon: FaLaptopCode, labelKey: 'navigation.creations' },
  { path: '/services', icon: FaBriefcase, labelKey: 'navigation.services' },
  { path: '/blog', icon: FaBlog, labelKey: 'navigation.blog' },
  { path: '/contact', icon: FaEnvelope, labelKey: 'navigation.contact' }
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
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl w-full"
      >
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.path}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <Link href={item.path} className="flex flex-col items-center justify-center h-36 md:h-44 w-full bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-accent/50 shadow-lg transition-all duration-300 hover:shadow-accent/20 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Icon className="text-4xl md:text-5xl mb-3 text-accent group-hover:text-accent" />
                <span className="text-white font-medium">{t(item.labelKey)}</span>
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
