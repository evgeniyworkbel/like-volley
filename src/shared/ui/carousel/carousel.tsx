"use client";

import useEmblaCarousel from "embla-carousel-react";
import { CarouselControls } from "./carousel-controls";
import { Children } from "react";
import { CarouselItem } from "./carousel-item";

export type CarouselProps = {
  children: React.ReactElement[];
  count: number;
};

export function Carousel({ children, count }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-10">
          {Children.map(children, (child) => (
            <CarouselItem count={count}>{child}</CarouselItem>
          ))}
        </div>
      </div>
      <CarouselControls emblaApi={emblaApi} />
    </div>
  );
}
