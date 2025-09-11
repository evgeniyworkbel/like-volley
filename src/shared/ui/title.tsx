import { cn } from "../lib";

type TitleProps = Pick<
  React.HTMLAttributes<HTMLHeadingElement>,
  "className" | "children"
>;

export function Title({ children, ...props }: TitleProps) {
  return (
    <h2
      {...props}
      className={cn(
        "font-shantell text-[32px] font-bold text-accent-orange xl:text-6xl",
      )}
    >
      {children}
    </h2>
  );
}
