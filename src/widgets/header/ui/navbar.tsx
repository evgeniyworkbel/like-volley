import Link from "next/link";
import { navLinks } from "@/shared/constants";
import { cn } from "@/shared/lib";

type NavbarProps = { className?: string; onClick?: VoidFunction };

export function Navbar({ className, onClick }: NavbarProps) {
  return (
    <nav
      className={cn(
        "flex items-center gap-15 font-bold xl:text-lg [&>a:hover]:underline",
        className,
      )}
    >
      <Link href={navLinks.home.href} onClick={onClick}>
        {navLinks.home.title}
      </Link>
      <Link href={navLinks.locations.href} onClick={onClick}>
        {navLinks.locations.title}
      </Link>
      <Link href={navLinks.about.href} onClick={onClick}>
        {navLinks.about.title}
      </Link>
      <Link href={navLinks.gallery.href} onClick={onClick}>
        {navLinks.gallery.title}
      </Link>
      <Link href={navLinks.phone.href} onClick={onClick}>
        {navLinks.phone.title}
      </Link>
    </nav>
  );
}
