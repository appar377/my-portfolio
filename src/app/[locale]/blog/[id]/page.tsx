import { notFound } from "next/navigation";
import { setPageLocale, type LocalePageProps } from "@/i18n/page-locale";

// Legacy sample articles were not authored content.
export default async function BlogPost({ params }: LocalePageProps) {
  await setPageLocale(params);
  notFound();
}
