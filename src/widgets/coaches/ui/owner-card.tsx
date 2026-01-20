import Image from "next/image";
import { getPayloadClient } from "@/shared/cms";

export async function OwnerCard() {
  const payload = await getPayloadClient();
  const { lastName, firstName, jobTitle, description } = await payload.findGlobal({
    slug: "owner",
  });
  const title = `${firstName} ${lastName}`;

  return (
    <div className="flex flex-col items-center xl:flex-row xl:justify-center xl:gap-14">
      <Image
        // @todo: брать фото из s3 storage (удалить старое фото из /public)
        src={"/coaches/golodukhin.webp"}
        width={314}
        height={407}
        alt="Фото основателя школы LikeVolley"
      />
      <div className="flex flex-col items-center gap-5 xl:items-start xl:justify-center">
        <hgroup className="flex flex-col items-center gap-2.5 xl:items-start">
          <h3 className="font-shantell text-[26px] font-bold text-foreground xl:text-[44px]">
            {title}
          </h3>
          <p className="text-center text-foreground-secondary">
            {jobTitle}&nbsp;
            <span className="text-accent-orange">LikeVolley</span>
          </p>
        </hgroup>
        <p className="flex max-w-76 items-center text-center text-sm xl:max-w-151 xl:text-left xl:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
