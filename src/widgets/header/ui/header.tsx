"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/shared/constants";
import { MobileMenu } from "./mobile-menu";
import { Navbar } from "./navbar";
import { cn } from "@/shared/lib";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header
      className={cn(
        "sticky top-0 isolate z-40 flex items-center justify-between rounded-b-[14px] bg-background/60 py-2 pr-12 pl-6 text-accent-orange shadow-[1px_2px_6px_0_oklch(0_0_0/0.12)] backdrop-blur-sm xl:px-20",
        { "bg-background backdrop-blur-none": isOpen },
      )}
    >
      <Link href={navLinks.home.href}>
        <Image src="/logo.svg" width={122} height={76} alt="Логотип школы волейбола Like Volley" />
      </Link>
      <Navbar className="hidden xl:flex" />
      <MobileMenu isOpen={isOpen} setIsOpenAction={setIsOpen} />
    </header>
  );
}
