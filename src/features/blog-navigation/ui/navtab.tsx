"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cn } from "@/shared/lib";
import { NavTabModel } from "../model/types";

export function NavTab({ id, label }: NavTabModel) {
  const searchParams = useSearchParams();
  const activeCategoryId = searchParams.get("category");
  const isActive = id ? activeCategoryId === String(id) : !activeCategoryId;

  return (
    <Link
      href={id ? { pathname: "/blog", query: { category: id } } : "/blog"}
      className={cn(
        "flex border-b-2 border-transparent px-3 py-3.5 text-sm text-foreground-secondary",
        {
          "border-b-accent-orange font-medium text-foreground": isActive,
        },
      )}
    >
      {label}
    </Link>
  );
}
