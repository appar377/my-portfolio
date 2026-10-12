import { portfolioCopy, blogNavigationCopy } from "./portfolio-copy";

export const navigationItems = [
  { path: "creations", label: portfolioCopy.global.nav.work },
  { path: "services", label: portfolioCopy.global.nav.services },
  { path: "about", label: portfolioCopy.global.nav.about },
  { path: "blog", label: blogNavigationCopy.nav.blog },
  { path: "contact", label: portfolioCopy.global.nav.contact },
] as const;
