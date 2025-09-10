"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/shared/lib";
import { Button, Title } from "@/shared/ui";

export function Hero() {
  const [age, setAge] = useState<"children" | "adults">("children");

  return (
    <section className="flex flex-col px-5 py-[50px] text-center text-white xl:px-20">
      <div className="flex gap-4 px-4 xl:justify-start xl:gap-0 xl:px-0">
        <Button
          className={cn(
            "flex-1 rounded-t-2xl border-t border-r border-l border-solid border-accent-orange px-3 py-4 text-sm font-medium xl:ml-5 xl:flex-none xl:rounded-t-[20px] xl:px-20 xl:py-4 xl:text-lg",
            {
              "bg-accent-orange": age === "children",
              "bg-none text-accent-orange": age === "adults",
            },
          )}
          onClick={() => setAge("children")}
        >
          Для детей
        </Button>
        <Button
          className={cn(
            "flex-1 rounded-t-2xl border-t border-r border-l border-solid border-b-accent-blue px-3 py-4 text-sm font-medium xl:ml-5 xl:flex-none xl:rounded-t-[20px] xl:px-20 xl:py-4 xl:text-lg",
            {
              "bg-none text-accent-blue": age === "children",
              "bg-accent-blue": age === "adults",
            },
          )}
          onClick={() => setAge("adults")}
        >
          Для взрослых
        </Button>
      </div>
      <div
        className={cn(
          "flex flex-col items-center gap-4 rounded-[20px] px-5 pt-16 pb-5 xl:relative xl:items-start xl:gap-6 xl:pb-[78px]",
          {
            "bg-accent-orange": age === "children",
            "bg-accent-blue": age === "adults",
          },
        )}
      >
        <div className="flex flex-col">
          <Title className="text-inherit xl:max-w-[678px] xl:text-left">
            Волейбольная школа для&nbsp;
            <span className="text-accent-green">всех возрастов</span>
          </Title>
        </div>
        <Image
          className="max-h-full max-w-full xl:absolute xl:right-0 xl:bottom-0"
          src="/hero.png"
          width={543}
          height={446}
          alt="Фото учеников школы волейбола Like Volley"
        />
        <p className="flex flex-col text-sm xl:text-start xl:text-lg">
          <span>
            Качественное обучение для детей и взрослых с индивидуальным
          </span>
          <span>подходом и современными методиками.</span>
        </p>
        <Button
          className={cn(
            "rounded-3xl px-15 py-3 text-xs xl:rounded-[40px] xl:px-25 xl:py-4 xl:text-xl",
            {
              "bg-accent-blue": age === "children",
              "bg-accent-orange": age === "adults",
            },
          )}
        >
          Записаться
        </Button>
      </div>
    </section>
  );
}
