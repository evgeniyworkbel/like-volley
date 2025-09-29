import { Children } from "react";
import { CarouselProps } from "./types";

export function CarouselItems({ children }: CarouselProps) {
  return Children.map(children, (child) => {
    return (
      <div className="w-full flex-shrink-0 xl:w-1/4" key={child?.key}>
        {child}
      </div>
    );
  });
}
