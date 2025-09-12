import { Advantages } from "@/widgets/advantages";
import { Banner } from "@/widgets/banner";
import { Faq } from "@/widgets/faq";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Advantages />
        <Faq />
        <Banner />
      </main>
      <Footer />
    </div>
  );
}
