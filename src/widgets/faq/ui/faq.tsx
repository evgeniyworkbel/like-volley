import { AccordionArrowIcon } from "@/shared/icons";
import { Title } from "@/shared/ui";

export function Faq() {
  return (
    <div className="flex flex-col gap-32 px-20 py-10">
      <hgroup className="flex flex-col items-center gap-4 text-lg">
        <Title className="font-shantell text-6xl font-bold whitespace-nowrap text-accent-orange">
          Вопросы<Title className="inline text-foreground"> и ответы</Title>
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
        <details className="group cursor-pointer rounded-xl border border-solid border-accent-orange-light hover:border-accent-orange">
          <summary className="flex list-none justify-between p-6 text-lg font-semibold">
            Выдается ли сертификат об обучении?
            <AccordionArrowIcon
              className="rounded-full bg-accent-orange-light transition-transform duration-300 ease-in-out group-open:rotate-180 hover:bg-accent-orange"
              width={24}
              height={24}
            />
          </summary>
          <p className="mx-6 mt-8 mb-6">
            Да, выдается сертификат установленного государственного образца и
            именной сертификат курса, а так же грант на обучение ученика в
            Германии.
          </p>
        </details>
      </div>
    </div>
  );
}
