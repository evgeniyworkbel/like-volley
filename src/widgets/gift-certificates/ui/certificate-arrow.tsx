"use client";

import { ArrowTopIcon } from "@/shared/icons";
import { cn } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { CertificateModel } from "../model/types";

type CertificateArrowProps = Pick<CertificateModel, "certColor">;

export function CertificateArrow({ certColor }: CertificateArrowProps) {
  const handleClick = () => {
    window.open("https://forms.amocrm.ru/rcxxtzm", "_blank");
  };

  return (
    <Button
      className={cn("size-8 rounded-full px-0 py-0 xl:size-14", {
        "bg-[oklch(0.6559_0.1604_257.81)]": certColor === "blue",
        "bg-[oklch(0.5811_0.1739_146.13)]": certColor === "green",
        "bg-[oklch(0.9451_0.1243_101.54)]": certColor === "yellow",
      })}
      onClick={handleClick}
    >
      <ArrowTopIcon className="rotate-90" />
    </Button>
  );
}
