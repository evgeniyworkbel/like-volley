"use client";

import useEmblaCarousel from "embla-carousel-react";
import { CarouselControls } from "./carousel-controls";
import { Children } from "react";
import { CarouselItem } from "./carousel-item";

export type CarouselProps = {
  children: React.ReactElement[];
  slidesPerView: number;
};

export function Carousel({ slidesPerView, children }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    breakpoints: { "(min-width: 1280px)": { align: "start" } },
  });

  return (
    <div>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex justify-between">
          {Children.map(children, (child) => (
            <CarouselItem slidesPerView={slidesPerView}>{child}</CarouselItem>
          ))}
        </div>
      </div>
      <CarouselControls emblaApi={emblaApi} />
    </div>
  );
}
