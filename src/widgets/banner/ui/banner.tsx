import { Title } from "@/shared/ui";
import Image from "next/image";

export function Banner() {
  return (
    <section className="flex justify-center px-5 py-[50px] xl:px-20">
      <div className="relative flex h-121 w-full justify-center pt-4 xl:h-[297px] xl:items-center xl:justify-start">
        <div className="z-10 flex flex-col items-center gap-6 font-extrabold text-white xl:items-start xl:pl-10">
          <Title className="text-4xl text-inherit">Приведи друга</Title>
          <h3 className="text-[15px] xl:text-2xl">
            Вы оба получите скидку в&nbsp;
            <span className="font-shantell text-accent-green">20 р.</span>
          </h3>
        </div>
        <Image
          className="hidden xl:block"
          src="/banner/promo-desktop.webp"
          fill
          alt="Баннер синего цвета с декоративными иконками и слева надпись 'приведи друга'"
        />
        <Image
          className="absolute top-0 left-0 object-contain xl:hidden"
          src="/banner/promo-mobile.webp"
          fill
          quality={100}
          alt="Баннер синего цвета с декоративными иконками и сверху надпись 'приведи друга'"
        />
      </div>
    </section>
  );
}
