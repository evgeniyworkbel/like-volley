import Image from "next/image";
import Link from "next/link";

export function News() {
  // @todo реализовать получение через cms
  // @todo при cms id далить
  const newsId = "2";

  return (
    <section className="flex flex-col items-center gap-4 px-5 py-12.5 xl:gap-6 xl:px-20">
      <h1 className="font-shantell text-4xl font-bold text-accent-orange md:text-6xl">Новости</h1>
      <div className="relative flex h-121 w-full items-end justify-center overflow-hidden rounded-[20px] xl:h-213.25">
        <Image
          className="-z-10 object-cover xl:object-contain"
          // @todo удалить из public
          src="/news/news_2.webp"
          quality={85}
          alt="Фото учеников школы"
          fill
        />
      </div>
      <div className="flex flex-col gap-2 self-start text-left xl:text-2xl">
        <p className="text-base font-bold">«Лайк Воллей» выходит на международную арену.</p>
        <p className="text-[18px] text-foreground-secondary">
          Едем на «Кубок Дружбы» в Новосибирск!
        </p>
      </div>
      <Link
        href={`/news/${newsId}`}
        className="self-start text-xl font-medium text-accent-orange underline underline-offset-4 xl:text-3xl"
      >
        Читать
      </Link>
    </section>
  );
}
