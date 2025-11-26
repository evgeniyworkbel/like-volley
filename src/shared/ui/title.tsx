import { cn } from "../lib";

type TitleProps = Pick<
  React.HTMLAttributes<HTMLHeadingElement>,
  "className" | "children"
>;

export function Title({ className, children, ...props }: TitleProps) {
  return (
    <h2
      {...props}
      className={cn(
        //todo пока оставил и md и xl, не найду противоречий xl потом удалю
        "font-shantell text-[32px] font-bold text-foreground md:text-6xl xl:text-6xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}
