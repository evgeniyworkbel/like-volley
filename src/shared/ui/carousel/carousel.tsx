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
    breakpoints: { "(min-width: 1280px)": { align: "start" } },
  });

  return (
    <div>
      <div ref={emblaRef} className="overflow-hidden">
        <div
          className="grid auto-cols-max grid-flow-col xl:auto-cols-[calc(100%/var(--count))]"
          style={{ "--count": slidesPerView } as React.CSSProperties}
        >
          {Children.map(children, (child) => (
            <CarouselItem>{child}</CarouselItem>
          ))}
        </div>
      </div>
      <CarouselControls emblaApi={emblaApi} />
    </div>
  );
}
