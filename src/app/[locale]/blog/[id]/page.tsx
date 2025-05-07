'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaArrowLeft } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import BackButton from '@/components/BackButton';
import { useTranslations } from 'next-intl';

// ダミーの画像パス（実際の画像がない場合のフォールバック用）
const placeholderImages = [
  'https://placehold.co/1200x600/5271ff/ffffff?text=Next.js',
  'https://placehold.co/1200x600/52c1ff/ffffff?text=Mobile+Dev',
  'https://placehold.co/1200x600/52ffb8/ffffff?text=Accessibility'
];

// Sample blog data - replace with your actual blog posts
const blogPosts = [
  {
    id: "1",
    title: 'Building Modern Web Applications with Next.js',
    excerpt: 'Learn how to build scalable and performant web applications using Next.js and modern development practices.',
    date: '2024-03-15',
    image: '/blog/nextjs.jpg',
    placeholderImage: placeholderImages[0],
    content: `
      <p>Next.js has revolutionized the way we build React applications, offering a powerful framework for creating modern web experiences. In this article, we'll explore the key features that make Next.js a top choice for developers.</p>
      
      <h2>Server-Side Rendering</h2>
      <p>One of Next.js's most powerful features is its built-in support for Server-Side Rendering (SSR). This allows pages to be rendered on the server before being sent to the client, which can significantly improve both performance and SEO.</p>
      
      <h2>Static Site Generation</h2>
      <p>Next.js also supports Static Site Generation (SSG), which pre-renders pages at build time. This approach delivers lightning-fast page loads and reduces server load, making it ideal for content-heavy sites.</p>
      
      <h2>API Routes</h2>
      <p>With Next.js, creating API endpoints is seamless. The framework allows you to define API routes within your project, eliminating the need for a separate backend service for simple operations.</p>
      
      <h2>File-Based Routing</h2>
      <p>Next.js uses a file-based routing system that simplifies navigation in your application. Simply create files in your pages directory, and Next.js automatically creates corresponding routes.</p>
    `
  },
  {
    id: "2",
    title: 'The Future of Mobile Development',
    excerpt: 'Exploring the latest trends and technologies in mobile application development.',
    date: '2024-03-10',
    image: '/blog/mobile.jpg',
    placeholderImage: placeholderImages[1],
    content: `
      <p>Mobile development continues to evolve rapidly, with new technologies and approaches emerging regularly. This article examines some of the key trends shaping the future of mobile app development.</p>
      
      <h2>Cross-Platform Solutions</h2>
      <p>Frameworks like React Native and Flutter have transformed mobile development by enabling developers to build applications for multiple platforms using a single codebase. This approach significantly reduces development time and costs.</p>
      
      <h2>Progressive Web Apps</h2>
      <p>Progressive Web Apps (PWAs) blur the line between web and mobile applications. They offer the best of both worlds: the reach of the web and the experience of native apps, all without requiring installation from an app store.</p>
      
      <h2>AI and Machine Learning</h2>
      <p>Artificial Intelligence and Machine Learning are increasingly being integrated into mobile applications, enabling features like image recognition, natural language processing, and predictive text.</p>
      
      <h2>5G Connectivity</h2>
      <p>The rollout of 5G networks is opening up new possibilities for mobile apps. Higher speeds and lower latency will enable more complex, data-intensive applications and features.</p>
    `
  },
  {
    id: "3",
    title: 'Designing for Accessibility',
    excerpt: 'Best practices for creating accessible and inclusive user interfaces.',
    date: '2024-03-05',
    image: '/blog/accessibility.jpg',
    placeholderImage: placeholderImages[2],
    content: `
      <p>Accessibility in web design is not just a nice-to-have feature; it's a necessity. This article outlines essential practices for creating interfaces that are accessible to all users, regardless of their abilities.</p>
      
      <h2>Semantic HTML</h2>
      <p>Using proper HTML elements for their intended purpose is the foundation of accessibility. Semantic HTML provides meaning to your content, making it easier for assistive technologies to interpret.</p>
      
      <h2>Keyboard Navigation</h2>
      <p>Ensuring that all interactive elements are accessible via keyboard is crucial for users who cannot use a mouse. This includes implementing proper focus states and logical tab order.</p>
      
      <h2>Color Contrast</h2>
      <p>Sufficient color contrast between text and background is essential for readability. The Web Content Accessibility Guidelines (WCAG) recommend a minimum contrast ratio of 4.5:1 for normal text.</p>
      
      <h2>Alternative Text</h2>
      <p>Providing descriptive alternative text for images ensures that users who cannot see them can still understand their content and purpose. This is particularly important for images that convey information.</p>
    `
  }
];

export default function BlogPost() {
  const params = useParams();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    setMounted(true);
  }, []);

  const postId = params.id as string;
  const post = blogPosts.find(post => post.id === postId);

  if (!mounted) {
    return <div className="container mx-auto px-6 py-20">Loading...</div>;
  }

  if (!post) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl text-amber-500 mb-4">{t('blog.detail.notFoundTitle')}</h1>
        <p className="mb-8">{t('blog.detail.notFoundDescription')}</p>
        <Link href="/blog" className="inline-flex items-center text-amber-400 hover:text-amber-300">
          <FaArrowLeft className="mr-2" /> {t('blog.detail.backToList')}
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
          href="/blog" 
          className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-8 transition-colors duration-200"
        >
          <FaArrowLeft className="mr-2" /> {t('blog.detail.backToList')}
        </Link>

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl md:text-5xl font-display mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
              {post.title}
            </h1>
            
            <div className="flex items-center text-amber-300 mb-6">
              <FaCalendarAlt className="w-4 h-4 mr-2" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString()}
              </time>
            </div>
          </header>

          <div className="aspect-w-16 aspect-h-9 relative h-72 md:h-96 mb-8 overflow-hidden rounded-xl">
            <Image
              src={post.placeholderImage}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </div>

          <div 
            className="prose prose-lg max-w-none prose-headings:text-amber-300 prose-a:text-amber-400 hover:prose-a:text-amber-300 prose-p:text-gray-200"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </motion.div>
    </div>
  );
} 