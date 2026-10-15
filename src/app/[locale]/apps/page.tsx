import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { setPageLocale, type LocalePageProps } from "@/i18n/page-locale";
import { brandCopy } from "@/content/brand";
import { appProjects, appStatusLabels } from "@/content/apps";
import { PageIntro, Tags, ContactCallout } from "@/components/PortfolioUI";
export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const locale = await setPageLocale(params);
  return {
    title: brandCopy[locale].apps,
    description: brandCopy[locale].appsBody,
  };
}
export default async function Apps({ params }: LocalePageProps) {
  const locale = await setPageLocale(params);
  return (
    <div className="page-width apps-page">
      <PageIntro
        eyebrow="APPS"
        title={brandCopy[locale].apps}
        body={brandCopy[locale].appsBody}
      />
      <div className="app-grid">
        {appProjects.map((app) => (
          <article className="app-card" key={app.id}>
            <span className="app-status">
              {appStatusLabels[app.status][locale]}
            </span>
            <h2>
              <Link href={`/${locale}/apps/${app.id}`}>{app.name[locale]}</Link>
            </h2>
            <p>{app.summary[locale]}</p>
            <Tags items={app.technologies} />
            <Link className="text-link" href={`/${locale}/apps/${app.id}`}>
              {locale === "ja"
                ? "機能・画面を見る"
                : "Explore features and screens"}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </article>
        ))}
        <aside className="app-placeholder">
          <p className="eyebrow">MORE TO COME</p>
          <h2>
            {locale === "ja"
              ? "これからつくるものも、ここに。"
              : "A place for future projects."}
          </h2>
          <p>
            {locale === "ja"
              ? "自分でつくったアプリを、公開できる内容が整い次第追加します。機能、画面、つくった背景、利用先をまとめて紹介します。"
              : "I will add my own apps as they are ready to share, with features, screens, background and links."}
          </p>
        </aside>
      </div>
      <ContactCallout locale={locale} />
    </div>
  );
}
