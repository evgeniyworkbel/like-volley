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
            className="group mb-2 grid cursor-pointer list-none grid-rows-[auto_0fr] items-center justify-between rounded-xl border border-accent-orange-light p-6 text-sm font-semibold select-none hover:border-accent-orange xl:text-lg"
            key={question}
          >
            <div className="flex items-center justify-between overflow-hidden">
              {question}
              <AccordionArrowIcon className="group-open:rotate-180 [&>:first-child]:fill-accent-orange-light [&>:first-child]:hover:fill-accent-orange" />
            </div>

            <div className="">{answer}</div>
          </div>
        );
      })}
    </div>
  );
}
