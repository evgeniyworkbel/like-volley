import { Title } from "@/shared/ui";
import { Header, Footer } from "@/widgets";

export default function NotFound() {
  return (
    <div>
      <Header />
      <main className="xl:gap-21 flex flex-col items-center gap-12 py-[102px] font-bold xl:py-10">
        <h1 className="font-shantell text-foreground text-[74px] md:text-9xl">
          4<span className="text-accent-orange">0</span>4
        </h1>
        <Title className="text-2xl md:text-[40px]">Страница не найдена :(</Title>
        <video autoPlay muted playsInline>
          <source src="/not-found/animated-ball.webm" />
          <source src="/not-found/animated-ball.mp4" />
        </video>
      </main>
      <Footer />
    </div>
  );
}
