import Link from "next/link";
import { navLinks } from "@/shared/constants";
import Image from "next/image";
import { Button } from "@/shared/ui";

export function Footer() {
  return (
    <footer className="bg-accent-orange pt-25 flex justify-between rounded-t-[20px] px-20 pb-[81px]">
      <div className="flex flex-col gap-4">
        <Image
          src="/logo-2.svg"
          width={51}
          height={37}
          alt="Логотип школы волейбола Like Volley"
        />
        <div className="flex flex-col gap-2 text-sm">
          <span>Волейбол для всех возрастов</span>
          <span>с индивидуальным подходом и</span>
          <span>современными методиками обучения.</span>
        </div>
      </div>
      <div className="relative flex flex-col justify-between">
        <p className="font-shantell text-[38px]">МЕНЮ</p>
        <nav className="mb-10 flex items-center gap-[34px] text-2xl">
          <Link href={navLinks.home.href}>{navLinks.home.title}</Link>
          <Link href={navLinks.blog.href}>{navLinks.blog.title}</Link>
          <Link href={navLinks.about.href}>{navLinks.about.title}</Link>
          <Link href={navLinks.reviews.href}>{navLinks.reviews.title}</Link>
        </nav>
        <Image
          className="absolute right-0 top-0 translate-x-[70%] translate-y-[25%] transform"
          src="/arrow.svg"
          width={188}
          height={162}
          alt="Декоративная стрелка указателя"
        />
        <div className="flex gap-6">
          <Link href={"/"}>
            <Image
              src="/phone.svg"
              width={68}
              height={68}
              alt="Телефон школы волейбола Like Volley"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src="/local.svg"
              width={68}
              height={68}
              alt="Локация школы волейбола Like Volley"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src="/mail.svg"
              width={68}
              height={68}
              alt="Почта школы волейбола Like Volley"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src="/inst.svg"
              width={68}
              height={68}
              alt="Instagram школы волейбола Like Volley"
            />
          </Link>
          <div />
        </div>
      </div>
      <div className="flex flex-col gap-20">
        <Button className="text-background rounded-[40px] bg-white px-20 py-4 text-2xl font-medium">
          Записаться
        </Button>
        <div className="flex flex-col gap-2 text-sm">
          <span>ИП Бла бла бла</span>
          <span>НИП 0002920192381984720928573-4901</span>
          <span className="mb-4">ИНН 2039847948</span>
          <span>© 2024 LikeVolley Все права защищены.</span>
        </div>
      </div>
    </footer>
  );
}
