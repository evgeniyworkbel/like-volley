import Link from "next/link";
import { navLinks } from "@/shared/constants";
import Image from "next/image";
import { Button } from "@/shared/ui";
import { contactsLinks } from "@/shared/constants";

export function Footer() {
  return (
    <footer className="grid justify-items-center gap-14 rounded-t-[20px] bg-accent-orange px-2.5 pt-20 pb-20 text-white md:grid-rows-[max-content_1fr] md:px-20 md:pt-25 lg:gap-x-15 xl:mx-0 xl:grid-cols-[auto_1fr] xl:grid-rows-1">
      <div className="hidden md:flex md:flex-col md:gap-4">
        <Image
          className="bg-accent-orange"
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

      <div className="flex flex-wrap justify-center gap-[60px] xl:w-full xl:justify-between">
        <div className="flex flex-col justify-between gap-10 md:mr-auto lg:mr-0">
          <p className="font-shantell text-[38px] uppercase">меню</p>
          <nav className="flex items-center gap-7 text-sm md:gap-8.5 md:text-2xl">
            <Link href={navLinks.home.href}>{navLinks.home.title}</Link>
            <Link href={navLinks.blog.href}>{navLinks.blog.title}</Link>
            <Link className="text-nowrap" href={navLinks.about.href}>
              {navLinks.about.title}
            </Link>
            <Link href={navLinks.reviews.href}>{navLinks.reviews.title}</Link>
          </nav>
          <div className="hidden md:flex md:gap-x-20 md:text-xs">
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
                className="h-15 w-15 md:h-[68px] md:w-[68px]"
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
                className="h-15 w-15 md:h-[68px] md:w-[68px]"
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
                className="h-15 w-15 md:h-[68px] md:w-[68px]"
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
                className="h-15 w-15 md:h-[68px] md:w-[68px]"
                src="/instagram.svg"
                width={68}
                height={68}
                alt="Instagram школы волейбола Like Volley"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-20">
          <Button className="rounded-[40px] bg-white px-20 py-4 text-2xl font-medium text-black">
            Записаться
          </Button>
          <ul className="flex flex-col gap-2 text-sm">
            <li>ИП Бла бла бла</li>
            <li>НИП 0002920192381984720928573-4901</li>
            <li className="mt-12">
              {/* перепроверить при окончательном варианте   НА Мобильной  Версии */}
              <div className="flex gap-x-20 text-xs">
                <Link href={navLinks.policy.href}>{navLinks.policy.title}</Link>
                <Link href={navLinks.offerAgreement.href}>
                  {navLinks.offerAgreement.title}
                </Link>
              </div>
              {/* перепроверить при окончательном варианте */}
            </li>
            <li className="mb-4">ИНН 2039847948</li>
            <li>© 2024 LikeVolley Все права защищены.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
