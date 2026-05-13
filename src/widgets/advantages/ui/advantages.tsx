import { getPayloadClient } from "@/shared/cms";
import { AdvantageItem } from "./advantage-item";

export async function Advantages() {
  const payload = await getPayloadClient();
  const advantages = await payload.find({ collection: "advantages", pagination: false });

  const advantagesData = advantages.docs;

  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-0 rounded-t-[42px] border-t border-t-black/10 px-7.5 py-5 shadow-[0_-20px_30px_0_oklch(0%_0_0/0.1)] xl:gap-6.5 xl:px-20">
      {advantagesData.map((item) => (
        <AdvantageItem
          key={item.id}
          title={item.title}
          subtitle={item.subtitle}
          score={item.score}
          ShowPlus={item.ShowPlus}
        />
      ))}
    </section>
  );
}
