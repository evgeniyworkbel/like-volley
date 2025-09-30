import { Title } from "@/shared/ui";
import Image from "next/image";
import { Coach } from "./model/types";

type SelectedCoachProps = Coach;

export function SelectedCoach({
  name,
  description,
  src,
  alt,
}: SelectedCoachProps) {
  return (
    <div className="flex flex-col xl:flex-row xl:justify-center xl:gap-14">
      <Image src={src} width={314} height={438} alt={alt} />
      <div className="flex flex-col gap-5 xl:items-end xl:justify-center">
        <div className="flex flex-col items-center gap-2.5 text-nowrap xl:items-start">
          {/* помню про заголвки в 32px, но он ломает верстку */}
          <Title className="text-[28px] text-foreground xl:text-[44px]">
            {name}
          </Title>
          <p className="text-center text-wrap text-foreground-secondary">
            {`Основатель волейбольной школы\n`}
            <span className="text-accent-orange">LikeVolley</span>
          </p>
        </div>
        <p className="flex max-w-76 items-center text-center text-sm xl:max-w-151 xl:text-left xl:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
