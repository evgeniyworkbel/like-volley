import Image from "next/image";
import { Title } from "@/shared/ui";
import { cn } from "@/shared/lib";
import { bannerImagesData } from "../model/data";

export function Banner() {
  return (
    <section className="flex justify-center px-5 py-[50px] xl:px-20">
      <div className="relative flex aspect-[0.66] w-full justify-center overflow-hidden rounded-2xl border-4 border-[oklch(0.6559_0.1604_257.81)] bg-accent-blue px-5 pt-4 md:aspect-[2.45] md:items-center md:justify-start md:py-0 xl:aspect-[4.29] xl:px-10">
        <hgroup className="z-10 flex flex-col items-center gap-6 font-extrabold text-white md:items-start md:gap-4 xl:gap-6">
          <Title className="text-4xl text-inherit md:text-[44px]">Приведи друга</Title>
          <p className="text-[15px] md:text-base xl:text-2xl">
            Вы оба получите скидку в&nbsp;
            <span className="font-shantell text-accent-green">20 р.</span>
          </p>
        </hgroup>
        {bannerImagesData.map(({ id, className, src, alt }) => {
          return (
            <Image
              key={id}
              className={cn("object-contain", className)}
              src={src}
              quality={100}
              alt={alt}
              fill
            />
          );
        })}
      </div>
    </section>
  );
}
