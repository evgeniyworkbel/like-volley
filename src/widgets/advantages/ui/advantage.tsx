import { Advantage as AdvantagePayload } from "@/shared/cms/payload-types";

type AdvantageProps = Pick<AdvantagePayload, "title" | "subtitle" | "score" | "withPlus">;

export function Advantage({ title, subtitle, score, withPlus }: AdvantageProps) {
  return (
    <div className="flex flex-col items-center gap-4.5 py-10 font-bold">
      <h3 className="flex text-8xl">
        {score}
        {withPlus && <p>+</p>}
      </h3>
      <div className="flex flex-col items-center gap-0.5">
        <h4 className="text-lg xl:text-[28px]">{title}</h4>
        <p className="text-sm text-foreground-secondary">{subtitle}</p>
      </div>
    </div>
  );
}
