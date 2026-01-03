import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import { getPayloadClient } from "@/shared/cms";
import { Accordion, Title } from "@/shared/ui";
import { faqSectionId } from "@/shared/constants";

export async function Faq() {
  const payload = await getPayloadClient();
  const faq = await payload.find({
    collection: "faq",
    pagination: false,
  });
  const faqData = faq.docs.map((item) => ({
    ...item,
    answer: (
      <div dangerouslySetInnerHTML={{ __html: convertLexicalToHTML({ data: item.answer }) }} />
    ),
  }));

  return (
    <section
      id={faqSectionId}
      className="flex flex-col gap-5 px-5 py-10 md:gap-10 xl:gap-31 xl:px-20"
    >
      <hgroup className="flex flex-col items-center gap-4 text-base md:text-lg">
        <Title>
          Вопросы<span className="text-accent-orange"> и ответы</span>
        </Title>
        <p className="text-center text-foreground-secondary md:max-w-258 md:leading-4.5">
          Выберите формат обучения, который лучше всего соответствует вашим предпочтениям,
          расписанию и бюджету. Все форматы включают одну и ту же высококачественную учебную
          программу и подход к обучению.
        </p>
      </hgroup>
      <Accordion items={faqData} defaultOpened={faqData[0].id} />
    </section>
  );
}
