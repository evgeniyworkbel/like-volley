import Image from "next/image";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import { getPayloadClient } from "@/shared/cms";
import { Accordion, Button, SectionTitle } from "@/shared/ui";
import { faqSectionId } from "@/shared/constants";
import { AccordionItemModel } from "@/shared/ui/accordion";

export async function Faq() {
  const payload = await getPayloadClient();
  const faq = await payload.find({
    collection: "faq",
    pagination: false,
  });

  const faqData = faq.docs.reduce<Array<AccordionItemModel>>((acc, item) => {
    if (!item.id) return acc;
    return acc.concat({
      id: item.id,
      question: item.question,
      answer: (
        <div dangerouslySetInnerHTML={{ __html: convertLexicalToHTML({ data: item.answer }) }} />
      ),
    });
  }, []);

  return (
    <section
      id={faqSectionId}
      className="flex flex-col gap-6 px-5 py-10 xl:gap-0 xl:px-20 xl:py-15"
    >
      <hgroup className="flex flex-col text-center xl:max-w-1/2 xl:gap-4 xl:text-left xl:text-lg">
        <SectionTitle>
          Вопросы и <span className="text-accent-orange">ответы</span>
        </SectionTitle>
        <p className="text-foreground-secondary md:leading-6.5">
          Мы подобрали все часто-задаваемые вопросы от наших клиентов и ответили на них
        </p>
      </hgroup>

      <div className="flex flex-col gap-6 xl:flex-row xl:gap-5">
        <div className="order-2 flex flex-col items-center xl:order-0">
          <div className="relative flex aspect-[1.01] w-80 xl:w-146.5">
            <Image
              src="/faq.webp"
              alt="Фото ученика школы"
              sizes="(max-width: 1279px) 320px, 585px"
              fill
            />
          </div>

          <div className="flex flex-col items-center gap-6">
            <h3 className="text-[28px] font-bold xl:text-[40px]">Остались вопросы?</h3>
            <Button iconType="arrow">Напиши нам</Button>
          </div>
        </div>
        <Accordion items={faqData} defaultOpened={faqData.at(0)?.id} />
      </div>
    </section>
  );
}
