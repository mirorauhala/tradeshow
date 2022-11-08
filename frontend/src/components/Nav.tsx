"use client";
import clsx from "clsx";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import HomeBlueIcon from "../icons/home-blue.svg";
import AgendaBlueIcon from "../icons/agenda-blue.svg";
import ExhibitorBlueIcon from "../icons/exhibitors-blue.svg";
import HomeDarkIcon from "../icons/home-dark.svg";
import AgendaDarkIcon from "../icons/agenda-dark.svg";
import ExhibitorDarkIcon from "../icons/exhibitors-dark.svg";
import { usePathname } from "next/navigation";

const NavLink = ({
  isActive,
  href,
  children,
}: {
  isActive?: boolean;
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        "webkit-link flex flex-col items-center rounded-xl px-6 py-1 text-sm font-medium transition-colors duration-75 active:bg-slate-50",
        {
          "bg-sky-50 text-blue-500": isActive,
          "text-slate-500": !isActive,
        }
      )}
    >
      {children}
    </Link>
  );
};

type LinkType = {
  href: string;
  icon: ImageProps["src"];
  activeIcon: ImageProps["src"];
  label: string;
  isActive: (pathname: string) => boolean;
};

export const Nav = () => {
  const pathname = usePathname();

  const links: LinkType[] = [
    {
      href: "/exhibitors",
      icon: ExhibitorDarkIcon,
      activeIcon: ExhibitorBlueIcon,
      label: "Exhibitors",
      isActive: (pathname) => pathname.startsWith("/exhibitors"),
    },
    {
      href: "/",
      icon: HomeDarkIcon,
      activeIcon: HomeBlueIcon,
      label: "Home",
      isActive: (pathname) => pathname === "/",
    },
    {
      href: "/agenda",
      icon: AgendaDarkIcon,
      activeIcon: AgendaBlueIcon,
      label: "Agenda",
      isActive: (pathname) => pathname.startsWith("/agenda"),
    },
  ];

  return (
    <nav className="fixed bottom-0 w-full border-t border-slate-200 bg-white px-2 py-1">
      <ul className="flex flex-row justify-center gap-1 py-0.5">
        {links.map((link) => {
          const isActive = link.isActive(pathname);
          return (
            <li key={link.href}>
              <NavLink href={link.href} isActive={isActive}>
                <Image
                  src={isActive ? link.activeIcon : link.icon}
                  priority={true}
                  alt=""
                />
                {link.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
