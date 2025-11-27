import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/shared/constants";
import { MobileMenu } from "./mobile-menu";
import { Navbar } from "./navbar";

export function Header() {
  return (
    <header className="flex items-center justify-between rounded-b-[14px] py-6 pr-12 pl-6 text-accent-orange shadow-[1px_2px_6px_0_oklch(0_0_0_/_0.12)] xl:px-20">
      <Link href={navLinks.home.href}>
        <Image
          className="z-20"
          src="/logo.svg"
          width={122}
          height={76}
          alt="Логотип школы волейбола Like Volley"
        />
      </Link>
      <Navbar className="hidden xl:flex" />
      <MobileMenu />
    </header>
  );
}
