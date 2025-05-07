"import client";
import { NextIntlClientProvider } from "next-intl";
import Background from "@/components/Background";
import SettingLang from "@/components/SettingLang";
import "@/app/globals.css";
import type { ReactNode } from "react";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ja" }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const messages = (await import(`../../i18n/messages/${locale}.json`)).default;
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <html lang={locale}>
        <body>
          <Background />
          <div className="fixed top-4 right-4 z-50">
            <SettingLang />
          </div>
          <main>{children}</main>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
