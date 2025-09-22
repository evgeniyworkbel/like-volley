"use client";

import useEmblaCarousel from "embla-carousel-react";
import { CoachesCard } from "./coaches-сard";
import { coachesData } from "../model/data";
import { CarouselControls } from "./carousel-controls";

export function CarouselCoaches() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <section className="flex flex-col gap-6 px-5 py-10">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {coachesData.map(({ name, description, imageSrc, alt }) => (
            <div key={name} className="w-full flex-shrink-0">
              <CoachesCard
                name={name}
                description={description}
                imageSrc={imageSrc}
                alt={alt}
              />
            </div>
          ))}
        </div>
      </div>

      <CarouselControls emblaApi={emblaApi} />
    </section>
  );
}
