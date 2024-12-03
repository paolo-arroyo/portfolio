'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  }
];

type Nav = {
  className?: string;
}

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-row gap-8">
      {navLinks.map((link, index) => {
        return (
          <Link 
            href={link.href}
            key={index}
            className={`
              ${link.href === pathname ? "text-accent border-b-2" : "text-white"}
              hover:text-accent transition-all
            `}>
            {link.title}
          </Link>
        )
      })}
    </nav>
  );
}

export default Nav;