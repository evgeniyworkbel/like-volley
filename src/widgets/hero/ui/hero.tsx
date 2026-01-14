"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/shared/lib";
import { Title } from "@/shared/ui";
import { signUpForWorkoutSectionId } from "@/shared/constants";
import { HeroTab } from "./hero-tab";

export function Hero() {
  const [ageGroup, setAgeGroup] = useState<"childs" | "adults">("adults");

  return (
    <section className="flex flex-col px-5 pt-5 pb-12.5 text-center text-white md:pt-12.5 xl:px-20">
      <div className="flex gap-4 px-4 xl:justify-start xl:gap-0 xl:px-0">
        <HeroTab
          className={cn({
            "text-accent-blue": ageGroup === "childs",
            "bg-accent-blue": ageGroup === "adults",
          })}
          onClick={() => setAgeGroup("adults")}
        >
          Для взрослых
        </HeroTab>
        <HeroTab
          className={cn({
            "bg-accent-orange": ageGroup === "childs",
            "text-accent-orange": ageGroup === "adults",
          })}
          onClick={() => setAgeGroup("childs")}
        >
          Для детей
        </HeroTab>
      </div>
      <div
        className={cn(
          "flex flex-col items-center gap-4 overflow-hidden rounded-[20px] p-5 md:relative md:h-199 md:gap-6 md:p-9 xl:h-116.5 xl:items-start xl:justify-center",
          {
            "bg-accent-orange": ageGroup === "childs",
            "bg-accent-blue": ageGroup === "adults",
          },
        )}
      >
        <div className="flex flex-col">
          {ageGroup === "childs" && (
            <Title className="z-10 leading-[0.85] text-inherit md:max-w-170 md:text-center md:text-[58px] xl:text-left xl:leading-none">
              Будущие чемпионы растут&nbsp;
              <span className="text-accent-green">здесь</span>
            </Title>
          )}
          {ageGroup === "adults" && (
            <Title className="z-10 leading-[0.85] text-inherit md:text-center md:text-[58px] xl:text-left xl:leading-none">
              Живи, играй,
              <br />
              <span className="text-accent-green">Побеждай!</span>
            </Title>
          )}
        </div>
        {ageGroup === "childs" && (
          <div className="flex flex-col items-center">
            <p className="z-10 flex max-w-2xs flex-col text-sm md:mb-6 md:max-w-170 md:text-lg xl:m-0 xl:text-start">
              Профессиональная подготовка юных спортсменов. Развиваем координацию, характер и
              командный дух в игровой форме.
            </p>
            <Image
              className="md:absolute md:bottom-0 xl:right-5"
              src="/hero/children.webp"
              width={543}
              height={446}
              alt="Фото учеников школы волейбола Like Volley"
              loading="eager"
            />
          </div>
        )}
        {ageGroup === "adults" && (
          <div className="flex flex-col items-center">
            <p className="z-10 flex max-w-2xs flex-col text-sm md:mb-6 md:max-w-149 md:text-lg xl:m-0 xl:text-start">
              Тренировки для любого уровня: от новичков до профи.
              <br /> Улучшаем технику, тактику и физическую форму в удобное время.
            </p>
            <Image
              className="md:absolute md:bottom-0 xl:right-5"
              src="/hero/adults.webp"
              width={570}
              height={446}
              alt="Фото взрослых учеников школы волейбола Like Volley"
              loading="eager"
            />
          </div>
        )}
        <Link
          href={`#${signUpForWorkoutSectionId}`}
          className={cn(
            "rounded-3xl px-19 py-2.5 text-[16px] font-medium md:rounded-[40px] md:px-28 md:py-4 md:text-xl",
            {
              "bg-accent-blue": ageGroup === "childs",
              "bg-accent-orange": ageGroup === "adults",
            },
          )}
        >
          Записаться
        </Link>
      </div>
    </section>
  );
}
