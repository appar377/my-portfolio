import type { Locale } from "@/i18n/routing";
import { portfolioCopy, blogCopy, blogNavigationCopy } from "./portfolio-copy";

export const technicalNotesUrl = "https://appar377.github.io/tech-note/";
const legacySiteCopy = {
  ja: {
    nav: ["実績", "プロフィール", "できること", "技術ノート", "お問い合わせ"],
    skip: "本文へ移動",
    menu: "メニュー",
    closeMenu: "メニューを閉じる",
    role: "フリーランス開発者",
    destinationsTitle: "ここから、詳しく。",
    heroTitle: ["Webとモバイル、", "業務の自動化まで。"],
    heroBody:
      "中古車販売の管理画面やアプリ、Webサービス、業務の自動化を開発しています。",
    workCta: "開発実績を見る",
    aboutCta: "プロフィールを見る",
    servicesCta: "できることを見る",
    focusLabel: "いま取り組んでいること",
    focusTitle: "Webとモバイルを、つなぐ。",
    focusBody: "業務Web・モバイルアプリの機能開発と改修",
    explore: "担当内容を見る",
    selectedTitle: "開発実績",
    selectedBody:
      "業務アプリから自動化、ゲームまで。開発の背景と具体的な担当範囲を紹介します。",
    allWork: "すべての実績を見る",
    workTitle: "開発実績",
    workIntro: "技術だけでなく、何に取り組んだかを。",
    workNote:
      "案件名・顧客情報・非公開の画面は掲載せず、担当内容を要約しています。",
    all: "すべて",
    business: "業務アプリ",
    automation: "業務自動化",
    game: "ゲーム",
    frontend: "フロントエンド",
    capabilitiesTitle: "必要なところから、開発を進める。",
    capabilitiesBody:
      "新しい機能の実装も、既存アプリの改善も。業務と利用する場面を整理しながら進めます。",
    servicesTitle: "できること",
    servicesIntro: "Web・モバイルの開発と、既存システムの改善。",
    processTitle: "開発の進め方",
    steps: [
      ["理解する", "利用する場面と業務の流れ、既存の構成を確認します。"],
      ["整理する", "必要な機能と優先順位、担当する範囲を決めます。"],
      ["つくる・確かめる", "小さく実装し、画面の動作と境界条件を確認します。"],
      ["改善する", "運用で見えてきた課題を整理し、次の改修につなげます。"],
    ],
    aboutTitle: "Yusuke",
    profileName: "上垣内裕介 / Abocado",
    aboutIntro: "現場の仕事から、開発の仕事へ。",
    aboutBody:
      "Abocadoの屋号で活動するフリーランス開発者です。化学工場で働きながらプログラミングを学び始め、その後は訪問介助の仕事と並行して学習を続けました。Webサービス、業務の自動化、カードゲームの開発を経験し、現在は中古車販売の管理画面やアプリの開発に取り組んでいます。",
    career: "これまでの歩み",
    otherExperience: "その他の開発経験",
    current: "現在の取り組み",
    coreSkills: "主な技術と経験",
    notesTitle: "学んだことを、次の開発へ。",
    notesBody:
      "開発中の気づきや技術の整理を、tech-noteで公開しています。記事は日本語です。",
    notesCta: "tech-noteを読む",
    notesRepo: "ノートのソースを見る",
    contactTitle: "開発の相談について。",
    contactBody:
      "つくりたい機能、いま困っていること、既存の構成。具体的な担当範囲や進め方は、案件ごとに確認します。",
    contactCta: "お問い合わせについて",
    pendingTitle: "お問い合わせ窓口を準備しています。",
    pendingBody: "公開する連絡方法が決まり次第、このページでご案内します。",
    footer: "Web・モバイル・業務自動化",
    back: "実績一覧へ",
    notFound: "ページが見つかりません",
    home: "トップへ戻る",
    tech: "使用技術",
    period: "期間",
    sourceUnavailable:
      "用途と担当内容を紹介しています。顧客名や非公開の業務画面は掲載していません。",
  },
  en: {
    nav: ["Work", "About", "Services", "Technical notes", "Contact"],
    skip: "Skip to content",
    menu: "Menu",
    closeMenu: "Close menu",
    role: "Freelance developer",
    destinationsTitle: "Explore the portfolio.",
    heroTitle: ["Web, mobile,", "and workflow automation."],
    heroBody:
      "I build management tools and apps for used-car sales, web services, and workflow automation.",
    workCta: "Explore my work",
    aboutCta: "View my profile",
    servicesCta: "Explore services",
    focusLabel: "Current focus",
    focusTitle: "Connecting web and mobile.",
    focusBody: "Features and improvements for business applications",
    explore: "Explore my contribution",
    selectedTitle: "Selected work",
    selectedBody:
      "Business applications, automation and games. Explore the context and my contribution to each project.",
    allWork: "View all work",
    workTitle: "Development experience",
    workIntro: "The context behind the code.",
    workNote:
      "Project names, client information and private screenshots are omitted. Each case summarizes my contribution.",
    all: "All work",
    business: "Business apps",
    automation: "Automation",
    game: "Games",
    frontend: "Frontend",
    capabilitiesTitle: "Start where it is needed.",
    capabilitiesBody:
      "New features or improvements to an existing application. Start with the workflow and the people who use it.",
    servicesTitle: "What I can help with",
    servicesIntro:
      "Web and mobile development, and improvements to existing systems.",
    processTitle: "How I approach development",
    steps: [
      ["Understand", "Explore the workflow, intended use and existing setup."],
      [
        "Define",
        "Agree on features, priorities and the scope of my contribution.",
      ],
      [
        "Build and verify",
        "Implement in small steps, checking behavior and boundary conditions.",
      ],
      [
        "Improve",
        "Use observations from real operations to guide the next change.",
      ],
    ],
    aboutTitle: "Yusuke",
    profileName: "上垣内裕介 / Abocado",
    aboutIntro: "From hands-on work to software development.",
    aboutBody:
      "I'm a freelance developer working as Abocado. I started learning programming while working at a chemical plant and continued studying alongside home-care work. My experience includes web services, workflow automation and a browser card game. Today I work on management interfaces and applications for used-car sales.",
    career: "My journey",
    otherExperience: "More development experience",
    current: "Current work",
    coreSkills: "Technologies and experience",
    notesTitle: "Learning that informs the next build.",
    notesBody:
      "I publish development notes and technical observations on tech-note. Articles are written in Japanese.",
    notesCta: "Read tech-note",
    notesRepo: "View the notes source",
    contactTitle: "Discuss a development project.",
    contactBody:
      "The features you need, what is getting in the way, and your existing setup. Scope and working arrangements are agreed for each project.",
    contactCta: "About enquiries",
    pendingTitle: "Contact details are being prepared.",
    pendingBody:
      "The contact method will appear here once it is ready for publication.",
    footer: "Web · Mobile · Automation",
    back: "Back to all work",
    notFound: "Page not found",
    home: "Back to home",
    tech: "Technologies",
    period: "Period",
    sourceUnavailable:
      "These summaries describe the purpose and my contribution. Client names and private business screenshots are not included.",
  },
} satisfies Record<Locale, object>;

function localizedSiteCopy(locale: keyof typeof legacySiteCopy) {
  const global = portfolioCopy.global;
  const home = portfolioCopy.home;
  return {
    ...legacySiteCopy[locale],
    home: global.nav.home[locale],
    nav: [
      global.nav.work[locale],
      global.nav.about[locale],
      global.nav.services[locale],
      blogNavigationCopy.nav.blog[locale],
      global.nav.contact[locale],
    ],
    heroTitle: [home.headline[locale]],
    heroBody: home.body[locale],
    workCta: global.cta.work[locale],
    servicesCta: global.cta.services[locale],
    explore: global.cta.project[locale],
    selectedTitle: home.work_heading[locale],
    selectedBody: home.work_body[locale],
    allWork: global.cta.all_work[locale],
    workTitle: portfolioCopy.work_index.headline[locale],
    workIntro: portfolioCopy.work_index.body[locale],
    capabilitiesTitle: home.services_heading[locale],
    capabilitiesBody: home.services_body[locale],
    servicesTitle: portfolioCopy.services.headline[locale],
    servicesIntro: portfolioCopy.services.body[locale],
    processTitle: home.process_heading[locale],
    steps: home.process.map(
      (step) => [step.title[locale], step.body[locale]] as const,
    ),
    aboutTitle: portfolioCopy.about.headline[locale],
    aboutIntro: portfolioCopy.about.body[locale],
    aboutBody: portfolioCopy.about.body[locale],
    otherExperience: portfolioCopy.about.experience_heading[locale],
    notesTitle: blogCopy.headline[locale],
    notesBody: blogCopy.body[locale],
    notesCta: blogCopy.primary_cta[locale],
    contactTitle: portfolioCopy.contact.headline[locale],
    contactBody: portfolioCopy.contact.body[locale],
    contactCta: global.cta.contact[locale],
    pendingTitle: portfolioCopy.contact.unavailable[locale],
    footer: global.footer[locale],
    back: global.cta.back_to_work[locale],
    tech: global.labels.stack[locale],
  };
}

export const siteCopy = {
  ja: localizedSiteCopy("ja"),
  en: localizedSiteCopy("en"),
};

const capabilitySummaryTitles: Record<string, Record<Locale, string>> = {
  web: { ja: "Web開発", en: "Web development" },
  mobile: { ja: "アプリ開発", en: "Mobile apps" },
  automation: { ja: "業務自動化", en: "Workflow automation" },
};

export const capabilities = portfolioCopy.services.items.map((item, index) => ({
  code: `0${index + 1} / ${item.id.toUpperCase()}`,
  id: item.id,
  title: item.title,
  summaryTitle: capabilitySummaryTitles[item.id] ?? item.title,
  body: item.body,
  technologies: item.stack,
  relatedProjects: item.related_projects,
}));
