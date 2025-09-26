import { Title } from "@/shared/ui";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import Image from "next/image";

export default function NotFound() {
  return (
    <section>
      <Header />
      <div className="flex flex-col items-center gap-12 px-[24px] pt-30 pb-[170px] xl:px-115">
        <Title className="text-[74px] text-foreground xl:text-9xl">
          4<span className="text-accent-orange">0</span>4
        </Title>
        <h3 className="font-shantell text-2xl font-bold xl:text-[40px]">
          Страница не найдена :(
        </h3>
        <div className="relative flex h-[226px] w-full xl:h-[380px]">
          <Image
            fill
            src="/not-found/boll.png"
            alt="Декоративная картинка мяч"
          />
        </div>
      </div>
      <Footer />
    </section>
  );
}
