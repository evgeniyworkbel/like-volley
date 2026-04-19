"use client";

import { ArrowTopIcon } from "@/shared/icons";
import { Button } from "@/shared/ui";
import { certificateFormLink } from "../model/constants";

export function BuyCertificateBtn() {
  const handleClick = () => {
    window.open(certificateFormLink, "_blank");
  };

  return (
    <Button
      className="gap-2 rounded-[40px] bg-accent-orange px-5 py-3 text-sm font-medium text-white xl:-translate-y-full xl:py-4 xl:text-[20px]"
      onClick={handleClick}
    >
      Купить сертификат
      <ArrowTopIcon className="rotate-90" />
    </Button>
  );
}
