import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { headerSectionId, navLinks } from "@/shared/constants";
import { cn } from "@/shared/lib";
import { Navbar } from "@/shared/ui";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  return (
    <header
      id={headerSectionId}
      className={cn(
        "sticky top-0 z-20 flex items-center justify-between bg-background/60 py-2 pr-12 pl-6 text-accent-orange shadow-[1px_2px_6px_0_oklch(0_0_0/0.12)] backdrop-blur-sm has-data-[menu-open='true']:bg-background has-data-[menu-open='true']:backdrop-blur-none xl:px-20",
      )}
    >
      <Link href={navLinks.home.href}>
        <Image src="/logo.svg" width={122} height={76} alt="Логотип школы волейбола Like Volley" />
      </Link>
      <Navbar className="hidden xl:flex" />
      <MobileMenu />
    </header>
  );
}
