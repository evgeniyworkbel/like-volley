"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Children } from "react";
import { CarouselItem } from "./carousel-item";
import { usePrevNextButtons } from "./use-prev-next-buttons";
import { CarouselButton } from "./carousel-button";
import { cn } from "@/shared/lib";

export type CarouselProps = {
  className?: string;
  slidesPerView: number;
  children: React.ReactElement[];
};

export function Carousel({
  className,
  slidesPerView,
  children,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <div
      className={cn(
        "grid w-full gap-4 min-[1440px]:px-12 xl:grid-cols-[auto_1fr_auto]",
        className,
      )}
    >
      <CarouselButton
        className="hidden xl:inline"
        position="left"
        onClick={onPrevButtonClick}
      />
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {Children.map(children, (child) => (
            <CarouselItem slidesPerView={slidesPerView}>{child}</CarouselItem>
          ))}
        </div>
      </div>

      <div className="flex justify-between px-18 xl:hidden">
        <CarouselButton position="left" onClick={onPrevButtonClick} />
        <CarouselButton position="right" onClick={onNextButtonClick} />
      </div>

      <CarouselButton
        className="hidden xl:inline"
        position="right"
        onClick={onNextButtonClick}
      />
    </div>
  );
}
