import Link, { LinkRestProps } from "next/link";
import { navLinks } from "@/shared/constants";
import { cn } from "@/shared/lib";

type NavbarProps = Partial<Pick<LinkRestProps, "className">>;

export function Navbar({ className }: NavbarProps) {
  return (
    <nav
      className={cn(
        "hidden items-center gap-15 font-bold xl:flex xl:text-lg [&>a:hover]:underline",
        className,
      )}
    >
      <Link href={navLinks.home.href}>{navLinks.home.title}</Link>
      <Link href={navLinks.locations.href}>{navLinks.locations.title}</Link>
      <Link href={navLinks.about.href}>{navLinks.about.title}</Link>
      <Link href={navLinks.gallery.href}>{navLinks.gallery.title}</Link>
      <Link href={navLinks.phone.href}>{navLinks.phone.title}</Link>
    </nav>
  );
}
