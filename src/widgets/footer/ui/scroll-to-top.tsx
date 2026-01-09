"use client";

import { Button } from "@/shared/ui";
import { ScrollToTopArrowIcon } from "@/shared/icons/scroll-to-top-arrow-icon";

export function ScrollToTop() {
  return (
    <Button
      className="flex items-center gap-2 rounded-[40px] border px-4 py-2.5 font-medium text-white"
      onClick={() => window.scrollTo(0, 0)}
    >
      Наверх
      <ScrollToTopArrowIcon />
    </Button>
  );
}
