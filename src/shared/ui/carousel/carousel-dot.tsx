import { cn } from "@/shared/lib";

type CarouselDotProps = {
  index: number;
  selectedIndex: number;
};

export function CarouselDot({ index, selectedIndex }: CarouselDotProps) {
  return (
    <span
      className={cn("h-6 w-6 rounded-full", {
        "bg-foreground-secondary": index !== selectedIndex,
        "bg-accent-orange": index === selectedIndex,
      })}
    />
  );
}
