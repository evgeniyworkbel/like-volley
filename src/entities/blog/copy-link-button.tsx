"use client";

import { usePathname } from "next/navigation";
import { LinkIcon } from "@/shared/icons";

type CopyLinkButtonProps = {
  id: number;
};

export function CopyLinkButton({ id }: CopyLinkButtonProps) {
  const pathname = usePathname();

  const handleCopy = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const articleUrl = new URL(`${pathname}/${id}`, window.location.href).href;
    navigator.clipboard.writeText(articleUrl);
  };

  return (
    <span
      className="flex items-center justify-center rounded-[98px] bg-[oklch(0.9846_0.0017_247.84)] px-3 py-2"
      role="button"
      tabIndex={0}
      onClick={handleCopy}
    >
      <LinkIcon />
    </span>
  );
}
