"use client";

import { Button, Title } from "@/shared/ui";
import { useState } from "react";
import { cn } from "@/shared/lib";
import Image from "next/image";

export function Hero() {
  const [age, setAge] = useState<"children" | "adults">("children");

  return (
    <div className="flex flex-col px-5 py-[50px] xl:px-20">
      <div className="flex gap-4 px-4 xl:justify-start xl:gap-0 xl:px-0">
        <Button
          className={cn(
            "flex-1 cursor-pointer rounded-t-2xl border-t border-r border-l border-solid border-accent-orange px-3 py-4 text-sm font-medium xl:ml-5 xl:flex-none xl:rounded-t-[20px] xl:px-20 xl:py-4 xl:text-lg",
            {
              "bg-accent-orange text-white": age === "children",
              "bg-none text-accent-orange": age === "adults",
            },
          )}
          onClick={() => setAge("children")}
        >
          Для детей
        </Button>
        <Button
          className={cn(
            "flex-1 cursor-pointer rounded-t-2xl border-t border-r border-l border-solid border-b-accent-blue px-3 py-4 text-sm font-medium xl:ml-5 xl:flex-none xl:rounded-t-[20px] xl:px-20 xl:py-4 xl:text-lg",
            {
              "bg-none text-accent-blue": age === "children",
              "bg-accent-blue text-white": age === "adults",
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
          <Title className="inline text-center text-white xl:block xl:text-left">
            Волейбольная школа&nbsp;
            <span className="xl:block">
              для
              <span className="text-green-light">&nbsp;всех возрастов</span>
            </span>
          </Title>
        </div>
        <Image
          className="max-h-full max-w-full xl:absolute xl:right-0 xl:bottom-0"
          src="/hero.svg"
          width={543}
          height={446}
          alt="Фото учеников школы волейбола Like Volley"
        />
        <div className="flex flex-col text-center text-sm text-white xl:text-start xl:text-lg">
          <span>
            Качественное обучение для детей и взрослых с индивидуальным
          </span>
          <span>подходом и современными методиками.</span>
        </div>
        <Button
          className={cn(
            "rounded-3xl px-15 py-3 text-xs text-white xl:rounded-[40px] xl:px-25 xl:py-4 xl:text-xl",
            {
              "bg-accent-blue": age === "children",
              "bg-accent-orange": age === "adults",
            },
          )}
        >
          Записаться
        </Button>
      </div>
    </div>
  );
}
