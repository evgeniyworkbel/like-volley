import { Advantages } from "@/widgets/advantages";
import { Banner } from "@/widgets/banner";
import { Hero } from "@/widgets/hero";
import { Faq } from "@/widgets/faq";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { CarouselCoaches } from "@/widgets/carousel-coaches";
import { ContactForm } from "@/widgets/contact-form";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <CarouselCoaches />
        <ContactForm />
        <Faq />
        <Banner />
      </main>
      <Footer />
    </div>
  );
}
