"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/shared/lib";
import { Button, Title } from "@/shared/ui";
import { HeroTab } from "./hero-tab";

export function Hero() {
  const [ageGroup, setAgeGroup] = useState<"children" | "adults">("children");

  return (
    <section className="flex flex-col px-5 py-[50px] text-center text-white xl:px-20">
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
          "flex flex-col items-center gap-4 overflow-hidden rounded-[20px] px-5 pt-16 pb-5 xl:relative xl:items-start xl:gap-6 xl:pb-[78px]",
          {
            "bg-accent-orange": ageGroup === "children",
            "bg-accent-blue": ageGroup === "adults",
          },
        )}
      >
        <div className="flex flex-col">
          <Title className="text-inherit xl:max-w-[678px] xl:text-left">
            Волейбольная школа для&nbsp;
            <span className="text-accent-green">всех возрастов</span>
          </Title>
        </div>
        {ageGroup === "children" && (
          <Image
            className="xl:absolute xl:right-0 xl:bottom-0"
            src="/hero/children.webp"
            width={543}
            height={446}
            priority
            alt="Фото учеников школы волейбола Like Volley"
          />
        )}
        {ageGroup === "adults" && (
          <Image
            className="xl:absolute xl:right-0 xl:bottom-0"
            src="/hero/adults.webp"
            width={543}
            height={446}
            priority
            alt="Фото взрослых учеников школы волейбола Like Volley"
          />
        )}
        <p className="flex max-w-2xs flex-col text-sm xl:max-w-[678px] xl:text-start xl:text-lg">
          Качественное обучение для детей и взрослых с индивидуальным подходом и
          современными методиками.
        </p>
        <Button
          className={cn(
            "rounded-3xl px-15 py-3 text-xs xl:rounded-[40px] xl:px-25 xl:py-4 xl:text-xl",
            {
              "bg-accent-blue": ageGroup === "children",
              "bg-accent-orange": ageGroup === "adults",
            },
          )}
        >
          Записаться
        </Button>
      </div>
    </section>
  );
}
