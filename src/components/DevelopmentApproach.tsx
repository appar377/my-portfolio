import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import { developmentApproach } from "@/content/development-approach";

export default function DevelopmentApproach({
  locale,
  variant = "detail",
}: {
  locale: Locale;
  variant?: "summary" | "detail";
}) {
  const copy = developmentApproach[locale];
  const summary = variant === "summary";

  return (
    <section
      className={`development-approach development-approach-${variant}`}
      id="development-approach"
      aria-labelledby="development-approach-title"
    >
      <p className="eyebrow">{copy.label}</p>
      <h2 id="development-approach-title">
        {summary ? copy.summaryTitle : copy.title}
      </h2>
      <p className="approach-introduction">
        {summary ? copy.summaryBody : copy.introduction}
      </p>
      {summary ? (
        <Link
          className="text-link"
          href={`/${locale}/services#development-approach`}
        >
          {copy.link}
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      ) : (
        <ol className="approach-grid">
          {copy.steps.map((step, index) => (
            <li key={step.title}>
              <span className="eyebrow">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
