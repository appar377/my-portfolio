'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaLaptopCode, FaTags } from 'react-icons/fa';
import BackButton from '@/components/BackButton';
import { useTranslations } from 'next-intl';

// ダミーの画像パス（実際の画像がない場合のフォールバック用）
const placeholderImages = [
  'https://placehold.co/1200x600/0c6dff/ffffff?text=Web+App',
  'https://placehold.co/1200x600/00b2ff/ffffff?text=Mobile+App',
  'https://placehold.co/1200x600/00d7b9/ffffff?text=UI+Design',
  'https://placehold.co/1200x600/ff6b9d/ffffff?text=Game+Dev',
  'https://placehold.co/1200x600/9c6bff/ffffff?text=3D+Model',
  'https://placehold.co/1200x600/ffb86c/ffffff?text=Landing+Page'
];

// プレビュー画像
const previewImages = [
  'https://placehold.co/800x600/0c6dff/ffffff?text=Preview+1',
  'https://placehold.co/800x600/00b2ff/ffffff?text=Preview+2',
  'https://placehold.co/800x600/00d7b9/ffffff?text=Preview+3',
];

// プロジェクトデータ
const projects = [
  {
    id: "1",
    title: 'ECサイトプラットフォーム',
    subtitle: 'フルスタックWebアプリケーション',
    category: 'web',
    description: '決済機能を備えた総合的なECサイトプラットフォーム。ユーザー認証、商品管理、カート機能、決済処理を実装しました。',
    image: placeholderImages[0],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    demoUrl: 'https://example.com/demo',
    githubUrl: 'https://github.com/example/project',
    featured: true,
    date: '2023年10月',
    duration: '3ヶ月',
    role: 'フロントエンドリード',
    client: 'ABC株式会社',
    previewImages: [previewImages[0], previewImages[1], previewImages[2]],
    longDescription: `
      <p>本プロジェクトでは、最新のWeb技術を活用した総合的なECサイトプラットフォームを構築しました。主な機能として、ユーザー認証システム、商品管理、カート機能、決済処理を実装しています。</p>
      
      <h2>主な機能</h2>
      <ul>
        <li>ユーザー登録・ログイン (JWT認証)</li>
        <li>商品カタログ表示とフィルタリング</li>
        <li>ショッピングカート機能</li>
        <li>Stripe APIを使用した決済処理</li>
        <li>注文履歴と追跡</li>
        <li>管理者用ダッシュボード</li>
      </ul>
      
      <h2>技術的挑戦</h2>
      <p>このプロジェクトでは、特に以下の点に注力しました：</p>
      <ul>
        <li>Reactを使用した再利用可能なコンポーネント設計</li>
        <li>Reduxを活用した状態管理の最適化</li>
        <li>Node.jsとExpressによるRESTful API設計</li>
        <li>MongoDBによる効率的なデータモデリング</li>
        <li>Stripeによる安全な決済処理の実装</li>
      </ul>
      
      <h2>学んだこと</h2>
      <p>プロジェクトを通じて、フロントエンドとバックエンドの連携方法、セキュアな決済処理の実装、そしてユーザー体験を向上させるためのUI/UXデザインについて多くを学びました。特に、パフォーマンス最適化とセキュリティ対策の重要性を実感しました。</p>
      
      <h2>今後の展望</h2>
      <p>今後は、商品レコメンデーション機能の追加、モバイルアプリ版の開発、そして国際化対応などの機能拡張を予定しています。</p>
    `
  },
  {
    id: "2",
    title: 'フィットネストラッカー',
    subtitle: 'クロスプラットフォームモバイルアプリ',
    category: 'mobile',
    description: 'ワークアウトと栄養摂取を追跡するためのモバイルアプリケーション。カスタマイズ可能なワークアウトプラン、食事ログ、進捗グラフを提供します。',
    image: placeholderImages[1],
    technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    demoUrl: 'https://example.com/demo',
    githubUrl: 'https://github.com/example/project',
    featured: true,
    date: '2023年8月',
    duration: '4ヶ月',
    role: 'モバイルアプリ開発者',
    client: '個人プロジェクト',
    previewImages: [previewImages[0], previewImages[1]],
    longDescription: `
      <p>フィットネストラッカーは、ユーザーが日々のワークアウトと栄養摂取を簡単に記録・追跡できるモバイルアプリケーションです。React Nativeを使用して開発し、iOSとAndroid両方のプラットフォームに対応しています。</p>
      
      <h2>主な機能</h2>
      <ul>
        <li>カスタマイズ可能なワークアウトプラン作成</li>
        <li>食事ログと栄養素分析</li>
        <li>トレーニング進捗のビジュアル化（グラフ・チャート）</li>
        <li>目標設定と達成度トラッキング</li>
        <li>コミュニティ機能とチャレンジ</li>
      </ul>
      
      <h2>技術的挑戦</h2>
      <p>このプロジェクトでの主な技術的課題は以下の通りでした：</p>
      <ul>
        <li>オフライン機能の実装（データの同期メカニズム）</li>
        <li>複雑なデータ可視化の最適化</li>
        <li>ユーザー体験の向上とパフォーマンス最適化</li>
        <li>クロスプラットフォーム対応の実現</li>
      </ul>
      
      <h2>学んだこと</h2>
      <p>このプロジェクトを通じて、React Nativeによるクロスプラットフォーム開発の効率性と、モバイルアプリ特有のUIパターンについて理解を深めました。また、FirebaseとReduxを組み合わせたデータ管理の方法も習得しました。</p>
    `
  }
];

export default function CreationDetail() {
  const params = useParams();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const t = useTranslations();

  useEffect(() => {
    setMounted(true);
  }, []);

  const projectId = params.id as string;
  const project = projects.find(project => project.id === projectId);

  if (!mounted) {
    return <div className="container mx-auto px-6 py-20">Loading...</div>;
  }

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl text-cyan-500 mb-4">{t('creations.detail.notFoundTitle')}</h1>
        <p className="mb-8">{t('creations.detail.notFoundDescription')}</p>
        <Link href="/creations" className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
          <FaArrowLeft className="mr-2" /> {t('creations.detail.backToList')}
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-20">
      <BackButton />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Link 
          href="/creations" 
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors duration-200"
        >
          <FaArrowLeft className="mr-2" /> {t('creations.detail.backToList')}
        </Link>

        <article className="max-w-5xl mx-auto">
          {/* プロジェクトヘッダー */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl font-display mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">
              {project.title}
            </h1>
            
            <p className="text-xl text-cyan-300 mb-6">{project.subtitle}</p>
            
            {/* メタ情報 */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-300 mb-8">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 text-cyan-400" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center">
                <FaLaptopCode className="mr-2 text-cyan-400" />
                <span>{project.role}</span>
              </div>
              <div className="flex items-center">
                <FaTags className="mr-2 text-cyan-400" />
                <span>{t(`creations.categories.${project.category}`)}</span>
              </div>
            </div>
            
            {/* アクションボタン */}
            <div className="flex flex-wrap gap-4">
              {project.demoUrl && (
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full inline-flex items-center hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  {t('creations.detail.demo')}
                </a>
              )}
              
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-900/40 text-white rounded-full inline-flex items-center border border-cyan-500/30 hover:border-cyan-500/50 hover:bg-blue-900/60 transition-all duration-300"
                >
                  <FaGithub className="mr-2" />
                  {t('creations.detail.code')}
                </a>
              )}
            </div>
          </header>

          {/* メインイメージ */}
          <div className="aspect-w-16 aspect-h-9 relative h-96 mb-12 overflow-hidden rounded-xl bg-blue-900/30">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              className="object-cover"
              priority
            />
          </div>

          {/* 主要情報エリア */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* 左側: 技術情報 */}
            <div className="md:col-span-1">
              <div className="bg-blue-900/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                <h2 className="text-xl font-display mb-4 text-cyan-300">{t('creations.detail.techStack')}</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-blue-900/60 px-3 py-1 rounded-full text-sm border border-blue-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-xl font-display mb-4 text-cyan-300">{t('creations.detail.projectInfo')}</h2>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-400">{t('creations.detail.period')}:</span>
                    <span>{project.duration}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">{t('creations.detail.role')}:</span>
                    <span>{project.role}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">{t('creations.detail.client')}:</span>
                    <span>{project.client}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">{t('creations.detail.category')}:</span>
                    <span>{t(`creations.categories.${project.category}`)}</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* 右側: 詳細説明 */}
            <div className="md:col-span-2">
              <div 
                className="prose prose-lg max-w-none prose-headings:text-cyan-300 prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-p:text-gray-200 prose-strong:text-white prose-li:text-gray-300"
                dangerouslySetInnerHTML={{ __html: project.longDescription }}
              />
            </div>
          </div>

          {/* プレビュー画像ギャラリー */}
          {project.previewImages && project.previewImages.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-display mb-6 text-cyan-300">プロジェクトギャラリー</h2>
              
              {/* メイン画像表示 */}
              <div className="relative h-96 mb-4 rounded-xl overflow-hidden bg-blue-900/30">
                <Image
                  src={project.previewImages[selectedImageIndex]}
                  alt={`Preview ${selectedImageIndex + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  className="object-contain"
                />
              </div>
              
              {/* サムネイル */}
              <div className="flex gap-4 overflow-x-auto pb-2">
                {project.previewImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className={`relative w-24 h-24 rounded-lg overflow-hidden cursor-pointer ${
                      selectedImageIndex === index ? 'ring-2 ring-cyan-500' : ''
                    }`}
                    onClick={() => setSelectedImageIndex(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      sizes="100px"
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          
          {/* 関連プロジェクト / CTAセクション */}
          <div className="text-center mt-16 bg-blue-900/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-2xl font-display mb-4 text-cyan-300">{t('creations.detail.relatedTitle')}</h2>
            <p className="mb-8 text-gray-300">{t('creations.detail.relatedDescription')}</p>
            <Link 
              href="/creations"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full inline-flex items-center hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              {t('creations.detail.relatedBackToList')}
            </Link>
          </div>
        </article>
      </motion.div>
    </div>
  );
} 