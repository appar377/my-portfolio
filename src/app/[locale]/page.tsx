import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { setPageLocale, type LocalePageProps } from "@/i18n/page-locale";
import { siteCopy, technicalNotesUrl } from "@/content/site";
import { workCases } from "@/content/work";
import HomeDestinations from "@/components/HomeDestinations";
import DevelopmentApproach from "@/components/DevelopmentApproach";
import {
  Capabilities,
  ContactCallout,
  WorkCard,
} from "@/components/PortfolioUI";

export default async function Home({ params }: LocalePageProps) {
  const locale = await setPageLocale(params);
  const c = siteCopy[locale];
  return (
    <>
      <section className="hero hero-human">
        <Image
          src="/images/design-desk.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-photo"
        />
        <div className="page-width hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">YUSUKE / {c.role}</p>
            <h1>
              {c.heroTitle.map((line) => (
                <span key={line}>{line} </span>
              ))}
            </h1>
            <p className="hero-role">
              <span>Full Stack Engineer</span>
              <span className="hero-role-separator">×</span>
              <span>Designer</span>
            </p>
            <p className="lead">{c.heroBody}</p>
          </div>
          <div className="actions hero-actions">
            <Link
              className="button button-primary"
              href={`/${locale}/creations`}
            >
              {c.workCta}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="button button-secondary" href={`/${locale}/about`}>
              {c.aboutCta}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <p className="hero-image-note">
          {locale === "ja"
            ? "生成イメージ · 本人の写真ではありません"
            : "Generated image · not a photograph of Yusuke"}
        </p>
      </section>
      <section className="page-width section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>{c.selectedTitle}</h2>
            <p>{c.selectedBody}</p>
          </div>
          <Link className="text-link" href={`/${locale}/creations`}>
            {c.allWork}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="work-grid selected-work-grid">
          {workCases.slice(0, 3).map((work, index) => (
            <WorkCard
              key={work.id}
              work={work}
              locale={locale}
              variant={index === 0 ? "featured" : "compact"}
            />
          ))}
        </div>
      </section>
      <HomeDestinations locale={locale} />
      <section className="capabilities-section">
        <div className="page-width section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT I DO</p>
              <h2>{c.capabilitiesTitle}</h2>
              <p>{c.capabilitiesBody}</p>
            </div>
          </div>
          <Capabilities locale={locale} />
        </div>
      </section>
      <div className="approach-band">
        <div className="page-width">
          <DevelopmentApproach locale={locale} variant="summary" />
        </div>
      </div>
      <section className="notes-section page-width">
        <div>
          <p className="eyebrow">LEARNING IN PUBLIC</p>
          <h2>{c.notesTitle}</h2>
          <p>{c.notesBody}</p>
          <a
            className="text-link"
            href={technicalNotesUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {c.notesCta}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>
      <div className="page-width">
        <ContactCallout locale={locale} />
      </div>
    </>
  );
}
