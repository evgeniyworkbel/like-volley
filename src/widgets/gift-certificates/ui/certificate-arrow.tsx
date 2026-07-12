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
        "bg-[oklch(0.9451_0.1243_101.54)]": index === 1,
        "bg-[oklch(0.5151_0.1533_5.36)]": index === 2,
      })}
      size="icon"
      iconType="arrow"
      onClick={handleClick}
    />
  );
}
