import { Button } from "@/shared/ui";
import { cn } from "@/shared/lib";
import { CloseMenuIcon } from "./close-menu-icon";
import { Navbar } from "@/shared/ui";
import { BurgerMenuIcon } from "./burger-menu-icon";

type MobileMenuProps = {
  openMenu: VoidFunction;
  closeMenu: VoidFunction;
  isOpen: boolean;
};

export function MobileMenu({ openMenu, closeMenu, isOpen }: MobileMenuProps) {
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
          "fixed top-0 left-0 w-full flex-col rounded-b-2xl bg-background/60 py-5 font-shantell text-2xl backdrop-blur-sm transition-transform duration-500 ease-in-out [&>*:last-child]:rounded-[40px] [&>*:last-child]:bg-accent-blue [&>*:last-child]:px-12 [&>*:last-child]:py-4 [&>*:last-child]:text-white [&>*:last-child]:no-underline",
          {
            "translate-y-23": isOpen,
            "-translate-y-full": !isOpen,
          },
        )}
        onLinkClick={closeMenu}
      />
    </div>
  );
}
