import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import { Navbar } from "./navbar";
import { navLinks } from "@/shared/constants";

export function Header() {
  return (
    <header className="flex items-center justify-between py-6 pr-12 pl-6 text-accent-orange xl:px-20">
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
