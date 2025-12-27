import { Button } from "@/shared/ui";
import { cn } from "@/shared/lib";
import { CloseMenuIcon } from "./close-menu-icon";
import { Navbar } from "./navbar";
import { BurgerMenuIcon } from "./burger-menu-icon";

type MobileMenuModel = {
  isOpen: boolean;
  openMenu: VoidFunction;
  closeMenu: VoidFunction;
};

export function MobileMenu({ isOpen, openMenu, closeMenu }: MobileMenuModel) {
  return (
    <div className="flex xl:hidden">
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
          "fixed -top-7 left-0 w-full flex-col rounded-b-2xl bg-background/60 py-5 font-shantell text-2xl backdrop-blur-sm transition-transform duration-500 ease-in-out [&>*:last-child]:rounded-[40px] [&>*:last-child]:bg-accent-blue [&>*:last-child]:px-12 [&>*:last-child]:py-4 [&>*:last-child]:text-white [&>*:last-child]:no-underline",
          {
            "translate-y-30": isOpen,
            "-translate-y-full": !isOpen,
          },
        )}
        onLinkClick={closeMenu}
      />
    </div>
  );
}
