import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { setPageLocale, type LocalePageProps } from "@/i18n/page-locale";
import { siteCopy } from "@/content/site";
import { workCases } from "@/content/work";
import { ContactCallout, PageIntro, Tags } from "@/components/PortfolioUI";

export const metadata: Metadata = { title: "About / プロフィール" };

export default async function About({ params }: LocalePageProps) {
  const locale = await setPageLocale(params);
  const c = siteCopy[locale];
  return (
    <div className="page-width">
      <PageIntro
        eyebrow="ABOUT / YUSUKE"
        title={c.aboutTitle}
        body={c.aboutIntro}
      />
      <section className="profile-section">
        <div className="profile-monogram" aria-hidden="true">
          y<span>.</span>
        </div>
        <div>
          <h2>
            {locale === "ja"
              ? "業務と画面、その間を考える。"
              : "Thinking between workflows and interfaces."}
          </h2>
          <p className="lead">{c.aboutBody}</p>
          <Link className="text-link" href={`/${locale}/creations`}>
            {c.workCta}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="section career-section">
        <h2>{c.career}</h2>
        <ol className="career-list">
          {[workCases[0], workCases[2], workCases[1], workCases[3]].map(
            (work) => (
              <li key={work.id}>
                <p className="eyebrow">{work.period[locale]}</p>
                <div>
                  <h3>{work.title[locale]}</h3>
                  <p>{work.summary[locale]}</p>
                  <Link
                    className="text-link"
                    href={`/${locale}/creations/${work.id}`}
                  >
                    {c.explore}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </li>
            ),
          )}
        </ol>
      </section>
      <section className="skills-section">
        <h2>{c.coreSkills}</h2>
        <Tags
          items={[
            "Ruby on Rails",
            "Hotwire / Stimulus",
            "Flutter / Dart",
            "Riverpod / GoRouter",
            "React / TypeScript",
            "Vue.js",
            "Python / Selenium",
          ]}
        />
      </section>
      <ContactCallout locale={locale} />
    </div>
  );
}
