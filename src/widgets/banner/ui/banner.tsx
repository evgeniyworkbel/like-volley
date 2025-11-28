import { Title } from "@/shared/ui";
import Image from "next/image";

export function Banner() {
  return (
    <section className="flex justify-center px-5 py-[50px] xl:px-20">
      <div className="relative flex aspect-[0.66] w-full justify-center rounded-2xl border-4 border-[oklch(0.6559_0.1604_257.81)] bg-accent-blue px-5 pt-4 md:aspect-[2.45] md:items-center md:justify-start xl:aspect-[4.0] xl:px-10">
        <hgroup className="z-10 flex flex-col items-center gap-6 font-extrabold text-white md:items-start md:gap-4 xl:gap-6">
          <Title className="text-4xl text-inherit md:text-[44px]">
            Приведи друга
          </Title>
          <p className="text-[15px] md:text-base xl:text-2xl">
            Вы оба получите скидку в&nbsp;
            <span className="font-shantell text-accent-green">20 р.</span>
          </p>
        </hgroup>
        <Image
          className="md:hidden"
          src="/banner/promo-mobile.webp"
          fill
          quality={100}
          alt="Баннер синего цвета с декоратoивными иконками и сверху надпись 'приведи друга'"
        />
        <Image
          className="hidden rounded-2xl object-cover md:block xl:hidden"
          src="/banner/promo-tablet.webp"
          fill
          alt="Баннер синего цвета с декоративными иконками и сверху надпись 'приведи друга'"
        />
        <Image
          className="hidden rounded-2xl object-contain object-right xl:block"
          src="/banner/promo-desktop.webp"
          fill
          alt="Баннер синего цвета с декоративными иконками и сверху надпись 'приведи друга'"
        />
      </div>
    </section>
  );
}
