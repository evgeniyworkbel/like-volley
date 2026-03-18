import Image from "next/image";
import { Title } from "@/shared/ui";
import Link from "next/link";
import { navLinks } from "@/shared/constants";

export function News() {
  // @todo реализовать получение через cms
  return (
    <section className="flex flex-col items-center justify-center gap-3 px-5 py-12.5 xl:px-20">
      <hgroup className="flex flex-col items-center gap-3 text-center">
        <Title className="text-4xl text-accent-orange md:text-[44px]">Новости</Title>
        <p className="text-base font-bold xl:text-2xl">
          «Лайк Воллей» выходит на международную арену: едем на «Кубок Дружбы» в Новосибирск!
        </p>
      </hgroup>

      <div className="relative flex h-121 w-full items-end justify-center overflow-hidden px-5 md:justify-start xl:h-213.25 xl:px-10">
        <div className="z-10 flex max-w-73.75 flex-col gap-2 pt-6 pb-5 font-extrabold text-white md:gap-4 xl:max-w-129 xl:gap-6">
          <Link href={navLinks.news.href} className="text-xl backdrop-blur-sm xl:text-3xl">
            Подробнее...
          </Link>
        </div>
        <Image
          className="rounded-[20px] object-cover xl:object-contain"
          src="/news/news_2.webp"
          quality={85}
          alt="Фото учеников школы"
          loading="eager"
          fill
        />
      </div>
    </section>
  );
}
