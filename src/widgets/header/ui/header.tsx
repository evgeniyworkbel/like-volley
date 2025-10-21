"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BurgerMenu } from "./burger-menu";
import { MobileMenu } from "./mobile-menu";
import { Navbar } from "./navbar";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <header className="flex items-center justify-between py-6 pr-12 pl-6 text-accent-orange xl:px-20">
      <Image
        src="/logo.svg"
        width={122}
        height={78}
        alt="Логотип школы волейбола Like Volley"
      />
      <Navbar />
      {!isOpen && <BurgerMenu onClick={() => setIsOpen(!isOpen)} />}
      {isOpen && <MobileMenu onClick={() => setIsOpen(!isOpen)} />}
    </header>
  );
}
