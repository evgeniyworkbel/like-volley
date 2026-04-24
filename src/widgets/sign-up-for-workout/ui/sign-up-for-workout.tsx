import { Form2 } from "./contact-form2";
import { DecorElement } from "./decor-element";

export async function SignUpForWorkout() {
  return (
    <section className="flex flex-col px-5 py-10 xl:px-52.5 xl:py-15">
      {/** @todo: удалить Form2 когда будет готова интеграция нашей формы с amoCRM */}
      <Form2 />
      <DecorElement />
      {/* <ContactForm /> */}
    </section>
  );
}
