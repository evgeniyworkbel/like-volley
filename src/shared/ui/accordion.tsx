"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib";

export type AccordionItemModel = {
  id: number;
  question: string;
  answer: React.ReactNode;
};

type AccordionProps = {
  items: Array<AccordionItemModel>;
  defaultOpened?: number;
};

export function Accordion({ items, defaultOpened }: AccordionProps) {
  const [openedItem, setOpenedItem] = useState(defaultOpened);

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
              <div
                className={cn(
                  "flex size-6 items-center justify-center rounded-full transition-colors duration-300",
                  isOpen ? "bg-accent-orange" : "bg-accent-orange-light",
                )}
              >
                <ChevronDown
                  className={cn("text-white transition-transform duration-300", {
                    "rotate-180": isOpen,
                  })}
                />
              </div>
            </div>
            <div
              className={cn("grid grid-rows-[0fr] transition-[grid-template-rows] duration-600", {
                "grid-rows-[1fr]": isOpen,
              })}
            >
              <div className="overflow-hidden text-sm xl:text-base [&_a]:text-accent-orange [&_a]:underline [&_a]:underline-offset-3">
                <div className="mb-6">{answer}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
