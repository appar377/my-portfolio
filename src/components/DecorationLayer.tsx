import type { ReactNode } from "react";

export default function DecorationLayer({ children }: { children: ReactNode }) {
  return (
    <div className="decoration-layer" aria-hidden="true">
      {children}
    </div>
  );
}
