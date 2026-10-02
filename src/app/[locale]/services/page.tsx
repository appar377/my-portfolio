import type { Metadata } from "next";
import { setPageLocale, type LocalePageProps } from "@/i18n/page-locale";
import { siteCopy } from "@/content/site";
import {
  Capabilities,
  ContactCallout,
  PageIntro,
} from "@/components/PortfolioUI";

export const metadata: Metadata = { title: "Services / できること" };

export default async function Services({ params }: LocalePageProps) {
  const locale = await setPageLocale(params);
  const c = siteCopy[locale];
  return (
    <div className="page-width">
      <PageIntro
        eyebrow="SERVICES / CAPABILITIES"
        title={c.servicesTitle}
        body={c.servicesIntro}
      />
      <Capabilities locale={locale} />
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PROCESS</p>
            <h2>{c.processTitle}</h2>
          </div>
        </div>
        <ol className="process-grid">
          {c.steps.map(([title, body], index) => (
            <li key={title}>
              <span className="process-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </section>
      <ContactCallout locale={locale} />
    </div>
  );
}
