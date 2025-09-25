"use client";

import useEmblaCarousel from "embla-carousel-react";
import { coachesData } from "../model/data";
import { CarouselControls } from "@/shared/ui/carousel/carousel-controls";
import { SelectedCoach } from "./selected-coach";
import { Carousel } from "@/shared/ui";

export function Coaches() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <section className="flex flex-col gap-6 px-5 py-10">
      <SelectedCoach />
      <div className="overflow-hidden" ref={emblaRef}>
        <Carousel data={coachesData} />
      </div>
      <CarouselControls emblaApi={emblaApi} />
    </section>
  );
}
