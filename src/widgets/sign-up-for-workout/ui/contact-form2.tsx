import Image from "next/image";
import { Title } from "@/shared/ui";
import { SignUpForWorkoutBtn } from "@/features";
import { HorizontalLooper } from "./horizontal-looper";

export function Form2() {
  return (
    <div className="relative flex h-173 flex-col items-center gap-8 overflow-hidden rounded-[28px] py-12.5 shadow-[2px_8px_50px_-12px_oklch(0_0_0/0.25)] xl:h-137 xl:py-24">
      <Image
        className="-z-10 object-cover object-[24%_0%]"
        src="/contact-form/ball.webp"
        sizes="(max-width: 1279px) 320px, 1020px"
        alt="Фото волейбольного мяча"
        fill
      />
      <Title className="text-[26px] text-white uppercase">готов зайти в игру?</Title>
      <div className="flex flex-col items-center gap-40 xl:gap-25">
        <p className="max-w-80 text-center text-sm font-bold text-white xl:max-w-138.5 xl:text-lg">
          Почувствуй энергию волейбола в самом драйвовом клубе города. Профессиональный паркет,
          топовые тренеры и сообщество, в котором ты растешь
        </p>
        <SignUpForWorkoutBtn iconType="arrow" />
      </div>
      <HorizontalLooper />
    </div>
  );
}
