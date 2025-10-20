import { Button } from "@/shared/ui";
import { BurgerMenuProps } from "../model/types";

export function CloseMeny({ onClick }: BurgerMenuProps) {
  return (
    <Button onClick={onClick}>
      <div className="relative h-7 w-7 xl:hidden">
        <div className="absolute top-1/2 left-1/2 h-0.5 w-8 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-accent-orange"></div>
        <div className="absolute top-1/2 left-1/2 h-0.5 w-8 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-accent-orange"></div>
      </div>
    </Button>
  );
}
