import type { ReactNode } from "react";
import {
  CarFront,
  ChartColumn,
  Cloud,
  Code2,
  Database,
  FileText,
  Mail,
  MessageSquare,
  Search,
  Settings,
  Smartphone,
} from "lucide-react";

export type IllustrationKind =
  | "hero"
  | "route"
  | "profile"
  | "business"
  | "automation"
  | "frontend"
  | "matching"
  | "messaging"
  | "game"
  | "notes"
  | "contact";

export function DecorationLayer({ children }: { children: ReactNode }) {
  return (
    <div className="decoration-layer" aria-hidden="true">
      {children}
    </div>
  );
}

function WindowOutline({
  x,
  y,
  width = 160,
  height = 112,
}: {
  x: number;
  y: number;
  width?: number;
  height?: number;
}) {
  return (
    <g transform={"translate(" + x + " " + y + ")"}>
      <rect width={width} height={height} rx="7" className="diagram-paper" />
      <path d={"M0 20H" + width} />
      <circle cx="11" cy="10" r="2" fill="currentColor" stroke="none" />
      <circle cx="19" cy="10" r="2" className="diagram-red-fill" />
      <circle cx="27" cy="10" r="2" fill="currentColor" stroke="none" />
      <rect
        x="16"
        y="35"
        width={width * 0.3}
        height={height * 0.3}
        rx="3"
        className="diagram-shade"
      />
      <path
        d={
          "M" +
          width * 0.52 +
          " 40H" +
          (width - 18) +
          "M" +
          width * 0.52 +
          " 53H" +
          (width - 28) +
          "M16 " +
          (height - 23) +
          "H" +
          (width - 18) +
          "M16 " +
          (height - 13) +
          "H" +
          width * 0.45
        }
        className="diagram-gray"
      />
    </g>
  );
}

function CardOutlines() {
  return (
    <g>
      <rect
        x="115"
        y="150"
        width="90"
        height="138"
        rx="9"
        transform="rotate(-20 160 220)"
        className="diagram-paper"
      />
      <rect
        x="275"
        y="150"
        width="90"
        height="138"
        rx="9"
        transform="rotate(16 320 220)"
        className="diagram-paper"
      />
      <rect
        x="198"
        y="112"
        width="90"
        height="138"
        rx="9"
        transform="rotate(5 240 180)"
        className="diagram-paper"
      />
      <path
        d="M240 157c-10 14-23 20-23 31 0 10 10 14 19 5-1 11-4 15-7 20h22c-4-5-7-9-8-20 9 9 19 5 19-5 0-11-13-17-22-31Z"
        fill="currentColor"
        stroke="none"
      />
    </g>
  );
}

// Decorative diagrams describe development areas; they are not customer screenshots.
export default function PortfolioIllustration({
  kind = "route",
  className = "",
}: {
  kind?: IllustrationKind;
  className?: string;
}) {
  const illustration = (
    <svg
      viewBox="0 0 480 420"
      className={
        "portfolio-illustration illustration-" + kind + " " + className
      }
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g className="diagram-gray">
        <path d="M50 240v70q0 35 36 35h105M105 90h114v70M330 62v87q0 26 25 26h66M421 196v100q0 52-52 52h-48M150 385v-58M356 40v52M30 289h55M287 76h94" />
        <path
          d="M100 250c-43-62-4-154 72-154M288 309c48 79 139 30 139-34"
          strokeDasharray="3 6"
        />
        {[
          [50, 240],
          [105, 90],
          [330, 62],
          [421, 196],
          [150, 385],
          [356, 40],
          [191, 345],
          [369, 348],
        ].map(([cx, cy]) => (
          <circle
            key={cx + "-" + cy}
            cx={cx}
            cy={cy}
            r="2.5"
            fill="currentColor"
            stroke="none"
          />
        ))}
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2, 3].map((column) => (
            <circle
              key={row + "-" + column}
              cx={70 + column * 14}
              cy={132 + row * 14}
              r="1"
              fill="currentColor"
              stroke="none"
            />
          )),
        )}
      </g>
      {(kind === "route" || kind === "hero" || kind === "profile") && (
        <g>
          <path
            className="diagram-route"
            d="M38 345h72c72 0 45-80 118-80s40-100 104-100 57-37 104-92M412 73h24v24"
          />
          <circle cx="161" cy="321" r="7" className="diagram-node" />
          <circle cx="330" cy="165" r="7" className="diagram-node" />
        </g>
      )}
      {kind === "hero" && (
        <g>
          <WindowOutline x={67} y={194} width={168} height={110} />
          <path d="M55 304h192l-5 9H60Z" className="diagram-paper" />
          <Smartphone
            x="336"
            y="238"
            width="60"
            height="96"
            strokeWidth="0.65"
          />
          <rect
            x="244"
            y="330"
            width="50"
            height="50"
            rx="6"
            className="diagram-paper"
          />
          <Settings x="255" y="340" width="30" height="30" strokeWidth="1" />
          <text
            x="62"
            y="178"
            className="diagram-label"
            stroke="none"
            fill="currentColor"
          >
            WEB APPLICATION
          </text>
          <text
            x="327"
            y="356"
            className="diagram-label"
            stroke="none"
            fill="currentColor"
          >
            MOBILE
          </text>
        </g>
      )}
      {kind === "profile" && (
        <path
          d="m159 135 65 126M160 135h45q15 0 20 15"
          className="diagram-route"
        />
      )}
      {kind === "business" && (
        <g>
          <WindowOutline x={95} y={125} width={210} height={140} />
          <Smartphone
            x="332"
            y="199"
            width="65"
            height="105"
            strokeWidth="0.7"
          />
          <CarFront
            x="80"
            y="247"
            width="130"
            height="75"
            strokeWidth="0.7"
            className="diagram-paper"
          />
          <path d="M64 322h174q38 0 38-32" />
        </g>
      )}
      {kind === "automation" && (
        <g>
          <rect
            x="63"
            y="113"
            width="110"
            height="80"
            rx="6"
            className="diagram-paper"
          />
          <Code2 x="96" y="137" width="43" height="34" strokeWidth="1" />
          <path d="M173 153h38l40 42M290 268l38 41h55M290 185l46-43" />
          <Settings
            x="199"
            y="174"
            width="100"
            height="100"
            strokeWidth="0.8"
            className="diagram-paper"
          />
          <Cloud x="336" y="82" width="83" height="67" strokeWidth="0.8" />
          <Database x="359" y="268" width="60" height="79" strokeWidth="0.8" />
        </g>
      )}
      {kind === "frontend" && (
        <g>
          <WindowOutline x={112} y={120} width={214} height={174} />
          <ChartColumn
            x="140"
            y="182"
            width="90"
            height="82"
            strokeWidth="0.8"
          />
          <rect
            x="274"
            y="207"
            width="124"
            height="83"
            rx="6"
            className="diagram-paper"
          />
          <path
            d="M294 232h84M294 247h58M294 262h68"
            className="diagram-gray"
          />
          <circle cx="288" cy="119" r="24" strokeWidth="7" />
          <path
            d="M288 95a24 24 0 0 1 24 24"
            className="diagram-red"
            strokeWidth="7"
          />
        </g>
      )}
      {kind === "matching" && (
        <g>
          <WindowOutline x={93} y={160} width={185} height={126} />
          <path d="M185 158v-34q0-40 51-40h50M279 227h35q29 0 29 28v38" />
          <Search
            x="214"
            y="205"
            width="79"
            height="79"
            strokeWidth="0.8"
            className="diagram-paper"
          />
          <Database x="325" y="263" width="68" height="81" strokeWidth="0.8" />
          <circle cx="284" cy="85" r="7" className="diagram-node" />
        </g>
      )}
      {(kind === "messaging" || kind === "contact") && (
        <g>
          {kind === "messaging" ? (
            <>
              <MessageSquare
                x="104"
                y="109"
                width="157"
                height="118"
                strokeWidth="0.65"
                className="diagram-paper"
              />
              <MessageSquare
                x="89"
                y="246"
                width="131"
                height="92"
                strokeWidth="0.65"
                className="diagram-paper"
              />
              <Settings
                x="291"
                y="240"
                width="90"
                height="90"
                strokeWidth="0.8"
              />
            </>
          ) : (
            <Mail
              x="140"
              y="153"
              width="190"
              height="142"
              strokeWidth="0.6"
              className="diagram-paper"
            />
          )}
          <circle cx="333" cy="165" r="7" className="diagram-red-fill" />
        </g>
      )}
      {kind === "game" && <CardOutlines />}
      {kind === "notes" && (
        <g>
          <FileText
            x="125"
            y="105"
            width="169"
            height="224"
            strokeWidth="0.6"
            className="diagram-paper"
          />
          <path
            d="M90 324v-95q0-21 22-21M300 145h55v60q0 99-80 132"
            className="diagram-route"
          />
          <circle cx="359" cy="181" r="7" className="diagram-red-fill" />
        </g>
      )}
      <circle cx="105" cy="290" r="5" className="diagram-red-fill" />
      <circle cx="393" cy="115" r="4" className="diagram-red-fill" />
      <circle cx="345" cy="352" r="4" className="diagram-node-blue" />
    </svg>
  );
  return <DecorationLayer>{illustration}</DecorationLayer>;
}

export function HeroTrail() {
  const trail = (
    <svg
      viewBox="0 0 400 110"
      className="hero-art-mobile"
      aria-hidden="true"
      focusable="false"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M8 102h65c56 0 40-34 92-34s42-34 96-34 74-9 119-27M366 7h14v14"
        className="diagram-route"
      />
      <circle cx="121" cy="82" r="5" className="diagram-node" />
      <circle cx="261" cy="34" r="5" className="diagram-node" />
    </svg>
  );
  return <DecorationLayer>{trail}</DecorationLayer>;
}

export function BrandMark() {
  return (
    <svg
      viewBox="0 0 56 48"
      aria-hidden="true"
      focusable="false"
      fill="none"
      className="brand-mark"
    >
      <path
        d="M7 9h22v29H5M3 30h12c13 0 11-14 20-14S43 8 52 6M44 6h8v8"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <circle
        cx="29"
        cy="23"
        r="3"
        fill="var(--paper)"
        stroke="var(--red)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
