import { Advantages } from "@/widgets/advantages";
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
      </main>
      <Footer />
    </div>
  );
}
