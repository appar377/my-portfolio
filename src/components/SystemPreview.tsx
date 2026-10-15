import {
  ClipboardList,
  Compass,
  Wrench,
  LayoutDashboard,
  Folder,
  ListTodo,
  Users,
  Files,
  Settings,
  ArrowRight,
} from "lucide-react";
import type { Locale } from "@/i18n/routing";

// Decorative concept UI, never presented as a screenshot or as usable controls.
export default function SystemPreview({ locale }: { locale: Locale }) {
  const ja = locale === "ja";
  const projects = ja
    ? [
        "業務管理システム",
        "社内ポータル",
        "モバイルアプリ",
        "データ分析ツール",
        "予約管理システム",
        "コンテンツ管理基盤",
      ]
    : [
        "Business management",
        "Team portal",
        "Mobile application",
        "Data analysis",
        "Booking system",
        "Content management",
      ];
  const states = ja
    ? ["進行中", "設計中", "開発中", "要件整理", "完了", "設計中"]
    : ["In progress", "Design", "Development", "Planning", "Done", "Design"];
  return (
    <div
      className="system-preview"
      role="img"
      aria-label={
        ja
          ? "架空の管理画面のコンセプト。実際の案件画面ではありません"
          : "Fictional management interface concept, not a client screenshot"
      }
    >
      <div className="circuit-grid" />
      <div className="preview-process">
        {[ClipboardList, Compass, Wrench].map((Icon, i) => (
          <div key={i}>
            <Icon size={28} strokeWidth={1} />
            <span>
              {
                (ja
                  ? ["要件整理", "設計", "実装"]
                  : ["Define", "Design", "Build"])[i]
              }
            </span>
            {i < 2 && (
              <ArrowRight className="process-arrow" size={24} strokeWidth={1} />
            )}
          </div>
        ))}
      </div>
      <div className="preview-backplate" />
      <div className="preview-window">
        <aside>
          <b>▱ Abocado</b>
          {[LayoutDashboard, Folder, ListTodo, Users, Files, Settings].map(
            (Icon, i) => (
              <div className={i === 1 ? "selected" : ""} key={i}>
                <Icon size={13} />
                <span>
                  {
                    (ja
                      ? [
                          "ダッシュボード",
                          "案件",
                          "タスク",
                          "顧客",
                          "ファイル",
                          "設定",
                        ]
                      : [
                          "Dashboard",
                          "Projects",
                          "Tasks",
                          "People",
                          "Files",
                          "Settings",
                        ])[i]
                  }
                </span>
              </div>
            ),
          )}
        </aside>
        <div className="preview-table">
          <div className="preview-toolbar">
            <strong>{ja ? "案件一覧" : "Projects"}</strong>
            <span>＋ {ja ? "新規作成" : "New project"}</span>
          </div>
          <div className="preview-tabs">
            {ja
              ? "すべて　　進行中　　対応待ち　　完了"
              : "All　　Active　　Pending　　Done"}
          </div>
          <table>
            <thead>
              <tr>
                {(ja
                  ? ["案件名", "ステータス", "種別", "更新日"]
                  : ["Project", "Status", "Type", "Updated"]
                ).map((s) => (
                  <th key={s}>{s}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {projects.map((p, i) => (
                <tr key={p}>
                  <td>{p}</td>
                  <td>
                    <span className={`preview-state state-${i % 3}`}>
                      ● {states[i]}
                    </span>
                  </td>
                  <td>{i === 2 ? "Mobile" : "Web"}</td>
                  <td>2026/10/{String(24 - i).padStart(2, "0")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="preview-form">
        <p>CONCEPT PREVIEW</p>
        <div>
          <strong>{ja ? "新規案件の作成" : "New project"}</strong>
          {(ja
            ? ["案件名", "種別", "概要", "開始予定", "ステータス"]
            : ["Project name", "Type", "Summary", "Start date", "Status"]
          ).map((label, i) => (
            <section key={label}>
              <span>{label}</span>
              <i>
                {
                  (ja
                    ? [
                        "例）業務管理システム",
                        "Webシステム　⌄",
                        "この案件の概要を入力…",
                        "2026/11/01",
                        "● 要件整理　⌄",
                      ]
                    : [
                        "Business management",
                        "Web application　⌄",
                        "Project description…",
                        "2026/11/01",
                        "● Planning　⌄",
                      ])[i]
                }
              </i>
            </section>
          ))}
          <b>{ja ? "作成する" : "Create project"}</b>
        </div>
      </div>
      <div className="preview-code">
        <span>CONCEPT PREVIEW</span>
        <code>
          const handleSubmit = async () =&gt; &#123;
          <br />
          　await createProject(data);
          <br />
          　router.push(&apos;/projects&apos;);
          <br />
          &#125;;
        </code>
      </div>
    </div>
  );
}
