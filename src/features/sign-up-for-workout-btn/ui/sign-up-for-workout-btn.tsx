"use client";

import { cn } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { ButtonProps } from "@/shared/ui/button";

type SignUpForWorkoutBtnProps = Pick<ButtonProps, "className">;

export function SignUpForWorkoutBtn({ className }: SignUpForWorkoutBtnProps) {
  const handleClick = () => {
    window.open("https://forms.amocrm.ru/rrwvrmv", "_blank");
  };

  return (
    <Button
      className={cn(
        "w-full rounded-[40px] bg-white px-20 py-4 text-2xl font-medium text-foreground",
        className,
      )}
      onClick={handleClick}
    >
      Записаться
    </Button>
  );
}
