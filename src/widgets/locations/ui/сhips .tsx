import { cn } from "@/shared/lib";
import { Button } from "@/shared/ui";

type ChipsProps = {
  city: "minsk" | "brest";
  setCity: (city: "minsk" | "brest") => void;
};

export function Chips({ city, setCity }: ChipsProps) {
  return (
    <div className="flex w-80 items-center gap-7 px-5 text-accent-orange *:rounded-[40px] *:border *:border-accent-orange *:px-9.5 *:py-4">
      <Button
        className={cn({ "bg-accent-orange text-white": city === "minsk" })}
        onClick={() => setCity("minsk")}
      >
        Минск
      </Button>
      <Button
        className={cn({ "bg-accent-orange text-white": city === "brest" })}
        onClick={() => setCity("brest")}
      >
        Брест
      </Button>
    </div>
  );
}
