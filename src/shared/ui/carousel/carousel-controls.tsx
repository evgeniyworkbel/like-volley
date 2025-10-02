import { CarouselArrowIcon } from "@/shared/icons";
import { EmblaCarouselType } from "embla-carousel";
import { Button } from "@/shared/ui";
import { usePrevNextButtons } from "./use-prev-next-buttons";
import { CarouselDot } from "./carousel-dot";
import { useDotButton } from "./use-dot-button";

export type CarouselControlsProps = {
  emblaApi?: EmblaCarouselType;
};

export function CarouselControls({ emblaApi }: CarouselControlsProps) {
  const { selectedIndex, scrollSnaps } = useDotButton(emblaApi);
  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <div className="flex items-center justify-between xl:justify-center xl:gap-30">
      <Button onClick={onPrevButtonClick}>
        <CarouselArrowIcon className="rotate-180" />
      </Button>
      <div className="flex gap-[18px]">
        {scrollSnaps.map((_, index) => (
          <CarouselDot key={index} isActive={index === selectedIndex} />
        ))}
      </div>
      <Button onClick={onNextButtonClick}>
        <CarouselArrowIcon />
      </Button>
    </div>
  );
}
