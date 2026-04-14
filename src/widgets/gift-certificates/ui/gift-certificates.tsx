import { Title } from "@/shared/ui";
import { SignUpForWorkoutBtn } from "@/features";
import { GiftCertificate } from "./gift-certificate";
import { certificates } from "../model/data";
import styles from "./gift-certificates.module.css";
import { cn } from "@/shared/lib";

export function GiftCertificates() {
  const animationClasses = [styles.card1, styles.card2, styles.card3];

  return (
    <section className="flex flex-col items-center gap-8 px-5 py-10 xl:flex-row xl:flex-wrap xl:justify-between xl:gap-0 xl:px-20 xl:py-15">
      <div className="flex flex-col items-center gap-2.75 xl:max-w-116.5 xl:items-start xl:gap-4">
        <Title className="font-inter text-[28px]/7.25">
          Подарочный
          <br />
          <span className="text-accent-orange">сертификат</span>
        </Title>
        <p className="text-center text-base text-foreground-secondary xl:text-left xl:text-[18px]">
          Идеальный подарок для тех, кто любит спорт и активный отдых. Выберите подходящий номинал и
          подарите эмоции!
        </p>
      </div>

      <div className="relative flex flex-col pl-9.5">
        {certificates.map((certificate, index) => (
          <GiftCertificate
            key={certificate.id}
            className={cn(`${certificate.className} ${animationClasses[index]}`)}
            classNameBtn={certificate.classNameBtn}
            cost={certificate.cost}
            count={certificate.count}
          />
        ))}
      </div>

      <SignUpForWorkoutBtn
        className="mt-10 max-w-50 gap-4 bg-accent-orange px-0 py-2 text-sm text-white xl:mt-0 xl:max-w-69.5 xl:text-[20px]"
        text="Купить сертификат"
        withArrow
      />
    </section>
  );
}
