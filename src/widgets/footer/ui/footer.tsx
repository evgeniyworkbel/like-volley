import Link from "next/link";
import Image from "next/image";
import { signUpForWorkoutSectionId, navLinks, contactsLinks } from "@/shared/constants";
import { FooterNav } from "./footer-nav";
import { Contacts } from "./contacts";
import { ScrollToTop } from "./scroll-to-top";

export function Footer() {
  return (
    <footer className="flex flex-col gap-[50px] bg-accent-orange py-[50px] text-white md:flex-wrap xl:flex-row xl:p-20">
      <div className="flex w-full flex-col gap-[50px] xl:flex-row xl:justify-between xl:border-b-2 xl:pb-10">
        <div className="flex flex-col items-center gap-8 xl:items-start">
          <Link href={navLinks.home.href}>
            <Image
              src="/logo-footer.svg"
              width={122}
              height={76}
              alt="Логотип школы волейбола Like Volley"
            />
          </Link>
          <p className="flex max-w-[282px] flex-col gap-2 text-center text-lg leading-[1.2] text-balance xl:max-w-[350px] xl:text-left">
            Волейбол для всех возрастов с индивидуальным подходом и современными методиками
            обучения.
          </p>
          <Contacts />
        </div>
        <FooterNav />
        <div className="flex flex-col items-center gap-10 xl:items-start xl:justify-between">
          <div className="flex flex-col items-center gap-[18px] md:gap-7 xl:items-start">
            <p className="text-sm">Контакты</p>
            <ul className="flex flex-col items-center gap-[18px] text-lg font-bold xl:items-start">
              <li>г. Брест ул. Высокая, 14Б</li>
              <li>
                <a href={contactsLinks.phone.href} target="_blank" rel="noopener noreferrer">
                  {contactsLinks.phone.label}
                </a>
              </li>
            </ul>
          </div>
          <Link
            href={`#${signUpForWorkoutSectionId}`}
            className="rounded-[40px] bg-white px-25 py-4 text-base font-medium text-accent-orange uppercase"
          >
            Записаться
          </Link>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-6 text-sm xl:flex-row xl:justify-between">
        <ul className="flex flex-col items-center gap-0.5 xl:items-start">
          <li>ООО «Лайк Воллей»</li>
          <li>УНП 291855284</li>
        </ul>
        <ul className="flex max-w-72 flex-col gap-1 text-center xl:text-start">
          <li>Р/с BY29BAPB30128106300100000000</li>
          <li>ЦБУ №116 в г. Бресте РД по Брестской области ОАО «Белагропромбанк»</li>
          <li>г. Брест ул. Воровского, 11</li>
          <li>БИК BAPBBY2X</li>
          <li>224020</li>
        </ul>
        <div className="flex flex-col items-center gap-12">
          <ScrollToTop />
          <p className="text-xs">© 2024 LikeVolley Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
