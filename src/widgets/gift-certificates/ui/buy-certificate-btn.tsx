"use client";

import { Button } from "@/shared/ui";
import { ButtonProps } from "@/shared/ui/button";
import { certificateFormLink } from "../model/constants";
import { envLogger } from "@/shared/lib/get-server-side-url";

type BuyCertificateBtnProps = Pick<ButtonProps, "className">;

export function BuyCertificateBtn({ className }: BuyCertificateBtnProps) {
  const handleClick = () => {
    window.open(certificateFormLink, "_blank");
  };

  // todo: удалить после дебага
  envLogger("внутри client компонента");

  return (
    <Button className={className} onClick={handleClick} iconType="arrow">
      Купить сертификат
    </Button>
  );
}
