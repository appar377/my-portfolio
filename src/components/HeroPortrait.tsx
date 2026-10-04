export default function HeroPortrait() {
  return (
    <div className="hero-portrait" aria-hidden="true">
      <div className="portrait-tile">
        <span>y.</span>
      </div>
      <svg className="portrait-path" viewBox="0 0 500 400" focusable="false">
        <defs>
          <linearGradient id="portrait-route" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#4a8ac4" stopOpacity="0" />
            <stop offset="0.3" stopColor="#67e8f9" />
            <stop offset="0.8" stopColor="#a89aff" />
            <stop offset="1" stopColor="#67e8f9" />
          </linearGradient>
        </defs>
        <path
          className="portrait-route"
          d="M0 330H327L390 250H480M463 233L480 250L463 267"
        />
        <circle className="portrait-node" cx="390" cy="250" r="11" />
      </svg>
    </div>
  );
}
