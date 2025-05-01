'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCode, FaMobile, FaPalette, FaServer } from 'react-icons/fa';

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
    icon: FaPalette,
    color: 'text-purple-500',
  },
  {
    id: 'backendDev',
    icon: FaServer,
    color: 'text-yellow-500',
  },
];

export default function Services() {
  const t = useTranslations();

  return (
    <div className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-display text-center mb-12">
          {t('services.title')}
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`${service.color} mb-4`}>
                  <Icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-display mb-4">
                  {t(`services.${service.id}.title`)}
                </h3>
                <p className="text-foreground/70 mb-6">
                  {t(`services.${service.id}.description`)}
                </p>
                <Link
                  href={`/services/${service.id}`}
                  className="btn btn-secondary"
                >
                  Learn More
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
} 