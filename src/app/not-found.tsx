import { Title } from "@/shared/ui";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import Image from "next/image";

export default function NotFound() {
  return (
    <div>
      <Header />
      <div className="mt-[120px] mb-[170px] flex flex-col items-center gap-12">
        <Title className="text-[74px] text-foreground">
          4<span className="text-accent-orange">0</span>4
        </Title>
        <h3 className="font-shantell text-2xl font-bold">
          Страница не найдена :(
        </h3>
        <Image
          className="flex"
          width={308}
          height={226}
          src="/not-found/boll.png"
          alt="Декоративная картинка мяч"
        />
      </div>
      <Footer />
    </div>
  );
}
