import { Title } from "@/shared/ui";
import { contactFormId } from "@/shared/constants";
import { Contact } from "./contact";
// import { Form } from "./form";
import { contactsData } from "../model/data";
import { Form2 } from "./form2";

export function ContactForm() {
  return (
    <section
      id={contactFormId}
      className="flex flex-col gap-12 rounded-[20px] bg-accent-orange-muted px-5 py-10 xl:flex-row xl:justify-between xl:px-20 xl:py-[90px]"
    >
      <div className="flex flex-col gap-10 xl:max-w-[494px] xl:gap-12">
        <div className="flex flex-col gap-4 text-center xl:pt-28">
          <Title className="xl:text-left">
            <span className="text-accent-orange">Запишись&nbsp;</span>
            на первую тренировку
          </Title>
          <p className="text-base text-foreground-secondary">
            Свяжитесь с нами для получения персональной консультации
          </p>
        </div>
        {contactsData.map(({ title, imageSrc, alt, href, label }) => (
          <Contact
            key={title}
            title={title}
            imageSrc={imageSrc}
            href={href}
            alt={alt}
            label={label}
          />
        ))}
      </div>
      {/** @todo: удалить Form2 когда будет готова интеграция нашей формы с amoCRM */}
      <Form2 />
      {/* <Form /> */}
    </section>
  );
}
