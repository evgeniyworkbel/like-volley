import { cn } from "@/shared/lib";
import { advantagesData } from "../model/data";
import Image from "next/image";

export function Advantages() {
  return (
    <section className="grid grid-cols-1 justify-items-center gap-12 px-10 py-[74px] text-center text-sm md:grid-cols-2 xl:grid-cols-3 xl:gap-0 xl:px-20 xl:text-base">
      {advantagesData.map(({ id, title, imageSrc, description, alt }) => {
        return (
          <div
            key={imageSrc}
            className={cn(
              "flex h-44 w-81 flex-col items-center gap-3 xl:gap-4",
              {
                "md:col-span-2 xl:col-span-1": id === 3,
              },
            )}
          >
            <Image src={imageSrc} width={80} height={80} alt={alt} />
            <h3 className="font-bold">{title}</h3>
            <h4 className="whitespace-pre-line text-foreground-secondary">
              {description}
            </h4>
          </div>
        );
      })}
    </section>
  );
}
