import { Title } from "@/shared/ui";
import { cn } from "@/shared/lib";
import { SignUpForWorkoutBtn } from "@/features";
import { GiftCertificate } from "./gift-certificate";
import { certificatesData } from "../model/data";
import styles from "./gift-certificates.module.css";

export function GiftCertificates() {
  const animationClasses = [styles.cert1, styles.cert2, styles.cert3];

  return (
    <section className="flex flex-col items-center gap-18 px-5 py-10 xl:items-start xl:gap-0 xl:px-20 xl:py-15">
      <div className="flex w-full flex-col gap-8 xl:flex-row xl:gap-25">
        <div className="flex flex-col items-center gap-2.75 xl:max-w-116 xl:items-start xl:gap-4">
          <Title className="font-inter text-[28px]/7.25">
            Подарочный
            <br />
            <span className="text-accent-orange">сертификат</span>
          </Title>
          <p className="text-center text-base text-balance text-foreground-secondary xl:text-left xl:text-[18px]">
            Идеальный подарок для тех, кто любит спорт и активный отдых. Выберите подходящий номинал
            и подарите эмоции!
          </p>
        </div>
        <div
          className={cn(
            "relative flex flex-col items-center pl-9.5 xl:w-full xl:items-start xl:pl-0",
            styles.certificateWrapper,
          )}
        >
          {certificatesData.map((certificate, index) => (
            <GiftCertificate
              key={certificate.id}
              className={cn(certificate.className, animationClasses[index])}
              classNameBtn={certificate.classNameBtn}
              cost={certificate.cost}
              count={certificate.count}
            />
          ))}
        </div>
      </div>

      <SignUpForWorkoutBtn
        className="max-w-50 gap-4 bg-accent-orange px-0 py-2 text-sm text-white xl:max-w-69.5 xl:-translate-y-full xl:p-4 xl:text-[20px]"
        text="Купить сертификат"
        withArrow
      />
    </section>
  );
}
