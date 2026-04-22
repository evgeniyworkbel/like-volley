"use client";

import { Button } from "@/shared/ui";
import { certificateFormLink } from "../model/constants";

export function BuyCertificateBtn() {
  const handleClick = () => {
    window.open(certificateFormLink, "_blank");
  };

  return (
    <Button className="xl:-translate-y-full" onClick={handleClick} iconType="arrow">
      Купить сертификат
    </Button>
  );
}
