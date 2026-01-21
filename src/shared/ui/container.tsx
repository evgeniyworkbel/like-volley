import { cn } from "@/shared/lib";

type NativeDivProps = Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">;

export function Container({ className, children }: NativeDivProps) {
  return <div className={cn("mx-auto max-w-360", className)}>{children}</div>;
}
