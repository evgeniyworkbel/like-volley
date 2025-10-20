import { navLinks } from "@/shared/constants";
import { Button } from "@/shared/ui";
import Link from "next/link";
import { CloseMeny } from "./close-menu";
import { BurgerMenuProps } from "../model/types";

export function MobileMenu({ onClick }: BurgerMenuProps) {
  return (
    <div>
      <CloseMeny onClick={onClick} />
      <nav className="fixed top-40 left-0 flex w-full flex-col items-center gap-15 rounded-b-2xl bg-[oklch(1_0_0_/_60%)] pb-5 font-shantell text-2xl font-bold backdrop-blur-xl xl:hidden [&>a:hover]:underline">
        <Link href={navLinks.home.href}>{navLinks.home.title}</Link>
        <Link href={navLinks.locations.href}>{navLinks.locations.title}</Link>
        <Link href={navLinks.about.href}>{navLinks.about.title}</Link>
        <Link href={navLinks.gallery.href}>{navLinks.gallery.title}</Link>
        <Button className="items-center justify-center rounded-[20px] bg-accent-blue px-12 py-4 font-shantell text-2xl text-white">
          <Link href={navLinks.phone.href}>{navLinks.phone.title}</Link>
        </Button>
      </nav>
    </div>
  );
}
