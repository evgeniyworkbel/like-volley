import { cn } from "@/shared/lib";

type ButtonProps = Pick<
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
