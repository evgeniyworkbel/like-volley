import Link from "next/link";
import { navLinks } from "@/shared/constants";

export function FooterNav() {
  return (
    <div className="flex flex-col items-center justify-center gap-[50px] md:flex-row md:items-start md:gap-33 xl:justify-between xl:gap-[50px] [&_a:hover]:underline [&_a:hover]:underline-offset-2">
      <div className="flex flex-col gap-[18px] md:gap-7 xl:items-start">
        <h2 className="text-sm">Навигация сайта</h2>
        <ul className="flex flex-col items-center gap-[18px] text-lg font-bold uppercase md:items-start xl:text-lg">
          <li>
            <Link href={navLinks.locationsSection.href}>{navLinks.locationsSection.title}</Link>
          </li>
          <li>
            <Link href={navLinks.coachesSection.href}>{navLinks.coachesSection.title}</Link>
          </li>
          <li>
            <Link href={navLinks.faqSection.href}>{navLinks.faqSection.title}</Link>
          </li>
          <li>
            <Link href={navLinks.gallerySection.href}>{navLinks.gallerySection.title}</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-[18px] text-[18px] md:items-start md:gap-7">
        <h2 className="text-sm">Документы</h2>
        <ul className="flex flex-col items-center gap-[18px] font-bold uppercase md:items-start">
          <li>
            <Link href={navLinks.policy.href}>{navLinks.policy.title}</Link>
          </li>
          <li>
            <Link href={navLinks.offerAgreement.href} rel="noopener noreferrer">
              {navLinks.offerAgreement.title}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
