import { Title } from "@/shared/ui";
import Image from "next/image";

export function Banner() {
  return (
    <section className="relative flex justify-center px-1 py-[50px] xl:px-20">
      <div className="absolute top-0 left-0 flex translate-x-[16%] translate-y-[100%] flex-col items-center gap-6 font-extrabold text-white xl:translate-x-[26%] xl:translate-y-[100%] xl:items-start">
        <Title className="text-4xl text-inherit">Приведи друга</Title>
        <h3 className="text-[15px] xl:text-2xl">
          Вы оба получите скидку в 20%
        </h3>
      </div>
      <Image
        className="hidden xl:block"
        src="/banner/banner_laptop.png"
        width={1280}
        height={297}
        loading="lazy"
        alt="Баннер синего цвета с декоративными иконками и слева надпись 'приведи друга'"
      />
      <Image
        className="xl:hidden"
        src="/banner/banner_mobile.png"
        width={320}
        height={484}
        loading="lazy"
        alt="Баннер синего цвета с декоративными иконками и сверху надпись 'приведи друга'"
      />
    </section>
  );
}
