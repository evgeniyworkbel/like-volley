"use client";

import { SignUpForWorkoutArrow } from "@/shared/icons";
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
        "flex w-full items-center justify-center gap-4 rounded-[40px] bg-white px-20 py-4 text-[20px] font-medium text-foreground",
        className,
      )}
      onClick={handleClick}
    >
      Записаться
      <SignUpForWorkoutArrow className="z-50 rotate-90 text-background" />
    </Button>
  );
}
