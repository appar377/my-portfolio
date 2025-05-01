'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaCode, FaMobile, FaPaintBrush } from 'react-icons/fa';

const services = [
  {
    id: 'webDev',
    icon: FaCode,
    color: 'text-blue-500',
  },
  {
    id: 'mobileDev',
    icon: FaMobile,
    color: 'text-green-500',
  },
  {
    id: 'design',
    icon: FaPaintBrush,
    color: 'text-purple-500',
  },
];

export default function Home() {
  const t = useTranslations();

  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden snap-start">
        {/* Removed gradient overlays for seamless 3D background */}
        
        {/* Content */}
        <div className="container relative z-10 text-center pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-accent"
          >
            {t('home.hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            {t('home.hero.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-x-4"
          >
            <Link
              href="/contact"
              className="btn btn-primary shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-105 transition-all duration-300"
            >
              {t('home.hero.cta')}
              <FaArrowRight className="ml-2" />
            </Link>
            <Link
              href="/portfolio"
              className="btn btn-secondary backdrop-blur-sm hover:scale-105 transition-all duration-300"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="snap-start min-h-screen flex flex-col justify-center py-20">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display text-center mb-12"
          >
            {t('home.featured.title')}
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:bg-foreground/10 transition-colors"
              >
                <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
                  <div className="w-full h-full bg-foreground/20" />
                </div>
                <h3 className="text-xl font-display mb-2">Project Title</h3>
                <p className="text-foreground/70 mb-4">Brief project description goes here.</p>
                <Link href="/portfolio" className="text-accent hover:text-accent-hover">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="snap-start min-h-screen flex flex-col justify-center py-20 bg-foreground/5">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display text-center mb-12"
          >
            {t('home.services.title')}
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card text-center hover:bg-foreground/10 transition-colors"
                >
                  <div className={`${service.color} mb-4`}>
                    <Icon className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-display mb-4">
                    {t(`services.${service.id}.title`)}
                  </h3>
                  <p className="text-foreground/70">
                    {t(`services.${service.id}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
} 