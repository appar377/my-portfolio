'import client';
import { NextIntlClientProvider } from 'next-intl';
import Header from '@/components/layout/Header';
import Background from '@/components/Background';
import '@/app/globals.css';
import type { ReactNode } from 'react';

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ja' }
  ];
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const messages = (
    await import(`../../i18n/messages/${locale}.json`)
  ).default;
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <html lang={locale}>
        <body>
          <Background />
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
