import type { Metadata } from "next";
import { setPageLocale, type LocalePageProps } from "@/i18n/page-locale";
import { siteCopy } from "@/content/site";
import { ContactCallout, PageIntro } from "@/components/PortfolioUI";
import WorkExplorer from "@/components/WorkExplorer";

export const metadata: Metadata = { title: "Work / 開発実績" };

export default async function Creations({ params }: LocalePageProps) {
  const locale = await setPageLocale(params);
  const c = siteCopy[locale];
  return (
    <div className="page-width">
      <PageIntro
        eyebrow="WORK / EXPERIENCE"
        title={c.workTitle}
        body={c.workIntro}
      />
      <WorkExplorer locale={locale} />
      <p className="scope-note">{c.workNote}</p>
      <ContactCallout locale={locale} />
    </div>
  );
}
