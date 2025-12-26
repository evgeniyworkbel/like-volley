import { contactsLinks } from "@/shared/constants";
import Image from "next/image";

export function Contacts() {
  return (
    <div className="flex gap-6">
      <a href={contactsLinks.phone.href} target="_blank" rel="noopener noreferrer">
        <Image
          src="/phone.svg"
          width={68}
          height={68}
          alt="Декоративная иконка телефона школы волейбола Like Volley"
        />
      </a>
      <a href={contactsLinks.locations.href} target="_blank" rel="noopener noreferrer">
        <Image
          src="/location.svg"
          width={68}
          height={68}
          alt="Декоративная иконка локации школы волейбола Like Volley"
        />
      </a>
      <a href={contactsLinks.instagram.href} target="_blank" rel="noopener noreferrer">
        <Image
          src="/instagram.svg"
          width={68}
          height={68}
          alt="Декоративная иконка Instagram школы волейбола Like Volley"
        />
      </a>
      <a href={contactsLinks.telegram.href} target="_blank" rel="noopener noreferrer">
        <Image
          src="/telegram.svg"
          width={68}
          height={68}
          alt="Декоративная иконка telegram школы волейбола Like Volley"
        />
      </a>
    </div>
  );
}
