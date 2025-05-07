"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import BackButton from "@/components/BackButton";

// ダミーの画像パス（実際の画像がない場合のフォールバック用）
const placeholderImages = [
  "https://placehold.co/600x400/5271ff/ffffff?text=Next.js",
  "https://placehold.co/600x400/52c1ff/ffffff?text=Mobile+Dev",
  "https://placehold.co/600x400/52ffb8/ffffff?text=Accessibility",
];

// Sample blog data - replace with your actual blog posts
const blogPosts = [
  {
    id: "1",
    title: "Building Modern Web Applications with Next.js",
    excerpt:
      "Learn how to build scalable and performant web applications using Next.js and modern development practices.",
    date: "2024-03-15",
    image: "/blog/nextjs.jpg",
    placeholderImage: placeholderImages[0],
  },
  {
    id: "2",
    title: "The Future of Mobile Development",
    excerpt:
      "Exploring the latest trends and technologies in mobile application development.",
    date: "2024-03-10",
    image: "/blog/mobile.jpg",
    placeholderImage: placeholderImages[1],
  },
  {
    id: "3",
    title: "Designing for Accessibility",
    excerpt:
      "Best practices for creating accessible and inclusive user interfaces.",
    date: "2024-03-05",
    image: "/blog/accessibility.jpg",
    placeholderImage: placeholderImages[2],
  },
];

export default function Blog() {
  const t = useTranslations();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="container max-w-full px-2 sm:px-4 md:px-6 py-10 sm:py-16 md:py-20">
      <BackButton variant="blog" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl xs:text-4xl md:text-5xl font-display text-center mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600 leading-tight">
          {t("home.navigation.blog")}
        </h1>

        <p className="text-center text-base sm:text-lg text-amber-200/80 max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
          {t("blog.description")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-amber-900/10 backdrop-blur-sm rounded-xl overflow-hidden border border-amber-500/20 hover:border-amber-500/40 shadow-lg hover:shadow-amber-500/10 transition-all duration-300 flex flex-col"
            >
              <div className="relative w-full h-40 xs:h-48 sm:h-56 md:h-48 lg:h-40 overflow-hidden">
                {mounted && (
                  <div className="w-full h-full relative">
                    <Image
                      src={post.placeholderImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
              <div className="p-4 xs:p-6 flex flex-col flex-1">
                <div className="flex items-center text-amber-300 mb-2 xs:mb-4 text-xs xs:text-sm">
                  <FaCalendarAlt className="w-4 h-4 mr-2" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString()}
                  </time>
                </div>
                <h3 className="text-lg xs:text-xl font-display mb-1 xs:mb-2 text-white leading-snug">
                  {post.title}
                </h3>
                <p className="text-amber-100/70 mb-2 xs:mb-4 text-sm xs:text-base flex-1">
                  {t(`blog.posts.${post.id}.excerpt`)}
                </p>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors duration-200 text-sm xs:text-base font-medium mt-auto"
                >
                  {t("blog.readMore")}
                  <FaArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
