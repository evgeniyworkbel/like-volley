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
        <Link
          href={navLinks.news.href}
          className="pb-5 text-xl font-extrabold text-white backdrop-blur-sm xl:text-3xl"
        >
          Подробнее...
        </Link>
        <Image
          className="-z-10 rounded-[20px] object-cover xl:object-contain"
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
