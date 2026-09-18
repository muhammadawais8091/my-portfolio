"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { NAV_LINKS } from "@/constants";

const Nav = () => {
  const pathName = usePathname();

  return (
    <nav className="flex gap-8">
      {NAV_LINKS.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathName && "border-accent border-b-2 text-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
