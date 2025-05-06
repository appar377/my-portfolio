'use client';

import PlanetTimeline from '@/components/PlanetTimeline';
import { TimelineItem } from '@/components/Timeline';

export default function AboutPage() {
  // Define career items for timeline
  const careerItems: TimelineItem[] = [
    { title: '広島に生まれる', period: '2000.7', description: '広島県広島市に生まれる。' },
    { title: '工業高等学校化学科を卒業', period: '2019.3', description: '工業高等学校で化学を学び、化学の専門知識を身につける' },
    { title: '科学工場に就職', period: '2019.4〜', description: '高校3年間で取得した資格、技能を活かして化学工場に就職' },
    { title: 'プログラミングの学習開始', period: '2019.10〜', description: 'プログラミングに興味を持ち、工場勤務をしながらプログラミングの学習を始める。youtubeやprogateを利用して学習を進める。' },
    { title: 'プログラミングスクールへの参加', period: '2020.10〜', description: '独学に限界を感じ、プログラミングスクールに参加。' },
    { title: 'プログラミングへの挫折', period: '2021.3', description: 'プログラミングスクールを卒業するも成長できた感を感じられず、挫折。そのまま少しの間プログラミングをしない時期が続く。' },
    { title: '化学工場の退職', period: '2021.7', description: '工場勤務をあまり好きになれなかった & プログラミングへの思いを捨てられず、化学工場を退職。' },
    { title: '訪問介助系のバイトへ', period: '2021.8', description: 'プログラミング学習を独学で進めながら訪問介助系のバイトへ就く。' },
    { title: 'プログラミングスクールへの再入学を決意', period: '2022.2', description: '独学に限界を感じプログラミングスクールへの再入学を決意。' },
    { title: '力をつけプログラミングスクールの卒業', period: '2022.7', description: '1回目とは違い、確実に成長を感じることができ、プログラミングスクールの卒業。' },
    { title: 'スクールから案件をもらう', period: '2022.8 ~ 2022.10', description: 'スクール卒業後、実力をさらに伸ばすため、プログラミングスクールから実務案件をもらう。投資家向け情報提供サービスにVue.jsで新機能追加。UIコンポーネント設計・実装。' , technologies: ['Vue.js'] },
    { title: '自分で案件を探し迷う時期が続く', period: '2022.11~', description: '自分で案件を獲得するため、クラウドソーシングアプリやエージェントの力を借りるも、案件を獲得できないまま時間が過ぎる。' },
    { title: 'やっとプロジェクトに参加できた(自動管理システム開発)', period: '2023.4', description: '探し回った末、やっと初のプロジェクトに参加できた。Seleniumを用いたサイトの自動運用サービス開発。Reactフロント実装、バックエンドAPI設計。テスト環境構築、E2E・単体テスト実装。' , technologies: ['React', 'TypeScript', 'Python (Streamlit/Flask)', 'AWS'] },
    { title: 'Webカードゲーム制作', period: '2024.2–2025.5', description: '仕様策定から実装・デプロイまで一貫担当。プロトタイプ制作。', technologies: ['React', 'TypeScript'] },
  ];

  return (
    <>
      <PlanetTimeline items={careerItems} />
    </>
  );
}
