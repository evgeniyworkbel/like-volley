"use client";

import Image from "next/image";
import { Title } from "@/shared/ui";
import { SignUpForWorkoutBtn } from "@/features";
import { MarqueeVertical } from "./marquee-vertical";

export function Hero() {
  return (
    <section className="relative flex overflow-hidden px-5 py-10 text-black md:pt-12.5 xl:px-20 xl:pb-17.5">
      <div className="flex flex-col items-center gap-27.5 md:gap-29.5 md:py-9 md:pr-0 md:pl-9 xl:items-start">
        <div className="flex flex-col gap-12 text-center md:max-w-180 xl:gap-5">
          <Title className="font-inter leading-[40/32] xl:text-left xl:leading-[84/60]">
            Школа волейбола для&nbsp;<span className="text-accent-orange">детей</span>&nbsp;
            <br className="md:hidden" />и<span className="text-accent-blue">&nbsp;взрослыx</span>
          </Title>
          <p className="z-10 text-[18px] font-medium xl:text-left">
            Профессиональные тренировки в Минске и Бресте
            <br />
            Тренируем юных чемпионов и прокачиваем любителей любого уровня
          </p>
        </div>
        <SignUpForWorkoutBtn
          className="z-10 rounded-[40px] bg-accent-orange px-3 py-3.25 text-[20px] text-white md:w-86 md:px-0 md:py-4 md:text-xl"
          label="long"
        />
      </div>

      <div className="absolute top-[34%] -right-[33%] flex origin-top-left rotate-30 xl:top-0 xl:right-0 xl:h-185 xl:w-96 xl:origin-top-right xl:rotate-[16.8deg] xl:gap-6">
        <MarqueeVertical className="hidden">
          <Image
            src="/hero/adults_new.webp"
            alt="Фото учеников школы волейбола Like Volley"
            sizes="(max-width: 1279px) 120px, 193px"
            fill
          />
        </MarqueeVertical>
        <MarqueeVertical direction="down">
          <Image
            src="/hero/adults_new.webp"
            alt="Фото учеников школы волейбола Like Volley"
            sizes="(max-width: 1279px) 120px, 193px"
            fill
          />
        </MarqueeVertical>
      </div>
    </section>
  );
}
