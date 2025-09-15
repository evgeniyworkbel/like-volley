import { Advantages } from "@/widgets/advantages";
import { Hero } from "@/widgets/hero";
import { Faq } from "@/widgets/faq";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { ContactForm } from "@/widgets/contact-form";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Faq />
        <ContactForm />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
