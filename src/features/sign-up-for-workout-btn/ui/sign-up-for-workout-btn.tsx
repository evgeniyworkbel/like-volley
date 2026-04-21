"use client";

import { Button } from "@/shared/ui";
import { ButtonProps } from "@/shared/ui/button";

type SignUpForWorkoutBtnProps = Pick<ButtonProps, "className" | "color"> & {
  text?: string;
  rightIcon?: boolean;
};

export function SignUpForWorkoutBtn({
  className,
  color,
  text = "Записаться",
  rightIcon,
}: SignUpForWorkoutBtnProps) {
  const handleClick = () => {
    window.open("https://forms.amocrm.ru/rrwvrmv", "_blank");
  };

  return (
    <Button className={className} color={color} onClick={handleClick} rightIcon={rightIcon}>
      {text}
    </Button>
  );
}
