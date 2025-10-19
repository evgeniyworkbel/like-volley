import { Button } from "@/shared/ui";
import { BurgerMenuProps } from "../model/types";

export function BurgerMenu({ onClick }: BurgerMenuProps) {
  return (
    <Button className="xl:hidden" onClick={onClick}>
      <div className="flex flex-col gap-2 [&_>*]:w-8 [&_>*]:border [&_>*]:border-accent-orange">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Button>
  );
}
