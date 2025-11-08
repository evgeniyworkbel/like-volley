"use client";

import { useState } from "react";
import { AccordionArrowIcon } from "../icons";
import { cn } from "../lib";

type AccordionProps = {
  items: {
    question: string;
    answer: React.ReactNode;
  }[];
};

export function Accordion({ items }: AccordionProps) {
  const [isOpenIndex, setIsOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-5">
      {items.map(({ question, answer }, index) => {
        const isOpen = isOpenIndex === index;

        return (
          <div
            key={question}
            className={cn(
              "mb-2 cursor-pointer items-center justify-between rounded-xl border p-6 text-sm xl:text-lg",
              {
                "border-accent-orange": isOpen,
                "border-accent-orange-light": !isOpen,
              },
            )}
            onClick={() => setIsOpenIndex(isOpen ? null : index)}
          >
            <div className="flex items-center justify-between font-semibold select-none">
              {question}
              <AccordionArrowIcon
                className={cn("transition-transform", {
                  "rotate-180 [&>:first-child]:fill-accent-orange": isOpen,
                  "[&>:first-child]:fill-accent-orange-light group-hover:[&>:first-child]:fill-accent-orange":
                    !isOpen,
                })}
              />
            </div>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-400",
                {
                  "grid-rows-[1fr]": isOpen,
                  "grid-rows-[0fr]": !isOpen,
                },
              )}
            >
              <div className="overflow-hidden">{answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
