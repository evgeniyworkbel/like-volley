"use client";

import { CarouselProps } from "./model/types";
import { CoachCard } from "@/shared/ui/carousel/coaches-сard";
import useEmblaCarousel from "embla-carousel-react";
import { CarouselControls } from "./carousel-controls";

export function Carousel({ data }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <>
      <div className="flex overflow-hidden" ref={emblaRef}>
        {data.map(({ name, description, src, alt }) => (
          <div key={name} className="w-full flex-shrink-0 xl:w-1/4">
            <CoachCard
              name={name}
              description={description}
              src={src}
              alt={alt}
            />
          </div>
        ))}
      </div>
      <CarouselControls emblaApi={emblaApi} />
    </>
  );
}
