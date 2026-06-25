"use client";

import { MouseEvent } from "react";
import { LinkIcon } from "@/shared/icons";

type CopyLinkButtonProps = {
  shareUrl: string;
};

export function CopyLinkButton({ shareUrl }: CopyLinkButtonProps) {
  const handleCopy = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(shareUrl);
  };

  return (
    <div
      className="flex items-center justify-center rounded-[98px] bg-[oklch(0.9846_0.0017_247.84)] px-3 py-2"
      role="button"
      tabIndex={0}
      onClick={handleCopy}
    >
      <LinkIcon />
    </div>
  );
}
