import { Title } from "@/shared/ui";
import { contactFormId } from "@/shared/constants";
import { Contact } from "./contact";
// import { ContactForm } from "./contact-form";
import { contactsData } from "../model/data";
import { Form2 } from "./contact-form2";

export function SignUpForWorkout() {
  return (
    <section
      id={contactFormId}
      className="flex flex-col gap-12 rounded-[20px] bg-accent-orange-muted px-5 py-10 md:items-center xl:flex-row xl:justify-between xl:px-20 xl:py-[90px]"
    >
      <div className="flex flex-col gap-10 md:items-center md:gap-20 xl:max-w-[494px] xl:items-start xl:gap-12">
        <div className="flex max-w-182 flex-col gap-4 text-center xl:pt-28 xl:text-left">
          <Title>
            <span className="text-accent-orange">Запишись&nbsp;</span>
            на первую тренировку
          </Title>
          <p className="text-base text-foreground-secondary">
            Свяжитесь с нами для получения персональной консультации
          </p>
        </div>

        <div className="flex flex-col gap-6 md:max-w-140 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-7 md:p-7 xl:flex-col xl:items-start xl:p-0">
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
      </div>
      {/** @todo: удалить Form2 когда будет готова интеграция нашей формы с amoCRM */}
      <Form2 />
      {/* <ContactForm /> */}
    </section>
  );
}
