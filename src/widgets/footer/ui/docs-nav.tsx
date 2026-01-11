import Link from "next/link";
import { navLinks } from "@/shared/constants";

export function DocsNav() {
  return (
    <div className="flex flex-col items-center justify-between gap-[18px] text-[18px] md:items-start md:gap-7 [&>:not(:first-child)]:font-bold [&>:not(:first-child)]:uppercase [&>a:hover]:underline [&>a:hover]:underline-offset-2">
      <h2 className="text-sm">Документы</h2>
      <Link href={navLinks.policy.href}>{navLinks.policy.title}</Link>
      <Link href={navLinks.offerAgreement.href} rel="nooper noreferrer">
        {navLinks.offerAgreement.title}
      </Link>
    </div>
  );
}
