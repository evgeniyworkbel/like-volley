"use client";

import { AccordionArrowIcon } from "../icons";

type AccordionProps = {
  items: {
    question: string;
    answer: React.ReactNode;
  }[];
};

const handleClick = ({
  currentTarget,
}: React.MouseEvent<HTMLDetailsElement>) => {
  document.querySelectorAll("details").forEach((detail) => {
    if (detail !== currentTarget) {
      detail.removeAttribute("open");
    }
  });
};

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="flex flex-col gap-5">
      {items.map(({ question, answer }) => {
        return (
          <details
            key={question}
            className="group cursor-pointer rounded-xl border border-accent-orange-light hover:border-accent-orange"
            onClick={handleClick}
          >
            <summary className="mb-2 flex list-none items-center justify-between p-6 text-lg font-semibold select-none">
              {question}
              <AccordionArrowIcon className="group-open:rotate-180 [&>:first-child]:fill-accent-orange-light [&>:first-child]:hover:fill-accent-orange" />
            </summary>
            <div className="px-6 py-3">{answer}</div>
          </details>
        );
      })}
    </div>
  );
}
