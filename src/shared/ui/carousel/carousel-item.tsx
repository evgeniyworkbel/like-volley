export type CarouselItemProps = {
  slidesPerView: number;
  children: React.ReactElement;
};

export function CarouselItem({ children, slidesPerView }: CarouselItemProps) {
  return (
    <div
      // todo посмотрел дизайн tablet и пока поставил на мобильном px-10 потом под дизайн поставлю величину
      className="flex-[0_0_var(--width))] px-10 xl:px-3"
      style={
        {
          "--width": `${100 / slidesPerView}%`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
