import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { setPageLocale, type LocalePageProps } from "@/i18n/page-locale";
import { siteCopy, technicalNotesUrl } from "@/content/site";
import { ContactCallout, PageIntro } from "@/components/PortfolioUI";

export const metadata: Metadata = { title: "Technical notes / 技術ノート" };

export default async function Blog({ params }: LocalePageProps) {
  const locale = await setPageLocale(params);
  const c = siteCopy[locale];
  return (
    <div className="page-width">
      <PageIntro
        eyebrow="TECHNICAL NOTES"
        title={c.notesTitle}
        body={c.notesBody}
      />
      <section className="writing-card">
        <span className="notes-word" aria-hidden="true">
          tech
          <br />
          <span>note.</span>
        </span>
        <div>
          <p className="eyebrow">YUSUKE / DEVELOPMENT NOTES</p>
          <h2>tech-note</h2>
          <p>{c.notesBody}</p>
          <div className="actions">
            <a
              className="button button-primary"
              href={technicalNotesUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.notesCta}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a
              className="text-link"
              href="https://github.com/appar377/tech-note"
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.notesRepo}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <ContactCallout locale={locale} />
    </div>
  );
}
