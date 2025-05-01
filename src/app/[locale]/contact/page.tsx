'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import * as Dialog from '@radix-ui/react-dialog';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const t = useTranslations();
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Here you would typically send the form data to your backend
    console.log(data);
    setIsSuccess(true);
    reset();
  };

  return (
    <div className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-display text-center mb-12">
          {t('contact.title')}
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-display mb-6">{t('contact.getInTouch')}</h2>
            <p className="text-foreground/70 mb-8">{t('contact.description')}</p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="font-display mb-1">{t('contact.address')}</h3>
                  <p className="text-foreground/70">123 Main Street, City, Country</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaPhone className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="font-display mb-1">{t('contact.phone')}</h3>
                  <p className="text-foreground/70">+1 (123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaEnvelope className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="font-display mb-1">{t('contact.email')}</h3>
                  <p className="text-foreground/70">contact@example.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">
                  {t('contact.name')}
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className="w-full px-4 py-2 rounded-md bg-foreground/5 border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                {errors.name && (
                  <p className="mt-1 text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  {t('contact.email')}
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="w-full px-4 py-2 rounded-md bg-foreground/5 border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                {errors.email && (
                  <p className="mt-1 text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows={5}
                  className="w-full px-4 py-2 rounded-md bg-foreground/5 border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                {errors.message && (
                  <p className="mt-1 text-red-500">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                {t('contact.submit')}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      <Dialog.Root open={isSuccess} onOpenChange={setIsSuccess}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-6 rounded-lg shadow-lg max-w-md w-full">
            <Dialog.Title className="text-xl font-display mb-4">
              {t('contact.success')}
            </Dialog.Title>
            <Dialog.Close className="btn btn-primary">
              Close
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
} 