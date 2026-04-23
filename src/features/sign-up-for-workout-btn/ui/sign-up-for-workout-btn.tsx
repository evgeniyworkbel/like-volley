"use client";

import { Button } from "@/shared/ui";
import { ButtonProps } from "@/shared/ui/button";

type SignUpForWorkoutBtnProps = Pick<ButtonProps, "className" | "color" | "iconType"> & {
  text?: string;
};

export function SignUpForWorkoutBtn({
  className,
  color,
  iconType,
  text = "Записаться",
}: SignUpForWorkoutBtnProps) {
  const handleClick = () => {
    window.open("https://forms.amocrm.ru/rrwvrmv", "_blank");
  };

  return (
    <Button className={className} color={color} iconType={iconType} onClick={handleClick}>
      {text}
    </Button>
  );
}
