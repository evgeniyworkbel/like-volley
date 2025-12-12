import Link from "next/link";
import { coaches, faq, locations, gallery, navLinks } from "@/shared/constants";
import { cn } from "@/shared/lib";

type NavbarProps = { className?: string; onLinkClick?: VoidFunction };

export function Navbar({ className, onLinkClick }: NavbarProps) {
  return (
    <nav
      className={cn(
        "flex items-center gap-15 font-bold xl:text-lg [&>*:not(:last-child)]:xl:hidden [&>a:hover]:underline",
        className,
      )}
    >
      {/* todo: отключил временно до особых распоряжений */}

      {/* <Link href={navLinks.locations.href} onClick={onLinkClick}>
        {navLinks.locations.title}
      </Link>
      <Link href={navLinks.about.href} onClick={onLinkClick}>
        {navLinks.about.title}
      </Link>
      <Link href={navLinks.gallery.href} onClick={onLinkClick}>
        {navLinks.gallery.title}
      </Link> */}

      {/* todo: первая версия сайта */}

      <Link href={`#${locations}`} onClick={onLinkClick}>
        {navLinks.locations.title}
      </Link>
      <Link href={`#${coaches}`} onClick={onLinkClick}>
        {navLinks.coaches.title}
      </Link>
      <Link href={`#${faq}`} onClick={onLinkClick}>
        {navLinks.faq.title}
      </Link>
      <Link href={`#${gallery}`} onClick={onLinkClick}>
        {navLinks.gallery.title}
      </Link>
      <Link href={navLinks.phone.href} onClick={onLinkClick}>
        {navLinks.phone.title}
      </Link>
    </nav>
  );
}
