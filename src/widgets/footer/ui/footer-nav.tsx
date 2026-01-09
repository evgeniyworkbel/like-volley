import Link from "next/link";
import { cn } from "@/shared/lib";
import { navLinks } from "@/shared/constants";
import { NavbarProps } from "@/shared/types";

export function FooterNav({ className, onLinkClick }: NavbarProps) {
  return (
    <nav
      className={cn(
        "flex flex-col items-center gap-[18px] text-lg font-bold uppercase md:items-start xl:text-lg [&>a:hover]:underline",
        className,
      )}
    >
      <Link href={navLinks.locationsSection.href} onClick={onLinkClick}>
        {navLinks.locationsSection.title}
      </Link>
      <Link href={navLinks.coachesSection.href} onClick={onLinkClick}>
        {navLinks.coachesSection.title}
      </Link>
      <Link href={navLinks.faqSection.href} onClick={onLinkClick}>
        {navLinks.faqSection.title}
      </Link>
      <Link href={navLinks.gallerySection.href} onClick={onLinkClick}>
        {navLinks.gallerySection.title}
      </Link>
    </nav>
  );
}
