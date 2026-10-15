# Abocado Portfolio v3

Abocadoは上垣内裕介の事業の屋号です。Web・モバイル開発の実績と自分でつくったアプリを、日英で紹介します。コーヒーやお茶などの事業も今後紹介できる位置づけです。

Next.js 15.5.27 / React 19 / TypeScript / next-intl / Tailwind CSS 3。既存の依存関係、6実績の本文・期間・制作区分、15件の経歴を維持しています。

## 起動・検証

Node.js 22.13以上を使います。

```sh
npm ci
npm test
npm run lint
npm run build
npm run typecheck
npm start -- --hostname localhost --port 3077
```

`http://localhost:3077/ja` / `/en`。このMacではnext-intlの内部転送先と一致させるためlocalhostを指定します。開発は `npm run dev`。言語切替は現在のページを保持します。

## 編集する場所

| 場所                                   | 内容                                         |
| -------------------------------------- | -------------------------------------------- |
| `src/content/brand.ts`                 | 新ホーム・屋号の説明・確認済み技術           |
| `src/content/work.ts` / `work-copy.ts` | 実績の事実・既存コピーとの対応               |
| `src/content/career.ts`                | 経歴と期間の確認状態                         |
| `src/content/apps.ts`                  | アプリ一覧・個別ページのデータ               |
| `src/content/navigation.ts`            | 日英の共通ナビゲーション                     |
| `src/app/studio.css`                   | v3の共通デザイン・レスポンシブ規則           |
| `src/components/SystemPreview.tsx`     | 架空の管理画面を表す装飾HTML                 |
| `public/images/v3/`                    | 生成コンセプト写真と実画面（別の用途で管理） |

既存24ルートにアプリ一覧・詳細の日英4ルートを追加しています。実績画面や顧客情報を創作しません。元資料で期間不明のものは「確認中」のままです。

## アプリを追加する

`appProjects` に `AppProject` を1件追加します。`id` を既存と重複しないslugにし、日英の名前・概要・背景・機能、画面、使用技術、根拠を記入します。ルートは `/ja/apps/{id}` と `/en/apps/{id}` に生成されます。

- `status`: `published` / `development` / `archived`。
- `screens`: 公開許可のある実画面と寸法、説明。未提供なら空配列で「準備中」を表示。
- `links`: Web、App Store、Google Play、ソースを追加可能。利用リンクは `published` のときだけ表示。ソースリンクは各状態で表示可能。
- `evidence`: 実在・担当・公開状態を確認した資料。確認できないアプリを実例として追加しません。

初回掲載はソースと公開版を確認できたAbocadoポートフォリオです。画面画像は公開済みv2.1.0と明記しています。将来の架空アプリを公開済みとして配置しません。

## デザインの根拠

[参照とコピーの記録](docs/v3-reference.md)を参照。今回の正本は2026-10-15承認JPEG、1448×1086。ホーム上部のみ直接参照があり、それ以外のページと狭い幅は共通スタイルから展開しています。原CSS viewport・書体は不明です。

ホームは濃紺のhero、生成りのWork、アプリ、仕事の進め方、屋号の紹介、問い合わせの順です。右側の管理画面は装飾用コンセプトで、入力や送信はできません。サムネイル写真も生成コンセプトと表示し、案件の実画面と区別します。見出し・本文・リンクはHTMLです。

## 問い合わせ

窓口は準備中です。フォームは公開しません。`src/config/contact.ts`の停止設定と既存APIを維持し、停止中APIは503を返します。有効化には連絡方法の確定と別の作業が必要です。

## バージョン管理と戻し方

今回のリリースはv3.0.0です。前公開版v2.1.0は `8cc7a1becce4a296fda457a0826a24935fc6b717`。候補タグ `v3.0.0-rc.1` と既存タグを移動しません。公開結果と配備SHAは[GitHubのリリース記録](https://github.com/appar377/my-portfolio/releases/tag/v3.0.0)で確認できます。候補時点の検証記録は `docs/v3-verification.md` に保持しています。

戻して確認する場合は、作業中の変更を保持し、新しいディレクトリにチェックアウトします。

```sh
git worktree add ../abocado-v2-review v2.1.0
```

本番の復帰先は既存Vercel deployment `dpl_At442WDGZ845WmWXLaKJNMbbgw7Z`。本番切替は対象SHAと検証結果を確認してから実施します。GitHub ActionsはNode22でinstall、test、lint、build、typecheckを行います。
