"use client";

import { ArrowTopIcon } from "@/shared/icons";
import { cn } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { ButtonProps } from "@/shared/ui/button";
import { CertificateModel } from "../model/types";

type GetCertificateBtnProps = Pick<ButtonProps, "className"> &
  Pick<CertificateModel, "btnColor"> & {
    text?: string;
    withArrow?: boolean;
  };

export function GetCertificateBtn({
  className,
  btnColor = "orange",
  text,
  withArrow,
}: GetCertificateBtnProps) {
  const handleClick = () => {
    window.open("https://forms.amocrm.ru/rcxxtzm", "_blank");
  };

  return (
    <Button
      className={cn(
        { "size-8 rounded-full px-0 py-0 xl:size-14": !text },
        {
          "gap-2 rounded-[40px] px-5 py-3 text-sm font-medium text-white xl:-translate-y-full xl:py-4 xl:text-[20px]":
            text,
        },
        {
          "bg-[oklch(0.6559_0.1604_257.81)]": btnColor === "blue",
          "bg-[oklch(0.5811_0.1739_146.13)]": btnColor === "green",
          "bg-[oklch(0.9451_0.1243_101.54)]": btnColor === "yellow",
          "bg-accent-orange": btnColor === "orange",
        },
        className,
      )}
      onClick={handleClick}
    >
      {text}
      {withArrow && <ArrowTopIcon className="rotate-90" />}
    </Button>
  );
}
