import { Title } from "@/shared/ui";
import { SignUpForWorkoutBtn } from "@/features";
import { GiftCertificate } from "./gift-certificate";
import { certificates } from "../model/data";

export function GiftCertificates() {
  return (
    <section className="flex flex-col items-center gap-8 px-5 py-10">
      <div className="flex flex-col items-center gap-2.75">
        <Title className="font-inter text-[28px]/7.25">
          Подарочный
          <br className="xl:hidden" />
          <span className="text-accent-orange">&nbsp;сертификат</span>
        </Title>
        <p className="text-baze text-center text-foreground-secondary">
          Идеальный подарок для тех, кто любит спорт и активный отдых. Выберите подходящий номинал и
          подарите эмоции!
        </p>
      </div>
      <div className="relative flex flex-col pl-9.5">
        {certificates.map(({ id, className, classNameBtn, cost, count }) => (
          <GiftCertificate
            key={id}
            className={className}
            classNameBtn={classNameBtn}
            cost={cost}
            count={count}
          />
        ))}
      </div>

      <SignUpForWorkoutBtn
        className="mt-10 max-w-50 gap-4 bg-accent-orange px-0 py-2 text-sm text-white"
        text="Купить сертификат"
        withArrow
      />
    </section>
  );
}
