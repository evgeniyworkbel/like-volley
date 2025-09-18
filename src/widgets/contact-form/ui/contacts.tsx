import { contactsLinks } from "@/shared/constants";
import Image from "next/image";
import Link from "next/link";

export function Contacts() {
  return (
    <div className="flex flex-wrap justify-between gap-6">
      <div className="flex gap-6 xl:gap-7">
        <Image
          src="contact-form/phone.svg"
          width={48}
          height={48}
          alt="Декоративная иконка телефона школы волейбола Like Volley"
        />
        <div className="flex flex-col">
          <span className="font-bold">Телефон</span>
          <Link
            href={contactsLinks.phone.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-foreground-secondary">
              {contactsLinks.phone.href}
            </span>
          </Link>
        </div>
      </div>
      <div className="flex gap-6 xl:gap-7">
        <Image
          src="contact-form/telegram.svg"
          width={48}
          height={48}
          alt="Декоративная иконка Telegram школы волейбола Like Volley"
        />
        <div className="flex flex-col gap-1">
          <span className="font-bold">Telegram</span>
          <Link
            href={contactsLinks.telegram.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-foreground-secondary">
              {contactsLinks.instagram.href}
            </span>
          </Link>
        </div>
      </div>
      <div className="flex gap-6 xl:gap-7">
        <Image
          src="contact-form/instagram.svg"
          width={48}
          height={48}
          alt="Декоративная иконка Instagram школы волейбола Like Volley"
        />
        <div className="flex flex-col gap-1">
          <span className="font-bold">Instagram</span>
          <Link
            href={contactsLinks.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-foreground-secondary">
              {contactsLinks.instagram.href}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
