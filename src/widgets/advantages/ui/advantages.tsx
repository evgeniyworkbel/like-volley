import { advantagesData } from "../model/data";
import Image from "next/image";

export function Advantages() {
  return (
    <section className="flex max-w-[1146px] flex-col items-center justify-center gap-12 px-10 py-[74px] text-center text-sm md:flex-row md:flex-wrap xl:max-w-360 xl:justify-between xl:gap-0 xl:px-20 xl:text-base">
      {advantagesData.map(({ title, imageSrc, description, alt }) => {
        return (
          <div
            key={imageSrc}
            className="flex max-w-81 flex-col items-center gap-3 md:flex-[1_0_calc(50%-24px)] xl:gap-4"
          >
            <Image src={imageSrc} width={80} height={80} alt={alt} />
            <h3 className="font-bold">{title}</h3>
            <h4 className="text-foreground-secondary">{description}</h4>
          </div>
        );
      })}
    </section>
  );
}
