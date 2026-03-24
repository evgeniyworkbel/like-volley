"use client";

import { cn } from "@/shared/lib";

type MarqueeVerticalProps = {
  className?: string;
  direction?: "up" | "down";
  itemsCount?: number;
  itemHeight?: number;
  children: React.ReactElement;
};

export function MarqueeVertical({
  className,
  children,
  direction = "up",
  itemsCount = 10,
  itemHeight = 284,
}: MarqueeVerticalProps) {
  const trackHeight = itemHeight * 2 * itemsCount;

  return (
    <div
      className={cn(
        "flex-col overflow-hidden xl:flex",
        direction === "up" ? "animate-to-top" : "animate-to-down",
        className,
      )}
      style={
        {
          height: `${trackHeight}px`,
          "--item-height": `${itemHeight}px`,
          "--items-count": itemsCount,
        } as React.CSSProperties
      }
    >
      {Array(itemsCount * 2)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className="relative flex aspect-193/284 w-30 shrink-0 items-center justify-center overflow-hidden xl:w-48.25"
          >
            {children}
          </div>
        ))}
    </div>
  );
}
