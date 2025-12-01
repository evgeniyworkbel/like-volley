import { cn } from "@/shared/lib";

export type ButtonProps = Pick<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "className" | "children" | "onClick" | "disabled"
>;

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button {...props} className={cn("w-fit cursor-pointer", className)}>
      {children}
    </button>
  );
}
