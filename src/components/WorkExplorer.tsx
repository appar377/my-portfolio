"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/routing";
import { siteCopy } from "@/content/site";
import { workCases } from "@/content/work";
import { WorkCard, workCategories } from "./PortfolioUI";

export default function WorkExplorer({ locale }: { locale: Locale }) {
  const [category, setCategory] = useState<string>("all");
  const c = siteCopy[locale];
  const visible = workCases.filter(
    (_, index) => category === "all" || workCategories[index] === category,
  );
  return (
    <>
      <div
        className="filters"
        role="group"
        aria-label={locale === "ja" ? "実績の絞り込み" : "Filter work"}
      >
        {(["all", ...workCategories] as const).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            aria-pressed={category === item}
          >
            {c[item]}
          </button>
        ))}
      </div>
      <p className="result-count" role="status">
        {locale === "ja"
          ? `${visible.length}件の開発実績`
          : `${visible.length} projects`}
      </p>
      <div className="work-grid work-grid-all">
        {visible.map((work) => (
          <WorkCard key={work.id} work={work} locale={locale} />
        ))}
      </div>
    </>
  );
}
