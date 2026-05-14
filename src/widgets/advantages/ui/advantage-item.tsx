import { Advantage } from "@/shared/cms/payload-types";

type AdvantageItemProps = Pick<Advantage, "title" | "subtitle" | "score" | "showPlus">;

export function AdvantageItem({ title, subtitle, score, showPlus }: AdvantageItemProps) {
  return (
    <div className="flex w-75 flex-col items-center gap-4.5 py-10 font-bold">
      <h3 className="flex text-8xl">
        {score}
        {showPlus && <span>+</span>}
      </h3>
      <hgroup className="flex flex-col items-center gap-0.5 text-center">
        <h4 className="text-lg xl:text-[28px]">{title}</h4>
        <p className="text-sm text-foreground-secondary">{subtitle}</p>
      </hgroup>
    </div>
  );
}
