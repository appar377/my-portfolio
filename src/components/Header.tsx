"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import { siteCopy } from "@/content/site";
import { navigationItems } from "@/content/navigation";
import SettingLang from "./SettingLang";
import BrandMark from "./BrandMark";

export default function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const menuOpen = menuPath === pathname;
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const c = siteCopy[locale];

  function closeMenu() {
    setMenuPath(null);
  }
  function isCurrent(path: string) {
    return (
      pathname === `/${locale}/${path}` ||
      pathname.startsWith(`/${locale}/${path}/`)
    );
  }

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 961px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuPath(null);
    };
    const closeOnHistory = () => setMenuPath(null);
    desktop.addEventListener("change", closeOnDesktop);
    window.addEventListener("popstate", closeOnHistory);
    window.addEventListener("pageshow", closeOnHistory);
    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      window.removeEventListener("popstate", closeOnHistory);
      window.removeEventListener("pageshow", closeOnHistory);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const content = Array.from(
      document.querySelectorAll<HTMLElement>("main, .site-footer"),
    );
    const previousInert = content.map((element) => element.inert);
    const previousOverflow = document.body.style.overflow;
    content.forEach((element) => {
      element.inert = true;
    });
    document.body.style.overflow = "hidden";
    return () => {
      content.forEach((element, index) => {
        element.inert = previousInert[index];
      });
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <header
      ref={header}
      className="site-header"
      onKeyDown={(event) => {
        if (!menuOpen) return;
        if (event.key === "Escape") {
          closeMenu();
          toggle.current?.focus();
        }
        if (event.key === "Tab") {
          const controls = Array.from(
            header.current?.querySelectorAll<HTMLElement>("a, button") ?? [],
          ).filter((element) => element.getClientRects().length > 0);
          const first = controls[0],
            last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          }
          if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
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
          <BrandMark />
          <span>Abocado</span>
        </Link>
        <nav
          aria-label={
            locale === "ja" ? "メインナビゲーション" : "Main navigation"
          }
          className="desktop-nav"
        >
          {navigationItems.map(({ path, label }) => (
            <Link
              href={`/${locale}/${path}`}
              key={path}
              aria-current={isCurrent(path) ? "page" : undefined}
            >
              {label[locale]}
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
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
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
        <div className="mobile-destinations">
          {navigationItems.map(({ path, label }) => (
            <Link
              href={`/${locale}/${path}`}
              key={path}
              onClick={closeMenu}
              aria-current={isCurrent(path) ? "page" : undefined}
            >
              <span className="menu-number" aria-hidden="true">
                {navigationItems.findIndex((item) => item.path === path) + 1}
              </span>
              <span>{label[locale]}</span>
              <ArrowUpRight size={26} aria-hidden="true" />
            </Link>
          ))}
        </div>
        <SettingLang locale={locale} onNavigate={closeMenu} />
      </nav>
    </header>
  );
}
