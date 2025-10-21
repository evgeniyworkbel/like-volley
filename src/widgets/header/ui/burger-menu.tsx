import { Button } from "@/shared/ui";
import { ButtonProps } from "@/shared/ui/button";

export function BurgerMenu({ onClick }: ButtonProps) {
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
