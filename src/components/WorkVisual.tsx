import type { Locale } from "@/i18n/routing";

export type WorkVisualKind =
  "devices" | "flow" | "information" | "matching" | "messaging" | "cards";

function Devices({ surface }: { surface: string }) {
  return (
    <>
      <rect x="74" y="48" width="298" height="193" rx="18" fill="#17384a" />
      <rect x="88" y="62" width="270" height="165" rx="8" fill="#fffefa" />
      <rect x="104" y="78" width="154" height="96" rx="12" fill={surface} />
      <circle cx="298" cy="102" r="24" fill="#b77855" />
      <rect x="274" y="145" width="66" height="62" rx="12" fill="#b8cedc" />
      <rect x="105" y="187" width="114" height="8" rx="4" fill="#b8cedc" />
      <path d="M59 241h329l-21 14H79Z" fill="#809eaf" />
      <g transform="rotate(8 376 194)">
        <rect x="331" y="114" width="94" height="165" rx="15" fill="#17384a" />
        <rect x="338" y="122" width="80" height="148" rx="10" fill="#fffefa" />
        <rect x="348" y="139" width="60" height="52" rx="8" fill={surface} />
        <rect x="348" y="202" width="60" height="22" rx="7" fill="#b77855" />
        <circle cx="361" cy="242" r="10" fill="#b8cedc" />
        <rect x="379" y="236" width="27" height="5" rx="2.5" fill="#c9d7df" />
      </g>
    </>
  );
}

function Flow({ messaging = false }: { messaging?: boolean }) {
  return (
    <>
      <path
        d="M119 153h96m50 0h93M241 91v39m0 49v38"
        stroke="#809eaf"
        strokeWidth="5"
      />
      <rect
        x="60"
        y="89"
        width="100"
        height="133"
        rx="16"
        fill="#fffefa"
        stroke="#c4d6df"
        strokeWidth="3"
      />
      <rect x="78" y="111" width="64" height="10" rx="5" fill="#b8cedc" />
      <rect x="78" y="137" width="48" height="8" rx="4" fill="#d7e2e8" />
      <circle cx="108" cy="186" r="15" fill="#a4bfd0" />
      <circle cx="240" cy="153" r="34" fill="#b77855" />
      <circle cx="241" cy="65" r="22" fill="#96b4c8" />
      <circle cx="241" cy="242" r="22" fill="#b8cedc" />
      {messaging ? (
        <path
          d="M339 92h70a15 15 0 0 1 15 15v74a15 15 0 0 1-15 15h-33l-27 23v-23h-10a15 15 0 0 1-15-15v-74a15 15 0 0 1 15-15Z"
          fill="#fffefa"
          stroke="#809eaf"
          strokeWidth="3"
        />
      ) : (
        <g fill="#396a8a" stroke="#8faec2" strokeWidth="3">
          <path d="M343 106v95c0 25 78 25 78 0v-95Z" />
          <ellipse cx="382" cy="106" rx="39" ry="17" />
          <path
            d="M343 150c0 25 78 25 78 0m-78 36c0 25 78 25 78 0"
            fill="none"
          />
        </g>
      )}
    </>
  );
}

function Information() {
  return (
    <>
      <rect x="56" y="112" width="180" height="138" rx="15" fill="#fffefa" />
      <path
        d="m76 219 35-35 34 13 35-43 35-18"
        fill="none"
        stroke="#396a8a"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="215" cy="136" r="6" fill="#396a8a" />
      <rect x="253" y="61" width="166" height="189" rx="15" fill="#fffefa" />
      <path d="M275 227h123" stroke="#c4d6df" strokeWidth="4" />
      <rect x="279" y="179" width="20" height="44" rx="3" fill="#b77855" />
      <rect x="311" y="144" width="20" height="79" rx="3" fill="#b77855" />
      <rect x="343" y="111" width="20" height="112" rx="3" fill="#b77855" />
      <rect x="375" y="88" width="20" height="135" rx="3" fill="#b77855" />
    </>
  );
}

function Matching() {
  return (
    <>
      <path
        d="M152 150h176"
        stroke="#809eaf"
        strokeWidth="5"
        strokeDasharray="8 10"
      />
      {[76, 303].map((x) => (
        <g key={x}>
          <rect
            x={x}
            y="71"
            width="102"
            height="168"
            rx="18"
            fill="#fffefa"
            stroke="#c4d6df"
            strokeWidth="3"
          />
          <circle cx={x + 51} cy="119" r="23" fill="#a4bfd0" />
          <rect
            x={x + 22}
            y="158"
            width="58"
            height="10"
            rx="5"
            fill="#d7e2e8"
          />
          <rect
            x={x + 31}
            y="184"
            width="40"
            height="9"
            rx="4.5"
            fill="#d7e2e8"
          />
        </g>
      ))}
      <circle cx="240" cy="150" r="25" fill="#b77855" />
      <path
        d="m228 149 9 9 16-18"
        fill="none"
        stroke="#fffefa"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </>
  );
}

function Cards({ surface }: { surface: string }) {
  return (
    <>
      <rect
        x="118"
        y="67"
        width="118"
        height="178"
        rx="18"
        fill="#809eaf"
        transform="rotate(-14 177 156)"
      />
      <rect
        x="187"
        y="58"
        width="118"
        height="178"
        rx="18"
        fill="#fffefa"
        stroke="#c4d6df"
        strokeWidth="3"
      />
      <rect
        x="257"
        y="76"
        width="118"
        height="178"
        rx="18"
        fill="#fffefa"
        stroke="#c4d6df"
        strokeWidth="3"
        transform="rotate(14 316 165)"
      />
      <rect x="205" y="77" width="82" height="92" rx="12" fill={surface} />
      <circle cx="246" cy="124" r="23" fill="#b77855" />
      <rect x="210" y="190" width="72" height="8" rx="4" fill="#b8cedc" />
      <rect x="221" y="210" width="50" height="6" rx="3" fill="#d7e2e8" />
    </>
  );
}

export default function WorkVisual({
  kind,
  identity,
  locale,
  detail = false,
}: {
  kind: WorkVisualKind;
  identity: string;
  locale: Locale;
  detail?: boolean;
}) {
  const prefix = `visual-${identity}-${detail ? "detail" : "card"}`;
  const surface = `url(#${prefix}-surface)`;
  return (
    <figure className={`work-visual ${detail ? "work-visual-detail" : ""}`}>
      <svg
        viewBox="0 0 480 300"
        width="480"
        height="300"
        role="img"
        aria-labelledby={`${prefix}-title`}
        focusable="false"
      >
        <title id={`${prefix}-title`}>
          {locale === "ja"
            ? "開発を表す汎用の抽象イラスト"
            : "A generic concept illustration of development"}
        </title>
        <defs>
          <linearGradient id={`${prefix}-background`} x2="1" y2="1">
            <stop stopColor="#eaf1f5" />
            <stop offset="1" stopColor="#f4f7f9" />
          </linearGradient>
          <linearGradient id={`${prefix}-surface`} x2="0.8" y2="1">
            <stop stopColor="#c5d8e5" />
            <stop offset="1" stopColor="#5e8da9" />
          </linearGradient>
        </defs>
        <rect
          width="480"
          height="300"
          rx="18"
          fill={`url(#${prefix}-background)`}
        />
        <circle cx="100" cy="91" r="65" fill="#c5d8e5" />
        <circle cx="393" cy="47" r="24" fill="#a4bfd0" />
        <circle cx="74" cy="251" r="28" fill="#d9e5eb" />
        <circle
          cx="326"
          cy="108"
          r="79"
          fill="none"
          stroke="#d2b8a7"
          strokeWidth="3"
        />
        {kind === "devices" ? <Devices surface={surface} /> : null}
        {kind === "flow" || kind === "messaging" ? (
          <Flow messaging={kind === "messaging"} />
        ) : null}
        {kind === "information" ? <Information /> : null}
        {kind === "matching" ? <Matching /> : null}
        {kind === "cards" ? <Cards surface={surface} /> : null}
      </svg>
      <figcaption>
        {locale === "ja"
          ? "抽象イメージ · 実際の案件画面ではありません"
          : "Concept illustration · not a project screenshot"}
      </figcaption>
    </figure>
  );
}
