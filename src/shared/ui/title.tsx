import { ReactNode } from "react";

type TitleProps = {
  className?: string;
  children: ReactNode;
};

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
