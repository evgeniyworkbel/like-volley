"use client";

import { ArrowTopIcon } from "@/shared/icons";
import { cn } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { certificateFormLink } from "../model/constants";

type CertificateArrowProps = { index: number };

export function CertificateArrow({ index }: CertificateArrowProps) {
  const handleClick = () => {
    window.open(certificateFormLink, "_blank");
  };

  return (
    <Button
      className={cn("size-8 rounded-full px-0 py-0 xl:size-14", {
        "bg-[oklch(0.6559_0.1604_257.81)]": index === 0,
        "bg-[oklch(0.5811_0.1739_146.13)]": index === 1,
        "bg-[oklch(0.9451_0.1243_101.54)]": index === 2,
      })}
      onClick={handleClick}
    >
      <ArrowTopIcon className="rotate-90" />
    </Button>
  );
}
