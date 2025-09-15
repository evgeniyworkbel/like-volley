import { AccordionArrowIcon } from "../icons";

type AccordionProps = { question: string; answer: React.ReactNode };

export function Accordion({ faqList }: { faqList: AccordionProps[] }) {
  return (
    <div>
      {faqList.map(({ question, answer }) => {
        return (
          <details
            key={question}
            className="group mb-5 cursor-pointer rounded-xl border border-solid border-accent-orange-light hover:border-accent-orange"
          >
            <summary className="mb-2 flex list-none items-center justify-between p-6 text-lg font-semibold">
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
