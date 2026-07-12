import { Button, ButtonProps } from "@/shared/ui/button";

export type CityButtonProps = Pick<ButtonProps, "children" | "onClick"> & {
  isActive: boolean;
};

export function CityButton({ children, onClick, isActive }: CityButtonProps) {
  return (
    <Button
      className="border"
      color={isActive ? "primary" : "secondary"}
      size="md"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
