import Image from "next/image";

export function Banner() {
  return (
    <section className="relative flex px-1 xl:px-20 xl:py-[50px]">
      <Image
        className="h-[108px] w-full rounded-r-md object-cover object-left xl:h-auto xl:object-center"
        src="/banner.png"
        width={1280}
        height={297}
        loading="eager"
        alt="Акция школы волейбола Like Volley"
      />
      <Image
        className="absolute bottom-0 left-0 max-h-[30px] translate-x-[70%] translate-y-[-74%] xl:max-h-none xl:translate-x-[284%] xl:translate-y-[-116%]"
        src="/100+.svg"
        width={190}
        height={84}
        loading="eager"
        alt="Значек уровня навыков"
      />
    </section>
  );
}
