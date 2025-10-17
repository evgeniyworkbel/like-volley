import { navLinks } from "@/shared/constants";
import { Button } from "@/shared/ui";
import Link from "next/link";

type CloseMenyProps = Pick<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
>;

export function CloseMeny({ onClick }: CloseMenyProps) {
  return (
    <>
      <Button onClick={onClick}>
        <div className="relative h-7 w-7">
          <div className="absolute top-1/2 left-1/2 h-0.5 w-8 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-accent-orange"></div>
          <div className="absolute top-1/2 left-1/2 h-0.5 w-8 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-accent-orange"></div>
        </div>
      </Button>
      <nav className="fixed top-30 left-0 flex w-full flex-col items-center gap-15 rounded-b-2xl bg-[oklch(1_0_0_/_60%)] pb-4 font-shantell text-2xl font-bold backdrop-blur-xl [&>a:hover]:underline">
        <Link href={navLinks.home.href}>{navLinks.home.title}</Link>
        <Link href={navLinks.locations.href}>{navLinks.locations.title}</Link>
        <Link href={navLinks.about.href}>{navLinks.about.title}</Link>
        <Link href={navLinks.gallery.href}>{navLinks.gallery.title}</Link>
        <Button className="items-center justify-center rounded-[20px] bg-accent-blue px-12 py-4 font-shantell text-2xl text-white">
          {navLinks.phone.title}
        </Button>
      </nav>
    </>
  );
}
