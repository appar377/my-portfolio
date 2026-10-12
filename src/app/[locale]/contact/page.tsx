import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { setPageLocale, type LocalePageProps } from "@/i18n/page-locale";
import { portfolioCopy } from "@/content/portfolio-copy";
import { PageIntro } from "@/components/PortfolioUI";
import ContactForm from "@/components/ContactForm";
import { contactFormEnabled } from "@/config/contact";

export const dynamic = "force-dynamic";
export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const locale = await setPageLocale(params);
  return {
    title: portfolioCopy.contact.headline[locale],
    description: portfolioCopy.contact.body[locale],
  };
}
export default async function Contact({ params }: LocalePageProps) {
  const locale = await setPageLocale(params);
  const copy = portfolioCopy.contact;
  const acceptingEnquiries =
    contactFormEnabled &&
    process.env.CONTACT_FORM_ENABLED === "true" &&
    process.env.GMAIL_USER &&
    process.env.GMAIL_PASS &&
    process.env.CONTACT_TO;
  return (
    <div className="page-width contact-page">
      <PageIntro title={copy.headline[locale]} body={copy.body[locale]} />
      {acceptingEnquiries ? (
        <ContactForm locale={locale} />
      ) : (
        <section className="contact-pending">
          <h2>{locale === "ja" ? "受付準備中" : "Contact availability"}</h2>
          <p>{copy.unavailable[locale]}</p>
          <p className="location">{copy.location}</p>
        </section>
      )}
      <Link className="text-link" href={`/${locale}/services`}>
        {portfolioCopy.global.cta.services[locale]}
        <ArrowRight size={18} aria-hidden="true" />
      </Link>
    </div>
  );
}
