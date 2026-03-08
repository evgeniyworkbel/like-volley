import Image from "next/image";
import { Title } from "@/shared/ui";
import { SignUpForWorkoutBtn } from "@/features";
import { TextTicker } from "./text-ticker";

export function Form2() {
  return (
    <div className="relative flex flex-col items-center gap-3 overflow-hidden rounded-[28px] pt-24 pb-26 shadow-[2px_8px_50px_-12px_oklch(0_0_0/0.25)] xl:aspect-[1.861] xl:w-full">
      <Image
        className="-z-10 object-cover"
        src="/contact-form/volleyball.webp"
        alt="Фото девушки игрока"
        fill
      />
      <Title className="xl:text-17 text-[28px] text-accent-orange uppercase">
        готов зайти в игру?
      </Title>
      <div className="flex max-w-138.5 items-center text-center xl:flex-col xl:gap-22">
        <p className="text-lg font-bold text-accent-orange">
          Почувствуй энергию волейбола в самом драйвовом клубе города. Профессиональный паркет,
          топовые тренеры и сообщество, в котором ты растешь
        </p>
        <SignUpForWorkoutBtn className="bg-accent-orange px-10 text-[20px] text-white xl:w-50.5" />
      </div>
      <TextTicker />
    </div>
  );
}
