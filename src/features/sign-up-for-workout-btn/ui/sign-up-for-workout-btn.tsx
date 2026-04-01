"use client";

import { ArrowTopIcon } from "@/shared/icons";
import { cn } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { ButtonProps } from "@/shared/ui/button";

type SignUpForWorkoutBtnProps = Pick<ButtonProps, "className"> & {
  text?: string;
};

export function SignUpForWorkoutBtn({ className, text = "Записаться" }: SignUpForWorkoutBtnProps) {
  const handleClick = () => {
    window.open("https://forms.amocrm.ru/rrwvrmv", "_blank");
  };

  return (
    <Button
      className={cn(
        "flex w-full items-center justify-center gap-4 rounded-[40px] bg-white px-20 py-4 text-xl font-medium text-foreground",
        className,
      )}
      onClick={handleClick}
    >
      {text}
      <ArrowTopIcon className="rotate-90" />
    </Button>
  );
}
