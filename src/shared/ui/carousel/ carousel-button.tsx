import { CarouselArrowIcon } from "@/shared/icons";
import { cn } from "@/shared/lib";
import { Button, ButtonProps } from "../button";

type CarouselButtonProps = Pick<ButtonProps, "className" | "onClick"> & {
  position: "left" | "right";
};

export function CarouselButton({
  position = "right",
  onClick,
}: CarouselButtonProps) {
  return (
    <Button
      className={cn(
        "absolute right-0 bottom-0 z-50 xl:top-1/2 xl:-translate-y-1/2",
        {
          "left-0": position === "left",
        },
      )}
      onClick={onClick}
    >
      <CarouselArrowIcon
        className={cn({
          "right-0 rotate-180": position === "left",
        })}
      />
    </Button>
  );
}
