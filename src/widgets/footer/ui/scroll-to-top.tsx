"use client";

import { ArrowTopIcon } from "@/shared/icons";
import { Button } from "@/shared/ui";

export function ScrollToTop() {
  return (
    <Button
      className="gap-2 rounded-[40px] border px-4 py-2.5 font-medium text-white"
      onClick={() => window.scrollTo(0, 0)}
    >
      Наверх
      <ArrowTopIcon />
    </Button>
  );
}
