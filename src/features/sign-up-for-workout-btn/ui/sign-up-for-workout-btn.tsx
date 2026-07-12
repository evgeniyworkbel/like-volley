"use client";

import { cn } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { ButtonProps } from "@/shared/ui/button";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type SignUpForWorkoutBtnProps = Pick<ButtonProps, "className" | "color" | "iconType"> & {
  text?: string;
};

export function SignUpForWorkoutBtn({
  className,
  color,
  iconType,
  text = "Записаться",
}: SignUpForWorkoutBtnProps) {
  const searchParams = useSearchParams();
  const redirectedFrom = searchParams.get("redirected_from");
  const fromCrm = redirectedFrom === "crm";
  const [isHidden, setIsHidden] = useState<boolean>(fromCrm);

  const handleClick = () => {
    window.open("https://forms.amocrm.ru/rrwvrmv", "_blank");
  };

  useEffect(() => {
    let timerId: number;
    if (fromCrm) {
      timerId = window.setTimeout(() => {
        setIsHidden(false);
      }, 30000);
    }
    return () => {
      window.clearTimeout(timerId);
    };
  }, [fromCrm]);

  return (
    <Button
      className={cn(className, { ["invisible"]: isHidden })}
      color={color}
      iconType={iconType}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
}
