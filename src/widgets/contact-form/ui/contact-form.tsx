import { Title } from "@/shared/ui";
import { Contact } from "./contact";
import { Form } from "./form";
import { contactsData } from "../model/data";

export function ContactForm() {
  return (
    <section className="flex flex-col gap-12 rounded-[20px] bg-accent-orange-muted px-5 py-10 xl:flex-row xl:justify-between xl:px-20 xl:py-[90px]">
      <div className="flex flex-col gap-10 xl:max-w-[494px] xl:gap-12">
        <div className="flex flex-col gap-4 text-center xl:pt-28">
          <Title className="xl:text-left">
            Запишись&nbsp;
            <span className="text-foreground">на первую тренировку</span>
          </Title>
          <p className="text-base text-foreground-secondary">
            Свяжитесь с нами для получения персональной консультации
          </p>
        </div>
        {contactsData.map(({ title, imageSrc, alt, href }) => (
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
