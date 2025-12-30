import { cn } from "@/shared/lib";
import { ButtonProps } from "@/shared/ui/button";
import { CompanyCities } from "../model/types";

export type CityButtonProps = ButtonProps & {
  newCity: CompanyCities;
  selectedCity: CompanyCities;
};

export function CityButton({ newCity, selectedCity, children, ...props }: CityButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "rounded-[40px] border border-accent-orange bg-background px-9.5 py-4 text-accent-orange",
        {
          "bg-accent-orange text-white": selectedCity === newCity,
        },
      )}
    >
      {children}
    </button>
  );
}
