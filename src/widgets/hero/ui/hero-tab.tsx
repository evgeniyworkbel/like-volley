import { cn } from "@/shared/lib";
import { Button } from "@/shared/ui";

type HeroTabProps = {
  className: string;
  onClick: () => void;
  children: React.ReactNode;
};

export function HeroTab({ className, onClick, children }: HeroTabProps) {
  return (
    <Button
      className={cn(
        "flex-1 rounded-t-2xl border-t border-r border-l border-solid px-3 py-4 text-sm font-medium xl:ml-5 xl:flex-none xl:rounded-t-[20px] xl:px-20 xl:py-4 xl:text-lg",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
