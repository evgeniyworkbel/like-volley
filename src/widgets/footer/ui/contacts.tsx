import { CompanyInfo } from "@/shared/cms/payload-types";
import { contactsLinks } from "@/shared/constants";
import { getPhoneHref } from "@/shared/lib";
import Image from "next/image";

type ContactsProps = {
  data: CompanyInfo;
};

export function Contacts({ data }: ContactsProps) {
  const { mobilePhone } = data;

  return (
    <div className="flex gap-6">
      <a href={getPhoneHref(mobilePhone)} target="_blank" rel="noopener noreferrer">
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
