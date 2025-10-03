import { Hero, Advantages, ContactForm, Faq, Banner } from "@/widgets";
import { Coaches } from "@/widgets/coaches";

export default function Home() {
  return (
    <div>
      <Hero />
      <Advantages />
      <ContactForm />
      <Coaches />
      <Faq />
      <Banner />
    </div>
  );
}
