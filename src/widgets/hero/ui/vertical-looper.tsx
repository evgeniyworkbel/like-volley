"use client";

import { cn } from "@/shared/lib";
import styles from "./vertical-looper.module.css";

type VerticalLooperProps = {
  className?: string;
  direction: "up" | "down";
  children: React.ReactElement;
};

export function VerticalLooper({ className, direction, children }: VerticalLooperProps) {
  const itemsCount = 4;

  return (
    <div
      className={cn(
        styles.scroll,
        "flex-col overflow-hidden xl:flex",
        direction === "up" ? styles["scroll-up"] : styles["scroll-down"],
        className,
      )}
    >
      {Array(itemsCount * 2)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className="relative flex aspect-193/284 w-30 shrink-0 items-center xl:w-48.25"
          >
            {children}
          </div>
        ))}
    </div>
  );
}
