import { Title } from "@/shared/ui";
import { Header, Footer } from "@/widgets";

export default function NotFound() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center gap-6 px-[24px] pt-30 pb-[170px] xl:gap-12 xl:px-12 xl:pb-24">
        <h1 className="font-shantell text-[74px] text-foreground xl:text-9xl">
          4<span className="text-accent-orange">0</span>4
        </h1>
        <Title className="text-2xl text-foreground xl:text-[40px]">
          Страница не найдена :(
        </Title>
        <video autoPlay loop muted playsInline>
          <source src="/not-found/like-volley.webm" />
          <source src="/not-found/like volley.mp4" />
        </video>
      </div>
      <Footer />
    </div>
  );
}
