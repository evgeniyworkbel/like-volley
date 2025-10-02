import { cn } from "@/shared/lib";

type CarouselDotProps = {
  isActive: boolean;
};

export function CarouselDot({ isActive }: CarouselDotProps) {
  return (
    <span
      className={cn("h-6 w-6 rounded-full bg-[oklch(0.70_0_0)]", {
        "bg-accent-orange": isActive,
      })}
    />
  );
}
