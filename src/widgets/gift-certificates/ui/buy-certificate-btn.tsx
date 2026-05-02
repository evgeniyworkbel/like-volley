"use client";

import { Button } from "@/shared/ui";
import { cn } from "@/shared/lib";
import { ButtonProps } from "@/shared/ui/button";
import { certificateFormLink } from "../model/constants";

type BuyCertificateBtnProps = Pick<ButtonProps, "className">;

export function BuyCertificateBtn({ className }: BuyCertificateBtnProps) {
  const handleClick = () => {
    window.open(certificateFormLink, "_blank");
  };

  return (
    <Button className={cn(className)} onClick={handleClick} iconType="arrow">
      Купить сертификат
    </Button>
  );
}
