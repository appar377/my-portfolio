import type { Locale } from "@/i18n/routing";

type Bilingual = Record<Locale, string>;
export type WorkCase = {
  id: string;
  number: string;
  title: Bilingual;
  subtitle: Bilingual;
  period: Bilingual;
  kind: Bilingual;
  summary: Bilingual;
  context: Bilingual;
  role: Bilingual;
  approach: Bilingual;
  output: Bilingual;
  proofNote: Bilingual;
  technologies: string[];
  source?: string;
};

// The old source is the owner's public profile, not independent outcome verification.
// Demo-only works in that repository are intentionally excluded.
const profileSource =
  "https://github.com/appar377/my-portfolio/blob/2b56d477ed219d03fe02e2a9fec71cc2edc09c63/src/i18n/messages/ja.json";
export const workCases: WorkCase[] = [
  {
    id: "business-web-mobile",
    number: "01",
    title: {
      ja: "業務Web・モバイルアプリ",
      en: "Business web & mobile applications",
    },
    subtitle: { ja: "Ruby on Rails × Flutter", en: "Ruby on Rails × Flutter" },
    period: { ja: "現在の取り組み", en: "Current work" },
    kind: {
      ja: "実務 / 匿名・確認用",
      en: "Professional work / anonymous draft",
    },
    summary: {
      ja: "在庫・顧客・査定を扱うRailsの業務Webと、Flutterによる自動車業務アプリの開発に取り組んでいます。",
      en: "Working on Rails business applications for inventory, customers and vehicle appraisals, and Flutter applications for automotive workflows.",
    },
    context: {
      ja: "業務で扱う情報とモバイル機能をつなぐ、Web・モバイルアプリの開発。",
      en: "Developing web and mobile applications that connect business information with mobile features.",
    },
    role: {
      ja: "業務画面、検索・認可・ETL、通知設計に携わっています。モバイルではRiverpod・GoRouterによる状態管理と画面遷移、画像アップロード、非同期処理の再試行を扱っています。",
      en: "Contributing to business interfaces, search, authorization, ETL and notification design. Mobile work includes Riverpod state management, GoRouter navigation, image uploads and retries for asynchronous operations.",
    },
    approach: {
      ja: "業務ルールと画面の責務、通信とUIの状態を整理し、既存アプリの機能追加・改修に取り組んでいます。",
      en: "Working on additions and improvements to existing applications, with attention to business rules, interface responsibilities, and communication state.",
    },
    output: {
      ja: "業務Web・モバイルアプリの機能開発と改修。案件名・画面・ソースの公開範囲は確認中です。",
      en: "Feature development and improvements for business web and mobile applications. Project names, screenshots and source code remain subject to publication approval.",
    },
    proofNote: {
      ja: "本人申告をもとにした匿名の紹介案。画面・ソース・実績としての公開範囲は確認待ち。",
      en: "An anonymous draft based on the developer's account. Screenshots, source code, and publication scope still require confirmation.",
    },
    technologies: [
      "Ruby on Rails",
      "Hotwire",
      "Flutter",
      "Riverpod",
      "GoRouter",
    ],
  },
  {
    id: "workflow-automation",
    number: "02",
    title: { ja: "Web自動運用システム", en: "Web workflow automation" },
    subtitle: {
      ja: "運用を扱う画面とPython連携",
      en: "Operational interfaces & Python integration",
    },
    period: { ja: "2023.04–2024.01", en: "Apr 2023–Jan 2024" },
    kind: {
      ja: "実務 / 公開プロフィールより",
      en: "Professional work / published profile",
    },
    summary: {
      ja: "自動運用システムのUI/UXとフロントエンドを担当。ReactとPython側の処理をつなぐ開発に取り組みました。",
      en: "Worked on UI/UX and frontend development for an automated web-operation system, connecting a React interface with Python services.",
    },
    context: {
      ja: "Webサイトの自動運用を行うサービスに、操作・管理のための画面が必要でした。",
      en: "A service for automated website operations needed interfaces for operating and managing its workflows.",
    },
    role: {
      ja: "フロントエンドエンジニアとして、仕様・UI/UX設計とReactによる実装を担当。",
      en: "Frontend engineer, covering requirements, UI/UX design, and React implementation.",
    },
    approach: {
      ja: "ReactとPythonの連携、画面の状態管理に取り組みました。旧プロフィールにはCI/CD・テスト自動化への取り組みも記載されています。",
      en: "Worked on React–Python integration and interface state management. The published profile also records work on CI/CD and test automation.",
    },
    output: {
      ja: "自動化処理を操作・管理するフロントエンドの設計・実装。業務削減時間などの定量効果は未確認です。",
      en: "Designed and implemented the frontend used to operate and manage automated workflows. Time savings and other quantified effects have not been verified.",
    },
    proofNote: {
      ja: "2025年5月時点の公開プロフィールに記載。顧客名・画面・ソースは未掲載。",
      en: "Recorded in the public profile as of May 2025. Client names, screenshots, and source code are not included.",
    },
    technologies: ["React", "TypeScript", "Python", "Selenium"],
    source: profileSource,
  },
  {
    id: "web-card-game",
    number: "03",
    title: { ja: "Webカードゲーム", en: "Browser-based card game" },
    subtitle: {
      ja: "仕様からゲーム画面の実装まで",
      en: "From game requirements to interface implementation",
    },
    period: { ja: "2024.02–2025.05", en: "Feb 2024–May 2025" },
    kind: {
      ja: "無償の依頼制作 / 公開プロフィールより",
      en: "Pro bono project / published profile",
    },
    summary: {
      ja: "仕様策定・UI/UX・フロントエンド実装・バックエンド連携を担当。ゲームの状態管理とリアルタイム通信に取り組みました。",
      en: "Worked across requirements, UI/UX, frontend implementation, and backend integration, including game state and real-time communication.",
    },
    context: {
      ja: "ブラウザ上で遊ぶカードゲームの、ルール・画面・通信を組み合わせる開発。",
      en: "Building a browser card game that brings together game rules, interface behavior, and real-time communication.",
    },
    role: {
      ja: "仕様策定、UI/UXデザイン、フロントエンド実装、バックエンド連携までを担当。",
      en: "Covered requirements, UI/UX design, frontend implementation, and backend integration.",
    },
    approach: {
      ja: "複雑なゲーム状態とリアルタイム通信を扱い、ユーザーテストをもとに改善しました。",
      en: "Worked with complex game state and real-time communication, iterating based on user testing.",
    },
    output: {
      ja: "ゲーム画面とロジックの実装・改善。利用人数や継続率などの数値成果は記載していません。",
      en: "Implemented and refined game interfaces and logic. No player-count or retention claims are made.",
    },
    proofNote: {
      ja: "担当内容は2025年5月の公開プロフィールに記載。実画面・デモ・コードを本サイトに掲載する範囲は確認待ち。",
      en: "Responsibilities are recorded in the May 2025 public profile. Permission to include screenshots, a demo, or code on this site remains to be confirmed.",
    },
    technologies: [],
    source: profileSource,
  },
  {
    id: "investment-information",
    number: "04",
    title: {
      ja: "投資家向け情報サービス",
      en: "Investment information service",
    },
    subtitle: {
      ja: "Vue.jsによる新機能開発",
      en: "Feature development with Vue.js",
    },
    period: { ja: "2022.08–2022.10", en: "Aug–Oct 2022" },
    kind: {
      ja: "実務 / 公開プロフィールより",
      en: "Professional work / published profile",
    },
    summary: {
      ja: "投資家向け情報提供サービスで、新機能の設計・実装とUIコンポーネント開発を担当しました。",
      en: "Designed and implemented new features and UI components for an investment information service.",
    },
    context: {
      ja: "投資家に情報を提供するWebサービスの、新機能開発。",
      en: "New feature development for a web service that provides information to investors.",
    },
    role: {
      ja: "Vue.jsを使った新機能の設計から実装までを担当。",
      en: "Designed and implemented new features using Vue.js.",
    },
    approach: {
      ja: "UIコンポーネントを設計し、コードレビューとデプロイの流れの中で開発しました。",
      en: "Designed UI components and worked within the project's code-review and deployment workflow.",
    },
    output: {
      ja: "Vue.jsによる新機能とUIコンポーネントの実装。性能・売上などの改善値は記載していません。",
      en: "Implemented new features and UI components in Vue.js. Performance or revenue improvements are not claimed.",
    },
    proofNote: {
      ja: "2025年5月時点の公開プロフィールに記載。顧客名・画面・ソースは未掲載。",
      en: "Recorded in the public profile as of May 2025. Client names, screenshots, and source code are not included.",
    },
    technologies: ["Vue.js"],
    source: profileSource,
  },
];

export const workLabels = {
  ja: {
    heading: "開発経験",
    eyebrow: "Selected work",
    intro: "何に取り組み、どこを担当したか。",
    context: "プロジェクトの背景",
    role: "自分の担当",
    approach: "取り組み方",
    output: "実装・成果の範囲",
    details: "担当と内容を見る",
    source: "旧公開プロフィールの記載",
    review:
      "本人確認用の紹介案です。既存の公開プロフィールと本人申告をもとに、案件名・数値効果・機密情報を含めず整理しています。一般公開前に掲載範囲を確認します。",
    all: "開発経験をすべて見る",
  },
  en: {
    heading: "Development experience",
    eyebrow: "Selected work",
    intro: "The projects, and my contribution to them.",
    context: "Project context",
    role: "My role",
    approach: "Approach",
    output: "Deliverables & outcome scope",
    details: "Explore my contribution",
    source: "Original public profile",
    review:
      "Private review draft. These summaries draw on the existing public profile and the developer's account, without client names, numerical impact claims, or confidential details. Publication scope will be confirmed before wider sharing.",
    all: "Explore all work",
  },
} satisfies Record<Locale, Record<string, string>>;
