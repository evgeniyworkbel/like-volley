import Link from "next/link";
import { navLinks } from "@/shared/constants";
import Image from "next/image";
import { Button } from "@/shared/ui";

export function Footer() {
  return (
    <footer className="bg-accent-orange pt-25 flex h-[443px] justify-between rounded-t-[20px] px-20 pb-[81px]">
      <div className="flex flex-col gap-4">
        <Image
          src="/logo-2.png"
          width={51}
          height={37}
          alt="Логотип школы волейбола Like Volley"
        />
        <p className="text-sm font-normal leading-[1.86]">
          Волейбол для всех возрастов
          <br />
          с индивидуальным подходом и
          <br />
          современными методиками обучения.
        </p>
      </div>
      <div className="relative flex flex-col justify-between">
        <p className="font-shantell text-[38px] font-normal">МЕНЮ</p>
        <nav className="mt-[-40px] flex items-center gap-[34px] text-2xl">
          <Link href={navLinks.home.href}>{navLinks.home.title}</Link>
          <Link href={navLinks.blog.href}>{navLinks.blog.title}</Link>
          <Link href={navLinks.about.href}>{navLinks.about.title}</Link>
          <Link href={navLinks.reviews.href}>{navLinks.reviews.title}</Link>
        </nav>
        <Image
          className="absolute left-[85%] top-[24%]"
          src="/arrow.png"
          width={188}
          height={162}
          alt="Декоративная стрелка указателя"
        />
        <div className="flex gap-6">
          <Image
            src="/phone.png"
            width={68}
            height={68}
            alt="Телефон школы волейбола Like Volley"
          />
          <Image
            src="/local.png"
            width={68}
            height={68}
            alt="Локация школы волейбола Like Volley"
          />
          <Image
            src="/mail.png"
            width={68}
            height={68}
            alt="Почта школы волейбола Like Volley"
          />
          <Image
            src="/inst.png"
            width={68}
            height={68}
            alt="Instagram школы волейбола Like Volley"
          />
          <div />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <Button
          className="bg-foreground text-background rounded-[40px] px-20 py-4 text-2xl font-medium"
          ariaLabel="Записаться на занятие"
        >
          Записаться
        </Button>
        <p className="text-sm font-normal leading-[1.86]">
          ИП Бла бла бла
          <br />
          НИП 0002920192381984720928573-4901
          <br /> ИНН 2039847948
          <br />
          <br />© 2024 LikeVolley Все права защищены.
        </p>
      </div>
    </footer>
  );
}
