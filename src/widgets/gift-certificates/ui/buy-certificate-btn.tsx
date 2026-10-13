"use client";

import { Button } from "@/shared/ui";
import { ButtonProps } from "@/shared/ui/button";
import { certificateFormLink } from "../model/constants";

type BuyCertificateBtnProps = Pick<ButtonProps, "className">;

export function BuyCertificateBtn({ className }: BuyCertificateBtnProps) {
  const handleClick = () => {
    window.open(certificateFormLink, "_blank");
  };

  // todo: удалить после дебага
  console.log(
    "внутри client",
    process.env.NEXT_PUBLIC_SERVER_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.NEXT_PUBLIC_YANDEX_METRIKA_COUNTER_ID,
  );

  return (
    <Button className={className} onClick={handleClick} iconType="arrow">
      Купить сертификат
    </Button>
  );
}
