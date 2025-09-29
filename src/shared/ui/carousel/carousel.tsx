"use client";

import useEmblaCarousel from "embla-carousel-react";
import { CarouselControls } from "./carousel-controls";
import { CarouselItems } from "./carousel-items";
import { CarouselProps } from "./types";

export function Carousel({ children }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <CarouselItems>{children}</CarouselItems>
        </div>
      </div>
      <CarouselControls emblaApi={emblaApi} />
    </>
  );
}
