"use client";

import { useState, useEffect } from "react";
import { CloseMenuIcon } from "./close-menu-icon";
import { Navbar } from "./navbar";
import { BurgerMenuIcon } from "./burger-menu-icon"; // исправлен путь (убран пробел)
import { Button } from "@/shared/ui";
import { cn } from "@/shared/lib";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="flex xl:hidden">
      <Button onClick={isOpen ? closeMenu : openMenu}>
        {isOpen ? <CloseMenuIcon /> : <BurgerMenuIcon />}
      </Button>
      <Navbar
        onClick={closeMenu}
        className={cn(
          "fixed top-5 left-0 z-10 w-full flex-col rounded-b-2xl bg-[oklch(1_0_0_/_60%)] pb-5 font-shantell text-2xl backdrop-blur-sm transition-all duration-500 ease-in-out [&>*:last-child]:rounded-[40px] [&>*:last-child]:bg-accent-blue [&>*:last-child]:px-12 [&>*:last-child]:py-4 [&>*:last-child]:text-white [&>*:last-child]:no-underline",
          {
            "translate-y-30": isOpen,
            "pointer-events-none invisible -translate-y-full": !isOpen,
          },
        )}
      />
    </div>
  );
}
