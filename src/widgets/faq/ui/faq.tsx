import Image from "next/image";

export function Faq() {
  return (
    <div className="flex flex-col gap-32 px-20 py-10">
      <div className="flex flex-col items-center gap-4 text-lg">
        <span className="font-shantell text-6xl font-bold text-accent-orange">
          Вопросы<span className="text-black"> и ответы</span>
        </span>
        <div className="flex flex-col items-center">
          <span>
            Выберите формат обучения, который лучше всего соответствует вашим
            предпочтениям, расписанию и бюджету.
          </span>
          <span>
            Все форматы включают одну и ту же высококачественную учебную
            программу и подход к обучению.
          </span>
        </div>
      </div>
      <div>
        <details className="cursor-pointer rounded-xl border border-solid border-orange hover:border-accent-orange">
          <summary className="flex list-none justify-between p-6 text-lg">
            <span className="font-semibold">
              Выдается ли сертификат об обучении?
            </span>
            <Image
              src="/open.svg"
              width={24}
              height={24}
              alt="Развернуть ответ"
            />
          </summary>
          <div className="mx-6 mt-8 mb-6">
            Да, выдается сертификат установленного государственного образца и
            именной сертификат курса, а так же грант на обучение ученика в
            Германии.
          </div>
        </details>
      </div>
    </div>
  );
}
