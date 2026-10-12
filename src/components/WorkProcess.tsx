import type { Locale } from "@/i18n/routing";
import { portfolioCopy } from "@/content/portfolio-copy";

export default function WorkProcess({ locale }: { locale: Locale }) {
  const copy = portfolioCopy.home;
  return (
    <section className="work-process" id="development-approach">
      <h2>{copy.process_heading[locale]}</h2>
      <ol className="process-grid">
        {copy.process.map((step, index) => (
          <li key={step.title.en}>
            <span className="process-number" aria-hidden="true">
              {index + 1}
            </span>
            <div>
              <h3>{step.title[locale]}</h3>
              <p>{step.body[locale]}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="ai-approach">{portfolioCopy.about.ai_body[locale]}</p>
    </section>
  );
}
