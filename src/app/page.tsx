import { Advantages } from "@/widgets/advantages";
import { Banner } from "@/widgets/banner";
import { Hero } from "@/widgets/hero";
import { Faq } from "@/widgets/faq";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Faq />
        <Banner />
      </main>
      <Footer />
    </div>
  );
}
