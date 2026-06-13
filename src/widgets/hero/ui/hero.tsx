"use client";

import Image from "next/image";
import { SectionTitle } from "@/shared/ui";
import { SignUpForWorkoutBtn } from "@/features";
import { VerticalLooper } from "./vertical-looper";
import { photos } from "../model/constants";

export function Hero() {
  return (
    <section className="relative flex overflow-hidden px-5 py-10 text-black xl:py-25 xl:pt-17 xl:pl-24.5">
      <div className="z-10 mx-auto flex flex-col items-center gap-27.5 md:gap-29.5 xl:mx-0 xl:items-start">
        <div className="flex flex-col gap-12 text-center md:max-w-180 xl:gap-5 xl:text-left">
          <SectionTitle className="font-inter xl:text-6xl/21">
            Школа волейбола для&nbsp;<span className="text-accent-orange">детей</span>&nbsp;
            <br className="md:hidden" />и<span className="text-accent-blue">&nbsp;взрослыx</span>
          </SectionTitle>
          <p className="text-[18px] font-medium">
            Профессиональные тренировки в Минске и Бресте
            <br />
            Тренируем юных чемпионов и прокачиваем любителей любого уровня
          </p>
        </div>
        <SignUpForWorkoutBtn text="Записаться на занятие" iconType="arrow" />
      </div>

      <div className="absolute top-0 right-0 flex h-185 translate-x-10 rotate-30 gap-3 xl:-translate-x-28 xl:rotate-17">
        <VerticalLooper direction="up">
          {photos.map((item) => (
            <Image key={item} src={item} alt="" sizes="(max-width: 1279px) 120px, 193px" fill />
          ))}
        </VerticalLooper>
        <VerticalLooper className="hidden md:flex" direction="down">
          {photos.map((item) => (
            <Image key={item} src={item} alt="" sizes="(max-width: 1279px) 120px, 193px" fill />
          ))}
        </VerticalLooper>
      </div>
    </section>
  );
}
