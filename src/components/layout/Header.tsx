'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { FaGlobe } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);

  // スクロール位置に応じてヘッダーの背景を変更
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'ja' : 'en';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newPath;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-display text-white hover:text-accent transition-colors"
          >
            Portfolio
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/portfolio"
              className="text-white/80 hover:text-white transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/services"
              className="text-white/80 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="text-white/80 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-white/80 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <button
              onClick={toggleLocale}
              className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
            >
              <FaGlobe className="w-5 h-5" />
              <span>{locale.toUpperCase()}</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
} 