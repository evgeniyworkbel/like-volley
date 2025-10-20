"use client";

import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/shared/constants";
import { useState } from "react";
import { BurgerMenu } from "./burger-menu";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  const [open, setOpen] = useState<false | true>(false);

  return (
    <header className="flex items-center justify-between py-6 pr-12 pl-6 text-accent-orange xl:px-20">
      <Image
        src="/logo.svg"
        width={122}
        height={78}
        alt="Логотип школы волейбола Like Volley"
      />
      <nav className="hidden items-center gap-15 font-bold xl:flex xl:text-lg [&>a:hover]:underline">
        <Link href={navLinks.home.href}>{navLinks.home.title}</Link>
        <Link href={navLinks.locations.href}>{navLinks.locations.title}</Link>
        <Link href={navLinks.about.href}>{navLinks.about.title}</Link>
        <Link href={navLinks.gallery.href}>{navLinks.gallery.title}</Link>
        <Link href={navLinks.phone.href}>{navLinks.phone.title}</Link>
      </nav>
      {!open && <BurgerMenu onClick={() => setOpen(!open)} />}
      {open && <MobileMenu onClick={() => setOpen(!open)} />}
    </header>
  );
}
