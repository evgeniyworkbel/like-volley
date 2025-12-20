"use client";

import { Button, Title } from "@/shared/ui";
import Image from "next/image";

export function Form2() {
  const handleClick = () => {
    window.open("https://forms.amocrm.ru/rrwvrmv", "_blank");
  };

  return (
    <div className="relative h-175 max-w-175 overflow-hidden rounded-3xl bg-accent-blue p-6 md:mx-auto md:h-[774px] xl:mx-0">
      <Image
        className="absolute bottom-0 left-1/2 w-[460px] -translate-x-1/2 -translate-y-20 scale-[1.6] xl:w-full xl:translate-y-0 xl:scale-100"
        width={700}
        height={618}
        src="/contact-form/players.webp"
        alt="Фото игроков в волейбол (взрослые и дети)"
      />
      <div className="relative flex h-full flex-col items-center justify-between">
        <Title className="text-center text-[28px] text-accent-green xl:text-[44px]">
          Приходи на свою первую тренировку!
        </Title>
        <Button
          className="w-full rounded-[40px] bg-white px-20 py-4 text-2xl font-medium text-foreground"
          onClick={handleClick}
        >
          Записаться
        </Button>
      </div>
    </div>
  );
}
