import type { Locale } from "@/i18n/routing";

export type ImageRegion = {
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
  excludedLeft?: { width: number; top: number; height: number };
};
const homeImages = {
  ja: "/images/v12/home-ja-reference.png",
  en: "/images/v12/home-en-reference.png",
};

export function heroImageRegion(locale: Locale): ImageRegion {
  // Approved safe starts: EN440, JA520. Source dimensions are image pixels,
  // not a CSS viewport. Keep generated text outside the visible image frame.
  const x = locale === "ja" ? 520 : 440;
  return { src: homeImages[locale], x, y: 60, width: 1024 - x, height: 395 };
}

export function workImageRegion(
  id: string,
  locale: Locale,
  detail = false,
): ImageRegion | undefined {
  if (id === "recruitment-matching") {
    if (detail && locale === "en") {
      // Measured text-free part of the supplied EN project reference.
      return {
        src: "/images/v12/project-en-reference.png",
        x: 350,
        y: 85,
        width: 674,
        height: 390,
        // Keep recoverable plant/books pixels, exclude the region containing
        // the reference's raster headline/body. All text is rendered as HTML.
        excludedLeft: { width: 130, top: 115, height: 195 },
      };
    }
    return { src: homeImages[locale], x: 0, y: 682, width: 508, height: 250 };
  }
  if (id === "messaging-automation") {
    return { src: homeImages[locale], x: 512, y: 682, width: 512, height: 250 };
  }
  // The other four works have no supplied v12 illustration. Do not replace
  // them with newly generated or unrelated imagery.
  return undefined;
}

export const projectRelatedImageRegion: ImageRegion = {
  src: "/images/v12/project-en-reference.png",
  x: 400,
  y: 940,
  width: 624,
  height: 280,
};
