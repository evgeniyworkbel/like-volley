import Image from "next/image";
import { getPayloadClient, toImgAttrs } from "@/shared/cms";

export async function OwnerCard() {
  const payload = await getPayloadClient();
  const owner = await payload.findGlobal({
    slug: "owner",
  });
  const title = `${owner.firstName} ${owner.lastName}`;
  const { src, alt } = toImgAttrs(owner.photo);

  return (
    <div className="flex flex-col items-center xl:flex-row xl:justify-center xl:gap-14">
      <Image src={src} width={314} height={407} alt={alt} />
      <div className="flex flex-col items-center gap-5 xl:items-start xl:justify-center">
        <hgroup className="flex flex-col items-center gap-2.5 xl:items-start">
          <h3 className="font-shantell text-[26px] font-bold text-foreground xl:text-[44px]">
            {title}
          </h3>
          <p className="text-center text-foreground-secondary">
            {owner.jobTitle}&nbsp;
            <span className="text-accent-orange">LikeVolley</span>
          </p>
        </hgroup>
        <p className="flex max-w-76 items-center text-center text-sm xl:max-w-151 xl:text-left xl:text-lg">
          {owner.description}
        </p>
      </div>
    </div>
  );
}
