import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { setPageLocale, type LocalePageProps } from "@/i18n/page-locale";
import { siteCopy } from "@/content/site";
import { blogCopy } from "@/content/portfolio-copy";
import { ContactCallout, PageIntro } from "@/components/PortfolioUI";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const locale = await setPageLocale(params);
  return {
    title: { absolute: blogCopy.metadata.title[locale] },
    description: blogCopy.metadata.description[locale],
  };
}
export default async function Blog({ params }: LocalePageProps) {
  const locale = await setPageLocale(params);
  return (
    <div className="page-width articles-page">
      <PageIntro
        title={blogCopy.headline[locale]}
        body={blogCopy.body[locale]}
      />
      <section className="writing-card">
        <h2>TechNote</h2>
        <p className="eyebrow">{blogCopy.labels.external[locale]}</p>
        <div className="actions">
          <a
            className="button button-primary"
            href={blogCopy.primary_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {blogCopy.primary_cta[locale]}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a
            className="text-link"
            href="https://github.com/appar377/tech-note"
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteCopy[locale].notesRepo}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>
      <ContactCallout locale={locale} />
    </div>
  );
}
