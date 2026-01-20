"use client";

import { Button } from "@/shared/ui";

export function SignUpForWorkoutBtn() {
  const handleClick = () => {
    window.open("https://forms.amocrm.ru/rrwvrmv", "_blank");
  };

  return (
    <Button
      className="w-full rounded-[40px] bg-white px-20 py-4 text-2xl font-medium text-foreground"
      onClick={handleClick}
    >
      Записаться
    </Button>
  );
}
