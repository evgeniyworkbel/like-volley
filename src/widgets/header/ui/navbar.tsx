import Link from "next/link";
import { navLinks } from "@/shared/constants";
import { cn } from "@/shared/lib";

type NavbarProps = { className?: string; onLinkClick?: VoidFunction };

export function Navbar({ className, onLinkClick }: NavbarProps) {
  return (
    <nav
      className={cn(
        "flex items-center gap-15 font-bold xl:text-lg [&>a:hover]:underline",
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
      <Link href={navLinks.phone.href} onClick={onLinkClick}>
        {navLinks.phone.title}
      </Link>
    </nav>
  );
}
