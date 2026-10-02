import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { setPageLocale, type LocalePageProps } from "@/i18n/page-locale";
import { siteCopy, technicalNotesUrl } from "@/content/site";
import { workCases } from "@/content/work";
import {
  Capabilities,
  ContactCallout,
  Tags,
  WorkCard,
} from "@/components/PortfolioUI";

export default async function Home({ params }: LocalePageProps) {
  const locale = await setPageLocale(params);
  const c = siteCopy[locale];
  return (
    <>
      <section className="hero page-width">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            YUSUKE / {c.role}
          </p>
          <h1>
            {c.heroTitle[0]}
            <br />
            <span>{c.heroTitle[1]}</span>
          </h1>
          <p className="lead">{c.heroBody}</p>
          <div className="actions">
            <Link
              className="button button-primary"
              href={`/${locale}/creations`}
            >
              {c.workCta}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="text-link" href={`/${locale}/services`}>
              {c.servicesCta}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="hero-signature">
            <span>Abocado</span>
            <span>WEB / MOBILE / AUTOMATION</span>
          </div>
        </div>
        <div className="hero-art">
          <div className="connection-art" aria-hidden="true">
            <span className="connection-ring ring-one" />
            <span className="connection-ring ring-two" />
            <span className="connection-ring ring-three" />
            <span className="art-cross cross-one">+</span>
            <span className="art-cross cross-two">+</span>
            <span className="art-node node-web">Web</span>
            <span className="art-node node-mobile">Mobile</span>
            <span className="art-core">
              a<span>.</span>
            </span>
            <span className="art-caption">IDEA → INTERFACE → OPERATION</span>
          </div>
          <Link
            className="focus-card"
            href={`/${locale}/creations/business-web-mobile`}
          >
            <div>
              <p className="eyebrow">{c.focusLabel}</p>
              <h2>{c.focusTitle}</h2>
              <p>{c.focusBody}</p>
              <Tags items={["Ruby on Rails", "Flutter"]} />
            </div>
            <ArrowUpRight size={22} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <div className="expertise-strip">
        <div className="page-width">
          <span>Ruby on Rails</span>
          <span>Flutter</span>
          <span>React / TypeScript</span>
          <span>Python</span>
          <span>Vue.js</span>
        </div>
      </div>
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
