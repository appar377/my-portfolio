import type { Metadata } from "next";
import { setPageLocale, type LocalePageProps } from "@/i18n/page-locale";
import { portfolioCopy } from "@/content/portfolio-copy";
import WorkProcess from "@/components/WorkProcess";
import {
  Capabilities,
  ContactCallout,
  PageIntro,
} from "@/components/PortfolioUI";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const locale = await setPageLocale(params);
  return {
    title: portfolioCopy.services.headline[locale],
    description: portfolioCopy.services.body[locale],
  };
}
export default async function Services({ params }: LocalePageProps) {
  const locale = await setPageLocale(params);
  const copy = portfolioCopy.services;
  return (
    <div className="page-width services-page">
      <PageIntro title={copy.headline[locale]} body={copy.body[locale]} />
      <Capabilities locale={locale} />
      <WorkProcess locale={locale} />
      <ContactCallout locale={locale} context="services" />
    </div>
  );
}
