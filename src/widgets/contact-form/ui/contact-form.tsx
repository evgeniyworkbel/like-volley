import { Title } from "@/shared/ui";
import { Contacts } from "./contacts";
import { Form } from "./form";

export function ContactForm() {
  return (
    <section className="flex flex-col gap-12 rounded-[20px] bg-accent-soft-orange px-5 py-10 xl:flex-row xl:justify-between xl:px-20 xl:py-[90px]">
      <div className="flex max-w-90 flex-col gap-10 xl:max-w-[494px] xl:gap-12">
        <div className="flex flex-col gap-4 xl:pt-28">
          <Title className="inline text-center text-[28px] xl:block xl:text-left xl:text-6xl">
            Запишись&nbsp;
            <span className="text-foreground xl:flex">
              на первую тренировку
            </span>
          </Title>
          <span className="text-left text-base text-foreground-secondary">
            Свяжитесь с нами для получения персональной консультации
          </span>
        </div>
        <div className="flex">
          <Contacts />
        </div>
      </div>
      <Form />
    </section>
  );
}
