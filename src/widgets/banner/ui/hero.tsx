"use client";

import { Button, Title } from "@/shared/ui";
import { useState } from "react";
import { cn } from "@/shared/lib";
import Image from "next/image";

export function Hero() {
  const [age, setAge] = useState<"children" | "adults">("children");

  return (
    <div className="flex flex-col px-5 py-[50px] xl:px-20 xl:py-[50px]">
      <div className="flex">
        <Button
          className={cn(
            "ml-4 cursor-pointer rounded-t-[20px] border-t border-r border-l border-solid border-accent-orange px-3 py-5 text-sm font-medium xl:ml-5 xl:px-20 xl:py-4 xl:text-lg",
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
            "ml-4 cursor-pointer rounded-t-[20px] border-t border-r border-l border-solid border-b-accent-blue px-3 py-5 text-sm font-medium xl:ml-5 xl:px-20 xl:py-4 xl:text-lg",
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
          "flex rounded-[20px] px-5 pt-16 pb-5 xl:relative xl:pb-[78px]",
          {
            "bg-accent-orange": age === "children",
            "bg-accent-blue": age === "adults",
          },
        )}
      >
        <div className="flex flex-col items-center gap-4 xl:items-start xl:gap-6">
          <div className="flex flex-col">
            <Title className="flex text-white">Волейбольная школа</Title>
            <Title className="flex text-green-light">для всех возрастов</Title>
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
              "rounded-[40px] px-15 py-3 text-xs text-white xl:px-25 xl:py-4 xl:text-xl",
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
    </div>
  );
}
