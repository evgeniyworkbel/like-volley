"use client";

import useEmblaCarousel from "embla-carousel-react";
import { CarouselControls } from "./carousel-controls";
import { Children } from "react";
import { CarouselItem } from "./carousel-item";

export type CarouselProps = {
  children: React.ReactElement[];
};

export function Carousel({ children }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-10">
          {Children.map(children, (child) => (
            <CarouselItem>{child}</CarouselItem>
          ))}
        </div>
      </div>
      <CarouselControls emblaApi={emblaApi} />
    </div>
  );
}
