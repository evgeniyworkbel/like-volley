"use client";

import { ArrowTopIcon } from "@/shared/icons";
import { cn } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { ButtonProps } from "@/shared/ui/button";

type BuyCertificateBtnProps = Pick<ButtonProps, "className"> & {
  text?: string;
};

export function BuyCertificateBtn({
  className,
  text = "Купить сертификат",
}: BuyCertificateBtnProps) {
  const handleClick = () => {
    window.open("https://forms.amocrm.ru/rcxxtzm", "_blank");
  };

  return (
    <Button
      className={cn(
        "gap-2 rounded-[40px] bg-accent-orange px-5 py-3 text-sm font-medium text-white xl:-translate-y-full xl:py-4 xl:text-[20px]",
        className,
      )}
      onClick={handleClick}
    >
      {text}
      <ArrowTopIcon className="rotate-90" />
    </Button>
  );
}
