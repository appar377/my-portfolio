import Link from "next/link";
import { getLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { siteCopy } from "@/content/site";

export default async function NotFound() {
  const locale = (await getLocale()) as Locale;
  const c = siteCopy[locale];
  return (
    <div className="page-width page-intro">
      <p className="eyebrow">404 / NOT FOUND</p>
      <h1>{c.notFound}</h1>
      <Link className="button button-primary" href={`/${locale}`}>
        {c.home}
      </Link>
    </div>
  );
}
