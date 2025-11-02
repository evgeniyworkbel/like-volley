import { CarouselArrowIcon } from "@/shared/icons";
import { cn } from "@/shared/lib";
import { Button } from "../button";

type CarouselButtonProps = Pick<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "className" | "onClick"
> & {
  position: "left" | "right";
};

export function CarouselButton({
  position = "left",
  onClick,
}: CarouselButtonProps) {
  return (
    <Button
      className={cn("absolute bottom-0 z-50 xl:top-1/2 xl:-translate-y-1/2", {
        "left-0": position === "left",
        "right-0": position === "right",
      })}
      onClick={onClick}
    >
      <CarouselArrowIcon
        className={cn({
          "rotate-180": position === "left",
          "right-0": position === "left",
        })}
      />
    </Button>
  );
}
