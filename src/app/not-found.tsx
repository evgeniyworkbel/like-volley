import { Title } from "@/shared/ui";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="relative flex flex-col items-center gap-12 px-[24px] pt-30 pb-[170px] xl:px-115">
      <h1 className="font-shantell text-[74px] text-foreground xl:text-9xl">
        4<span className="text-accent-orange">0</span>4
      </h1>
      <Title className="text-2xl text-foreground xl:text-[40px]">
        Страница не найдена :(
      </Title>
      <Image src="/not-found/boll.png" alt="" fill />
    </section>
  );
}

/* <div className="relative flex h-[226px] w-full xl:h-[380px] xl:w-[518px]"></div> */
