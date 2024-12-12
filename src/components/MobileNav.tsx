'use client';

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "My Work",
    href: "/work",
  },
  {
    title: "Resume",
    href: "/resume",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Contact",
    href: "/contact",
  }
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-3xl text-accent"></CiMenuFries>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-8 text-center text-2xl">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <h1> Paolo<span className="text-accent">.</span></h1>
          </Link>
        </div>
        <nav className="flex flex-col gap-8 justify-center items-center">
          {navLinks.map((link, index) => {
            return (
              <Link
                href={link.href}
                key={index}
                className={`
                  ${link.href === pathname ? "text-accent border-b-2 border-accent" : "text-white"}
                  hover:text-accent text-xl capitalize transition-all
                `}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav;