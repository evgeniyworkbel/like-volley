import { EmblaCarouselType } from "embla-carousel";
import { UsePrevNextButtonsType } from "../model/types";

export const usePrevNextButtons = (
  emblaApi?: EmblaCarouselType,
): UsePrevNextButtonsType => {
  const onPrevButtonClick = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  };

  const onNextButtonClick = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  };

  return {
    onPrevButtonClick,
    onNextButtonClick,
  };
};
