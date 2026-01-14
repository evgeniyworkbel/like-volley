import Link from "next/link";
import { navLinks } from "@/shared/constants";
import { cn, formatPhone, getPhoneHref } from "@/shared/lib";
import { CompanyInfo } from "@/shared/cms/payload-types";

type NavbarProps = {
  className?: string;
  data: CompanyInfo;
  onLinkClick?: VoidFunction;
};

export function Navbar({ className, data, onLinkClick }: NavbarProps) {
  const { mobilePhone } = data;

  return (
    <nav
      className={cn(
        "flex items-center gap-15 font-bold xl:text-lg [&>a:hover]:underline",
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
      <a href={getPhoneHref(mobilePhone)} rel="noopener noreferrer" onClick={onLinkClick}>
        {formatPhone(mobilePhone)}
      </a>
    </nav>
  );
}
