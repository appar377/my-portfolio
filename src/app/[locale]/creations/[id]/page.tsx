import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import { setPageLocale } from "@/i18n/page-locale";
import { siteCopy } from "@/content/site";
import { portfolioCopy } from "@/content/portfolio-copy";
import { findDisplayWork, findNextWork } from "@/content/work-copy";
import {
  projectRelatedImageRegion,
  workImageRegion,
} from "@/content/reference-artwork";
import ReferenceImageRegion from "@/components/ReferenceImageRegion";
import { ContactCallout, Tags, WorkGraphic } from "@/components/PortfolioUI";

type Props = { params: Promise<{ locale: Locale; id: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;
  const work = findDisplayWork(id);
  return {
    title: work?.title[locale] ?? "Work",
    description: work?.summary[locale],
  };
}
export default async function CreationDetail({ params }: Props) {
  const { id } = await params;
  const locale = await setPageLocale(params);
  const work = findDisplayWork(id);
  if (!work) notFound();
  const next = findNextWork(id);
  const copy = work.copy;
  const labels = portfolioCopy.project_template;
  const c = siteCopy[locale];
  return (
    <div className="page-width project-page">
      <header
        className={`detail-intro ${workImageRegion(id, locale, true) ? "" : "detail-without-image"} ${locale === "en" && id === "recruitment-matching" ? "detail-direct-reference" : ""}`}
      >
        <div className="detail-copy">
          <p className="breadcrumbs">
            {portfolioCopy.global.nav.work[locale]} / {copy.title[locale]}
          </p>
          <Link className="text-link detail-back" href={`/${locale}/creations`}>
            <ArrowLeft size={17} aria-hidden="true" />
            {c.back}
          </Link>
          <h1>{copy.title[locale]}</h1>
          <p className="lead">{copy.overview[locale]}</p>
          <Tags items={copy.stack} />
          <p className="project-meta">
            {work.kind[locale]} · {work.period[locale]}
          </p>
        </div>
        <WorkGraphic work={work} locale={locale} context="detail" />
      </header>
      <div className="detail-layout">
        <div className="detail-content">
          <section className="detail-section">
            <h2>{labels.overview_heading[locale]}</h2>
            <p>{copy.overview[locale]}</p>
          </section>
          <section className="detail-section">
            <h2>{labels.role_heading[locale]}</h2>
            <p>{copy.role[locale]}</p>
            <ul
              className="implementation-list"
              aria-label={labels.implementation_heading[locale]}
            >
              {copy.sections.map((section) => (
                <li key={section.title.en}>
                  <strong>{section.title[locale]}</strong>
                  <p>{section.body[locale]}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <aside className="detail-sidebar">
          <h2>{locale === "ja" ? "プロジェクト情報" : "Project details"}</h2>
          <dl>
            <dt>{labels.implementation_heading[locale]}</dt>
            <dd>{copy.role[locale]}</dd>
            <dt>{labels.stack_heading[locale]}</dt>
            <dd>{copy.stack.join(" · ")}</dd>
          </dl>
        </aside>
      </div>
      <section
        className={`more-work ${locale === "en" && id === "recruitment-matching" ? "more-work-direct-reference" : ""}`}
      >
        <div>
          <h2>{labels.next_heading[locale]}</h2>
          <Link className="text-link" href={`/${locale}/creations/${next.id}`}>
            {next.title[locale]}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        {locale === "en" && id === "recruitment-matching" ? (
          <ReferenceImageRegion
            region={projectRelatedImageRegion}
            className="related-image"
          />
        ) : (
          <WorkGraphic work={next} locale={locale} />
        )}
      </section>
      <ContactCallout locale={locale} />
      <p className="scope-note">{c.sourceUnavailable}</p>
    </div>
  );
}
