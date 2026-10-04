import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import { setPageLocale } from "@/i18n/page-locale";
import { siteCopy } from "@/content/site";
import { workCases, workLabels } from "@/content/work";
import { ContactCallout, Tags, WorkGraphic } from "@/components/PortfolioUI";

type Props = { params: Promise<{ locale: Locale; id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;
  const work = workCases.find((item) => item.id === id);
  return {
    title: work?.title[locale] ?? "Work",
    description: work?.summary[locale],
  };
}

export default async function CreationDetail({ params }: Props) {
  const { id } = await params;
  const locale = await setPageLocale(params);
  const work = workCases.find((item) => item.id === id);
  if (!work) notFound();
  const c = siteCopy[locale];
  const labels = workLabels[locale];
  const sections = (["context", "role", "approach", "output"] as const).filter(
    (field) => work[field],
  );
  return (
    <div className="page-width">
      <header className="detail-intro">
        <Link className="text-link" href={`/${locale}/creations`}>
          <ArrowLeft size={18} aria-hidden="true" />
          {c.back}
        </Link>
        <p className="eyebrow">WORK / {work.number}</p>
        <h1>{work.title[locale]}</h1>
        <p className="work-kind">{work.kind[locale]}</p>
        <p className="lead">{work.summary[locale]}</p>
      </header>
      <div className="detail-layout">
        <div className="detail-content">
          {sections.map((field, index) => (
            <section className="detail-section" key={field}>
              <span className="eyebrow">0{index + 1}</span>
              <div>
                <h2>{labels[field]}</h2>
                <p>{work[field]?.[locale]}</p>
              </div>
            </section>
          ))}
        </div>
        <aside className="detail-sidebar">
          <WorkGraphic work={work} />
          <dl>
            <dt>{c.period}</dt>
            <dd>{work.period[locale]}</dd>
            <dt>{c.tech}</dt>
            <dd>
              {work.technologies.length ? (
                <Tags items={work.technologies} />
              ) : locale === "ja" ? (
                "ゲームの状態管理・リアルタイム通信"
              ) : (
                "Game state and real-time communication"
              )}
            </dd>
          </dl>
          <p className="scope-note">{c.sourceUnavailable}</p>
        </aside>
      </div>
      <ContactCallout locale={locale} />
    </div>
  );
}
