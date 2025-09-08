import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/shared/constants";

export function Header() {
  return (
    <header className="flex h-27 justify-between rounded-b-[14px] bg-accent-orange px-21 py-6">
      <Image
        src="/logo.png"
        width={89}
        height={59}
        alt="Логотип школы волейбола Like Volley"
      />
      <nav className="flex items-center gap-15 font-bold">
        <Link href={navLinks.home.href}>{navLinks.home.title}</Link>
        <Link href={navLinks.blog.href}>{navLinks.blog.title}</Link>
        <Link href={navLinks.about.href}>{navLinks.about.title}</Link>
        <Link href={navLinks.reviews.href}>{navLinks.reviews.title}</Link>
        <Link href={navLinks.phone.href}>{navLinks.phone.title}</Link>
      </nav>
    </header>
  );
}
