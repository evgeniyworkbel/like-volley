import { cn } from "../lib";
import { NativeDivProps } from "../types";

type ContainerWithShadowProps = Pick<NativeDivProps, "className" | "children">;

export function ContainerWithShadow({ className, children }: ContainerWithShadowProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-[42px] shadow-[0_-20px_30px_0_oklch(0%_0_0/0.1),0_20px_30px_0_oklch(0%_0_0/0.1)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
