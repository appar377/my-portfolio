'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';

// Sample portfolio data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'web',
    image: '/projects/ecommerce.jpg',
    description: 'A full-featured e-commerce platform with payment integration',
  },
  {
    id: 2,
    title: 'Fitness App',
    category: 'mobile',
    image: '/projects/fitness.jpg',
    description: 'Mobile app for tracking workouts and nutrition',
  },
  {
    id: 3,
    title: '3D Character Model',
    category: '3d',
    image: '/projects/character.jpg',
    description: 'High-poly character model for game development',
  },
  // Add more projects as needed
];

export default function Portfolio() {
  const t = useTranslations();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const categories = t.raw('portfolio.categories') as Record<string, string>;

  return (
    <div className="container py-20">
      <h1 className="text-4xl font-display text-center mb-12">
        {t('portfolio.title')}
      </h1>

      <Tabs.Root
        defaultValue="all"
        onValueChange={setActiveCategory}
        className="mb-12"
      >
        <Tabs.List className="flex justify-center space-x-4 mb-8">
          <Tabs.Trigger
            value="all"
            className="px-4 py-2 rounded-md data-[state=active]:bg-accent data-[state=active]:text-white"
          >
            All
          </Tabs.Trigger>
          {Object.entries(categories).map(([key, value]) => (
            <Tabs.Trigger
              key={key}
              value={key}
              className="px-4 py-2 rounded-md data-[state=active]:bg-accent data-[state=active]:text-white"
            >
              {value}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-display mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                  <button className="btn btn-primary">
                    {t('portfolio.viewProject')}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Tabs.Root>
    </div>
  );
}
