import { ReadTimeIcon } from "@/shared/icons/read-time-icon";
import { getFormattedDate } from "@/shared/lib";

type DateWithReadTimeProps = { date: string; readTime: number };

export function DateWithReadTime({ date, readTime }: DateWithReadTimeProps) {
  const formattedDate = getFormattedDate(date);

  return (
    <div className="flex gap-4 text-xs text-foreground-secondary">
      <span>{formattedDate}</span>
      <div className="flex gap-1">
        <ReadTimeIcon />
        <span>{readTime} минут</span>
      </div>
    </div>
  );
}
