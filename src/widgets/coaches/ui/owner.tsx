import Image from "next/image";
import { ownerData } from "../model/data";

export function Owner() {
  return (
    <div className="flex flex-col xl:flex-row xl:justify-center xl:gap-14">
      <Image src={ownerData.src} width={314} height={407} alt={ownerData.alt} />
      <div className="flex flex-col gap-5 xl:justify-center">
        <hgroup className="flex flex-col items-center gap-2.5 xl:items-start">
          {/* помню про заголвки в 32px, но он ломает верстку */}
          <h3 className="font-shantell text-[28px] font-bold text-foreground xl:text-[44px]">
            {ownerData.name}
          </h3>
          <p className="text-center text-foreground-secondary">
            Основатель волейбольной школы&nbsp;
            <span className="text-accent-orange">LikeVolley</span>
          </p>
        </hgroup>
        <p className="flex max-w-76 items-center text-center text-sm xl:max-w-151 xl:text-left xl:text-lg">
          {ownerData.description}
        </p>
      </div>
    </div>
  );
}
