import type { Metadata } from "next";
import { Search, ListChecks, Code2, ChartNoAxesCombined } from "lucide-react";
import { setPageLocale, type LocalePageProps } from "@/i18n/page-locale";
import { siteCopy } from "@/content/site";
import { DecorationLayer } from "@/components/PortfolioIllustration";
import {
  Capabilities,
  ContactCallout,
  PageIntro,
} from "@/components/PortfolioUI";

export const metadata: Metadata = { title: "Services / できること" };

export default async function Services({ params }: LocalePageProps) {
  const locale = await setPageLocale(params);
  const c = siteCopy[locale];
  const processIcons = [Search, ListChecks, Code2, ChartNoAxesCombined];
  return (
    <div className="page-width services-page">
      <PageIntro
        eyebrow="SERVICES / CAPABILITIES"
        title={c.servicesTitle}
        body={c.servicesIntro}
        illustration="business"
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
          {c.steps.map(([title, body], index) => {
            const Icon = processIcons[index];
            return (
              <li key={title}>
                <DecorationLayer>
                  <Icon
                    className="process-icon"
                    size={32}
                    strokeWidth={1.3}
                    aria-hidden="true"
                  />
                </DecorationLayer>
                <span className="process-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            );
          })}
        </ol>
      </section>
      <ContactCallout locale={locale} />
    </div>
  );
}
