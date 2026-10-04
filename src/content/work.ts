import type { Locale } from "@/i18n/routing";

type Bilingual = Record<Locale, string>;
export type WorkCategory = "business" | "automation" | "game" | "frontend";
export type WorkCase = {
  id: string;
  number: string;
  category: WorkCategory;
  title: Bilingual;
  subtitle: Bilingual;
  period: Bilingual;
  kind: Bilingual;
  summary: Bilingual;
  context: Bilingual;
  role: Bilingual;
  approach?: Bilingual;
  output: Bilingual;
  technologies: string[];
  source?: string;
};

// Owner-provided history: original About at 2b56d47 and the retained Sites v5
// profile/journey at 60259f3. Demo works and unverified impact claims are excluded.
// The two automation records have unresolved dates/overlap, so this is one
// experience summary, not a claim that they were separate client projects.
const profileSource =
  "https://github.com/appar377/my-portfolio/blob/2b56d477ed219d03fe02e2a9fec71cc2edc09c63/src/app/%5Blocale%5D/about/page.tsx";

export const workCases: WorkCase[] = [
  {
    id: "business-web-mobile",
    number: "01",
    category: "business",
    title: {
      ja: "中古車販売の管理画面・アプリ",
      en: "Management tools & apps for used-car sales",
    },
    subtitle: {
      ja: "Webとモバイルの業務開発",
      en: "Business web & mobile development",
    },
    period: {
      ja: "現在の取り組み / 開始時期は確認中",
      en: "Current work / start date to be confirmed",
    },
    kind: { ja: "実務開発", en: "Professional work" },
    summary: {
      ja: "在庫・顧客・査定を扱うRailsの管理画面と、業務で使うモバイルアプリを開発。Next.jsでの試作、Swiftの改修、Flutterへの移行にも携わっています。",
      en: "Rails management interfaces for inventory, customers and vehicle appraisals, and mobile apps used in the business. My work also includes Next.js prototypes, Swift changes and a move to Flutter.",
    },
    context: {
      ja: "中古車販売の業務で扱う情報と、Web・モバイルの操作をつなぐ開発です。",
      en: "Development that connects information used in used-car sales with web and mobile interfaces.",
    },
    role: {
      ja: "Railsの業務画面、検索・認可・ETL、通知設計に携わっています。モバイルではRiverpod・GoRouterによる状態管理と画面遷移、画像アップロード、非同期処理の再試行を扱っています。",
      en: "I contribute to Rails interfaces, search, authorization, ETL and notification design. Mobile work includes Riverpod state management, GoRouter navigation, image uploads and retries for asynchronous operations.",
    },
    approach: {
      ja: "Next.jsでの試作から本開発、SwiftのiOSアプリ改修、Flutterへの移行と、段階ごとの開発に携わりました。業務ルールと画面、通信とUIの状態を整理しながら既存機能を改修しています。",
      en: "My work spans Next.js prototypes, full development, changes to a Swift iOS app and a move to Flutter. I work on existing features with attention to business rules, interfaces and communication state.",
    },
    output: {
      ja: "中古車販売を支える管理画面とモバイルアプリの機能開発・改修。",
      en: "Feature development and improvements for management interfaces and mobile applications supporting used-car sales.",
    },
    technologies: [
      "Ruby on Rails",
      "Next.js",
      "Swift",
      "Flutter",
      "Dart",
      "Hotwire",
      "Stimulus",
      "Riverpod",
      "GoRouter",
      "MySQL",
    ],
  },
  {
    id: "workflow-automation",
    number: "02",
    category: "automation",
    title: { ja: "Web・業務自動化システム", en: "Web & workflow automation" },
    subtitle: {
      ja: "操作画面からデスクトップ・運用まで",
      en: "Interfaces, desktop tools & operations",
    },
    period: { ja: "期間確認中", en: "Dates to be confirmed" },
    kind: { ja: "実務開発", en: "Professional work" },
    summary: {
      ja: "Reactの操作画面とPythonの自動化処理を連携。外部サービスとの連携、デスクトップアプリ、決済機能、サーバー運用も経験しています。",
      en: "React interfaces connected with Python automation. My experience also includes external-service integration, desktop applications, payments and server operations.",
    },
    context: {
      ja: "Webサイトの自動運用や、外部サービスとの連携・定型業務の自動化を扱う開発経験です。",
      en: "Experience with automated website operations, external-service integration and automation of recurring tasks.",
    },
    role: {
      ja: "Web自動運用では、仕様・UI/UX設計、Reactの画面実装、Pythonとの連携、状態管理を担当しました。業務自動化では、試作、管理画面、デスクトップアプリ、決済機能、サーバー運用にも携わりました。",
      en: "For web automation, I worked on specifications, UI/UX, React interfaces, Python integration and state management. My workflow-automation experience also includes prototypes, management interfaces, desktop apps, payments and server operations.",
    },
    approach: {
      ja: "Streamlit・Flaskを使うPythonの処理と画面をつなぎ、PyInstallerでのデスクトップアプリ化にも取り組みました。CI/CD、PlaywrightによるE2Eテスト、コードレビューを含む開発を経験しています。",
      en: "I connected interfaces with Python services using Streamlit and Flask and worked on desktop packaging with PyInstaller. The work also involved CI/CD, Playwright E2E tests and code review.",
    },
    output: {
      ja: "自動化処理を操作する画面と、業務を支える連携・デスクトップ機能の開発。",
      en: "Interfaces for operating automated workflows, integrations and desktop functionality supporting recurring work.",
    },
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "Selenium",
      "Streamlit",
      "Flask",
      "PyInstaller",
      "WebSocket",
      "AWS EC2",
      "Docker",
      "MySQL",
      "Playwright",
    ],
    source: profileSource,
  },
  {
    id: "investment-information",
    number: "03",
    category: "frontend",
    title: {
      ja: "投資家向け情報サービス",
      en: "Investment information service",
    },
    subtitle: {
      ja: "Vue.jsによる新機能とUI",
      en: "Features & interfaces with Vue.js",
    },
    period: { ja: "2022.08–2022.10", en: "Aug–Oct 2022" },
    kind: { ja: "実務開発", en: "Professional work" },
    summary: {
      ja: "Vue.jsを使い、新機能の設計・実装とUIコンポーネントの開発を担当しました。",
      en: "I designed and implemented features and UI components using Vue.js.",
    },
    context: {
      ja: "投資家に情報を提供するWebサービスの新機能開発です。",
      en: "New features for a web service that provides information to investors.",
    },
    role: {
      ja: "Vue.jsで新機能の設計から実装までを担当。Chart.js、Vuex、SCSSも使い、UIコンポーネントを開発しました。",
      en: "I covered feature design and implementation with Vue.js, developing UI components with Chart.js, Vuex and SCSS.",
    },
    approach: {
      ja: "コードレビューとデプロイの流れの中で、チームの開発に参加しました。",
      en: "I worked within the team's code-review and deployment workflow.",
    },
    output: {
      ja: "投資情報サービスの新機能とUIコンポーネントの実装。",
      en: "Implemented features and UI components for the investment information service.",
    },
    technologies: ["Vue.js", "Chart.js", "Vuex", "SCSS"],
    source: profileSource,
  },
  {
    id: "recruitment-matching",
    number: "04",
    category: "business",
    title: { ja: "求人マッチングサービス", en: "Recruitment matching service" },
    subtitle: {
      ja: "Laravel / MySQLによる改修",
      en: "Changes with Laravel / MySQL",
    },
    period: {
      ja: "約3か月 / 時期確認中",
      en: "About 3 months / dates to be confirmed",
    },
    kind: { ja: "開発経験", en: "Development experience" },
    summary: {
      ja: "LaravelとMySQLを使い、フロントエンドとバックエンドの改修を担当しました。",
      en: "I worked on frontend and backend changes using Laravel and MySQL.",
    },
    context: {
      ja: "求人マッチングを扱うWebサービスの改修です。",
      en: "Changes to a web service for recruitment matching.",
    },
    role: {
      ja: "LaravelとMySQLを使うサービスで、フロントエンドとバックエンドの両方に関わりました。",
      en: "I contributed to both the frontend and backend of a service built with Laravel and MySQL.",
    },
    output: {
      ja: "求人マッチングサービスのフロントエンド・バックエンド改修。",
      en: "Frontend and backend changes to the recruitment matching service.",
    },
    technologies: ["Laravel", "MySQL"],
  },
  {
    id: "messaging-automation",
    number: "05",
    category: "automation",
    title: {
      ja: "メッセージング業務の自動化",
      en: "Messaging workflow automation",
    },
    subtitle: {
      ja: "業務を支える自動化システム",
      en: "Automation supporting messaging operations",
    },
    period: {
      ja: "約3か月 / 時期確認中",
      en: "About 3 months / dates to be confirmed",
    },
    kind: { ja: "開発経験", en: "Development experience" },
    summary: {
      ja: "メッセージング業務の効率化を目的とした、自動化システムの開発を担当しました。",
      en: "I worked on an automation system intended to support messaging operations.",
    },
    context: {
      ja: "メッセージング業務を支える自動化システムです。",
      en: "An automation system supporting messaging operations.",
    },
    role: {
      ja: "MySQLを使う自動化システムの開発に携わりました。",
      en: "I contributed to an automation system using MySQL.",
    },
    output: {
      ja: "メッセージング業務の自動化システム開発。",
      en: "Development of a messaging workflow automation system.",
    },
    technologies: ["MySQL"],
  },
  {
    id: "web-card-game",
    number: "06",
    category: "game",
    title: { ja: "Webカードゲーム", en: "Browser-based card game" },
    subtitle: {
      ja: "仕様からゲーム画面・通信まで",
      en: "Specifications, interfaces & communication",
    },
    period: { ja: "2024.02–2025.05", en: "Feb 2024–May 2025" },
    kind: { ja: "無償の依頼制作", en: "Pro bono project" },
    summary: {
      ja: "仕様、UI/UX、フロントエンド実装、バックエンド連携を担当。状態管理とリアルタイム通信を実装し、ユーザーテストをもとに改善しました。",
      en: "I worked on specifications, UI/UX, frontend implementation and backend integration, including game state and real-time communication, and iterated through user testing.",
    },
    context: {
      ja: "無償の依頼制作として、ブラウザで遊ぶカードゲームを開発しました。",
      en: "A browser-based card game developed as a pro bono project.",
    },
    role: {
      ja: "仕様策定、UI/UXデザイン、フロントエンド実装、バックエンド連携までを担当しました。",
      en: "I covered specifications, UI/UX, frontend implementation and backend integration.",
    },
    approach: {
      ja: "複雑なゲーム状態とリアルタイム通信を扱い、ユーザーテストをもとに画面と動作を改善しました。",
      en: "I worked with complex game state and real-time communication, refining the interface and behavior through user testing.",
    },
    output: {
      ja: "ゲーム画面・ロジック・通信の実装と改善。",
      en: "Implementation and improvements to game interfaces, logic and communication.",
    },
    technologies: ["React", "TypeScript", "GitHub", "Vercel"],
    source: profileSource,
  },
];

export const workLabels = {
  ja: {
    context: "何をつくったか",
    role: "担当したこと",
    approach: "進め方と工夫",
    output: "実装したもの",
  },
  en: {
    context: "What I worked on",
    role: "My contribution",
    approach: "Approach",
    output: "Deliverables",
  },
} satisfies Record<Locale, Record<string, string>>;
