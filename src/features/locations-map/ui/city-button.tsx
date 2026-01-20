import { cn } from "@/shared/lib";
import { Button, ButtonProps } from "@/shared/ui/button";

export type CityButtonProps = Pick<ButtonProps, "children" | "onClick"> & {
  isActive: boolean;
};

export function CityButton({ children, onClick, isActive }: CityButtonProps) {
  return (
    <Button
      className={cn(
        "rounded-[40px] border border-accent-orange bg-background px-9.5 py-4 text-accent-orange",
        {
          "bg-accent-orange text-white": isActive,
        },
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
