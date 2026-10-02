"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/routing";

export default function SettingLang({
  locale,
  onNavigate,
}: {
  locale: Locale;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const path = pathname.replace(/^\/(ja|en)(?=\/|$)/, "");
  return (
    <nav
      className="language-switch"
      aria-label={locale === "ja" ? "表示言語" : "Language"}
    >
      {(["ja", "en"] as const).map((language) => (
        <Link
          key={language}
          href={`/${language}${path}`}
          onClick={onNavigate}
          hrefLang={language}
          lang={language}
          aria-current={locale === language ? "page" : undefined}
          aria-label={language === "ja" ? "日本語" : "English"}
        >
          {language === "ja" ? "JP" : "EN"}
        </Link>
      ))}
    </nav>
  );
}
