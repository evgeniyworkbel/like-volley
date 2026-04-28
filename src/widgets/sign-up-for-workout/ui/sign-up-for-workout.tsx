import { Form2 } from "./contact-form2";
import { BackgroundDecor } from "./background-decor";

export async function SignUpForWorkout() {
  return (
    <section className="relative flex flex-col overflow-hidden px-5 py-7 xl:px-52.5 xl:py-15">
      {/** @todo: удалить Form2 когда будет готова интеграция нашей формы с amoCRM */}

      <Form2 />
      <BackgroundDecor />
      {/* <ContactForm /> */}
    </section>
  );
}
