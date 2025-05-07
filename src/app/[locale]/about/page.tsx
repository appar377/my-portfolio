"use client";

import PlanetTimeline from "@/components/PlanetTimeline";
import { TimelineItem } from "@/components/Timeline";
import { motion } from "framer-motion";
import BackButton from "@/components/BackButton";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations();

  // プロフィール情報
  const profile = {
    name: "上垣内 裕介",
    nameEn: "Yusuke Uwagaich",
    birthdate: "2000年7月7日",
    birthplace: "広島県広島市",
    education: "工業高等学校 化学科卒業",
    introduction: t("about.profile.introduction"),
    skills: [
      "HTML/CSS",
      "JavaScript/TypeScript",
      "React",
      "Vue.js/Nuxt.js",
      "Python",
      "Streamlit",
      "Flask",
      "pyinstaller(デスクトップアプリ化)",
      "GitHub",
      "MySQL",
      "バッチ処理",
      "Docker",
      "AWS",
      "PHP/Laravel",
      "GitHub",
      "Playwright",
      "テスト",
      "コードレビュー",
      "仕様作成",
    ],
    hobbies: ["読書", "歌", "筋トレ", "テニス"],
  };

  // Define career items for timeline
  const careerItems: TimelineItem[] = [
    {
      title: "広島の地に生を受ける",
      period: "2000.7",
      description:
        "広島県広島市に誕生。瀬戸内海に面した歴史と文化が息づくこの街で、幼少期から好奇心旺盛な性格を育む。自然と技術が調和する環境で育ったことが、後の多面的な視点の基盤となる。",
    },
    {
      title: "工業高等学校化学科での専門教育",
      period: "2016.4〜2019.3",
      description:
        "化学の神秘に魅了され、工業高等学校の化学科を選択。実験・分析技術を習得するとともに、論理的思考力と科学的アプローチを身につける。化学分析技能検定など複数の専門資格を取得し、専門性を高める3年間となる。",
    },
    {
      title: "化学工場でのキャリアスタート",
      period: "2019.4〜2021.7",
      description:
        "高校で培った専門知識と技術を実践の場で活かすべく、地元の化学工場に就職。品質管理や製造プロセスの最適化に携わり、データ分析の重要性を実感。チームワークの大切さとプロフェッショナリズムの基礎を学ぶ。",
    },
    {
      title: "デジタルの世界への目覚め",
      period: "2019.10〜",
      description:
        "工場での製造データ分析をきっかけに、プログラミングの可能性に魅了される。仕事の合間を縫って独学を開始。YouTube、Progateなどのオンラインリソースを活用し、基礎から着実に学習を進める。夜遅くまでコードを書く日々が始まる。",
      technologies: ["HTML/CSS", "JavaScript"],
    },
    {
      title: "体系的な学びを求めて",
      period: "2020.10〜2021.3",
      description:
        "独学の限界を感じ、キャリアチェンジを視野に入れてプログラミングスクールに参加。基礎から応用まで、Web開発の体系的な知識とスキルを習得。同じ志を持つ仲間との切磋琢磨を通じて視野を広げる貴重な時間となる。",
      technologies: ["JavaScript", "HTML/CSS"],
    },
    {
      title: "成長の停滞と内省の時期",
      period: "2021.3〜2021.7",
      description:
        "スクール卒業後、思うような成長を実感できず、プログラマーとしての自分の将来に不安を感じる時期。しかし、この挫折がかえって自分と向き合う貴重な機会となり、本当にやりたいことを見つめ直す転機となる。内省と模索の日々が続く。",
    },
    {
      title: "決断と転身 - 未来への投資",
      period: "2021.7",
      description:
        "長い熟考の末、プログラミングへの情熱を追求するため、化学工場を退職するという大きな決断を下す。安定を捨て、未知の可能性に賭けることへの不安と期待が入り混じるなか、新たな道へと踏み出す勇気を見出す。",
    },
    {
      title: "学習と生活の両立",
      period: "2021.8〜2022.2",
      description:
        "訪問介助のアルバイトをしながら、プログラミング学習を継続。日々の生活と学習のバランスを取りながら、着実にスキルを磨いていく。",
      technologies: ["HTML/CSS", "JavaScript"],
    },
    {
      title: "再挑戦 - 本格的なエンジニア教育",
      period: "2022.2〜2022.7",
      description:
        "より本格的なプログラミングスキルを身につけるため、高度な実践的カリキュラムを提供するプログラミングスクールに再入学。前回の経験を活かし、明確な目標と計画を持って臨む。モダンな技術スタックとチーム開発手法を集中的に学び、実力を飛躍的に向上させる。",
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "Laravel",
        "Vue.js/Nuxt.js",
        "GitHub",
        "Docker",
      ],
    },
    {
      title: "着実な成長と自信の獲得",
      period: "2022.7",
      description:
        "前回とは異なり、明確な成長と技術的な自信を得てプログラミングスクールを卒業。解決能力とコミュニケーションスキルも向上。",
    },
    {
      title: "初の実務経験 - 投資情報サービス開発",
      period: "2022.8〜2022.10",
      description:
        "スクールからの推薦で、投資家向け情報提供サービスの開発プロジェクトに参画。Vue.jsを用いた新機能の設計から実装まで担当。実務でのコードレビュープロセスやデプロイフローを経験し、プロフェッショナルな開発環境での働き方を学ぶ。UIコンポーネント設計に創意工夫を凝らし、ユーザビリティを向上させる。",
      technologies: ["Vue.js", "Chart.js", "Vuex", "SCSS"],
    },
    {
      title: "自立へのチャレンジと試行錯誤",
      period: "2022.11〜2023.3",
      description:
        "自らキャリアを切り開くため、クラウドソーシングプラットフォームやエージェントを活用して案件獲得に奔走。多くの面談や提案書作成を経験するも、経験不足から思うような結果が得られず。しかし、この期間に市場のニーズやスキルの差分を実感し、自己研鑽の方向性を明確にする貴重な時間となる。",
    },
    {
      title: "初のプロジェクト - 自動管理システム開発",
      period: "2023.4〜2024.1",
      description:
        "粘り強い努力が実り、Webサイト自動運用サービスの開発プロジェクトにフロントエンドエンジニアとして参画。Seleniumを活用した自動化システムのUI/UX設計から実装まで担当。Reactとサーバーサイド（Python）の連携、状態管理の最適化、パフォーマンスチューニングなど、実践的なスキルを磨く。CI/CDパイプラインの構築やテスト自動化にも取り組み、開発プロセス全体への理解を深める。",
      technologies: [
        "React",
        "TypeScript",
        "Python (Streamlit/Flask)",
        "pyinstaller(デスクトップアプリ化)",
        "GitHub",
        "AWS",
        "Docker",
        "Playwright",
        "E2Eテスト",
        "コードレビュー",
        "仕様作成",
      ],
    },
    {
      title: "Webカードゲームの企画・開発",
      period: "2024.2〜2025.5",
      description:
        "仕様策定、UI/UXデザイン、フロントエンド実装、バックエンド連携まで一貫して担当。ゲームロジックの複雑な状態管理やリアルタイム通信の実装に挑戦し、技術的な難題を乗り越える。ユーザーテストを重ねながら改善を繰り返し、直感的で楽しいゲーム体験の創出に注力している。",
      technologies: ["React", "TypeScript", "GitHub", "Vercel", "仕様作成"],
    },
  ];

  return (
    <div className="container max-w-full px-2 sm:px-4 md:px-6 py-8 sm:py-14 md:py-20">
      <BackButton variant="about" />
      {/* プロフィールセクション */}
      <section className="relative bg-gradient-to-b from-gray-900 to-transparent pt-8 xs:pt-12 sm:pt-20 pb-8 xs:pb-10 sm:pb-16 px-2 xs:px-3 sm:px-6 md:px-12 font-timeline z-20">
        <div className="max-w-md xs:max-w-2xl sm:max-w-3xl md:max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="profile-card backdrop-blur-md bg-gray-900/70 p-3 xs:p-4 sm:p-6 md:p-10 rounded-2xl border-2 border-indigo-900/30 shadow-2xl shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row gap-4 xs:gap-6 md:gap-8 items-center md:items-start">
              {/* プロフィール画像（仮） */}
              <motion.div
                className="profile-image-container w-20 h-20 xs:w-28 xs:h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 relative flex-shrink-0 mx-auto md:mx-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 p-1 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-shadow duration-300">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-xl xs:text-2xl sm:text-3xl md:text-4xl text-white font-bold relative overflow-hidden">
                    <motion.span
                      animate={{
                        textShadow: [
                          '0 0 5px rgba(104, 40, 250, 0.5)',
                          '0 0 20px rgba(104, 40, 250, 0.8)',
                          '0 0 5px rgba(104, 40, 250, 0.5)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                    >
                      {profile.name.charAt(0)}
                    </motion.span>
                    <div className="absolute -inset-full bg-gradient-to-br from-indigo-500/10 via-purple-500/0 to-indigo-600/10 animate-spin-slow"></div>
                  </div>
                </div>
                <motion.div
                  className="absolute -bottom-2 -right-2 bg-indigo-600 text-white text-[10px] xs:text-xs px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 rounded-full shadow-md"
                  whileHover={{ scale: 1.1 }}
                >
                  {profile.nameEn}
                </motion.div>
              </motion.div>
              {/* プロフィールテキスト */}
              <div className="flex-1 w-full text-center md:text-left space-y-1 xs:space-y-2 sm:space-y-3 md:space-y-4">
                <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 xs:mb-1">{profile.name}</h2>
                <div className="text-xs xs:text-sm sm:text-base text-white/70 mb-1 xs:mb-2">{profile.birthdate}・{profile.birthplace}</div>
                <div className="text-xs xs:text-sm sm:text-base text-white/70 mb-1 xs:mb-2">{profile.education}</div>
                <p className="text-sm xs:text-base sm:text-lg text-white/90 leading-relaxed mb-1 xs:mb-2">{profile.introduction}</p>
                <div className="flex flex-wrap gap-1 xs:gap-2 justify-center md:justify-start mt-1 xs:mt-2">
                  {profile.skills.slice(0, 6).map((skill) => (
                    <span key={skill} className="px-1.5 xs:px-2 py-0.5 xs:py-1 bg-indigo-700/30 text-[10px] xs:text-xs sm:text-sm rounded-full text-indigo-200 border border-indigo-500/20">{skill}</span>
                  ))}
                  {profile.skills.length > 6 && (
                    <span className="px-1.5 xs:px-2 py-0.5 xs:py-1 bg-indigo-700/10 text-[10px] xs:text-xs sm:text-sm rounded-full text-indigo-200 border border-indigo-500/10">+more</span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-10 xs:mt-14 mb-6 xs:mb-8">
            <motion.h2
              className="text-xl xs:text-2xl md:text-3xl font-bold text-white inline-block relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              {t('about.careerTimeline')}
              <div className="w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 mt-2 rounded-full shadow-sm shadow-indigo-500/30"></div>
            </motion.h2>
          </div>
        </div>
      </section>

      {/* タイムラインセクション */}
      <PlanetTimeline items={careerItems} />
    </div>
  );
}
