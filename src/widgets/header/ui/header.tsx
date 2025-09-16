import { navLinks } from "@/shared/constants";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between py-6 pr-12 pl-6 text-accent-orange xl:px-20">
      <Image
        src="/logo.png"
        width={89}
        height={59}
        alt="Логотип школы волейбола Like Volley"
      />
      <nav className="hidden items-center gap-15 font-bold xl:flex xl:text-lg [&>a:hover]:underline">
        <Link href={navLinks.home.href}>{navLinks.home.title}</Link>
        <Link href={navLinks.locations.href}>{navLinks.locations.title}</Link>
        <Link href={navLinks.about.href}>{navLinks.about.title}</Link>
        <Link href={navLinks.gallery.href}>{navLinks.gallery.title}</Link>
        <Link href={navLinks.phone.href}>{navLinks.phone.title}</Link>
      </nav>
      <div className="flex flex-col gap-2 xl:hidden [&_>*]:w-8 [&_>*]:border [&_>*]:border-accent-orange">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
}
