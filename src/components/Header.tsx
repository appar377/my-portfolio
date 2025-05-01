'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            Yusuke
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/portfolio"
              className={`text-white/80 hover:text-white transition-colors ${
                pathname === '/portfolio' ? 'text-white' : ''
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/services"
              className={`text-white/80 hover:text-white transition-colors ${
                pathname === '/services' ? 'text-white' : ''
              }`}
            >
              Services
            </Link>
            <Link
              href="/blog"
              className={`text-white/80 hover:text-white transition-colors ${
                pathname === '/blog' ? 'text-white' : ''
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`text-white/80 hover:text-white transition-colors ${
                pathname === '/contact' ? 'text-white' : ''
              }`}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-white/80 hover:text-white transition-colors">
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 