import { Title } from "@/shared/ui";
import Image from "next/image";

export function Banner() {
  return (
    <section className="relative flex px-1 md:px-3.5 md:py-[50px] xl:px-20">
      <div className="absolute flex flex-col gap-6 font-extrabold text-white">
        <Title className="text-inherit">Приведи друга</Title>
        <h3 className="text-2xl">Вы оба получите скидку в 20%</h3>
      </div>

      <Image
        className="h-[108px] w-full rounded-r-xl border-r-[4.57px] object-cover object-left md:h-56 xl:h-auto xl:object-center"
        src="/banner/banner.png"
        width={1280}
        height={297}
        loading="eager"
        alt="Акция школы волейбола Like Volley"
      />
      <Image
        className="absolute bottom-0 left-0 max-h-[30px] translate-x-[70%] translate-y-[-74%] md:max-h-16 md:translate-x-[208%] md:translate-y-[-180%] xl:max-h-none xl:translate-x-[284%] xl:translate-y-[-116%]"
        src="/banner/100+.png"
        width={190}
        height={84}
        loading="eager"
        alt="Значек уровня навыков"
      />
    </section>
  );
}
