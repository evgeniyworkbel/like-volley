import { AccordionArrowIcon } from "../icons";

type AccordionProps = {
  items: {
    question: string;
    answer: React.ReactNode;
  }[];
};

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="flex flex-col gap-5">
      {items.map(({ question, answer }) => {
        return (
          <div
            key={question}
            className="group mb-2 cursor-pointer list-none items-center justify-between rounded-xl border border-accent-orange-light p-6 text-sm hover:border-accent-orange xl:text-lg"
          >
            <div className="flex items-center justify-between font-semibold select-none">
              {question}
              <AccordionArrowIcon className="transition-transform group-hover:rotate-180 [&>:first-child]:fill-accent-orange-light [&>:first-child]:group-hover:fill-accent-orange" />
            </div>

            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-400 group-hover:grid-rows-[1fr]">
              <div className="overflow-hidden">{answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
