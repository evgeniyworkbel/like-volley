import { cn } from "@/shared/lib";

export type CarouselItemProps = {
  slidesPerView: number;
  children: React.ReactElement;
  isActive: boolean;
};

export function CarouselItem({
  children,
  slidesPerView,
  isActive,
}: CarouselItemProps) {
  return (
    <div
      className="mr-[var(--mr)] w-full flex-[0_0_var(--width))] xl:mr-0"
      style={
        {
          "--width": `${100 / slidesPerView}%`,
          "--mr": `${(100 - 8 * (slidesPerView - 1)) / slidesPerView}%`,
        } as React.CSSProperties
      }
    >
      <div
        className={cn("w-min rounded-[18px] border-2", {
          "border-[oklch(83.27%_0.002_247.32deg)]": !isActive,
          "border-accent-orange": isActive,
        })}
      >
        {children}
      </div>
    </div>
  );
}
