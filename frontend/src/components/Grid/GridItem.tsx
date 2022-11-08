import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { PropsWithChildren } from "react";

export type GridItemVariantProps = VariantProps<typeof item>;
const item = cva(
  [
    "rounded-xl",
    "text-center",
    "font-bold",
    "h-32",
    "select-none",
    "transition-opacity",
    "duration-75",
    "webkit-link",
    "active:opacity-60",
  ],
  {
    variants: {
      color: {
        green: "bg-green-200",
        red: "bg-pink-200",
        blue: "bg-sky-200",
        yellow: "bg-orange-200",
      },
    },
    defaultVariants: {
      color: "green",
    },
  }
);

export interface GridItemProps extends GridItemVariantProps {
  href: string;
}

export const GridItem = ({
  href,
  color,
  children,
}: PropsWithChildren<GridItemProps>) => {
  return (
    <li className={item({ color })}>
      <Link href={href} className="h-full w-full p-1">
        {children}
      </Link>
    </li>
  );
};
