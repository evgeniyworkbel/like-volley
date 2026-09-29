import { NavArrow } from "@/shared/ui";
import { Button, ButtonProps } from "../button";

type CarouselButtonProps = Pick<ButtonProps, "className" | "onClick">;

export function CarouselButton({ className, onClick }: CarouselButtonProps) {
  return (
    <Button className={className} color="transparent" onClick={onClick}>
      <NavArrow />
    </Button>
  );
}
