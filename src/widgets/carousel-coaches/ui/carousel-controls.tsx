import { CarouselArrowLeft, CarouselArrowRight } from "@/shared/icons";
import { Button } from "@/shared/ui";
import { usePrevNextButtons } from "../hooks/use-prev-next-buttons";
import { CarouselControlsProps } from "../model/types";
import { CarouselDot } from "./carousel-dot";
import { useDotButton } from "../hooks/use-dot-button";

export function CarouselControls({ emblaApi }: CarouselControlsProps) {
  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
  const { selectedIndex, scrollSnaps } = useDotButton(emblaApi);

  return (
    <div className="flex items-center justify-between">
      <Button onClick={onPrevButtonClick}>
        <CarouselArrowLeft />
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
        <CarouselArrowRight />
      </Button>
    </div>
  );
}
