import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, SquareCode, Smartphone, Settings } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import { capabilities, siteCopy } from "@/content/site";
import { portfolioCopy } from "@/content/portfolio-copy";
import type { WorkCase, WorkCategory } from "@/content/work";
import { workImageRegion } from "@/content/reference-artwork";
import ReferenceImageRegion from "./ReferenceImageRegion";

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
  showCaption = true,
}: {
  work: WorkCase;
  locale: Locale;
  context?: "card" | "detail";
  showCaption?: boolean;
}) {
  const region = workImageRegion(work.id, locale, context === "detail");
  if (!region) return null;
  return (
    <figure className={`work-visual work-visual-${context}`}>
      <ReferenceImageRegion
        region={region}
        className="work-image"
        priority={context === "detail"}
      />
      {showCaption ? (
        <figcaption>
          {portfolioCopy.global.labels.image_caption[locale]}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function WorkCard({
  work,
  locale,
  preview = false,
  headingLevel = "h3",
}: {
  work: WorkCase;
  locale: Locale;
  preview?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  const c = siteCopy[locale];
  const Heading = headingLevel;
  const hasImage = Boolean(workImageRegion(work.id, locale));
  return (
    <article
      className={`work-card ${preview ? "work-card-preview" : "work-card-standard"}`}
      data-image-state={hasImage ? "provided" : "unprovided"}
    >
      <Link className="work-card-link" href={`/${locale}/creations/${work.id}`}>
        <WorkGraphic work={work} locale={locale} showCaption={!preview} />
        <div className="work-card-copy">
          {preview ? null : (
            <div className="work-card-meta">
              <span>{c[work.category]}</span>
              <span>{work.kind[locale]}</span>
              <span>{work.period[locale]}</span>
            </div>
          )}
          <Heading>{work.title[locale]}</Heading>
          {preview ? (
            <p className="image-caption">
              {portfolioCopy.global.labels.image_caption[locale]}
            </p>
          ) : (
            <p>{work.summary[locale]}</p>
          )}
          {preview ? null : <Tags items={work.technologies.slice(0, 4)} />}
          <span className="text-link">
            {c.explore}
            <ArrowRight size={18} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}

export function Capabilities({
  locale,
  summary = false,
}: {
  locale: Locale;
  summary?: boolean;
}) {
  const icons = [SquareCode, Smartphone, Settings];
  return (
    <div className={summary ? "service-summary-grid" : "capability-grid"}>
      {capabilities.map((item, index) => {
        const Icon = icons[index];
        return summary ? (
          <Link
            className="service-summary"
            key={item.id}
            href={`/${locale}/services#service-${item.id}`}
          >
            <Icon size={42} strokeWidth={1.4} aria-hidden="true" />
            <h3>{item.title[locale]}</h3>
          </Link>
        ) : (
          <article
            className="capability"
            id={`service-${item.id}`}
            key={item.id}
          >
            <Icon size={38} strokeWidth={1.4} aria-hidden="true" />
            <h2>{item.title[locale]}</h2>
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
  className = "",
  children,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  artwork?: "route" | "none";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <header className={`page-intro ${className}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1>{title}</h1>
      <p className="lead">{body}</p>
      {children}
    </header>
  );
}

export function ContactCallout({
  locale,
  context = "project",
}: {
  locale: Locale;
  context?: "home" | "services" | "project";
}) {
  const contexts = {
    home: portfolioCopy.home,
    services: portfolioCopy.services,
    project: portfolioCopy.project_template,
  };
  const copy = contexts[context];
  return (
    <section className="contact-callout">
      <h2>{copy.contact_heading[locale]}</h2>
      <p>{copy.contact_body[locale]}</p>
      <Link className="text-link" href={`/${locale}/contact`}>
        {portfolioCopy.global.cta.contact[locale]}
        <ArrowRight size={18} aria-hidden="true" />
      </Link>
      <p className="location">{portfolioCopy.global.location}</p>
    </section>
  );
}
