import type { Metadata } from "next";
import Link from "next/link";
import { setPageLocale, type LocalePageProps } from "@/i18n/page-locale";
import { siteCopy } from "@/content/site";
import { PageIntro } from "@/components/PortfolioUI";
import ContactForm from "@/components/ContactForm";
import { contactFormEnabled } from "@/config/contact";

export const metadata: Metadata = { title: "Contact / お問い合わせ" };
export const dynamic = "force-dynamic";

export default async function Contact({ params }: LocalePageProps) {
  const locale = await setPageLocale(params);
  const c = siteCopy[locale];
  const acceptingEnquiries =
    contactFormEnabled &&
    process.env.CONTACT_FORM_ENABLED === "true" &&
    process.env.GMAIL_USER &&
    process.env.GMAIL_PASS &&
    process.env.CONTACT_TO;
  return (
    <div className="page-width">
      <PageIntro
        eyebrow="CONTACT"
        title={c.contactTitle}
        body={c.contactBody}
      />
      <div className="contact-layout">
        <aside>
          <h2>
            {locale === "ja" ? "ご相談の前に" : "A useful starting point"}
          </h2>
          <ul className="consultation-list">
            {(locale === "ja"
              ? [
                  "つくりたいもの・解決したいこと",
                  "現在の構成と必要な機能",
                  "希望する時期と担当範囲",
                ]
              : [
                  "What you want to build or improve",
                  "Your current setup and required features",
                  "Timing and the contribution you need",
                ]
            ).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link className="text-link" href={`/${locale}/services`}>
            {c.servicesCta} ↗
          </Link>
        </aside>
        <div>
          {acceptingEnquiries ? (
            <ContactForm locale={locale} />
          ) : (
            <div className="contact-pending">
              <p className="eyebrow">
                {locale === "ja" ? "受付準備中" : "ENQUIRIES"}
              </p>
              <h2>{c.pendingTitle}</h2>
              <p>{c.pendingBody}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
