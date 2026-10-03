import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Layers,
  MessageCircle,
  UserRound,
} from "lucide-react";
import type { Locale } from "@/i18n/routing";
import { siteCopy } from "@/content/site";

const destinations = [
  { path: "creations", icon: Layers },
  { path: "about", icon: UserRound },
  { path: "services", icon: BriefcaseBusiness },
  { path: "blog", icon: BookOpen },
  { path: "contact", icon: MessageCircle },
];

export default function HomeDestinations({ locale }: { locale: Locale }) {
  const c = siteCopy[locale];
  return (
    <section className="destinations-section page-width">
      <div className="destinations-heading">
        <p className="eyebrow">EXPLORE / ABOCADO</p>
        <h2>{c.destinationsTitle}</h2>
      </div>
      <nav className="destination-grid" aria-label={c.destinationsTitle}>
        {destinations.map(({ path, icon: Icon }, index) => (
          <Link
            key={path}
            href={`/${locale}/${path}`}
            className={`destination-card destination-${path}`}
          >
            <span className="destination-index" aria-hidden="true">
              0{index + 1}
            </span>
            <Icon className="destination-icon" size={30} aria-hidden="true" />
            <span className="destination-label">{c.nav[index]}</span>
            <ArrowUpRight
              className="destination-arrow"
              size={18}
              aria-hidden="true"
            />
          </Link>
        ))}
      </nav>
    </section>
  );
}
