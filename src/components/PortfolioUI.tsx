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
import { workCases, type WorkCase } from "@/content/work";

export const workCategories = [
  "business",
  "automation",
  "game",
  "frontend",
] as const;

export function Tags({ items }: { items: readonly string[] }) {
  return (
    <ul className="tags">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function WorkGraphic({ index }: { index: number }) {
  const icons = [Layers, Workflow, Code2, Layers];
  const Icon = icons[index];
  return (
    <div className={`work-graphic work-graphic-${index}`} aria-hidden="true">
      <span className="graphic-orbit" />
      <span className="graphic-orbit orbit-two" />
      <div className="graphic-center">
        <Icon size={48} strokeWidth={1.3} />
      </div>
      <span className="graphic-label">
        {
          [
            "WEB + MOBILE",
            "WORKFLOW + UI",
            "PLAY + INTERACTION",
            "DATA + INTERFACE",
          ][index]
        }
      </span>
      <span className="graphic-index">0{index + 1}</span>
    </div>
  );
}

export function WorkCard({ work, locale }: { work: WorkCase; locale: Locale }) {
  const index = workCases.indexOf(work);
  const c = siteCopy[locale];
  return (
    <article className="work-card">
      <Link className="work-card-link" href={`/${locale}/creations/${work.id}`}>
        <WorkGraphic index={index} />
        <div className="work-card-body">
          <p className="eyebrow">{c[workCategories[index]]}</p>
          <h3>{work.title[locale]}</h3>
          <p>{work.summary[locale]}</p>
          {work.technologies.length > 0 && (
            <Tags items={work.technologies.slice(0, 4)} />
          )}
          <span className="text-link">
            {c.explore}
            <ArrowUpRight size={18} aria-hidden="true" />
          </span>
        </div>
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
              <Icon size={22} aria-hidden="true" />
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
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <header className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lead">{body}</p>
    </header>
  );
}

export function ContactCallout({ locale }: { locale: Locale }) {
  const c = siteCopy[locale];
  return (
    <section className="contact-callout">
      <div>
        <p className="eyebrow">LET’S BUILD</p>
        <h2>{c.contactTitle}</h2>
        <p>{c.contactBody}</p>
      </div>
      <Link className="button button-light" href={`/${locale}/contact`}>
        {c.contactCta}
        <ArrowRight size={18} aria-hidden="true" />
      </Link>
    </section>
  );
}
