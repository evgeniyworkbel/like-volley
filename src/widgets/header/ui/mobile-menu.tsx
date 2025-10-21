"use client";

import { CloseMenu } from "./close-menu";
import { Navbar } from "./navbar";
import { useState, useEffect } from "react";
import { BurgerMenu } from "./burger-menu";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <div className="xl:hidden">
      {!isOpen && <BurgerMenu onClick={() => setIsOpen(!isOpen)} />}
      {isOpen && (
        <div className="xl:hidden">
          <CloseMenu onClick={() => setIsOpen(!isOpen)} />
          <Navbar className="fixed top-40 left-0 flex w-full flex-col rounded-b-2xl bg-[oklch(1_0_0_/_60%)] pb-5 font-shantell text-2xl backdrop-blur-sm transition-all duration-900 ease-in-out [&>*:last-child]:rounded-[40px] [&>*:last-child]:bg-accent-blue [&>*:last-child]:px-12 [&>*:last-child]:py-4 [&>*:last-child]:text-white [&>*:last-child]:no-underline" />
        </div>
      )}
    </div>
  );
}
