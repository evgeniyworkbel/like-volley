import { cn } from "../lib";

type ContainerWithShadowProps = React.PropsWithChildren & { shadowPosition?: "both" | "top" };

export function ContainerWithShadow({
  shadowPosition = "both",
  children,
}: ContainerWithShadowProps) {
  return (
    <div
      className={cn(
        "flex flex-col shadow-[0_-20px_30px_0_oklch(0%_0_0/0.1),0_20px_30px_0_oklch(0%_0_0/0.1)]",
        {
          "rounded-[42px]": shadowPosition === "both",
        },
        {
          "hidden rounded-t-[42px] xl:flex": shadowPosition === "top",
        },
      )}
    >
      {children}
    </div>
  );
}
