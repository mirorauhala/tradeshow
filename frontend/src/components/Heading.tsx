import { type ReactNode } from "react";

export const Heading = ({ children }: { children: ReactNode }) => {
  return <h1 className="mb-4 pb-6 text-center text-4xl">{children}</h1>;
};
