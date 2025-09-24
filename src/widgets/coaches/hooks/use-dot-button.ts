import React from "react";
import { EmblaCarouselType } from "embla-carousel";
import { UseDotType } from "../model/types";

export const useDotButton = (emblaApi?: EmblaCarouselType): UseDotType => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  React.useEffect(() => {
    const onInit = (emblaApi: EmblaCarouselType) => {
      setScrollSnaps(emblaApi.scrollSnapList());
    };

    const onSelect = (emblaApi: EmblaCarouselType) => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi]);

  return {
    selectedIndex,
    scrollSnaps,
  };
};
