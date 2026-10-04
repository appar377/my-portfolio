import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { setPageLocale, type LocalePageProps } from "@/i18n/page-locale";
import { siteCopy, technicalNotesUrl } from "@/content/site";
import { workCases } from "@/content/work";
import HeroGeometry from "@/components/HeroGeometry";
import HeroPortrait from "@/components/HeroPortrait";
import HomeDestinations from "@/components/HomeDestinations";
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
      <section className="hero hero-b">
        <HeroGeometry />
        <div className="page-width hero-b-layout">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              ABOCADO / {c.role}
            </p>
            <h1>Yusuke</h1>
            <p className="hero-role">
              <span>Full Stack Engineer</span>
              <span className="hero-role-separator">×</span>
              <span>Designer</span>
            </p>
            <p className="hero-statement">
              {c.heroTitle.map((line) => (
                <span key={line}>{line} </span>
              ))}
            </p>
            <p className="lead">{c.heroBody}</p>
          </div>
          <HeroPortrait />
          <div className="actions hero-b-actions">
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
        <div className="work-grid">
          {workCases.slice(0, 3).map((work) => (
            <WorkCard key={work.id} work={work} locale={locale} />
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
        <span className="notes-word" aria-hidden="true">
          tech
          <br />
          <span>note.</span>
        </span>
      </section>
      <div className="page-width">
        <ContactCallout locale={locale} />
      </div>
    </>
  );
}
