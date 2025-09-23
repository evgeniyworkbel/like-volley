import { cn } from "@/shared/lib";

export function CarouselDot({
  index,
  selectedIndex,
}: {
  index: number;
  selectedIndex: number;
}) {
  return (
    <div
      className={cn("h-6 w-6 rounded-full", {
        "bg-foreground-secondary": index !== selectedIndex,
        "bg-accent-orange": index === selectedIndex,
      })}
    ></div>
  );
}
