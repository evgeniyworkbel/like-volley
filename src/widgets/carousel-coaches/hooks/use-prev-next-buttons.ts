import { EmblaCarouselType } from "embla-carousel";
import React from "react";
import { UsePrevNextButtonsType } from "../model/types";

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
): UsePrevNextButtonsType => {
  const onPrevButtonClick = React.useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = React.useCallback(() => {
    if (!emblaApi) return;
    console.log("sdfsef");
    emblaApi.scrollNext();
  }, [emblaApi]);

  return {
    onPrevButtonClick,
    onNextButtonClick,
  };
};
