import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/shared/constants";

export function Header() {
  return (
    <header className="flex h-27 justify-between rounded-b-[14px] px-21 py-6 text-accent-orange">
      <Image
        src="/logo.png"
        width={89}
        height={59}
        alt="Логотип школы волейбола Like Volley"
      />
      <nav className="flex items-center gap-15 font-bold">
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
    </header>
  );
}
