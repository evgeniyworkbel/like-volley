import { Accordion, Title } from "@/shared/ui";
import { faqData } from "../model/meta";

export function Faq() {
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
      <Accordion items={faqData} />
    </div>
  );
}
