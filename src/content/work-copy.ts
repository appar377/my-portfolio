import { workCases as ownerWorkCases, type WorkCase } from "./work";
import { portfolioCopy, type ProjectCopy } from "./portfolio-copy";
import type { Locale } from "@/i18n/routing";

const projectIds = new Map([
  ["business-web-mobile", "used_car"],
  ["workflow-automation", "web_automation"],
  ["investment-information", "investor_information"],
  ["recruitment-matching", "job_matching"],
  ["messaging-automation", "messaging_automation"],
  ["web-card-game", "web_card_game"],
]);

export type DisplayWorkCase = WorkCase & { copy: ProjectCopy };
const kindLabels: Record<string, Record<Locale, string>> = {
  commercial: portfolioCopy.global.labels.commercial,
  experience: portfolioCopy.global.labels.experience,
  unpaid: portfolioCopy.global.labels.unpaid,
};

export const displayWorkCases: DisplayWorkCase[] = ownerWorkCases.map(
  (work) => {
    const copyId = projectIds.get(work.id);
    const copy = portfolioCopy.projects.find(
      (project) => project.id === copyId,
    );
    if (!copy || !kindLabels[copy.category_key]) {
      throw new Error(
        `Approved portfolio copy is missing for route: ${work.id}`,
      );
    }
    return {
      ...work,
      // Slugs, categories, periods and original evidence stay in work.ts.
      title: copy.title,
      summary: copy.card_body,
      kind: kindLabels[copy.category_key],
      technologies: copy.stack,
      copy,
    };
  },
);

export function findDisplayWork(id: string) {
  return displayWorkCases.find((work) => work.id === id);
}

export function findNextWork(id: string) {
  const index = displayWorkCases.findIndex((work) => work.id === id);
  return displayWorkCases[(index + 1) % displayWorkCases.length];
}
