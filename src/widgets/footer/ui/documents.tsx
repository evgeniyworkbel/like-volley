import Link from "next/link";
import { navLinks } from "@/shared/constants";
import { cn } from "@/shared/lib";

type DocumentsProps = { className: string };

export function Documents({ className }: DocumentsProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-between gap-[18px] text-sm text-[18px] md:gap-7 [&>:not(:first-child)]:font-bold [&>:not(:first-child)]:uppercase [&>a:hover]:underline [&>a:hover]:underline-offset-2",
        className,
      )}
    >
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
