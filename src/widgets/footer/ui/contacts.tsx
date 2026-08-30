import { CompanyInfo } from "@/shared/cms/payload-types";
import { contactsLinks } from "@/shared/constants";
import { cn, getPhoneHref } from "@/shared/lib";
import { SocialLink } from "./social-link";

type ContactsProps = {
  className?: string;
  data: CompanyInfo;
};

export function Contacts({ className, data }: ContactsProps) {
  const { mobilePhone } = data;

  return (
    <div className={cn("flex gap-4", className)}>
      <SocialLink
        href={getPhoneHref(mobilePhone)}
        target="_self"
        src="/phone.svg"
        alt="Декоративная иконка телефона школы волейбола Like Volley"
      />
      <SocialLink
        href={contactsLinks.locations.href}
        src="/location.svg"
        alt="Декоративная иконка локации школы волейбола Like Volley"
      />
      <SocialLink
        href={contactsLinks.instagram.href}
        src="/instagram.svg"
        alt="Декоративная иконка Instagram школы волейбола Like Volley"
      />
      <SocialLink
        href={contactsLinks.telegram.href}
        src="/telegram.svg"
        alt="Декоративная иконка Telegram школы волейбола Like Volley"
      />
    </div>
  );
}
