"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface navItems {
  id: string;
  name: string;
  path: string;
}

export const navItems: navItems[] = [
  {
    id: "1",
    name: "Home",
    path: "/",
  },
  {
    id: "2",
    name: "Services",
    path: "/services",
  },
  {
    id: "3",
    name: "Resume",
    path: "/resume",
  },
  {
    id: "4",
    name: "Projects",
    path: "/Projects",
  },
];

export default function NavBar({ textSize }: { textSize: string }) {
  const pathname = usePathname();
  return (
    <>
      {navItems.map((link: navItems) => (
        <Link
          className={`${
            link.path === pathname && "border-b-2 border-main text-main"
          } hover:text-mainHover text-${textSize} hover:border-b-2 hover:border-mainHover`}
          key={link.id}
          href={link.path}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
