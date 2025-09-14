import { AccordionArrowIcon } from "@/shared/icons";
import { Title } from "@/shared/ui";

type FaqProps = { question: string; answer: React.ReactNode };

export function Faq({ faqList }: { faqList: FaqProps[] }) {
  return (
    <div className="flex flex-col gap-32 px-20 py-10">
      <hgroup className="flex flex-col items-center gap-4 text-lg">
        <Title>
          Вопросы<span className="text-foreground"> и ответы</span>
        </Title>
        <p className="flex flex-col items-center">
          <span>
            Выберите формат обучения, который лучше всего соответствует вашим
            предпочтениям, расписанию и бюджету.
          </span>
          <span>
            Все форматы включают одну и ту же высококачественную учебную
            программу и подход к обучению.
          </span>
        </p>
      </hgroup>
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
    </div>
  );
}
