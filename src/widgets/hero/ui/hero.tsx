"use client";

import Image from "next/image";
import { Title } from "@/shared/ui";
import { SignUpForWorkoutBtn } from "@/features";
import { MarqueeVertical } from "./marquee-vertical";

export function Hero() {
  return (
    <section className="relative flex overflow-hidden px-5 pt-10 pb-17.5 text-black md:pt-12.5 xl:px-20">
      <div className="flex flex-col items-center gap-27.5 md:gap-29.5 md:py-9 md:pr-0 md:pl-9 xl:items-start">
        <div className="flex flex-col gap-12 text-center md:max-w-180">
          <Title className="font-inter leading-[40/32] xl:text-left xl:leading-[84/60]">
            Школа волейбола для&nbsp;<span className="text-accent-orange">детей</span>&nbsp;
            <br className="md:hidden" />и<span className="text-accent-blue">&nbsp;взрослыx</span>
          </Title>
          <p className="text-[18px] font-medium xl:text-left">
            Профессиональные тренировки в Минске и Бресте
            <br />
            Тренируем юных чемпионов и прокачиваем любителей любого уровня
          </p>
        </div>
        <SignUpForWorkoutBtn
          className="rounded-3xl bg-accent-orange px-3 py-2.5 text-[20px] text-white md:w-86 md:rounded-[40px] md:p-4 md:text-xl"
          label="long"
        />
      </div>

      <div className="absolute top-0 right-0 flex origin-top-right rotate-[16.8deg] xl:h-185 xl:w-96">
        <MarqueeVertical className="hidden" direction="up">
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
