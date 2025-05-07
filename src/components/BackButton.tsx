import { usePathname } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { useRef } from "react";

const variantStyles: Record<string, string> = {
  about:
    "bg-gradient-to-r from-indigo-500/80 via-purple-500/80 to-indigo-600/80 border-indigo-500/30 hover:shadow-indigo-400/30 focus:ring-indigo-400/40",
  blog: "bg-gradient-to-r from-amber-500/80 via-orange-500/80 to-amber-600/80 border-amber-500/30 hover:shadow-amber-400/30 focus:ring-amber-400/40",
  creations:
    "bg-gradient-to-r from-cyan-500/80 via-blue-500/80 to-cyan-600/80 border-cyan-500/30 hover:shadow-cyan-400/30 focus:ring-cyan-400/40",
  services:
    "bg-gradient-to-r from-emerald-500/80 via-teal-500/80 to-emerald-600/80 border-emerald-500/30 hover:shadow-emerald-400/30 focus:ring-emerald-400/40",
  contact:
    "bg-gradient-to-r from-rose-400/80 via-pink-400/80 to-rose-500/80 border-rose-400/30 hover:shadow-rose-400/30 focus:ring-rose-400/40",
  default:
    "bg-gradient-to-r from-gray-400/80 via-gray-500/80 to-gray-600/80 border-gray-400/30 hover:shadow-gray-400/30 focus:ring-gray-400/40",
};

export default function BackButton({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: string;
}) {
  const pathname = usePathname();
  const isGoingBack = useRef(false);

  const handleBack = () => {
    if (isGoingBack.current) return;
    isGoingBack.current = true;

    const onPopState = () => {
      if (window.location.pathname === pathname) {
        window.removeEventListener("popstate", onPopState);
        window.history.go(-1);
      } else {
        window.removeEventListener("popstate", onPopState);
        isGoingBack.current = false;
      }
    };

    window.addEventListener("popstate", onPopState);
    window.history.back();
  };

  const style = variantStyles[variant] || variantStyles.default;

  return (
    <button
      type="button"
      onClick={handleBack}
      className={`group relative inline-flex items-center gap-2 px-6 py-2 mb-8 rounded-full ${style} text-white font-semibold backdrop-blur-md transition-all duration-200 focus:outline-none focus:ring-2 ${className}`}
      style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)" }}
    >
      {/* グローエフェクト */}
      <span className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <span className="relative flex items-center">
        <FaArrowLeft className="text-lg group-hover:-translate-x-1 transition-all duration-200" />
        <span className="ml-1 text-base transition-colors duration-200">
          戻る
        </span>
      </span>
    </button>
  );
}
