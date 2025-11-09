import { Title } from "@/shared/ui";
import Image from "next/image";

export function Banner() {
  return (
    <section className="flex justify-center px-5 py-[50px] xl:px-20">
      <div className="relative flex aspect-[0.7] w-full justify-center rounded-2xl border-4 border-[oklch(0.6559_0.1604_257.81)] bg-accent-blue px-5 pt-4 xl:aspect-[4.3] xl:h-[297px] xl:items-center xl:justify-start xl:px-10">
        <hgroup className="z-10 flex flex-col items-center gap-6 font-extrabold text-white xl:items-start">
          <Title className="text-4xl text-inherit">Приведи друга</Title>
          <p className="text-[15px] xl:text-2xl">
            Вы оба получите скидку в&nbsp;
            <span className="font-shantell text-accent-green">20 р.</span>
          </p>
        </hgroup>
        <Image
          className="object-cover xl:hidden"
          src="/banner/promo-mobile.webp"
          fill
          quality={100}
          alt="Баннер синего цвета с декоративными иконками и сверху надпись 'приведи друга'"
        />
        <Image
          className="hidden object-cover xl:block"
          src="/banner/promo-desktop.webp"
          fill
          alt="Баннер синего цвета с декоративными иконками и сверху надпись 'приведи друга'"
        />
      </div>
    </section>
  );
}
