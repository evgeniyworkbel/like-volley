import { CarouselArrowIcon } from "@/shared/icons";
import { cn } from "@/shared/lib";
import { Button, ButtonProps } from "../button";

type CarouselButtonProps = Pick<ButtonProps, "className" | "onClick"> & {
  position: "left" | "right";
};

export function CarouselButton({
  className,
  position = "right",
  onClick,
}: CarouselButtonProps) {
  return (
    <Button className={className} onClick={onClick}>
      <CarouselArrowIcon
        className={cn({
          "rotate-180": position === "left",
        })}
      />
    </Button>
  );
}
