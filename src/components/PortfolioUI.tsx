import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  PanelsTopLeft,
  Smartphone,
  LayoutTemplate,
  Workflow,
} from "lucide-react";
import type { Locale } from "@/i18n/routing";
import { capabilities, siteCopy } from "@/content/site";
import type { WorkCase, WorkCategory } from "@/content/work";
import WorkVisual, { type WorkVisualKind } from "./WorkVisual";

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

export function WorkGraphic({
  work,
  locale,
  context = "card",
}: {
  work: WorkCase;
  locale: Locale;
  context?: "card" | "detail";
}) {
  const kinds: Record<string, WorkVisualKind> = {
    "business-web-mobile": "devices",
    "workflow-automation": "flow",
    "investment-information": "information",
    "recruitment-matching": "matching",
    "messaging-automation": "messaging",
    "web-card-game": "cards",
  };
  const kind = kinds[work.id] ?? "devices";
  return (
    <WorkVisual
      kind={kind}
      identity={work.id}
      locale={locale}
      detail={context === "detail"}
    />
  );
}

export function WorkCard({
  work,
  locale,
  variant = "standard",
}: {
  work: WorkCase;
  locale: Locale;
  variant?: "standard" | "featured" | "compact";
}) {
  const c = siteCopy[locale];
  return (
    <article className={`work-card work-card-${variant}`}>
      <Link className="work-card-link" href={`/${locale}/creations/${work.id}`}>
        <WorkGraphic work={work} locale={locale} />
        <div className="work-card-copy">
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
          </div>
          {work.technologies.length > 0 && (
            <Tags items={work.technologies.slice(0, 4)} />
          )}
          <span className="text-link">
            <span>{c.explore}</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}

export function Capabilities({ locale }: { locale: Locale }) {
  const icons = [PanelsTopLeft, Smartphone, LayoutTemplate, Workflow];
  return (
    <div className="capability-grid">
      {capabilities.map((item, index) => {
        const Icon = icons[index];
        return (
          <article className="capability" key={item.code}>
            <div className="capability-top">
              <Icon size={32} strokeWidth={1.5} aria-hidden="true" />
              <span className="eyebrow">{item.code}</span>
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
  artwork = "route",
  className = "",
  children,
}: {
  eyebrow: string;
  title: string;
  body: string;
  artwork?: "route" | "none";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <header
      className={`page-intro ${artwork === "none" ? "page-intro-plain" : ""} ${className}`}
    >
      <div className="page-intro-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{body}</p>
        {children}
      </div>
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
    </section>
  );
}
