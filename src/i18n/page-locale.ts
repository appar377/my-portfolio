import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "./routing";

export type LocalePageProps = { params: Promise<{ locale: string }> };

// Next.js can render a page independently of its layout during static generation.
export async function setPageLocale(params: LocalePageProps["params"]) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  return locale as Locale;
}
