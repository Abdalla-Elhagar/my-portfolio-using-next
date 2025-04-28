"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface navItems {
  id: string;
  name: string;
  path: string;
}

const navItems: navItems[] = [
  {
    id: "1",
    name: "home",
    path: "/",
  },
  {
    id: "2",
    name: "services",
    path: "/services",
  },
  {
    id: "3",
    name: "resume",
    path: "/resume",
  },
  {
    id: "4",
    name: "contact",
    path: "/contact",
  },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {navItems.map((link: navItems) => (
        <Link
          className={`${
            link.path === pathname && "border-b-2 border-main text-main"
          } hover:text-mainHover hover:border-b-2 hover:border-mainHover`}
          key={link.id}
          href={link.path}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
