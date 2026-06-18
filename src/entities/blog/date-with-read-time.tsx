import Image from "next/image";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

type DateWithReadTimeProps = { date: string; readTime: number };

export function DateWithReadTime({ date, readTime }: DateWithReadTimeProps) {
  const formattedDate = format(date, "d MMMM yyyy", { locale: ru });

  return (
    <div className="flex gap-4 text-xs text-foreground-secondary">
      <span>{formattedDate}</span>
      <div className="flex gap-1">
        <Image
          src="/eye-icon.svg"
          width={16}
          height={16}
          alt="Символ глаза - колличество просмотров"
        />
        <span>{readTime} минут</span>
      </div>
    </div>
  );
}
