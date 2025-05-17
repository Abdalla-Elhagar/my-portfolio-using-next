"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

interface socialType {
  icon: ReactNode;
  path: string;
}
const socials: socialType[] = [
  { icon: <FiGithub />, path: "https://github.com/Abdalla-Elhagar" },
  {
    icon: <FiLinkedin />,
    path: "https://www.linkedin.com/in/abdalla-elhgar-92a270241",
  },
  {
    icon: <FiInstagram />,
    path: "https://www.instagram.com/abdalla_elhagar0/",
  },
];
export default function Socials({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) {
  return (
    <div className={containerStyles}>
      {socials.map((item: socialType, index: number) => {
        return (
          <Link
            passHref
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
