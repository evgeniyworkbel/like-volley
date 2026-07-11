import Image from "next/image";
import { cn, formatReadingTime } from "@/shared/lib";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

type DateWithReadTimeProps = { className?: string; date: string; readTime: number };

export function DateWithReadTime({ className, date, readTime }: DateWithReadTimeProps) {
  const formattedDate = format(date, "d MMMM yyyy", { locale: ru });

  return (
    <div className={cn("flex gap-4 text-xs text-foreground-secondary", className)}>
      <span>{formattedDate}</span>
      <div className="flex gap-1">
        <Image
          src="/eye-icon.svg"
          width={16}
          height={16}
          alt="Символ глаза - колличество просмотров"
        />
        <span>{formatReadingTime(readTime)}</span>
      </div>
    </div>
  );
}
