import Image from "next/image";
import { advantagesData } from "../model/data";

export function Advantages() {
  return (
    <section className="mx-auto flex flex-col flex-wrap items-center justify-center gap-12 px-10 py-[74px] text-center text-sm md:max-w-[1026px] md:flex-row xl:max-w-[unset] xl:justify-between xl:px-20">
      {advantagesData.map(({ id, title, src, description, alt }) => {
        return (
          <div key={id} className="flex max-w-[284px] flex-col items-center gap-3 xl:gap-4">
            <Image src={src} width={80} height={80} alt={alt} />
            <h3 className="font-bold">{title}</h3>
            <h4 className="text-balance text-foreground-secondary">{description}</h4>
          </div>
        );
      })}
    </section>
  );
}
