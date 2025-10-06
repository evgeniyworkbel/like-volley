export type CarouselItemProps = {
  children: React.ReactElement;
};

export function CarouselItem({ children }: CarouselItemProps) {
  return <div className="mr-8 xl:mr-0">{children}</div>;
}
