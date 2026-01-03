import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/shared/constants";
import { Contacts } from "./contacts";
import { getPayloadClient } from "@/shared/cms";
import { SignUpForWorkoutBtn } from "@/features";

export async function Footer() {
  const payload = await getPayloadClient();
  const companyInfo = await payload.findGlobal({ slug: "company-info" });
  const { legalAddress, legalName, postcode, unp } = companyInfo;

  return (
    <footer className="grid justify-items-center gap-15 bg-accent-orange py-12.5 text-white xl:grid-cols-[auto_1fr] xl:grid-rows-1 xl:p-20">
      <div className="flex flex-col items-center gap-8 xl:items-start">
        <Link href={navLinks.home.href}>
          <Image
            src="/logo-footer.svg"
            width={122}
            height={76}
            alt="Логотип школы волейбола Like Volley"
          />
        </Link>
        <p className="flex max-w-67.5 flex-col gap-2 text-center text-lg xl:max-w-87.5 xl:text-left">
          Волейбол для всех возрастов с индивидуальным подходом и современными методиками обучения.
        </p>
        <ul className="flex flex-col items-center gap-0.5 text-lg xl:items-start">
          <li>{legalName}</li>
          <li>УНП {unp}</li>
          <li>{legalAddress}</li>
          <li>{postcode}</li>
        </ul>
      </div>
      <div className="flex flex-col justify-center gap-15 xl:flex-row xl:justify-between">
        <div className="flex flex-col items-center gap-10 xl:items-start">
          <p className="font-shantell text-[38px] uppercase">меню</p>
          <div className="flex justify-between gap-x-12 text-sm xl:text-xs [&>a:hover]:underline">
            <Link href={navLinks.policy.href}>{navLinks.policy.title}</Link>
            <Link href={navLinks.offerAgreement.href} rel="nooper noreferrer">
              {navLinks.offerAgreement.title}
            </Link>
          </div>
          {/* todo: отключил временно до особых распоряжений */}

          {/* <nav className="flex flex-wrap justify-center gap-7 text-2xl">
            <Link href={navLinks.blog.href}>{navLinks.blog.title}</Link>
            <Link href={navLinks.about.href}>{navLinks.about.title}</Link>
            <Link href={navLinks.reviews.href}>{navLinks.reviews.title}</Link>
          </nav> */}
          <Contacts data={companyInfo} />
        </div>
        <div className="flex flex-col items-center gap-20 xl:items-start xl:justify-between">
          <SignUpForWorkoutBtn />
          <ul className="flex max-w-72 flex-col gap-1 text-center text-sm xl:text-start">
            <li>Р/с BY29BAPB30128106300100000000</li>
            <li>ЦБУ №116 в г. Бресте РД по Брестской области ОАО «Белагропромбанк»</li>
            <li>г. Брест ул. Воровского, 11</li>
            <li className="mb-5">БИК BAPBBY2X</li>
            <li className="text-xs">© 2024 LikeVolley Все права защищены.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
