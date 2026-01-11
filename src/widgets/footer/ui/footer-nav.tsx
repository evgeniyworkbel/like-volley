import Link from "next/link";
import { navLinks } from "@/shared/constants";

export function FooterNav() {
  return (
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
  );
}
