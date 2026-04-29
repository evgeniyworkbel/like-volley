"use client";

import { Children } from "react";
import { cn } from "@/shared/lib";
import styles from "./vertical-looper.module.css";

type VerticalLooperProps = {
  className?: string;
  direction: "up" | "down";
  children: React.ReactNode;
};

export function VerticalLooper({ className, direction, children }: VerticalLooperProps) {
  const childs = Children.toArray(children);

  return (
    <div
      className={cn(
        "flex flex-col gap-4 overflow-hidden",
        styles.scroll,
        direction === "up" ? styles["scrollUp"] : styles["scrollDown"],
        className,
      )}
      style={
        {
          "--items-count": childs.length,
        } as React.CSSProperties
      }
    >
      {[...childs, ...childs].map((item, index) => (
        <div
          key={index}
          className="relative flex aspect-193/284 w-30 shrink-0 items-center overflow-hidden rounded-[20px] shadow-[oklch(0_0_0/10.2%)] xl:w-48.25 xl:rounded-[40px]"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
