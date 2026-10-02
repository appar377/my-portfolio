"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import { siteCopy } from "@/content/site";
import SettingLang from "./SettingLang";

const destinations = ["creations", "about", "services", "blog", "contact"];

export default function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const menuOpen = menuPath === pathname;
  const toggle = useRef<HTMLButtonElement>(null);
  const c = siteCopy[locale];

  function closeMenu() {
    setMenuPath(null);
  }

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          closeMenu();
          toggle.current?.focus();
        }
      }}
    >
      <div className="header-inner">
        <Link
          href={`/${locale}`}
          className="wordmark"
          onClick={closeMenu}
          aria-label={`Abocado / Yusuke · ${c.home}`}
        >
          <span className="brand-mark" aria-hidden="true">
            a
          </span>
          <span>
            abocado<span className="brand-dot">.</span>
          </span>
        </Link>
        <nav
          aria-label={
            locale === "ja" ? "メインナビゲーション" : "Main navigation"
          }
          className="desktop-nav"
        >
          {destinations.map((path, index) => (
            <Link
              href={`/${locale}/${path}`}
              key={path}
              aria-current={
                pathname.startsWith(`/${locale}/${path}`) ? "page" : undefined
              }
            >
              {c.nav[index]}
            </Link>
          ))}
        </nav>
        <div className="header-controls">
          <SettingLang locale={locale} onNavigate={closeMenu} />
          <button
            className="menu-toggle"
            ref={toggle}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? c.closeMenu : c.menu}
            onClick={() => setMenuPath(menuOpen ? null : pathname)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <nav
        id="mobile-menu"
        className="mobile-nav"
        hidden={!menuOpen}
        aria-label={
          locale === "ja" ? "モバイルナビゲーション" : "Mobile navigation"
        }
      >
        {destinations.map((path, index) => (
          <Link
            href={`/${locale}/${path}`}
            key={path}
            onClick={closeMenu}
            aria-current={
              pathname.startsWith(`/${locale}/${path}`) ? "page" : undefined
            }
          >
            {c.nav[index]}
            <span aria-hidden="true">↗</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
