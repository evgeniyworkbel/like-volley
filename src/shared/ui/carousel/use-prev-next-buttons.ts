import { UseEmblaCarouselType } from "embla-carousel-react";

type UsePrevNextButtonsReturn = {
  onPrevButtonClick: VoidFunction;
  onNextButtonClick: VoidFunction;
};

export const usePrevNextButtons = (
  emblaApi?: UseEmblaCarouselType[1],
): UsePrevNextButtonsReturn => {
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
