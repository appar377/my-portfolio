# Abocado / Yusuke Portfolio

Rails・Flutterを中心とした開発経験を紹介する、日英対応のポートフォリオです。Next.js 15 / React 19 / TypeScript / Tailwind CSS 3を使用します。

## ローカル起動

Node.js 22.13以降を使用します。

```sh
npm ci
npm run dev
```

日本語は `/ja`、英語は `/en`。言語指定のないアクセスはブラウザの言語を判定し、日本語を既定値にします。

## 構成

| 場所 | 内容 |
| --- | --- |
| `src/content/work.ts` | 実績・担当内容・日英の説明 |
| `src/content/site.ts` | サイトの文章・対応分野・技術ノートのURL |
| `src/components/` | 共通ヘッダー、言語切替、実績の表示と絞り込み |
| `src/app/[locale]/` | トップ、実績一覧・詳細、プロフィール、サービス、技術ノート、問い合わせ |
| `src/app/globals.css` | 色、余白、文字、レスポンシブ表示、動きを減らす設定 |
| `src/middleware.ts` / `src/i18n/` | 言語のルーティング |

実績は本人の公開プロフィールと確認された内容をもとに整理しています。未確認の顧客名、担当責任、数値成果、サンプル作品は追加しません。Rails・Flutterの業務開発は匿名で記載し、案件名・画面・ソースの公開範囲は別途確認します。

## 検証

```sh
npm run typecheck
npm run lint
npm run build
```

既存の自動テストはありません。画面では日英のルート、実績の絞り込み、詳細表示、スマホのメニュー、Escape操作、言語切替、404、横スクロール、キーボードのフォーカスを確認します。

## 問い合わせ

公開する連絡方法が未確定の間は、受付準備中と表示します。`src/config/contact.ts`で受付を停止しているため、既存のSMTP設定があっても送信しません。フォームの公開を承認された後にこの停止設定を変更し、実行環境で次の値を設定します。

- `CONTACT_FORM_ENABLED=true`
- `GMAIL_USER`
- `GMAIL_PASS`
- `CONTACT_TO`

認証値をソースや公開される環境変数へ保存しないでください。送信先のメールアドレスもソースには含めません。受付停止中はAPIが503を返します。有効化後はSMTP設定がない場合に503、入力不正に400を返します。

送信の有効化前にNodemailerの依存更新とテスト用SMTPでの検証を行います。

## 公開

既存のVercelプロジェクトとGitHubのmainが連携しています。公開承認後、型・lint・buildと画面を確認してmainへpushします。連絡先の公開は別途確認します。

依存関係は`package-lock.json`で固定し、`npm ci`でインストールします。Next.js内包分も含めてPostCSSを8.5.23へ揃えています。
