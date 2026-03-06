import { Form2 } from "./contact-form2";
import { DecorElement } from "./decor-element";

export async function SignUpForWorkout() {
  return (
    <section className="relative flex flex-col gap-12 rounded-[20px] px-5 py-10 xl:flex-row xl:px-52.5 xl:py-15">
      {/** @todo: удалить Form2 когда будет готова интеграция нашей формы с amoCRM */}
      <Form2 />
      <DecorElement />
      {/* <ContactForm /> */}
    </section>
  );
}
