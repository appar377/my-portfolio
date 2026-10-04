import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { setPageLocale, type LocalePageProps } from "@/i18n/page-locale";
import { siteCopy } from "@/content/site";
import { workCases } from "@/content/work";
import { careerItems } from "@/content/career";
import {
  ContactCallout,
  PageIntro,
  Tags,
  WorkCard,
} from "@/components/PortfolioUI";

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
          <p className="profile-name">{c.profileName}</p>
          <h2>
            {locale === "ja"
              ? "現場の経験を、開発へ。"
              : "From hands-on work to development."}
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
          {careerItems.map((item) => (
            <li key={item.id}>
              <p className="eyebrow">{item.period[locale]}</p>
              <div>
                <h3>{item.title[locale]}</h3>
                <p>{item.body[locale]}</p>
                {item.workId && (
                  <Link
                    className="text-link"
                    href={`/${locale}/creations/${item.workId}`}
                  >
                    {c.explore}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="section other-experience">
        <div className="section-heading">
          <h2>{c.otherExperience}</h2>
        </div>
        <div className="work-grid">
          {workCases
            .filter((work) =>
              ["recruitment-matching", "messaging-automation"].includes(
                work.id,
              ),
            )
            .map((work) => (
              <WorkCard key={work.id} work={work} locale={locale} />
            ))}
        </div>
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
            "Laravel / MySQL",
            "Streamlit / Flask",
            "PyInstaller",
            "AWS / Docker",
            "Playwright / E2E",
          ]}
        />
      </section>
      <ContactCallout locale={locale} />
    </div>
  );
}
