"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/shared/lib";

type MarqueeVerticalProps = {
  className?: string;
  children: React.ReactElement;
  direction: "up" | "down";
};

export function MarqueeVertical({ className, direction, children }: MarqueeVerticalProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inner = innerRef.current;
    const track = trackRef.current;

    if (inner && track && !inner.dataset.cloned) {
      const originalCards = Array.from(inner.children);
      let totalHeight = inner.scrollHeight;
      const containerHeight = track.offsetHeight;

      while (totalHeight < containerHeight * 2) {
        originalCards.forEach((card) => {
          const clone = card.cloneNode(true) as HTMLElement;
          clone.setAttribute("aria-hidden", "true");
          inner.appendChild(clone);
        });
        totalHeight = inner.scrollHeight;
      }

      inner.dataset.cloned = "true";
    }

    return () => {};
  }, []);

  return (
    <div className={cn("flex flex-col gap-4 overflow-hidden", className)} ref={trackRef}>
      <div
        ref={innerRef}
        className={cn(
          "flex flex-col gap-4 will-change-transform",
          direction === "up" ? "animate-to-top" : "animate-to-down",
        )}
      >
        {children}
      </div>
    </div>
  );
}
