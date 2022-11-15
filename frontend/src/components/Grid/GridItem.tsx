import Link from "next/link";
import type { PropsWithChildren } from "react";

type GridItemProps = PropsWithChildren<{
  href: string;
}>;

export const GridItem = ({ href, children }: GridItemProps) => {
  return (
    <li className="h-18 webkit-link flex select-none rounded-xl bg-[#0D3D61] px-3 py-3 text-center text-xl font-bold text-white transition-opacity duration-75 active:opacity-60">
      <Link href={href} className="h-full w-full p-1">
        {children}
      </Link>
    </li>
  );
};
