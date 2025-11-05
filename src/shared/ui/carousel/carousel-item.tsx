export type CarouselItemProps = {
  slidesPerView: number;
  children: React.ReactElement;
};

export function CarouselItem({ children, slidesPerView }: CarouselItemProps) {
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
      {children}
    </div>
  );
}
