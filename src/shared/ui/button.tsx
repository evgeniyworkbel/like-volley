import { cn } from "@/shared/lib";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowTopIcon } from "../icons";

const icons = {
  arrow: <ArrowTopIcon className="shrink-0 rotate-90" />,
};

const buttonVariants = cva(
  "inline-flex w-fit cursor-pointer items-center justify-center gap-4.5 rounded-[40px] font-medium",
  {
    variants: {
      color: {
        primary: "bg-accent-orange text-white",
        secondary: "bg-background text-accent-orange",
        transparent: "",
      },
      size: {
        sm: "px-5 py-3 text-sm",
        md: "px-7.5 py-3 text-base",
        lg: "px-6 py-4 text-xl",
        icon: "size-8 rounded-full xl:size-14",
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
    iconType?: keyof typeof icons;
  };

function Button({ className, color, size, children, iconType, ...restProps }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ color, size }), className)} {...restProps}>
      {children}
      {iconType && icons[iconType]}
    </button>
  );
}

export { Button, buttonVariants };
