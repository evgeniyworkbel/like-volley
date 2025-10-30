import { advantagesData } from "../model/data";
import Image from "next/image";

export function Advantages() {
  return (
    <section className="flex flex-col gap-12 px-10 py-[74px] text-center text-sm xl:flex-row xl:justify-between xl:gap-0 xl:px-20 xl:text-base">
      {advantagesData.map(({ title, imageSrc, description, alt }) => {
        return (
          <div
            key={imageSrc}
            className="flex max-w-[324px] flex-col items-center gap-3 xl:gap-4"
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
