import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { setPageLocale, type LocalePageProps } from "@/i18n/page-locale";
import { brandCopy, featuredTechnologies } from "@/content/brand";
import SystemPreview from "@/components/SystemPreview";
import WorkProcess from "@/components/WorkProcess";
import { ContactCallout } from "@/components/PortfolioUI";

export default async function Home({ params }: LocalePageProps) {
  const locale = await setPageLocale(params);
  const c = brandCopy[locale];
  const services = [
    {
      id: "web",
      title: c.web,
      body: c.webBody,
      image: "/images/v3/web-concept.webp",
    },
    {
      id: "mobile",
      title: c.mobile,
      body: c.mobileBody,
      image: "/images/v3/mobile-concept.webp",
    },
  ];
  return (
    <>
      <section className="studio-hero">
        <div className="page-width studio-hero-inner">
          <div className="studio-hero-copy">
            <p className="eyebrow">INDEPENDENT SYSTEMS ENGINEER</p>
            <h1>
              {c.headline.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <p className="hero-description">{c.body}</p>
            <div className="actions">
              <Link
                className="button hero-primary"
                href={`/${locale}/creations`}
              >
                {c.work}
                <ArrowUpRight size={22} aria-hidden="true" />
              </Link>
              <Link
                className="button hero-secondary"
                href={`/${locale}/contact`}
              >
                {c.contact}
              </Link>
            </div>
            <div className="technology-strip">
              <p>TECHNOLOGY</p>
              <ul>
                {featuredTechnologies.map((t, i) => (
                  <li key={t}>
                    <span
                      aria-hidden="true"
                      className={`technology-icon tech-${i}`}
                    >
                      {["◒", "N", "⚛", "╱", "●"][i]}
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <SystemPreview locale={locale} />
        </div>
      </section>
      <div className="page-width studio-sections">
        <section className="studio-work" aria-labelledby="work-title">
          <div className="editorial-heading">
            <h2 id="work-title">Work.</h2>
            <span>{c.workLabel}</span>
            <p>{c.workIntro}</p>
          </div>
          <div className="service-photo-grid">
            {services.map((s) => (
              <Link
                className="service-photo"
                key={s.id}
                href={`/${locale}/services#service-${s.id}`}
              >
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <span className="concept-label">CONCEPT PREVIEW</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <span className="circle-arrow">
                    <ArrowRight size={24} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p className="concept-note">
            {locale === "ja"
              ? "コンセプトイメージ · 実際の案件・アプリ画面ではありません"
              : "Concept images · not screenshots of client projects or released apps"}
          </p>
          <Link
            className="text-link section-link"
            href={`/${locale}/creations`}
          >
            {locale === "ja"
              ? "担当した実績を詳しく見る"
              : "Explore my development experience"}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </section>
        <section className="home-apps">
          <div className="editorial-heading">
            <h2>Apps.</h2>
            <span>{c.apps}</span>
          </div>
          <p>{c.appsBody}</p>
          <Link className="button button-primary" href={`/${locale}/apps`}>
            {c.apps}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </section>
        <WorkProcess locale={locale} />
        <section className="brand-story">
          <p className="eyebrow">SOFTWARE & EVERYDAY LIFE</p>
          <h2>{c.brand}</h2>
          <p>{c.brandBody}</p>
          <Link className="text-link" href={`/${locale}/about`}>
            {locale === "ja" ? "私について" : "About me"}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </section>
        <ContactCallout locale={locale} context="home" />
      </div>
    </>
  );
}
