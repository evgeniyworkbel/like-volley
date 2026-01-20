import { contactsLinks } from "@/shared/constants";
import { ArrowIcon } from "@/shared/icons";

export function AllFotosButton() {
  return (
    <a
      className="flex items-end gap-1.5 text-sm font-bold uppercase"
      href={contactsLinks.gallery.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      все фотоальбомы
      <div className="relative top-1.5 size-8.5 items-center justify-center rounded-full border border-foreground/20">
        <ArrowIcon className="rotate-90" width={30} height={30} />
      </div>
    </a>
  );
}
