"use client";

import { Button } from "@/shared/ui";
import { useState } from "react";
import { cn } from "@/shared/lib";
import Image from "next/image";

export function Banner() {
  const [age, setAge] = useState<"children" | "adults">("children");

  return (
    <div className="flex flex-wrap px-20 py-[50px]">
      <div className="flex">
        <Button
          className="bg-accent-orange ml-5 cursor-pointer rounded-t-[20px] px-20 py-4 text-lg font-medium text-white"
          onClick={() => setAge("children")}
        >
          Для детей
        </Button>
        <Button
          className="bg-accent-blue ml-5 cursor-pointer rounded-t-[20px] px-20 py-4 text-lg font-medium text-white"
          onClick={() => setAge("adults")}
        >
          Для взрослых
        </Button>
      </div>
      <div
        className={cn(
          "flex rounded-[20px] pl-10 pt-16",
          age === "children" ? "bg-accent-orange" : "bg-accent-blue",
        )}
      >
        <div className="flex flex-col gap-6 pb-[74px] text-[56px]">
          <div className="font-shantell flex flex-col font-semibold leading-none">
            <span>Волейбольная</span>
            <span>школа для</span>
            <span>всех возрастов</span>
          </div>
          <div className="font-inter flex flex-col text-lg">
            <span>Качественное обучение для детей и взрослых с</span>
            <span>индивидуальным подходом и современными</span>
            <span>методиками.</span>
          </div>
          <div className="flex gap-x-20 border-t border-white px-[124px] py-3">
            <div className="font-inter flex flex-col items-center">
              <span className="text-[22px] font-bold">94%</span>
              <span className="text-sm">Успеха</span>
            </div>
            <div className="font-inter flex flex-col items-center">
              <span className="text-[22px] font-bold">6-17</span>
              <span className="text-sm">Лет</span>
            </div>
            <div className="font-inter flex flex-col items-center">
              <span className="text-[22px] font-bold">60</span>
              <span className="text-sm">Минут</span>
            </div>
          </div>
          <div />
          <div />
        </div>
        {/* <div className="flex">
          <Image
            className=""
            src="/Women.svg"
            width={344}
            height={516}
            alt="Логотип школы волейбола Like Volley"
          />

          <Image
            className=""
            src="/Man.svg"
            width={444}
            height={666}
            alt="Логотип школы волейбола Like Volley"
          />
          <Image
            className=""
            src="/W handsUP.svg"
            width={370}
            height={555}
            alt="Логотип школы волейбола Like Volley"
          />
        </div> */}
        <div></div>
      </div>
    </div>
  );
}
