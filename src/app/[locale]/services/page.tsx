"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaReact,
  FaRobot,
  FaPalette,
  FaClipboardCheck,
  FaArrowRight,
} from "react-icons/fa";
import BackButton from "@/components/BackButton";

const services = [
  {
    id: "webDev",
    icon: FaReact,
    color: "text-blue-500",
  },
  {
    id: "mobileDev",
    icon: FaRobot,
    color: "text-green-500",
  },
  {
    id: "design",
    icon: FaPalette,
    color: "text-purple-500",
  },
  {
    id: "backendDev",
    icon: FaClipboardCheck,
    color: "text-yellow-500",
  },
];

export default function Services() {
  const t = useTranslations();

  return (
    <div className="container max-w-full px-2 sm:px-4 md:px-6 py-10 sm:py-16 md:py-20">
      <BackButton variant="services" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl xs:text-4xl md:text-5xl font-display text-center mb-8 sm:mb-12 leading-tight">
          {t("services.title")}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background/50 backdrop-blur-sm p-4 xs:p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl hover:bg-background/70 transition-all border border-white/10 flex flex-col items-center text-center"
              >
                <div className={`${service.color} mb-3 sm:mb-4 flex justify-center`}>
                  <Icon className="w-12 h-12 sm:w-16 sm:h-16" />
                </div>
                <h3 className="text-lg xs:text-xl font-display mb-2 sm:mb-4">
                  {t(`services.${service.id}.title`)}
                </h3>
                <p className="text-foreground/70 text-sm xs:text-base flex-1">
                  {t(`services.${service.id}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* お問い合わせセクション */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-xs xs:max-w-sm sm:max-w-2xl mx-auto text-center bg-background/30 backdrop-blur-md p-4 xs:p-6 sm:p-8 rounded-xl border border-white/10 shadow-lg"
        >
          <h2 className="text-lg xs:text-2xl font-display mb-2 sm:mb-4">
            {t("services.otherRequestsTitle")}
          </h2>
          <p className="text-foreground/80 mb-6 sm:mb-8 text-sm xs:text-base">
            {t("services.otherRequestsDescription")}
          </p>

          <Link
            href="/contact"
            className="btn btn-primary btn-lg shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-105 transition-all duration-300 group text-base xs:text-lg px-6 py-3 sm:px-8 sm:py-4 rounded-full inline-flex items-center justify-center gap-2"
          >
            {t("home.contact.cta")}
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
