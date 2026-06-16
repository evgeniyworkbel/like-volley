"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PostCategory } from "@/shared/cms/payload-types";
import { cn } from "@/shared/lib";

type BlogProps = Pick<PostCategory, "id" | "label">;

export function BlogTab({ id, label }: BlogProps) {
  const searchParams = useSearchParams();
  const activeCategoryId = searchParams.get("category") || "0";
  const isActive = activeCategoryId === String(id);

  return (
    <Link
      href={id === 0 ? "/blog" : { pathname: "/blog", query: { category: id } }}
      className={cn("flex px-3 py-3.5 text-sm text-foreground-secondary", {
        "border-b-2 border-b-accent-orange text-foreground": isActive,
      })}
    >
      {label}
    </Link>
  );
}
