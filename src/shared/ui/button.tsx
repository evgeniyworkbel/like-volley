import { cn } from "@/shared/lib";

export type ButtonProps = Pick<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "className" | "children" | "onClick" | "disabled"
>;

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn("inline-flex w-fit cursor-pointer items-center justify-center", className)}
    >
      {children}
    </button>
  );
}
