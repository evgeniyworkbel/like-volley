import { CarouselArrowIcon } from "@/shared/icons";
import { cn } from "@/shared/lib";
import { Button, ButtonProps } from "../button";

type CarouselButtonProps = Pick<ButtonProps, "className" | "onClick"> & {
  position: "left" | "right";
};

export function CarouselButton({
  position = "right",
  className,
  onClick,
}: CarouselButtonProps) {
  return (
    <Button onClick={onClick}>
      <CarouselArrowIcon
        className={cn(
          "hidden xl:block",
          {
            "rotate-180": position === "left",
          },
          className,
        )}
      />
    </Button>
  );
}
