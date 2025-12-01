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
      className="flex flex-col gap-12 rounded-[20px] bg-accent-orange-muted px-5 py-10 md:mx-auto md:flex-row md:flex-wrap xl:mx-0 xl:flex-nowrap xl:justify-between xl:px-20 xl:py-[90px]"
    >
      <div className="mx-auto flex flex-col gap-10 md:max-w-182 md:flex-row md:flex-wrap xl:max-w-[494px] xl:py-38">
        <div className="flex flex-col gap-4 text-center md:mx-auto xl:mx-0">
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
      {/* <ContactForm /> */}
    </section>
  );
}
