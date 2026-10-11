export default function BrandMark() {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="brand-mark"
    >
      <path
        d="M24 5C19 5 8 22 8 30c0 8 7 13 16 13s16-5 16-13C40 22 29 5 24 5Z"
        stroke="var(--ink)"
        strokeWidth="3.2"
        fill="var(--paper)"
      />
      <path d="M14 28c1-6 5-13 9-16" stroke="var(--blue)" strokeWidth="2" />
      <circle cx="24" cy="31" r="6" fill="var(--red)" />
    </svg>
  );
}
