import type { Metadata } from "next";
import { setPageLocale, type LocalePageProps } from "@/i18n/page-locale";
import { portfolioCopy } from "@/content/portfolio-copy";
import { siteCopy } from "@/content/site";
import { careerItems } from "@/content/career";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactCallout, PageIntro } from "@/components/PortfolioUI";

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const locale = await setPageLocale(params);
  return {
    title: portfolioCopy.about.headline[locale],
    description: portfolioCopy.about.body[locale],
  };
}
export default async function About({ params }: LocalePageProps) {
  const locale = await setPageLocale(params);
  const copy = portfolioCopy.about;
  const c = siteCopy[locale];
  return (
    <div className="page-width about-page">
      <PageIntro title={copy.headline[locale]} body={copy.body[locale]}>
        <p className="profile-name">{c.profileName}</p>
      </PageIntro>
      <section className="profile-overview">
        <div>
          <h2>{copy.experience_heading[locale]}</h2>
          <p>{copy.experience_body[locale]}</p>
          <Link className="text-link" href={`/${locale}/creations`}>
            {c.workCta}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div>
          <h2>{copy.ai_heading[locale]}</h2>
          <p>{copy.ai_body[locale]}</p>
          <h3>{copy.location_heading[locale]}</h3>
          <p>{copy.location_body[locale]}</p>
        </div>
      </section>
      <section className="career-section">
        <h2>{c.career}</h2>
        <ol className="career-list">
          {careerItems.map((item) => (
            <li key={item.id}>
              <p className="eyebrow">{item.period[locale]}</p>
              <div>
                <h3>{item.title[locale]}</h3>
                <p>{item.body[locale]}</p>
                {item.workId ? (
                  <Link
                    className="text-link"
                    href={`/${locale}/creations/${item.workId}`}
                  >
                    {c.explore}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>
      <ContactCallout locale={locale} />
    </div>
  );
}
