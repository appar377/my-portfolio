import type { ReactNode } from "react";
import { Code2, Database, Settings } from "lucide-react";
import { DecorationLayer } from "./PortfolioIllustration";

export type WorkArtworkKind = "business" | "automation" | "frontend";

function ArtworkSvg({
  className,
  viewBox,
  children,
}: {
  className: string;
  viewBox: string;
  children: ReactNode;
}) {
  return (
    <svg
      className={`portfolio-artwork ${className}`}
      viewBox={viewBox}
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function WorkMotif({ kind }: { kind: WorkArtworkKind }) {
  if (kind === "automation") {
    return (
      <>
        <g className="art-support">
          <rect x="20" y="25" width="55" height="39" rx="5" className="art-surface" />
          <Code2 x="35" y="34" width="25" height="21" strokeWidth="1.7" />
          <path d="M75 45h15v13M154 110h31" />
          <Database x="184" y="91" width="36" height="47" strokeWidth="1.4" />
        </g>
        <g className="art-primary">
          <Settings x="65" y="30" width="113" height="113" strokeWidth="0.62" />
          <circle cx="121.5" cy="86.5" r="8" className="art-accent" />
        </g>
      </>
    );
  }
  if (kind === "frontend") {
    return (
      <>
        <g className="art-primary">
          <rect x="36" y="28" width="148" height="99" rx="7" className="art-surface" />
          <path d="M36 48h148M56 108h105M62 105V87h17v18M95 105V73h17v32M128 105V61h17v44" />
          <circle cx="49" cy="38" r="2" className="art-accent" />
        </g>
        <g className="art-support">
          <circle cx="200" cy="27" r="14" className="art-surface" />
          <path d="M200 13v14h14" />
          <path d="M180 140h36M191 149h25" className="art-guide" />
        </g>
      </>
    );
  }
  return (
    <>
      <g className="art-primary">
        <rect x="36" y="28" width="148" height="99" rx="7" className="art-surface" />
        <path d="M36 48h148M59 68h37v37H59zM111 69h50M111 83h34M111 97h43" />
        <circle cx="49" cy="38" r="2" className="art-accent" />
      </g>
      <g className="art-support">
        <rect x="181" y="76" width="34" height="63" rx="6" className="art-surface" />
        <path d="M193 130h10" />
        <path d="M18 138h43M23 148h24" className="art-guide" />
      </g>
    </>
  );
}

export function CardArtwork({ kind }: { kind: WorkArtworkKind }) {
  return (
    <DecorationLayer>
      <ArtworkSvg className="card-art card-art-wide" viewBox="0 0 240 160">
        <WorkMotif kind={kind} />
      </ArtworkSvg>
      <ArtworkSvg className="card-art card-art-narrow" viewBox="26 16 170 138">
        <WorkMotif kind={kind} />
      </ArtworkSvg>
    </DecorationLayer>
  );
}

export function RouteArtwork() {
  return (
    <DecorationLayer>
      <ArtworkSvg className="route-art route-art-wide" viewBox="0 0 720 260">
        <path d="M44 220h126c83 0 57-51 144-51" className="art-guide" />
        <path d="M314 169c92 0 83-78 189-78h70q59 0 87-35M642 56h18v18" className="art-route" />
        <circle cx="503" cy="91" r="8" className="art-node" />
        <circle cx="314" cy="169" r="5" className="art-node art-node-secondary" />
        <path d="M552 194c65 0 93-23 93-57" className="art-guide" strokeDasharray="3 7" />
      </ArtworkSvg>
      <ArtworkSvg className="route-art route-art-narrow" viewBox="0 0 360 260">
        <path d="M34 220h59c58 0 31-54 92-54" className="art-guide" />
        <path d="M185 166c54 0 36-74 93-74 25 0 36-12 49-26M311 66h16v16" className="art-route" />
        <circle cx="278" cy="92" r="7" className="art-node" />
        <circle cx="185" cy="166" r="4" className="art-node art-node-secondary" />
        <path d="M263 174q59-4 59-49" className="art-guide" strokeDasharray="3 7" />
      </ArtworkSvg>
    </DecorationLayer>
  );
}

export function ContactArtwork() {
  return (
    <DecorationLayer>
      <ArtworkSvg className="pending-art" viewBox="0 0 120 90">
        <rect x="12" y="22" width="96" height="58" rx="7" className="art-surface art-primary" />
        <path d="m14 26 46 31 46-31M14 76l30-24M106 76 76 52" className="art-primary" />
        <path d="M72 7h18q14 0 14 9" className="art-guide" />
        <circle cx="104" cy="12" r="3" className="art-accent" />
      </ArtworkSvg>
    </DecorationLayer>
  );
}
