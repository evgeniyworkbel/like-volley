export type CarouselItemProps = {
  children: React.ReactElement;
};

export function CarouselItem({ children }: CarouselItemProps) {
  return <div className="w-full flex-shrink-0 xl:w-1/4">{children}</div>;
}
