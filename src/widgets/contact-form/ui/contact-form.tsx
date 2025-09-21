import { Title } from "@/shared/ui";
import { Contact } from "./contact";
import { Form } from "./form";
import { contacts } from "../model/contacts";

export function ContactForm() {
  return (
    <section className="flex flex-col gap-12 rounded-[20px] bg-accent-orange-muted px-5 py-10 xl:flex-row xl:justify-between xl:px-20 xl:py-[90px]">
      <div className="flex flex-col gap-10 xl:max-w-[494px] xl:gap-12">
        <div className="flex flex-col gap-4 text-center xl:pt-28">
          <Title className="inline text-[28px] xl:block xl:text-left xl:text-6xl">
            Запишись&nbsp;
            <span className="text-foreground xl:block">
              на первую тренировку
            </span>
          </Title>
          <p className="text-base text-foreground-secondary">
            Свяжитесь с нами для получения персональной консультации
          </p>
        </div>
        {contacts.map(({ title, imageSrc, alt, href }) => (
          <Contact
            title={title}
            imageSrc={imageSrc}
            href={href}
            alt={alt}
            key={title}
          />
        ))}
      </div>
      <Form />
    </section>
  );
}
