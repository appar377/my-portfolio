import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import { setPageLocale } from "@/i18n/page-locale";
import { appProjects, appStatusLabels, appUsageLinks } from "@/content/apps";
import { PageIntro, Tags } from "@/components/PortfolioUI";
type Props = { params: Promise<{ locale: Locale; id: string }> };
export function generateStaticParams() {
  return appProjects.map((app) => ({ id: app.id }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;
  const app = appProjects.find((app) => app.id === id);
  return {
    title: app?.name[locale] ?? "App",
    description: app?.summary[locale],
  };
}
export default async function AppDetail({ params }: Props) {
  const { id } = await params;
  const locale = await setPageLocale(params);
  const app = appProjects.find((app) => app.id === id);
  if (!app) notFound();
  return (
    <div className="page-width app-detail">
      <PageIntro
        eyebrow={`APP / ${app.category.toUpperCase()}`}
        title={app.name[locale]}
        body={app.summary[locale]}
      >
        <span className="app-status">
          {appStatusLabels[app.status][locale]}
        </span>
      </PageIntro>
      <Link className="text-link" href={`/${locale}/apps`}>
        <ArrowLeft size={17} aria-hidden="true" />
        {locale === "ja" ? "アプリ一覧へ" : "Back to apps"}
      </Link>
      <div className="detail-layout">
        <section>
          <h2>{locale === "ja" ? "できること" : "Features"}</h2>
          <ul className="app-features">
            {app.features.map((f) => (
              <li key={f.en}>{f[locale]}</li>
            ))}
          </ul>
        </section>
        <aside className="detail-sidebar">
          <h2>{locale === "ja" ? "使用技術" : "Technologies"}</h2>
          <Tags items={app.technologies} />
          <div className="actions">
            {appUsageLinks(app).map((link) => (
              <a
                key={link.url}
                className="text-link"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label[locale]}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ))}
          </div>
          {app.status !== "published" && (
            <p>
              {locale === "ja"
                ? "現在利用できるアプリではありません。"
                : "This app is not currently available for use."}
            </p>
          )}
        </aside>
      </div>
      <section className="app-screens">
        <h2>{locale === "ja" ? "画面" : "Screens"}</h2>
        {app.screens.length ? (
          app.screens.map((screen) => (
            <figure key={screen.src}>
              <Image
                src={screen.src}
                width={screen.width}
                height={screen.height}
                alt={screen.caption[locale]}
                sizes="(max-width: 1440px) 100vw, 1400px"
              />
              <figcaption>{screen.caption[locale]}</figcaption>
            </figure>
          ))
        ) : (
          <p>
            {locale === "ja"
              ? "公開できる画面は準備中です。"
              : "Screens are being prepared for publication."}
          </p>
        )}
      </section>
      <section className="app-background">
        <h2>{locale === "ja" ? "つくった背景" : "Background"}</h2>
        <p>{app.background[locale]}</p>
      </section>
    </div>
  );
}
