"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Children } from "react";
import { CarouselItem } from "./carousel-item";
import { usePrevNextButtons } from "./use-prev-next-buttons";
import { CarouselButton } from "./ carousel-button";

export type CarouselProps = {
  slidesPerView: number;
  children: React.ReactElement[];
};

export function Carousel({ slidesPerView, children }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <div className="relative">
      <CarouselButton onClick={onNextButtonClick} position={"right"} />
      <div className="flex items-center justify-between xl:justify-center xl:gap-30">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-1 pb-20 xl:pb-0">
            {Children.map(children, (child) => (
              <CarouselItem slidesPerView={slidesPerView}>{child}</CarouselItem>
            ))}
          </div>
        </div>
      </div>
      <CarouselButton onClick={onPrevButtonClick} position={"left"} />
    </div>
  );
}
