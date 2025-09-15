import Link from "next/link";
import { navLinks } from "@/shared/constants";
import Image from "next/image";
import { Button } from "@/shared/ui";
import { contactsLinks } from "@/shared/constants";

export function Footer() {
  return (
    <footer className="grid justify-items-center gap-15 rounded-t-[20px] bg-accent-orange py-[50px] text-white xl:mx-0 xl:grid-cols-[auto_1fr] xl:grid-rows-1 xl:gap-[8vw] xl:p-20">
      <div className="flex flex-col items-center gap-8 xl:items-start">
        <Image
          className="bg-accent-orange"
          src="/logo.png"
          width={89}
          height={60}
          alt="Логотип школы волейбола Like Volley"
        />
        <p className="flex max-w-[270px] flex-col gap-2 text-center text-lg xl:max-w-[350px] xl:text-left">
          Волейбол для всех возрастов с индивидуальным подходом и современными
          методиками обучения.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-15 xl:justify-between">
        <div className="flex flex-col items-center gap-10 xl:items-start">
          <p className="font-shantell text-[38px] uppercase">меню</p>
          <nav className="flex flex-wrap justify-center gap-7 text-2xl">
            <Link href={navLinks.home.href}>{navLinks.home.title}</Link>
            <Link href={navLinks.blog.href}>{navLinks.blog.title}</Link>
            <Link href={navLinks.about.href}>{navLinks.about.title}</Link>
            <Link href={navLinks.reviews.href}>{navLinks.reviews.title}</Link>
          </nav>
          <div className="flex justify-between gap-x-12 text-sm xl:text-xs">
            <Link className="flex hover:underline" href={navLinks.policy.href}>
              {navLinks.policy.title}
            </Link>
            <Link
              className="flex hover:underline"
              href={navLinks.offerAgreement.href}
            >
              {navLinks.offerAgreement.title}
            </Link>
          </div>
          <div className="flex gap-6">
            <Link
              href={contactsLinks.phone.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/phone.svg"
                width={68}
                height={68}
                alt="Телефон школы волейбола Like Volley"
              />
            </Link>
            <Link
              href={contactsLinks.location.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/location.svg"
                width={68}
                height={68}
                alt="Локация школы волейбола Like Volley"
              />
            </Link>
            <Link
              href={contactsLinks.email.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/email.svg"
                width={68}
                height={68}
                alt="Почта школы волейбола Like Volley"
              />
            </Link>
            <Link
              href={contactsLinks.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/instagram.svg"
                width={68}
                height={68}
                alt="Instagram школы волейбола Like Volley"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-20 xl:justify-between">
          <Button className="rounded-[40px] bg-white px-20 py-4 text-2xl font-medium text-black">
            Записаться
          </Button>
          <ul className="flex flex-col gap-2 text-sm">
            <li>ИП Бла бла бла</li>
            <li>НИП 0002920192381984720928573-4901</li>
            <li className="mb-5">ИНН 2039847948</li>
            <li>© 2024 LikeVolley Все права защищены.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
