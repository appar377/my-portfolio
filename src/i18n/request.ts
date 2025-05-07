import { getRequestConfig, setRequestLocale } from "next-intl/server";
import { locales } from "../app/i18n";

export default getRequestConfig(async ({ locale }) => {
  setRequestLocale(locale);
  if (!locales.includes(locale as 'en' | 'ja')) {
    throw new Error(`Invalid locale: ${locale}`);
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
    timeZone: "Asia/Tokyo",
    locale,
  };
});

export async function request<T = unknown>(): Promise<T> {
  // Implementation of the function
  return undefined as unknown as T;
}
