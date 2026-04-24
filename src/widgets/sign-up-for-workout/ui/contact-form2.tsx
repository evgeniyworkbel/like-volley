import Image from "next/image";
import { Title } from "@/shared/ui";
import { SignUpForWorkoutBtn } from "@/features";
import { HorizontalLooper } from "./horizontal-looper";

export function Form2() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-[28px] shadow-[2px_8px_50px_-12px_oklch(0_0_0/0.25)] xl:h-137">
      <Image
        className="-z-10"
        src="/contact-form/balll.webp"
        sizes="(max-width: 1279px) 320px, 1020px"
        alt="Фото волейбольного мяча"
        fill
      />
      <Title className="text-[28px] text-white uppercase">готов зайти в игру?</Title>
      <div className="flex flex-col items-center text-center xl:gap-22">
        <p className="max-w-138.5 text-lg font-bold text-white">
          Почувствуй энергию волейбола в самом драйвовом клубе города. Профессиональный паркет,
          топовые тренеры и сообщество, в котором ты растешь
        </p>
        <SignUpForWorkoutBtn iconType="arrow" />
      </div>
      <HorizontalLooper />
    </div>
  );
}
