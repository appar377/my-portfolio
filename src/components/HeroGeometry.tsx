export default function HeroGeometry() {
  return (
    <div className="hero-geometry" aria-hidden="true">
      <div className="hero-glow hero-glow-cyan" />
      <div className="hero-glow hero-glow-violet" />
      <svg className="hero-mesh" viewBox="0 0 800 800" focusable="false">
        <g className="mesh-outer">
          <polygon points="400,52 655,172 750,430 575,690 265,738 54,482 128,204" />
          <path d="M400 52 575 690 128 204 750 430 265 738 655 172 54 482Z" />
          <path d="M400 52 750 430 54 482 575 690 655 172 265 738 128 204Z" />
        </g>
        <g className="mesh-inner">
          <polygon points="400,138 645,288 644,559 400,690 160,560 152,292" />
          <path d="M400 138 644 559 152 292 400 690 645 288 160 560Z" />
        </g>
        <g className="mesh-nodes">
          <circle cx="400" cy="52" r="3" />
          <circle cx="655" cy="172" r="3" />
          <circle cx="54" cy="482" r="3" />
          <circle cx="265" cy="738" r="3" />
        </g>
      </svg>
      <span className="hero-particle particle-one" />
      <span className="hero-particle particle-two" />
      <span className="hero-particle particle-three" />
      <span className="hero-particle particle-four" />
    </div>
  );
}
