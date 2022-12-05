import { type ReactNode } from "react";

export const Grid = ({ children }: { children: ReactNode }) => {
  return <ul className="grid grid-flow-row gap-3 ">{children}</ul>;
};
