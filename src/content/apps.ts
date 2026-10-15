import type { Locale } from "@/i18n/routing";
type Bilingual = Record<Locale, string>;
export type AppLink = {
  label: Bilingual;
  url: string;
  kind: "website" | "app-store" | "google-play" | "source";
};
export type AppProject = {
  id: string;
  name: Bilingual;
  summary: Bilingual;
  category: "web" | "mobile" | "tool";
  status: "published" | "development" | "archived";
  background: Bilingual;
  features: Bilingual[];
  screens: { src: string; width: number; height: number; caption: Bilingual }[];
  technologies: string[];
  links: AppLink[];
  evidence: string[];
};

// Add only owner-confirmed apps here. Future examples belong in tests/docs.
// A released website is included because its source and public release are verified.
export const appProjects: AppProject[] = [
  {
    id: "abocado-portfolio",
    name: { ja: "Abocado ポートフォリオ", en: "Abocado portfolio" },
    summary: {
      ja: "担当した開発と、できることを紹介する日英のWebサイトです。",
      en: "A bilingual website introducing my development experience and services.",
    },
    category: "web",
    status: "published",
    background: {
      ja: "技術名だけでなく、どんな開発に携わり、何を担当したかを伝えるためにつくっています。実務の案件は顧客名や非公開画面を載せず、背景と担当範囲を整理しています。",
      en: "I built this site to explain what I have worked on and what I contributed, beyond a list of technologies. Professional projects are described without client names or private screens.",
    },
    features: [
      {
        ja: "日本語・英語を、同じページのまま切り替えられます。",
        en: "Switch between Japanese and English while staying on the same page.",
      },
      {
        ja: "実績を分野で絞り込み、担当内容を詳しく読めます。",
        en: "Filter development experience by category and read each contribution.",
      },
      {
        ja: "プロフィール、サービス、技術ノートへの導線をまとめています。",
        en: "Explore my profile, services and technical notes.",
      },
    ],
    screens: [
      {
        src: "/images/v3/portfolio-v2.1.webp",
        width: 1440,
        height: 900,
        caption: {
          ja: "公開済み v2.1.0 の実画面（2026年10月12日確認）。このページのコンセプト画像とは異なります。",
          en: "Actual published v2.1.0 screen, verified on October 12, 2026. This is separate from the concept imagery used elsewhere.",
        },
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "next-intl",
      "Tailwind CSS",
      "Vercel",
    ],
    links: [
      {
        kind: "website",
        label: { ja: "ポートフォリオを開く", en: "Open portfolio" },
        url: "https://my-portfolio-seven-sooty-62.vercel.app/ja",
      },
      {
        kind: "source",
        label: { ja: "ソースを見る", en: "View source" },
        url: "https://github.com/appar377/my-portfolio",
      },
    ],
    evidence: ["https://github.com/appar377/my-portfolio/releases/tag/v2.1.0"],
  },
];
export const appStatusLabels = {
  published: { ja: "公開中", en: "Published" },
  development: { ja: "開発中", en: "In development" },
  archived: { ja: "公開終了", en: "Archived" },
};
export function appUsageLinks(app: AppProject) {
  return app.links.filter(
    (link) => link.kind === "source" || app.status === "published",
  );
}
