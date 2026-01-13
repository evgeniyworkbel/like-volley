"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/shared/lib";
import { Title } from "@/shared/ui";
import { signUpForWorkoutSectionId } from "@/shared/constants";
import { HeroTab } from "./hero-tab";
import { heroData } from "../model/meta";

export function Hero() {
  const [ageGroup, setAgeGroup] = useState<"children" | "adults">("children");

  return (
    <section className="flex flex-col px-5 pt-5 pb-12.5 text-center text-white md:pt-12.5 xl:px-20">
      <div className="flex gap-4 px-4 xl:justify-start xl:gap-0 xl:px-0">
        <HeroTab
          className={cn({
            "bg-accent-orange": ageGroup === "children",
            "bg-none text-accent-orange": ageGroup === "adults",
          })}
          onClick={() => setAgeGroup("children")}
        >
          Для детей
        </HeroTab>
        <HeroTab
          className={cn({
            "bg-none text-accent-blue": ageGroup === "children",
            "bg-accent-blue": ageGroup === "adults",
          })}
          onClick={() => setAgeGroup("adults")}
        >
          Для взрослых
        </HeroTab>
      </div>
      <div
        className={cn(
          "flex flex-col items-center gap-4 overflow-hidden rounded-[20px] bg-accent-orange p-5 md:relative md:h-199 md:gap-6 md:p-9 xl:h-116.5 xl:items-start xl:justify-center",
          {
            "bg-accent-blue": ageGroup === "adults",
          },
        )}
      >
        <div className="flex flex-col">
          <Title className="z-10 leading-[0.85] text-inherit md:max-w-170 md:text-center md:text-[58px] xl:text-left xl:leading-none">
            {heroData[ageGroup].title}
          </Title>
        </div>
        {ageGroup === "children" && (
          <div className="flex flex-col items-center">
            {heroData.children.subtitle}
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
            {heroData.adults.subtitle}
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
            "rounded-3xl bg-accent-blue px-19 py-2.5 text-[16px] font-semibold md:rounded-[40px] md:px-28 md:py-4 md:text-xl md:font-medium",
            {
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
