"use client";
import { LinkIcon } from "@/shared/icons";

type CopyLinkButtonProps = {
  id: number;
};

export function CopyLinkButton({ id }: CopyLinkButtonProps) {
  const handleCopy = () => {
    const articleUrl = `${window.location.origin}/blog/${id}`;
    navigator.clipboard.writeText(articleUrl);
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
