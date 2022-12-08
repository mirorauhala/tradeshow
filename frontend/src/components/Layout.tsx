import { Nav } from "../components/Nav";
import { AppBar } from "@/components";
import { type ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppBar />
      <div className="px-5 pt-6">{children}</div>
      <Nav />
    </>
  );
}
