import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

// Sample blog data - replace with your actual blog posts
const blogPosts = [
  {
    id: 1,
    title: 'Building Modern Web Applications with Next.js',
    excerpt: 'Learn how to build scalable and performant web applications using Next.js and modern development practices.',
    date: '2024-03-15',
    image: '/blog/nextjs.jpg',
  },
  {
    id: 2,
    title: 'The Future of Mobile Development',
    excerpt: 'Exploring the latest trends and technologies in mobile application development.',
    date: '2024-03-10',
    image: '/blog/mobile.jpg',
  },
  {
    id: 3,
    title: 'Designing for Accessibility',
    excerpt: 'Best practices for creating accessible and inclusive user interfaces.',
    date: '2024-03-05',
    image: '/blog/accessibility.jpg',
  },
];

export default function Blog() {
  const t = useTranslations();

  return (
    <div className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-display text-center mb-12">
          {t('navigation.blog')}
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-foreground/70 mb-4">
                  <FaCalendarAlt className="w-4 h-4 mr-2" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString()}
                  </time>
                </div>
                <h3 className="text-xl font-display mb-2">{post.title}</h3>
                <p className="text-foreground/70 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-accent hover:text-accent-hover"
                >
                  Read More
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