import Link from "next/link";
import { navLinks } from "@/shared/constants";
import { Title } from "@/shared/ui";

export function FooterNav() {
  return (
    <div className="flex flex-col items-center justify-center gap-[50px] text-sm md:flex-row md:items-start md:gap-33 xl:justify-between xl:gap-[50px]">
      <div className="flex flex-col gap-[18px] md:gap-7 xl:items-start">
        <Title className="font-inter text-sm font-light text-background md:text-sm">
          Навигация сайта
        </Title>
        <ul className="flex flex-col items-center gap-[18px] text-lg font-bold uppercase md:items-start xl:text-lg [&>a:hover]:underline">
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
      <div className="flex flex-col items-center justify-between gap-[18px] text-[18px] md:gap-7 [&>:not(:first-child)]:font-bold [&>:not(:first-child)]:uppercase">
        <h2 className="text-sm">Документы</h2>
        <ul className="flex flex-col items-center gap-[18px] md:items-start [&>li:hover]:underline [&>li:hover]:underline-offset-2">
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
