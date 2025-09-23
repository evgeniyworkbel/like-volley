"use client";

import useEmblaCarousel from "embla-carousel-react";
import { CoachCard } from "./coaches-сard";
import { coachesData } from "../model/data";
import { CarouselControls } from "./carousel-controls";
import { SelectedCoach } from "./selected-coach";

export function Coaches() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <section className="flex flex-col gap-6 px-5 py-10">
      <SelectedCoach />
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {coachesData.map(({ name, description, src, alt }) => (
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
      </div>
      <CarouselControls emblaApi={emblaApi} />
    </section>
  );
}
