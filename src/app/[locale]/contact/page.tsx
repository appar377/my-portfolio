"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import * as Dialog from "@radix-ui/react-dialog";
import { FaPaperPlane, FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
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
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setIsSuccess(true);
        reset();
      } else {
        // エラー時の処理（必要に応じてアラートやUI追加可）
        alert(res.statusText);
      }
    } catch (e) {
      alert(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container max-w-full px-2 sm:px-4 md:px-6 py-10 sm:py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl md:max-w-4xl mx-auto px-0 sm:px-4"
      >
        {/* Back Button */}
        <button
          type="button"
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 border border-rose-500/30 text-rose-400 hover:bg-rose-500/10 hover:text-rose-500 hover:shadow-lg transition-all duration-200 font-medium backdrop-blur-sm text-sm sm:text-base"
        >
          <FaArrowLeft className="text-base sm:text-lg" />
          <span>{t("contact.back")}</span>
        </button>
        <h1 className="text-3xl xs:text-4xl md:text-5xl font-display text-center mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-600 leading-tight">
          {t("contact.title")}
        </h1>

        <p className="text-center text-base sm:text-lg text-white/70 max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
          {t("contact.description")}
        </p>

        {/* フォームセクション */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-foreground/5 backdrop-blur-sm border border-rose-500/20 rounded-xl p-4 xs:p-6 sm:p-8 mb-8 sm:mb-12 shadow-lg"
        >
          <h2 className="text-xl sm:text-2xl font-display mb-4 sm:mb-6 text-center">
            {t("contact.formTitle")}
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
            <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-white/80 text-sm sm:text-base">
                  {t("contact.name")}
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name")}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  placeholder={t("contact.name")}
                  autoComplete="name"
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-xs sm:text-sm">
                    {t("contact.nameRequired")}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-white/80 text-sm sm:text-base">
                  {t("contact.email")}
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  placeholder={t("contact.email")}
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-xs sm:text-sm">
                    {t("contact.emailInvalid")}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-white/80 text-sm sm:text-base">
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                {...register("message")}
                rows={5}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-transparent transition-all duration-200 text-sm sm:text-base resize-none"
                placeholder={t("contact.message")}
              />
              {errors.message && (
                <p className="mt-1 text-red-500 text-xs sm:text-sm">
                  {t("contact.messageMin")}
                </p>
              )}
            </div>

            <div className="flex justify-center mt-6 sm:mt-8">
              <motion.button
                type="submit"
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full flex items-center gap-2 hover:shadow-lg hover:shadow-rose-500/20 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed text-base sm:text-lg min-w-[120px]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {t("contact.sending")}
                  </>
                ) : (
                  <>
                    {t("contact.submit")} <FaPaperPlane className="ml-1" />
                  </>
                )}
              </motion.button>
            </div>

            <p className="text-center text-xs sm:text-sm text-white/50 mt-4">
              {t("contact.note")}
            </p>
          </form>
        </motion.div>

        {/* プライバシーノート */}
        <div className="mt-8 sm:mt-12 text-center px-2">
          <p className="text-white/50 text-xs sm:text-sm">{t("contact.privacy")}</p>
        </div>
      </motion.div>

      {/* 成功メッセージモーダル */}
      <Dialog.Root open={isSuccess} onOpenChange={setIsSuccess}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 p-4 xs:p-6 sm:p-8 rounded-xl shadow-xl max-w-xs xs:max-w-sm sm:max-w-md w-full border border-rose-500/30 z-50">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 mb-4 sm:mb-6">
                <FaPaperPlane className="text-white text-lg sm:text-xl" />
              </div>
              <Dialog.Title className="text-lg sm:text-2xl font-display mb-2 sm:mb-3">
                {t("contact.success")}
              </Dialog.Title>
              <p className="text-white/70 mb-4 sm:mb-6 text-sm sm:text-base">
                {t("contact.successMessage")}
              </p>
              <Dialog.Close asChild>
                <motion.button
                  className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full hover:shadow-lg hover:shadow-rose-500/20 transition-all duration-300 text-base sm:text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("contact.close")}
                </motion.button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
