"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/shared/constants";
import { cn } from "@/shared/lib";
import { MobileMenu } from "./mobile-menu";
import { Navbar } from "./navbar";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-20 flex items-center justify-between bg-background/60 py-2 pr-12 pl-6 text-accent-orange shadow-[1px_2px_6px_0_oklch(0_0_0/0.12)] backdrop-blur-sm xl:px-20",
        { "bg-background backdrop-blur-none": isOpen },
      )}
    >
      <Link href={navLinks.home.href}>
        <Image src="/logo.svg" width={122} height={76} alt="Логотип школы волейбола Like Volley" />
      </Link>
      <Navbar className="hidden xl:flex" />
      <MobileMenu openMenu={openMenu} closeMenu={closeMenu} isOpen={isOpen} />
    </header>
  );
}
