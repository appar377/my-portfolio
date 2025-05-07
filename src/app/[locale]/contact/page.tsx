'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import * as Dialog from '@radix-ui/react-dialog';
import { FaComments, FaClipboardList, FaPaperPlane, FaLock, FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const t = useTranslations();
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Here you would typically send the form data to your backend
    console.log(data);
    // 送信シミュレーション
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
    }, 1000);
  };

  return (
    <div className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6"
      >
        {/* Back Button */}
        <button
          type="button"
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-white/10 border border-rose-500/30 text-rose-400 hover:bg-rose-500/10 hover:text-rose-500 hover:shadow-lg transition-all duration-200 font-medium backdrop-blur-sm"
        >
          <FaArrowLeft className="text-lg" />
          <span className="text-base">{t('contact.back')}</span>
        </button>
        <h1 className="text-4xl md:text-5xl font-display text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-600">
          {t('contact.title')}
        </h1>
        
        <p className="text-center text-lg text-white/70 max-w-2xl mx-auto mb-12">
          {t('contact.description')}
        </p>

        {/* フォームセクション */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-foreground/5 backdrop-blur-sm border border-rose-500/20 rounded-xl p-8 mb-12"
        >
          <h2 className="text-2xl font-display mb-6 text-center">{t('contact.formTitle')}</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-white/80">
                  {t('contact.name')}
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-transparent transition-all duration-200"
                  placeholder={t('contact.name')}
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-sm">{t('contact.nameRequired')}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-white/80">
                  {t('contact.email')}
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-transparent transition-all duration-200"
                  placeholder={t('contact.email')}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{t('contact.emailInvalid')}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-white/80">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                {...register('message')}
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-transparent transition-all duration-200"
                placeholder={t('contact.message')}
              />
              {errors.message && (
                <p className="mt-1 text-red-500 text-sm">{t('contact.messageMin')}</p>
              )}
            </div>

            <div className="flex justify-center mt-8">
              <motion.button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full flex items-center gap-2 hover:shadow-lg hover:shadow-rose-500/20 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('contact.sending')}
                  </>
                ) : (
                  <>
                    {t('contact.submit')} <FaPaperPlane className="ml-1" />
                  </>
                )}
              </motion.button>
            </div>
            
            <p className="text-center text-xs text-white/50 mt-4">
              {t('contact.note')}
            </p>
          </form>
        </motion.div>
        
        {/* プライバシーノート */}
        <div className="mt-12 text-center">
          <p className="text-white/50 text-sm">
            {t('contact.privacy')}
          </p>
        </div>
      </motion.div>

      {/* 成功メッセージモーダル */}
      <Dialog.Root open={isSuccess} onOpenChange={setIsSuccess}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 p-8 rounded-xl shadow-xl max-w-md w-full border border-rose-500/30 z-50">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 mb-6">
                <FaPaperPlane className="text-white text-xl" />
              </div>
              <Dialog.Title className="text-2xl font-display mb-3">
                {t('contact.success')}
              </Dialog.Title>
              <p className="text-white/70 mb-6">
                {t('contact.successMessage')}
              </p>
              <Dialog.Close asChild>
                <motion.button 
                  className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full hover:shadow-lg hover:shadow-rose-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('contact.close')}
                </motion.button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
} 