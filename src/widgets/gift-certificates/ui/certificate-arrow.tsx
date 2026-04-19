"use client";

import { ArrowTopIcon } from "@/shared/icons";
import { cn } from "@/shared/lib";
import { Button } from "@/shared/ui";

type CertificateArrowProps = { certColor: number };

export function CertificateArrow({ certColor }: CertificateArrowProps) {
  const handleClick = () => {
    window.open("https://forms.amocrm.ru/rcxxtzm", "_blank");
  };

  return (
    <Button
      className={cn("size-8 rounded-full px-0 py-0 xl:size-14", {
        "bg-[oklch(0.6559_0.1604_257.81)]": certColor === 0,
        "bg-[oklch(0.5811_0.1739_146.13)]": certColor === 1,
        "bg-[oklch(0.9451_0.1243_101.54)]": certColor === 2,
      })}
      onClick={handleClick}
    >
      <ArrowTopIcon className="rotate-90" />
    </Button>
  );
}
