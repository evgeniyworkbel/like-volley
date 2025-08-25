import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`h-fit w-fit ${props.className}`}
      aria-label={props.ariaLabel}
    >
      {children}
    </button>
  );
}
