import { cn } from "@/shared/lib";
import { ReactNode } from "react";

type TitleProps = {
  className?: string;
  children: ReactNode;
};

export function Title({ className, children, ...props }: TitleProps) {
  return (
    <h2 {...props} className={cn(className)}>
      {children}
    </h2>
  );
}
