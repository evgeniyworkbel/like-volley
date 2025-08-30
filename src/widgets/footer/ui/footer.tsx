import Link from "next/link";
import { navLinks } from "@/shared/constants";
import Image from "next/image";
import { Button } from "@/shared/ui";
import { contactsLinks } from "@/shared/constants";

export function Footer() {
  return (
    <footer className="bg-accent-orange pt-25 md:gap-x-15 grid rounded-t-[20px] px-20 pb-20 md:grid-cols-2 lg:grid-cols-3">
      <div className="md:mb-15 flex flex-col gap-4 md:col-span-2 md:items-center lg:col-span-1 lg:mb-0 lg:items-start">
        <Image
          className="bg-accent-orange md:relative md:right-28 lg:static lg:right-0"
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
      <div className="flex flex-col justify-between">
        <p className="font-shantell text-[38px] uppercase">меню</p>
        <nav className="flex items-center gap-[34px] text-2xl">
          <Link href={navLinks.home.href}>{navLinks.home.title}</Link>
          <Link href={navLinks.blog.href}>{navLinks.blog.title}</Link>
          <Link className="text-nowrap" href={navLinks.about.href}>
            {navLinks.about.title}
          </Link>
          <Link href={navLinks.reviews.href}>{navLinks.reviews.title}</Link>
        </nav>
        <div className="flex gap-x-20 text-xs">
          <Link href={navLinks.policy.href}>{navLinks.policy.title}</Link>
          <Link href={navLinks.offerAgreement.href}>
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
