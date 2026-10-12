import type { Locale } from "@/i18n/routing";

type ApproachCopy = {
  label: string;
  summaryTitle: string;
  summaryBody: string;
  link: string;
  title: string;
  introduction: string;
  steps: readonly { title: string; body: string }[];
};

export const developmentApproach = {
  ja: {
    label: "Abocadoの開発方針",
    summaryTitle: "人が設計と品質に責任を持ち、AIで実装を加速する。",
    summaryBody:
      "何をつくり、どう動かすかを考えるのは人。AIを調査・実装・テストの補助に活用し、生成されたコードを理解し、確かめながら開発を進めます。",
    link: "開発方針を見る",
    title: "速くつくるために、設計と検証を大切にする。",
    introduction:
      "AIを開発の各段階で積極的に活用します。同時に、要件や内部構造を考え、生成されたコードを理解し、品質を確かめる責任は人が持ちます。動くことに加えて、変更しやすく、問題が起きても原因を追える製品を目指します。",
    steps: [
      {
        title: "つくる前に、構造を考える",
        body: "利用する場面と要件を整理し、責務の境界、依存関係、データの流れを検討します。エラー時の動きや、あとから変更する箇所も設計に含めます。",
      },
      {
        title: "AIを使い、実装を進める",
        body: "調査、実装、テスト作成の補助にAIを活用します。試作と見直しを重ね、設計に合う形へ整えながら開発を進めます。",
      },
      {
        title: "理解して、確かめる",
        body: "生成されたコードの意図と影響を理解し、レビューとテストを行います。通常の動作だけでなく、境界条件や失敗時の振る舞いを確かめ、必要な修正につなげます。",
      },
    ],
  },
  en: {
    label: "How Abocado builds",
    summaryTitle: "Human-led design and quality. AI-accelerated implementation.",
    summaryBody:
      "People decide what to build and how it should work. AI supports research, implementation, and testing, while its output is understood, reviewed, and verified.",
    link: "Explore the approach",
    title: "Move faster with thoughtful design and verification.",
    introduction:
      "AI plays an active role throughout development. People remain responsible for requirements, architecture, understanding generated code, and checking quality. The aim is to build products that work well, can be changed with confidence, and make problems easier to trace.",
    steps: [
      {
        title: "Think through the structure",
        body: "Clarify user needs and requirements, then examine responsibility boundaries, dependencies, and data flow. Plan for failure handling and the parts likely to change.",
      },
      {
        title: "Use AI to move implementation forward",
        body: "Use AI to support research, implementation, and test creation. Iterate on prototypes and refine the output to fit the design.",
      },
      {
        title: "Understand and verify",
        body: "Understand the intent and impact of generated code, then review and test it. Check normal operation, boundary conditions, and failure behaviour, and use the findings to guide revisions.",
      },
    ],
  },
} as const satisfies Record<Locale, ApproachCopy>;
