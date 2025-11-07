"use client";

import { useState } from "react";
import { AccordionArrowIcon } from "../icons";

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
      {items.map(({ question, answer }) => {
        return (
          <div
            key={question}
            className="group mb-2 cursor-pointer items-center justify-between rounded-xl border border-accent-orange-light p-6 text-sm hover:border-accent-orange xl:text-lg"
            onClick={(e) => e.currentTarget.classList.toggle("active")}
          >
            <div className="flex items-center justify-between font-semibold select-none">
              {question}
              <AccordionArrowIcon className="transition-transform group-[.active]:rotate-180 [&>:first-child]:fill-accent-orange-light [&>:first-child]:group-[.active]:fill-accent-orange" />
            </div>

            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-400 group-[.active]:grid-rows-[1fr]">
              <div className="overflow-hidden">{answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
