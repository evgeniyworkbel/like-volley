import { navLinks } from "@/shared/constants";
import Link from "next/link";

export function Documents() {
  return (
    <div className="flex flex-col items-center justify-between gap-[18px] gap-x-12 text-sm text-[18px] xl:text-xs [&>:not(:first-child)]:font-bold [&>:not(:first-child)]:uppercase [&>a:hover]:underline">
      <p className="text-[14px]">Документы</p>
      <Link href={navLinks.policy.href}>{navLinks.policy.title}</Link>
      <Link href={navLinks.offerAgreement.href} rel="nooper noreferrer">
        {navLinks.offerAgreement.title}
      </Link>
      {/* @todo нет еще такой страницы */}
      {/* <Link href={navLinks.price.href} rel="nooper noreferrer">
        {navLinks.price.title}
      </Link> */}
    </div>
  );
}
