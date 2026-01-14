"use client";

import { useEffect, useState } from "react";
import { Button } from "@/shared/ui";
import { cn } from "@/shared/lib";
import { CloseMenuIcon } from "./close-menu-icon";
import { Navbar } from "./navbar";
import { BurgerMenuIcon } from "./burger-menu-icon";
import { CompanyInfo } from "@/shared/cms/payload-types";

type MobileMenuProps = {
  data: CompanyInfo;
};

export function MobileMenu({ data }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <div className="flex xl:hidden" data-menu-open={isOpen}>
      {!isOpen && (
        <Button onClick={openMenu}>
          <BurgerMenuIcon />
        </Button>
      )}
      {isOpen && (
        <Button className="z-20" onClick={closeMenu}>
          <CloseMenuIcon />
        </Button>
      )}
      <Navbar
        className={cn(
          "fixed top-0 left-0 w-full flex-col rounded-b-2xl bg-background/60 py-5 font-shantell text-2xl backdrop-blur-sm transition-transform duration-500 ease-in-out [&>*:last-child]:rounded-[40px] [&>*:last-child]:bg-accent-blue [&>*:last-child]:px-12 [&>*:last-child]:py-4 [&>*:last-child]:text-white [&>*:last-child]:no-underline",
          {
            "translate-y-23": isOpen,
            "-translate-y-full": !isOpen,
          },
        )}
        data={data}
        onLinkClick={closeMenu}
      />
    </div>
  );
}
