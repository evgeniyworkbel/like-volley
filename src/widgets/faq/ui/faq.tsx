import { Accordion, Title } from "@/shared/ui";
import { faqData } from "../model/meta";

export function Faq() {
  return (
    <div className="flex flex-col gap-5 px-5 py-10 xl:gap-32 xl:px-20">
      <hgroup className="flex flex-col items-center gap-4 text-base xl:text-lg">
        <Title>
          Вопросы<span className="text-accent-orange"> и ответы</span>
        </Title>
        <p className="flex flex-col items-center text-center text-foreground-secondary">
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
      <Accordion items={faqData} />
    </div>
  );
}
