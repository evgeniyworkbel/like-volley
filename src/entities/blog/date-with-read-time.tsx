import { ReadTimeIcon } from "@/shared/icons/read-time-icon";

type DateWithReadTimeProps = { date: string; readTime: number };

export function DateWithReadTime({ date, readTime }: DateWithReadTimeProps) {
  const dateText = new Date(date)
    .toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .replace(/\s*г\.?$/, "");

  return (
    <div className="flex gap-4 text-xs text-foreground-secondary">
      <span>{dateText}</span>
      <div className="flex gap-1">
        <ReadTimeIcon />
        <span>{readTime} минут</span>
      </div>
    </div>
  );
}
