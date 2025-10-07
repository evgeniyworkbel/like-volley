import { cn } from "@/shared/lib";

export type CarouselItemProps = {
  slidesPerView: number;
  children: React.ReactElement;
};

export function CarouselItem({ children, slidesPerView }: CarouselItemProps) {
  const itemWidth = `${100 / slidesPerView}%`;
  return (
    <div
      className={cn("mr-7 w-full shrink-0 xl:mr-0")}
      style={{ flex: `0 0 ${itemWidth}` }}
    >
      {children}
    </div>
  );
}
