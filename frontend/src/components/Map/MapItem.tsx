import { type ReactNode } from "react";

export function MapItem({ children }: { children: ReactNode }) {
  return <div className="mb-20">{children}</div>;
}
