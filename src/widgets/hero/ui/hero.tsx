"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/shared/lib";
import { Button, Title } from "@/shared/ui";
import { contactFormId } from "@/shared/constants";
import { HeroTab } from "./hero-tab";

export function Hero() {
  const [ageGroup, setAgeGroup] = useState<"children" | "adults">("children");

  const handleClick = () => {
    const contactForm = document.getElementById(contactFormId);
    if (contactForm) {
      contactForm.scrollIntoView();
    }
  };

  return (
    <section className="flex flex-col px-5 pt-5 pb-[50px] text-center text-white md:pt-12.5 xl:px-20">
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
          "flex flex-col items-center gap-4 overflow-hidden rounded-[20px] p-5 md:relative md:h-199 md:gap-6 md:px-9 md:pt-9 xl:h-[unset] xl:items-start xl:pt-16 xl:pb-[78px]",
          {
            "bg-accent-orange": ageGroup === "children",
            "bg-accent-blue": ageGroup === "adults",
          },
        )}
      >
        <div className="flex flex-col">
          <Title className="z-10 leading-[0.85] text-inherit md:max-w-170 md:text-center md:text-[58px] xl:text-left xl:leading-none">
            Волейбольная школа для&nbsp;
            <span className="text-accent-green">всех возрастов</span>
          </Title>
        </div>
        {ageGroup === "children" && (
          <Image
            className="md:absolute md:bottom-0 xl:right-5"
            src="/hero/children.webp"
            width={543}
            height={446}
            priority
            alt="Фото учеников школы волейбола Like Volley"
          />
        )}
        {ageGroup === "adults" && (
          <Image
            className="md:absolute md:bottom-0 xl:right-5"
            src="/hero/adults.webp"
            width={570}
            height={446}
            priority
            alt="Фото взрослых учеников школы волейбола Like Volley"
          />
        )}
        <p className="z-10 flex max-w-2xs flex-col text-sm md:mb-6 md:max-w-170 md:text-lg xl:m-0 xl:text-start">
          Качественное обучение для детей и взрослых с индивидуальным подходом и
          современными методиками.
        </p>
        <Button
          className={cn(
            "rounded-3xl px-18 py-2 text-xs md:rounded-[40px] md:px-28 md:py-4 md:text-xl",
            {
              "bg-accent-blue": ageGroup === "children",
              "bg-accent-orange": ageGroup === "adults",
            },
          )}
          onClick={handleClick}
        >
          Записаться
        </Button>
      </div>
    </section>
  );
}
