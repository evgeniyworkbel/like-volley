"use client";

import Image from "next/image";
import { Title } from "@/shared/ui";
import { SignUpForWorkoutBtn } from "@/features";
import { MarqueeVertical } from "./marquee-vertical";

export function Hero() {
  return (
    <section className="relative flex overflow-hidden px-5 pt-5 pb-12.5 text-black md:pt-12.5 xl:px-20">
      <div className="flex flex-col gap-29.5 p-5 md:py-9 md:pr-0 md:pl-9 xl:items-start">
        <div className="flex flex-col gap-12 md:max-w-180">
          <Title className="font-inter leading-[0.85] md:text-center xl:text-left xl:leading-none">
            Школа волейбола для&nbsp;<span className="text-accent-orange">детей</span>&nbsp;и
            взрослыx
          </Title>
          <p className="text-left text-[20px]">
            Профессиональные тренировки в Минске и Бресте.
            <br />
            Тренируем юных чемпионов и прокачиваем любителей любого уровня.
          </p>
        </div>
        <SignUpForWorkoutBtn className="rounded-3xl bg-accent-orange px-19 py-2.5 text-[16px] text-white md:w-86 md:rounded-[40px] md:px-28 md:py-4 md:text-xl" />
      </div>

      <div className="absolute top-0 right-0 flex origin-top-right rotate-[16.8deg] xl:h-175 xl:w-98">
        <MarqueeVertical direction="up">
          <Image
            src="/hero/adults_new.webp"
            width={193}
            height={294}
            loading="eager"
            alt="Фото учеников школы волейбола Like Volley"
          />
        </MarqueeVertical>

        <MarqueeVertical direction="down">
          <Image
            src="/hero/adults_new.webp"
            width={193}
            height={294}
            loading="eager"
            alt="Фото учеников школы волейбола Like Volley"
          />
        </MarqueeVertical>
      </div>
    </section>
  );
}
