"use client";

import Image from "next/image";
import { Title } from "@/shared/ui";
import { SignUpForWorkoutBtn } from "@/features";
import { VerticalLooper } from "./vertical-looper";

export function Hero() {
  return (
    <section className="relative flex overflow-hidden px-5 py-10 text-black xl:py-25 xl:pt-17 xl:pl-24.5">
      <div className="z-10 flex flex-col items-center gap-27.5 md:gap-29.5 xl:items-start">
        <div className="flex flex-col gap-12 text-center md:max-w-180 xl:gap-5 xl:text-left">
          <Title className="font-inter xl:text-6xl/21">
            Школа волейбола для&nbsp;<span className="text-accent-orange">детей</span>&nbsp;
            <br className="md:hidden" />и<span className="text-accent-blue">&nbsp;взрослыx</span>
          </Title>
          <p className="text-[18px] font-medium">
            Профессиональные тренировки в Минске и Бресте
            <br />
            Тренируем юных чемпионов и прокачиваем любителей любого уровня
          </p>
        </div>
        <SignUpForWorkoutBtn
          className="gap-4 bg-accent-orange px-1 py-3.25 text-white md:max-w-79"
          text="Записаться на занятие"
          withArrow
        />
      </div>

      <div className="absolute top-0 left-0 flex h-185 origin-top-right translate-x-[178%] translate-y-[18%] rotate-30 gap-6 xl:translate-x-[275%] xl:translate-y-0 xl:rotate-17">
        <VerticalLooper direction="up">
          <Image src="/hero/adults.webp" alt="" sizes="(max-width: 1279px) 120px, 193px" fill />
        </VerticalLooper>
        <VerticalLooper className="translate-x-7 translate-y-0 xl:translate-x-0" direction="down">
          <Image src="/hero/adults.webp" alt="" sizes="(max-width: 1279px) 120px, 193px" fill />
        </VerticalLooper>
      </div>
    </section>
  );
}
