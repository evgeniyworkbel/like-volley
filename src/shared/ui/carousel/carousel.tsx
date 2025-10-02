"use client";

import useEmblaCarousel from "embla-carousel-react";
import { CarouselControls } from "./carousel-controls";
import { CarouselItem } from "./carousel-item";
import { CarouselProps } from "./types";
import { Children } from "react";

export function Carousel({ children }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {Children.map(children, (child) => (
            <CarouselItem>{child}</CarouselItem>
          ))}
        </div>
      </div>
      <CarouselControls emblaApi={emblaApi} />
    </div>
  );
}
