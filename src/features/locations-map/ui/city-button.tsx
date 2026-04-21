import { cn } from "@/shared/lib";
import { Button, ButtonProps } from "@/shared/ui/button";

export type CityButtonProps = Pick<ButtonProps, "children" | "onClick"> & {
  isActive: boolean;
};

export function CityButton({ children, onClick, isActive }: CityButtonProps) {
  return (
    <Button
      className={cn("border-accent-orange bg-background text-accent-orange", {
        "bg-accent-orange text-white": isActive,
      })}
      size="md"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
