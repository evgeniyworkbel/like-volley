import { contactsLinks } from "@/shared/constants";
import { ArrowIcon } from "@/shared/icons";

export function AllFotosButton() {
  return (
    <a href={contactsLinks.gallery.href} target="_blank" rel="noopener noreferrer">
      <div className="size-8.5 items-center justify-center rounded-full border border-foreground/20">
        <ArrowIcon className="rotate-90" width={30} height={30} />
      </div>
    </a>
  );
}
