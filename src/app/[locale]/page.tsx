import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { setPageLocale, type LocalePageProps } from "@/i18n/page-locale";
import { portfolioCopy } from "@/content/portfolio-copy";
import { displayWorkCases } from "@/content/work-copy";
import { heroImageRegion } from "@/content/reference-artwork";
import ReferenceImageRegion from "@/components/ReferenceImageRegion";
import WorkProcess from "@/components/WorkProcess";
import {
  Capabilities,
  ContactCallout,
  WorkCard,
} from "@/components/PortfolioUI";

export default async function Home({ params }: LocalePageProps) {
  const locale = await setPageLocale(params);
  const copy = portfolioCopy.home;
  const global = portfolioCopy.global;
  const headline = copy.headline[locale];
  const splitAt = headline.indexOf(locale === "ja" ? "アプリ" : "mobile");
  const headlineLines =
    splitAt > 0
      ? [headline.slice(0, splitAt), headline.slice(splitAt)]
      : [headline];
  const selected = displayWorkCases.filter((work) =>
    ["recruitment-matching", "messaging-automation"].includes(work.id),
  );
  return (
    <>
      <section className="hero-v12">
        <div className="hero-artwork">
          <ReferenceImageRegion
            region={heroImageRegion(locale)}
            className="hero-image"
            priority
          />
        </div>
        <div className="page-width hero-content">
          <p className="eyebrow">{copy.eyebrow[locale]}</p>
          <h1>
            {headlineLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="lead">{copy.body[locale]}</p>
          <div className="actions">
            <Link
              className="button button-primary"
              href={`/${locale}/creations`}
            >
              {global.cta.work[locale]}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="text-link" href={`/${locale}/contact`}>
              {global.cta.contact[locale]}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="hero-details">
            <p className="location">{global.location}</p>
            <ul className="hero-stack" aria-label={global.labels.stack[locale]}>
              {copy.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="hero-image-note">
          {locale === "ja"
            ? "生成イメージ · 本人の写真ではありません"
            : "Generated image · not a photograph of Yusuke"}
        </p>
      </section>
      <div className="page-width home-sections">
        <section className="home-services">
          <div>
            <h2>{copy.services_heading[locale]}</h2>
            <p>{copy.services_body[locale]}</p>
          </div>
          <Capabilities locale={locale} summary />
        </section>
        <section className="selected-work" id="work">
          <div className="section-heading">
            <h2>{copy.work_heading[locale]}</h2>
            <p>{copy.work_body[locale]}</p>
            <Link className="text-link" href={`/${locale}/creations`}>
              {global.cta.all_work[locale]}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="work-grid">
            {selected.map((work) => (
              <WorkCard key={work.id} work={work} locale={locale} preview />
            ))}
          </div>
        </section>
        <WorkProcess locale={locale} />
        <section className="home-about-summary">
          <h2>{copy.about_heading[locale]}</h2>
          <p>{copy.about_body[locale]}</p>
          <Link className="text-link" href={`/${locale}/about`}>
            {global.nav.about[locale]}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </section>
        <ContactCallout locale={locale} context="home" />
      </div>
    </>
  );
}
