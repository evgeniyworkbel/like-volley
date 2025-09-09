import { advantagesData } from "@/shared/constants";
import Image from "next/image";

export function Advantages() {
  return (
    <section className="flex flex-col gap-12 px-10 py-[74px] text-center text-sm xl:flex-row xl:justify-between xl:gap-0 xl:px-20 xl:text-base">
      {advantagesData.map(({ title, image }) => {
        return (
          <div
            key={image}
            className="flex max-w-[324px] flex-col items-center gap-3 xl:gap-4"
          >
            <Image
              className="pb-1.5"
              src={image}
              width={80}
              height={80}
              alt="Декоративная картинка"
            />
            <h3 className="font-bold">{title}</h3>
            <h4 className="text-foreground-secondary">
              Квалифицированные тренеры и удобные локации
            </h4>
          </div>
        );
      })}
    </section>
  );
}
