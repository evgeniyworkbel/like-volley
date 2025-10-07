import { cn } from "@/shared/lib";

export type CarouselItemProps = {
  children: React.ReactElement;
  slidesPerView: number;
};

export function CarouselItem({ children, slidesPerView }: CarouselItemProps) {
  const width = `${100 / slidesPerView}%`;
  return (
    <div
      className={cn("mr-7 w-full shrink-0 xl:mr-0")}
      style={{ flex: `0 0 ${width}` }}
    >
      {children}
    </div>
  );
}
