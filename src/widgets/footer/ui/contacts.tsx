import { contactsLinks } from "@/shared/constants";
import Link from "next/link";
import Image from "next/image";

export function Contacts() {
  return (
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
          alt="Декоративная иконка телефона школы волейбола Like Volley"
        />
      </Link>
      <Link
        href={contactsLinks.locations.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/location.svg"
          width={68}
          height={68}
          alt="Декоративная иконка локации школы волейбола Like Volley"
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
          alt="Декоративная иконка почты школы волейбола Like Volley"
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
          alt="Декоративная иконка Instagram школы волейбола Like Volley"
        />
      </Link>
    </div>
  );
}
