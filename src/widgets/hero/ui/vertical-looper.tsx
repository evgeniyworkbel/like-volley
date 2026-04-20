"use client";

import React from "react";
import { cn } from "@/shared/lib";
import styles from "./vertical-looper.module.css";

type VerticalLooperProps = {
  className?: string;
  direction: "up" | "down";
  children: React.ReactNode;
};

export function VerticalLooper({ className, direction, children }: VerticalLooperProps) {
  const childrensData = React.Children.toArray(children);
  const itemsCount = childrensData.length;

  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden",
        styles.scroll,
        direction === "up" ? styles["scrollUp"] : styles["scrollDown"],
        className,
      )}
      style={
        {
          "--items-count": itemsCount,
        } as React.CSSProperties
      }
    >
      {Array(itemsCount * 2)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className="relative flex aspect-193/284 w-30 shrink-0 items-center xl:w-48.25"
          >
            {childrensData[i % itemsCount]}
          </div>
        ))}
    </div>
  );
}
