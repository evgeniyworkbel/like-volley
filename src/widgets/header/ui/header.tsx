import Image from "next/image";
import { MobileMenu } from "./mobile-menu";
import { Navbar } from "./navbar";

export function Header() {
  return (
    <header className="flex items-center justify-between py-6 pr-12 pl-6 text-accent-orange xl:px-20">
      <Image
        src="/logo.svg"
        width={122}
        height={78}
        alt="Логотип школы волейбола Like Volley"
      />
      <Navbar />
      <MobileMenu />
    </header>
  );
}
