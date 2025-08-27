import Link from "next/link";
import { navLinks } from "@/shared/constants";
import Image from "next/image";
import { Button } from "@/shared/ui";
import { contactsLinks } from "@/shared/constants";

export function Footer() {
  return (
    <footer className="bg-accent-orange pt-25 flex justify-between rounded-t-[20px] px-20 pb-20">
      <div className="flex flex-col gap-4">
        <Image
          className="bg-white"
          src="/logo.png"
          width={51}
          height={37}
          alt="Логотип школы волейбола Like Volley"
        />
        <p className="flex flex-col gap-2 text-sm">
          <span>Волейбол для всех возрастов</span>
          <span>с индивидуальным подходом и</span>
          <span>современными методиками обучения.</span>
        </p>
      </div>
      <div className="relative flex flex-col justify-between">
        <p className="font-shantell text-[38px] uppercase">меню</p>
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
          <Link href={contactsLinks.phone.href}>
            <Image
              src="/phone.svg"
              width={68}
              height={68}
              alt="Телефон школы волейбола Like Volley"
            />
          </Link>
          <Link href={contactsLinks.location.href}>
            <Image
              src="/location.svg"
              width={68}
              height={68}
              alt="Локация школы волейбола Like Volley"
            />
          </Link>
          <Link href={contactsLinks.email.href}>
            <Image
              src="/email.svg"
              width={68}
              height={68}
              alt="Почта школы волейбола Like Volley"
            />
          </Link>
          <Link href={contactsLinks.instagram.href}>
            <Image
              src="/instagram.svg"
              width={68}
              height={68}
              alt="Instagram школы волейбола Like Volley"
            />
          </Link>
          <div />
        </div>
      </div>
      <div className="flex flex-col gap-20">
        <Button className="rounded-[40px] bg-white px-20 py-4 text-2xl font-medium">
          Записаться
        </Button>
        <ul className="flex flex-col gap-2 text-sm">
          <li>ИП Бла бла бла</li>
          <li>НИП 0002920192381984720928573-4901</li>
          <li className="mb-4">ИНН 2039847948</li>
          <li>© 2024 LikeVolley Все права защищены.</li>
        </ul>
      </div>
    </footer>
  );
}
