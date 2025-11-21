"use client";

import { useState } from "react";
import { AccordionArrowIcon } from "../icons";
import { cn } from "../lib";

type AccordionProps = {
  items: {
    question: string;
    answer: React.ReactNode;
    id: number;
  }[];
};

export function Accordion({ items }: AccordionProps) {
  const [openedItem, setOpenedItem] = useState<number>();

  return (
    <div className="flex flex-col gap-5">
      {items.map(({ question, answer, id }) => {
        const isOpen = openedItem === id;

        return (
          <div
            key={question}
            className={cn(
              "mb-2 cursor-pointer items-center justify-between rounded-xl border border-accent-orange-light p-6 text-sm xl:text-lg",
              {
                "border-accent-orange": isOpen,
              },
            )}
            onClick={() => setOpenedItem(isOpen ? undefined : id)}
          >
            <div className="flex items-center justify-between font-semibold select-none [&>:first-child]:fill-accent-orange-light">
              {question}
              <AccordionArrowIcon
                className={cn("transition-transform", {
                  "rotate-180 [&>:first-child]:fill-accent-orange": isOpen,
                })}
              />
            </div>
            <div
              className={cn(
                "grid grid-rows-[0fr] transition-[grid-template-rows] duration-400",
                {
                  "grid-rows-[1fr]": isOpen,
                },
              )}
            >
              <div className="overflow-hidden pt-11 text-base">{answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
