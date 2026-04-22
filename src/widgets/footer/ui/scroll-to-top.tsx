"use client";

import { ArrowTopIcon } from "@/shared/icons";
import { Button } from "@/shared/ui";

export function ScrollToTop() {
  return (
    <Button className="gap-2 border px-4 py-2.5" onClick={() => window.scrollTo(0, 0)}>
      Наверх
      <ArrowTopIcon />
    </Button>
  );
}
