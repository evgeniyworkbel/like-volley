import { cn } from "@/shared/lib";

type ContainerProps = Pick<
  React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>,
  "className" | "children"
>;

export function Container({ className, children }: ContainerProps) {
  return <div className={cn("mx-auto max-w-360", className)}>{children}</div>;
}
