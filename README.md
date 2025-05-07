# Modern Portfolio Website

A modern, responsive, bilingual (Japanese/English) portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🌐 Bilingual support (English/Japanese)
- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations
- 📝 Blog integration
- 📊 Portfolio showcase with category filtering
- 📧 Contact form with validation
- 🔗 Social media integration

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- Zod
- Radix UI
- next-intl

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env.local` file and add your environment variables:

   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. Run the development server:

   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── page.tsx
│   │   ├── portfolio/
│   │   ├── services/
│   │   ├── blog/
│   │   └── contact/
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Layout.tsx
│   └── ui/
├── messages/
│   ├── en.json
│   └── ja.json
└── middleware.ts
```

## Adding New Content

### Translations

1. Add new translations to `src/messages/en.json` and `src/messages/ja.json`
2. Use the `useTranslations` hook in your components:
   ```tsx
   const t = useTranslations();
   <h1>{t("your.translation.key")}</h1>;
   ```

### Portfolio Items

1. Add new portfolio items to the `projects` array in `src/app/[locale]/portfolio/page.tsx`
2. Add corresponding images to the `public/projects` directory

### Blog Posts

1. Add new blog posts to the `blogPosts` array in `src/app/[locale]/blog/page.tsx`
2. Add corresponding images to the `public/blog` directory

## Deployment

The project can be deployed to Vercel, Netlify, or any other platform that supports Next.js applications.

## License

MIT
