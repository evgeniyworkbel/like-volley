"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Children } from "react";
import { CarouselItem } from "./carousel-item";
import { usePrevNextButtons } from "./use-prev-next-buttons";
import { CarouselButton } from "./carousel-button";
import { cn } from "@/shared/lib";
import { SectionTitle } from "../section-title";

export type CarouselProps = {
  innerWrapperClassName?: string;
  slidesPerView: number;
  children: React.ReactElement[];
};

export function Carousel({ innerWrapperClassName, slidesPerView, children }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    watchDrag: false,
  });

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <div className="flex w-full flex-col xl:w-auto xl:gap-10">
      <div className="hidden items-center justify-between px-3 xl:flex">
        <SectionTitle className="xl:text-[44px]">
          Наши <span className="text-accent-orange">тренеры</span>
        </SectionTitle>
        <div className="flex gap-4.5">
          <CarouselButton className="hidden rotate-180 p-0 xl:inline" onClick={onPrevButtonClick} />
          <CarouselButton className="hidden p-0 xl:inline" onClick={onNextButtonClick} />
        </div>
      </div>
      <div className={cn("overflow-hidden", innerWrapperClassName)} ref={emblaRef}>
        <div className="flex">
          {Children.map(children, (child) => (
            <CarouselItem slidesPerView={slidesPerView}>{child}</CarouselItem>
          ))}
        </div>
      </div>

      <div className="flex justify-between px-18 pt-5.5 xl:hidden">
        <CarouselButton className="rotate-180" onClick={onPrevButtonClick} />
        <CarouselButton onClick={onNextButtonClick} />
      </div>
    </div>
  );
}
