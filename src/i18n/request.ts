import { getRequestConfig } from "next-intl/server";
import { locales } from "../app/i18n";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) {
    throw new Error(`Invalid locale: ${locale}`);
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
    timeZone: "Asia/Tokyo",
    locale,
  };
});
