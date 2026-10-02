import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { routing } from "@/i18n/routing";
import { setPageLocale } from "@/i18n/page-locale";
import { siteCopy, technicalNotesUrl } from "@/content/site";
import "@/app/globals.css";

type Props = { children: ReactNode; params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Pick<Props, "params">): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: {
      default: "Abocado / Yusuke — Web & Mobile Development",
      template: "%s | Abocado / Yusuke",
    },
    description:
      locale === "ja"
        ? "Rails・Flutterを軸に、業務Web・モバイル・自動化の開発に取り組むYusukeのポートフォリオ。"
        : "Yusuke's portfolio: business web and mobile development with Rails and Flutter, frontend interfaces and workflow automation.",
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const locale = await setPageLocale(params);
  const c = siteCopy[locale];
  return (
    <html lang={locale}>
      <body>
        <a className="skip-link" href="#main-content">
          {c.skip}
        </a>
        <Header locale={locale} />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <footer className="site-footer">
          <div>
            <Link className="footer-brand" href={`/${locale}`}>
              abocado.
            </Link>
            <p>Yusuke / {c.footer}</p>
          </div>
          <div className="footer-links">
            <Link href={`/${locale}/creations`}>{c.nav[0]}</Link>
            <a
              href={technicalNotesUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              tech-note ↗
            </a>
            <a
              href="https://github.com/appar377/my-portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
