import Image from "next/image";
import Link from "next/link";
import { getPayloadClient } from "@/shared/cms";
import { navLinks } from "@/shared/constants";
import { cn } from "@/shared/lib";
import { Navbar } from "./navbar";
import { MobileMenu } from "./mobile-menu";

export async function Header() {
  const payload = await getPayloadClient();
  const companyInfo = await payload.findGlobal({ slug: "company-info" });

  return (
    <header
      className={cn(
        "sticky top-0 z-20 flex items-center justify-between bg-background/60 py-2 pr-12 pl-6 text-accent-orange shadow-[1px_2px_6px_0_oklch(0_0_0/0.12)] backdrop-blur-sm *:mx-auto *:max-w-360 has-data-[menu-open='true']:bg-background has-data-[menu-open='true']:backdrop-blur-none xl:px-20",
      )}
    >
      <Link href={navLinks.home.href}>
        <Image src="/logo.svg" width={122} height={76} alt="Логотип школы волейбола Like Volley" />
      </Link>
      <Navbar className="hidden xl:flex" data={companyInfo} />
      <MobileMenu data={companyInfo} />
    </header>
  );
}
