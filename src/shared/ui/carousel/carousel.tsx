"use client";

import useEmblaCarousel from "embla-carousel-react";
import { CarouselControls } from "./carousel-controls";
import { Children } from "react";
import { CarouselItem } from "./carousel-item";

export type CarouselProps = {
  slidesPerView: number;
  children: React.ReactElement[];
};

export function Carousel({ slidesPerView, children }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  return (
    <CarouselControls emblaApi={emblaApi} className="flex">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-1 pb-20 xl:pb-0">
          {Children.map(children, (child) => (
            <CarouselItem slidesPerView={slidesPerView}>{child}</CarouselItem>
          ))}
        </div>
      </div>
    </CarouselControls>
  );
}
