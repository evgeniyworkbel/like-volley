import Image from "next/image";
import { Title } from "@/shared/ui";
import { SignUpForWorkoutBtn } from "@/features";

export function Banner() {
  return (
    <section className="flex px-5 py-12.5 xl:px-20 xl:py-15">
      <div className="flex h-158 w-full flex-col items-center justify-end overflow-hidden rounded-[36px] bg-linear-to-r from-[oklch(0.4946_0.2461_276.82)] to-[oklch(0.6511_0.1919_33.16)] xl:h-138.5 xl:flex-row xl:justify-between xl:pl-15.5">
        <div className="flex flex-col items-center gap-6 xl:items-start xl:gap-16">
          <hgroup className="flex flex-col items-center gap-6 text-white xl:max-w-108 xl:items-start xl:gap-11.5">
            <Title className="text-center font-inter text-4xl font-light text-inherit uppercase italic md:text-[96px] xl:text-left">
              вместе
              <br />
              <span className="bg-linear-to-r from-[oklch(0.9052_0.1657_98.11)] to-[oklch(0.8366_0.1165_66.29)] bg-clip-text pr-3 font-bold text-transparent">
                дешевле
              </span>
            </Title>
            <p className="border-l-4 border-[oklch(0.8606_0.1731_91.94)] pl-6 text-shadow-accent-green xl:text-lg">
              Приводи друга на тренировку и получите <span className="font-bold">скидку 20p</span>
              &nbsp; на абонемент для каждого. Играйте в одной команде!
            </p>
          </hgroup>
          <SignUpForWorkoutBtn iconType="arrow" />
        </div>

        <div className="relative h-77 w-full xl:aspect-[1.29] xl:h-full">
          <Image
            className="object-cover object-[-14%_0%] xl:object-center"
            src="/banner/promo.webp"
            quality={100}
            alt="Баннер фиолетового цвета и сбоку надпись 'Вместе Дешевле'"
            fill
          />
        </div>
      </div>
    </section>
  );
}
