import type { Locale } from "@/i18n/routing";

type Bilingual = Record<Locale, string>;
type CareerItem = {
  id: string;
  period: Bilingual;
  title: Bilingual;
  body: Bilingual;
  workId?: string;
};

// Preserve all 14 milestones from the original Git profile. Conflicting plant
// and automation dates remain unresolved; the current work has no inferred date.
export const careerItems: CareerItem[] = [
  {
    id: "hiroshima",
    period: { ja: "2000.07", en: "2000.07" },
    title: { ja: "広島で生まれる", en: "Born in Hiroshima" },
    body: {
      ja: "広島県広島市出身です。",
      en: "I'm from Hiroshima City, Japan.",
    },
  },
  {
    id: "chemistry-school",
    period: { ja: "2016.04–2019.03", en: "2016.04–2019.03" },
    title: {
      ja: "工業高校の化学科で学ぶ",
      en: "Studied chemistry at a technical high school",
    },
    body: {
      ja: "化学の実験や分析について学びました。",
      en: "I learned about chemical experiments and analysis.",
    },
  },
  {
    id: "chemical-plant",
    period: { ja: "期間確認中", en: "Dates to be confirmed" },
    title: { ja: "化学工場で働く", en: "Worked at a chemical plant" },
    body: {
      ja: "高校卒業後、化学工場に就職。品質管理や製造の仕事を経験しました。",
      en: "After high school, I worked at a chemical plant, gaining experience in quality control and production.",
    },
  },
  {
    id: "independent-study",
    period: { ja: "2019.10〜", en: "From 2019.10" },
    title: {
      ja: "働きながらプログラミングを学び始める",
      en: "Started learning programming alongside work",
    },
    body: {
      ja: "製造データを扱うことをきっかけに興味を持ち、YouTubeやProgateでHTML/CSSとJavaScriptを学びました。",
      en: "Working with production data sparked my interest. I studied HTML/CSS and JavaScript with YouTube and Progate.",
    },
  },
  {
    id: "first-programming-school",
    period: { ja: "2020.10–2021.03", en: "2020.10–2021.03" },
    title: {
      ja: "スクールでWeb開発を学ぶ",
      en: "Studied web development at a programming school",
    },
    body: {
      ja: "独学に加えて、Web開発の基礎から学ぶためにプログラミングスクールに通いました。",
      en: "I joined a programming school to build on my independent study and learn web development from the fundamentals.",
    },
  },
  {
    id: "reconsider-learning",
    period: { ja: "2021.03–2021.07", en: "2021.03–2021.07" },
    title: {
      ja: "学習の進め方を見直す",
      en: "Reconsidered how to keep learning",
    },
    body: {
      ja: "スクール卒業後、思うように学習が進まず、今後の働き方や学び方を考え直しました。",
      en: "After finishing the course, I struggled to make progress and took time to think about my work and studies.",
    },
  },
  {
    id: "leave-plant",
    period: { ja: "時期確認中", en: "Date to be confirmed" },
    title: { ja: "化学工場を退職する", en: "Left the chemical plant" },
    body: {
      ja: "開発の仕事を目指して、学習に取り組むために退職しました。",
      en: "I left to continue studying toward a career in software development.",
    },
  },
  {
    id: "home-care",
    period: { ja: "2021.08–2022.02", en: "2021.08–2022.02" },
    title: {
      ja: "訪問介助の仕事と学習を続ける",
      en: "Continued studying alongside home-care work",
    },
    body: {
      ja: "アルバイトをしながら、HTML/CSSとJavaScriptの学習を続けました。",
      en: "I worked part-time while continuing to learn HTML/CSS and JavaScript.",
    },
  },
  {
    id: "second-programming-school",
    period: { ja: "2022.02–2022.07", en: "2022.02–2022.07" },
    title: {
      ja: "もう一度スクールで学ぶ",
      en: "Returned to a programming school",
    },
    body: {
      ja: "Laravel、Vue/Nuxt、GitHub、Dockerなどを学び、チームでの開発にも取り組みました。",
      en: "I studied Laravel, Vue/Nuxt, GitHub and Docker, and worked on team development.",
    },
  },
  {
    id: "graduation",
    period: { ja: "2022.07", en: "2022.07" },
    title: { ja: "スクールを卒業する", en: "Completed the course" },
    body: {
      ja: "学んだことを実際の開発で使うため、仕事につなげていきました。",
      en: "I began looking for opportunities to put what I had learned into practice.",
    },
  },
  {
    id: "investment-service",
    period: { ja: "2022.08–2022.10", en: "2022.08–2022.10" },
    title: {
      ja: "投資家向け情報サービスを開発する",
      en: "Worked on an investment information service",
    },
    body: {
      ja: "Vue.jsで新機能とUIコンポーネントをつくり、レビューとデプロイを含む実務の流れを経験しました。",
      en: "I developed Vue.js features and UI components and worked within the code-review and deployment workflow.",
    },
    workId: "investment-information",
  },
  {
    id: "project-search",
    period: { ja: "2022.11–2023.03", en: "2022.11–2023.03" },
    title: {
      ja: "案件を探し、面談や提案を経験する",
      en: "Searched for projects, with interviews and proposals",
    },
    body: {
      ja: "クラウドソーシングやエージェントを通じて仕事を探しました。思うように決まらない中で、求められる経験や自分の課題を知りました。",
      en: "I searched for projects through freelance platforms and agents. The difficulties helped me understand what experience was expected and what I needed to learn.",
    },
  },
  {
    id: "web-automation",
    period: { ja: "期間確認中", en: "Dates to be confirmed" },
    title: {
      ja: "Web自動運用システムを開発する",
      en: "Developed web workflow automation",
    },
    body: {
      ja: "Reactの操作画面とPythonの自動化処理をつなぎ、UI/UX、状態管理、CI/CDとテスト自動化に取り組みました。",
      en: "I connected React interfaces with Python automation and worked on UI/UX, state management, CI/CD and automated tests.",
    },
    workId: "workflow-automation",
  },
  {
    id: "card-game",
    period: { ja: "2024.02–2025.05", en: "2024.02–2025.05" },
    title: {
      ja: "Webカードゲームを開発する",
      en: "Developed a browser card game",
    },
    body: {
      ja: "無償の依頼制作として、仕様からUI/UX、実装、通信まで担当し、ユーザーテストをもとに改善しました。",
      en: "For this pro bono project, I worked from specifications through UI/UX, implementation and communication, iterating through user testing.",
    },
    workId: "web-card-game",
  },
  {
    id: "current-car-apps",
    period: {
      ja: "現在 / 開始時期確認中",
      en: "Current / start date to be confirmed",
    },
    title: {
      ja: "中古車業界のWeb・モバイル開発に取り組む",
      en: "Working on web and mobile apps for used-car sales",
    },
    body: {
      ja: "Abocadoの屋号で活動し、Next.jsでの試作、Railsの管理画面、Swiftアプリの改修、Flutterへの移行に携わっています。",
      en: "Working as Abocado, I contribute to Next.js prototypes, Rails management tools, changes to a Swift app and a move to Flutter.",
    },
    workId: "business-web-mobile",
  },
];
