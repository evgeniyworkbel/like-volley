import { cn } from "@/shared/lib";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowTopIcon } from "../icons";

const buttonVariants = cva(
  "inline-flex w-fit cursor-pointer items-center justify-center gap-4.5 rounded-[40px] font-medium",
  {
    variants: {
      color: {
        primary: "bg-accent-orange text-white",
        secondary: "bg-background text-accent-orange",
        none: "",
      },
      size: {
        sm: "px-5 py-3 text-sm",
        md: "border px-7.5 py-3 text-base",
        lg: "px-6 py-4 text-xl",
        icon: "size-8 rounded-full px-0 py-0 xl:size-14",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "lg",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    rightIcon?: React.ReactNode;
  };

function Button({
  className,
  color = "primary",
  size = "lg",
  asChild = false,
  children,
  rightIcon,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ color, size, className }))}
      data-color={color}
      data-size={size}
      data-slot="button"
      {...props}
    >
      {children}
      {rightIcon && <ArrowTopIcon className="rotate-90" />}
    </Comp>
  );
}

export { Button, buttonVariants };
