import { contactsLinks } from "@/shared/constants";
import { RightIcon } from "@/shared/icons";

export function FullAlbumButton() {
  return (
    <a
      className="flex items-center gap-2"
      href={contactsLinks.gallery.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="font-bold text-accent-orange xl:text-[20px]">Все фотоальбомы</span>
      <span className="flex size-12 items-center justify-center rounded-full border border-accent-orange">
        <RightIcon />
      </span>
    </a>
  );
}
