import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers,
  Smartphone,
  Workflow,
} from "lucide-react";
import type { Locale } from "@/i18n/routing";
import { capabilities, siteCopy } from "@/content/site";
import type { WorkCase, WorkCategory } from "@/content/work";
import PortfolioIllustration, {
  type IllustrationKind,
} from "./PortfolioIllustration";

export const workCategories = [
  "business",
  "automation",
  "game",
  "frontend",
] as const satisfies readonly WorkCategory[];

export function Tags({ items }: { items: readonly string[] }) {
  return (
    <ul className="tags">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function WorkGraphic({ work }: { work: WorkCase }) {
  const kinds: Record<string, IllustrationKind> = {
    "business-web-mobile": "business",
    "workflow-automation": "automation",
    "investment-information": "frontend",
    "recruitment-matching": "matching",
    "messaging-automation": "messaging",
    "web-card-game": "game",
  };
  return (
    <PortfolioIllustration kind={kinds[work.id]} className="work-graphic" />
  );
}

export function WorkCard({ work, locale }: { work: WorkCase; locale: Locale }) {
  const c = siteCopy[locale];
  return (
    <article className="work-card">
      <Link className="work-card-link" href={`/${locale}/creations/${work.id}`}>
        <div className="work-card-meta">
          <span className="work-number">{work.number}</span>
          <span className="category-label">{c[work.category]}</span>
          <span className="work-kind">{work.kind[locale]}</span>
          <span className="work-period">{work.period[locale]}</span>
        </div>
        <div className="work-card-content">
          <div className="work-card-body">
            <h3>{work.title[locale]}</h3>
            <p>{work.summary[locale]}</p>
          </div>
          <WorkGraphic work={work} />
        </div>
        {work.technologies.length > 0 && (
          <Tags items={work.technologies.slice(0, 4)} />
        )}
        <span className="text-link">
          {c.explore}
          <ArrowUpRight size={18} aria-hidden="true" />
        </span>
      </Link>
    </article>
  );
}

export function Capabilities({ locale }: { locale: Locale }) {
  const icons = [Code2, Smartphone, Layers, Workflow];
  return (
    <div className="capability-grid">
      {capabilities.map((item, index) => {
        const Icon = icons[index];
        return (
          <article className="capability" key={item.code}>
            <div className="capability-top">
              <span className="eyebrow">{item.code}</span>
              <Icon size={40} strokeWidth={1.2} aria-hidden="true" />
            </div>
            <h3>{item.title[locale]}</h3>
            <p>{item.body[locale]}</p>
            <Tags items={item.technologies} />
          </article>
        );
      })}
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  body,
  illustration = "route",
  className = "",
  children,
}: {
  eyebrow: string;
  title: string;
  body: string;
  illustration?: IllustrationKind;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <header className={`page-intro ${className}`}>
      <div className="page-intro-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{body}</p>
        {children}
      </div>
      <PortfolioIllustration kind={illustration} />
    </header>
  );
}

export function ContactCallout({ locale }: { locale: Locale }) {
  const c = siteCopy[locale];
  return (
    <section className="contact-callout">
      <div className="callout-copy">
        <p className="eyebrow">LET’S BUILD</p>
        <h2>{c.contactTitle}</h2>
        <p>{c.contactBody}</p>
        <Link className="button button-primary" href={`/${locale}/contact`}>
          {c.contactCta}
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
      <PortfolioIllustration kind="route" />
    </section>
  );
}
