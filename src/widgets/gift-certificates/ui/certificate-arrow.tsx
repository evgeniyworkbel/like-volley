"use client";

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
      className={cn({
        "bg-[oklch(0.6559_0.1604_257.81)]": index === 0,
        "bg-[oklch(0.5811_0.1739_146.13)]": index === 1,
        "bg-[oklch(0.9451_0.1243_101.54)]": index === 2,
      })}
      size="icon"
      onClick={handleClick}
      rightIcon
    ></Button>
  );
}
