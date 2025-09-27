import { Advantages } from "@/widgets/advantages";
import { Banner } from "@/widgets/banner";
import { Hero } from "@/widgets/hero";
import { Faq } from "@/widgets/faq";
import { ContactForm } from "@/widgets/contact-form";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Advantages />
        <ContactForm />
        <Faq />
        <Banner />
      </main>
    </div>
  );
}
