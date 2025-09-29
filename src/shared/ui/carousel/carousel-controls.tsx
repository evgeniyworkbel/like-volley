import { CarouselArrowIcon } from "@/shared/icons";
import { Button } from "@/shared/ui";
import { usePrevNextButtons } from "./use-prev-next-buttons";
import { CarouselControlsProps } from "./types";
import { CarouselDot } from "./carousel-dot";
import { useDotButton } from "./use-dot-button";

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
          <CarouselDot
            key={index}
            index={index}
            selectedIndex={selectedIndex}
          />
        ))}
      </div>
      <Button onClick={onNextButtonClick}>
        <CarouselArrowIcon />
      </Button>
    </div>
  );
}
