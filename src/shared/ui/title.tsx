type TitleProps = Pick<
  React.HTMLAttributes<HTMLHeadingElement>,
  "className" | "children"
>;

export function Title({ children, ...props }: TitleProps) {
  return (
    <h2
      {...props}
      className="font-shantell text-6xl font-bold text-accent-orange"
    >
      {children}
    </h2>
  );
}
