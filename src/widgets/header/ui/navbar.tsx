import Link from "next/link";
import { navLinks } from "@/shared/constants";
import { cn, formatPhone, getPhoneHref } from "@/shared/lib";
import { CompanyInfo } from "@/shared/cms/payload-types";

type NavbarProps = {
  className?: string;
  phoneLinkClassName?: string;
  data: CompanyInfo;
  onLinkClick?: VoidFunction;
};

export function Navbar({ className, phoneLinkClassName, data, onLinkClick }: NavbarProps) {
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
      <Link href={navLinks.giftCertificatesSection.href} onClick={onLinkClick}>
        {navLinks.giftCertificatesSection.title}
      </Link>
      <Link href={navLinks.faqSection.href} onClick={onLinkClick}>
        {navLinks.faqSection.title}
      </Link>
      <Link href={navLinks.blog.href} onClick={onLinkClick}>
        {navLinks.blog.title}
      </Link>
      <a
        className={phoneLinkClassName}
        href={getPhoneHref(mobilePhone)}
        rel="noopener noreferrer"
        onClick={onLinkClick}
      >
        {formatPhone(mobilePhone)}
      </a>
    </nav>
  );
}
