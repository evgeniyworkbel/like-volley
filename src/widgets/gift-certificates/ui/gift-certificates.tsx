import { Title } from "@/shared/ui";
import { cn } from "@/shared/lib";
import { getPayloadClient } from "@/shared/cms";
import { GiftCertificate } from "./gift-certificate";
import styles from "./gift-certificates.module.css";
import { BuyCertificateBtn } from "./buy-certificate-btn";

const animationClasses = [styles.cert1, styles.cert2, styles.cert3];

export async function GiftCertificates() {
  const payload = await getPayloadClient();
  const certificates = await payload.find({ collection: "certificates", pagination: false });

  return (
    <section className="flex flex-col items-center gap-18 px-5 py-10 xl:items-start xl:gap-0 xl:px-20 xl:py-15">
      <div className="flex w-full flex-col gap-8 text-center xl:flex-row xl:gap-25 xl:text-left">
        <div className="flex flex-col items-center gap-2.75 xl:max-w-116 xl:items-start xl:gap-4">
          <Title className="font-inter text-[28px] leading-none">
            Подарочный
            <br />
            <span className="text-accent-orange">сертификат</span>
          </Title>
          <p className="text-balance text-foreground-secondary xl:text-[18px]">
            Идеальный подарок для тех, кто любит спорт и активный отдых. Выберите подходящий номинал
            и подарите эмоции!
          </p>
        </div>
        <div
          className={cn(
            "relative flex flex-col items-center pl-9.5 xl:w-full xl:items-start xl:pl-0",
            styles.certificates,
          )}
        >
          {certificates.docs.map((item, index) => (
            <GiftCertificate
              key={item.id}
              className={animationClasses[index]}
              index={index}
              cost={item.cost}
              count={item.count}
            />
          ))}
        </div>
      </div>
      <BuyCertificateBtn />
    </section>
  );
}
