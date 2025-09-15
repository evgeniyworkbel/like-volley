import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/shared/constants";
import { MenuIcon } from "@/shared/icons";

export function Header() {
  return (
    <header className="flex items-center justify-between py-6 pr-12 pl-6 text-accent-orange xl:px-20 xl:py-[32px]">
      <Image
        src="/logo.png"
        width={89}
        height={59}
        alt="Логотип школы волейбола Like Volley"
      />
      <nav className="hidden items-center gap-15 font-bold xl:flex xl:text-lg">
        <Link className="hover:underline" href={navLinks.home.href}>
          {navLinks.home.title}
        </Link>
        <Link className="hover:underline" href={navLinks.location.href}>
          {navLinks.location.title}
        </Link>
        <Link className="hover:underline" href={navLinks.about.href}>
          {navLinks.about.title}
        </Link>
        <Link className="hover:underline" href={navLinks.gallery.href}>
          {navLinks.gallery.title}
        </Link>
        <Link className="hover:underline" href={navLinks.phone.href}>
          {navLinks.phone.title}
        </Link>
      </nav>
      <MenuIcon className="flex xl:hidden" width={35} height={20} />
    </header>
  );
}
