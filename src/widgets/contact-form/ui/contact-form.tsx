import { contactsLinks } from "@/shared/constants";
import Image from "next/image";
import { Title } from "@/shared/ui";
import Link from "next/link";

export function ContactForm() {
  return (
    <section className="flex flex-col gap-12 rounded-[20px] bg-accent-soft-orange px-20 py-[90px]">
      <div className="flex flex-col gap-12 xl:max-w-lg">
        <div className="flex flex-col gap-4">
          <Title className="text-6xl">
            Запишись&nbsp;
            <span className="flex text-foreground">на первую тренировку</span>
          </Title>
          <span className="text-base text-foreground-secondary">
            Свяжитесь с нами для получения персональной консультации
          </span>
        </div>
        <div className="flex">
          <div className="flex flex-row">
            <div className="flex flex-wrap justify-between gap-6">
              <Link
                className="flex gap-7"
                href={contactsLinks.phone.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="contact-form/phone.svg"
                  width={48}
                  height={48}
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <span className="font-bold">Телефон</span>
                  <span className="text-foreground-secondary">
                    {contactsLinks.instagram.href}
                  </span>
                </div>
              </Link>
              <Link
                className="flex gap-7"
                href={contactsLinks.telegram.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="contact-form/telegram.svg"
                  width={48}
                  height={48}
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <span className="font-bold">Telegram</span>
                  <span className="text-foreground-secondary">
                    {contactsLinks.instagram.href}
                  </span>
                </div>
              </Link>
              <Link
                className="flex gap-7"
                href={contactsLinks.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="contact-form/instagram.svg"
                  width={48}
                  height={48}
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <span className="font-bold">Instagram</span>
                  <span className="text-foreground-secondary">
                    {contactsLinks.instagram.href}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
