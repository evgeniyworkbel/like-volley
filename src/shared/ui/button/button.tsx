import { cn } from "@/shared/lib";
import { ReactNode } from "react";

type ButtonProps = {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button {...props} className={cn("w-fit", className)}>
      {children}
    </button>
  );
}
