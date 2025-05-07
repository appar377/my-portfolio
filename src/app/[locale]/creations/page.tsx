'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaEye, FaGithub } from 'react-icons/fa';
import BackButton from '@/components/BackButton';

// ダミーの画像パス（実際の画像がない場合のフォールバック用）
const placeholderImages = [
  'https://placehold.co/600x400/0c6dff/ffffff?text=Web+App',
  'https://placehold.co/600x400/00b2ff/ffffff?text=Mobile+App',
  'https://placehold.co/600x400/00d7b9/ffffff?text=UI+Design',
  'https://placehold.co/600x400/ff6b9d/ffffff?text=Game+Dev',
  'https://placehold.co/600x400/9c6bff/ffffff?text=3D+Model',
  'https://placehold.co/600x400/ffb86c/ffffff?text=Landing+Page'
];

export default function Creations() {
  const t = useTranslations();
  const [activeCategory, setActiveCategory] = useState('all');
  const [mounted, setMounted] = useState(false);

  // Move categories here to use t
  const categories = [
    { id: 'all', label: t('creations.categories.all'), color: 'from-cyan-500 to-blue-600' },
    { id: 'web', label: t('creations.categories.web'), color: 'from-blue-500 to-indigo-600' },
    { id: 'mobile', label: t('creations.categories.mobile'), color: 'from-indigo-500 to-purple-600' },
    { id: 'design', label: t('creations.categories.design'), color: 'from-purple-500 to-pink-600' },
    { id: 'game', label: t('creations.categories.game'), color: 'from-rose-500 to-orange-600' },
  ];

  // プロジェクトデータ
  const projects = [
    {
      id: 1,
      title: 'ECサイトプラットフォーム',
      subtitle: 'フルスタックWebアプリケーション',
      category: 'web',
      description: '決済機能を備えた総合的なECサイトプラットフォーム。ユーザー認証、商品管理、カート機能、決済処理を実装しました。',
      image: placeholderImages[0],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
      demoUrl: 'https://example.com/demo',
      githubUrl: 'https://github.com/example/project',
      featured: true
    },
    {
      id: 2,
      title: 'フィットネストラッカー',
      subtitle: 'クロスプラットフォームモバイルアプリ',
      category: 'mobile',
      description: 'ワークアウトと栄養摂取を追跡するためのモバイルアプリケーション。カスタマイズ可能なワークアウトプラン、食事ログ、進捗グラフを提供します。',
      image: placeholderImages[1],
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      demoUrl: 'https://example.com/demo',
      githubUrl: 'https://github.com/example/project',
      featured: true
    },
    {
      id: 3,
      title: 'ポートフォリオウェブサイト',
      subtitle: 'レスポンシブWebデザイン',
      category: 'design',
      description: 'モダンでインタラクティブなポートフォリオウェブサイト。スムーズなアニメーションとレスポンシブデザインを特徴としています。',
      image: placeholderImages[2],
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      demoUrl: 'https://example.com/demo',
      githubUrl: 'https://github.com/example/project',
      featured: false
    },
    {
      id: 4,
      title: '2Dプラットフォーマーゲーム',
      subtitle: 'ブラウザベースのゲーム開発',
      category: 'game',
      description: 'HTML5とJavaScriptで構築されたレトロスタイルの2Dプラットフォーマーゲーム。複数のレベル、敵キャラクター、パワーアップを実装しています。',
      image: placeholderImages[3],
      technologies: ['Phaser.js', 'JavaScript', 'HTML5 Canvas', 'WebAudio API'],
      demoUrl: 'https://example.com/demo',
      githubUrl: 'https://github.com/example/project',
      featured: false
    },
    {
      id: 5,
      title: '3Dキャラクターモデル',
      subtitle: '3Dモデリングとアニメーション',
      category: 'design',
      description: 'ゲーム開発のためのハイポリゴンキャラクターモデル。リギングとアニメーションが施されており、様々なゲームエンジンにエクスポート可能です。',
      image: placeholderImages[4],
      technologies: ['Blender', 'Maya', 'ZBrush', 'Substance Painter'],
      demoUrl: 'https://example.com/demo',
      githubUrl: null,
      featured: false
    },
    {
      id: 6,
      title: 'SaaS製品ランディングページ',
      subtitle: 'コンバージョン最適化デザイン',
      category: 'web',
      description: 'SaaS製品のためのパフォーマンス重視のランディングページ。コンバージョン率を最大化するためのUI/UXデザインと最適化を行いました。',
      image: placeholderImages[5],
      technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'Google Analytics'],
      demoUrl: 'https://example.com/demo',
      githubUrl: 'https://github.com/example/project',
      featured: true
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="container py-20">
      <BackButton variant="creations" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-display text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">
          {t('creations.title')}
        </h1>
        
        <p className="text-lg text-center text-cyan-200/80 max-w-2xl mx-auto mb-12">
          {t('creations.description')}
        </p>

        {/* カテゴリータブ */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
                activeCategory === category.id 
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg` 
                : 'bg-blue-900/20 text-blue-200 hover:bg-blue-900/40'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* プロジェクトグリッド */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-900/10 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col h-full"
            >
              {/* プロジェクト画像 */}
              <div className="relative h-48 overflow-hidden">
                {mounted && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-3 py-1 rounded-full z-10">
                    {t('creations.featured')}
                  </div>
                )}
              </div>

              {/* プロジェクト情報 */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-display mb-1 text-white">{t(`creations.projects.${project.id}.title`)}</h3>
                <p className="text-cyan-300 text-sm mb-3">{t(`creations.projects.${project.id}.subtitle`)}</p>
                <p className="text-gray-300 text-sm mb-4 flex-grow">{t(`creations.projects.${project.id}.description`)}</p>
                
                {/* 技術スタック */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="text-xs bg-blue-900/60 px-2 py-1 rounded-full border border-blue-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* アクションボタン */}
                <div className="flex gap-3">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <FaEye /> {t('creations.demo')}
                  </a>
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <FaGithub /> {t('creations.code')}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* もっと見る */}
        <div className="text-center mt-12">
          <motion.button
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCode className="mr-2" /> {t('creations.allWorks')}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
