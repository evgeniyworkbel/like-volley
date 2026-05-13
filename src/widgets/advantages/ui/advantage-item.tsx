import { Advantage } from "@/shared/cms/payload-types";

type AdvantageItemProps = Pick<Advantage, "title" | "subtitle" | "score" | "ShowPlus">;

export function AdvantageItem({ title, subtitle, score, ShowPlus }: AdvantageItemProps) {
  return (
    <div className="flex flex-col items-center gap-4.5 py-10 font-bold">
      <h3 className="flex text-8xl">
        {score}
        {ShowPlus && <span>+</span>}
      </h3>
      <hgroup className="flex flex-col items-center gap-0.5 text-center">
        <h4 className="text-lg xl:text-[28px]">{title}</h4>
        <p className="text-sm text-foreground-secondary">{subtitle}</p>
      </hgroup>
    </div>
  );
}
