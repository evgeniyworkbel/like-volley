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
              "cursor-pointer items-center justify-between rounded-xl border border-accent-orange-light px-6 text-sm transition-colors duration-600 xl:text-lg",
              {
                "border-accent-orange": isOpen,
              },
            )}
            onClick={() => setOpenedItem(isOpen ? undefined : id)}
          >
            <div className="my-6 flex items-center justify-between font-semibold select-none *:first:fill-accent-orange-light">
              {question}
              <AccordionArrowIcon
                className={cn("transition-transform", {
                  "rotate-180 *:first:fill-accent-orange": isOpen,
                })}
              />
            </div>
            <div
              className={cn("grid grid-rows-[0fr] transition-[grid-template-rows] duration-600", {
                "grid-rows-[1fr]": isOpen,
              })}
            >
              <div className="overflow-hidden text-sm xl:text-base">
                <div className="mb-6">{answer}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
