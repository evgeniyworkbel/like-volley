import { Logo } from "@/shared/icons";
import { cn } from "@/shared/lib";
import { SignUpForWorkoutBtn } from "@/features";
import { CertificateModel } from "../model/types";

type GiftCertificateProps = CertificateModel;

export function GiftCertificate({
  className,
  classNameBtn,
  cost = "60",
  count = "1",
}: GiftCertificateProps) {
  return (
    <div
      className={cn(
        "flex min-w-70 flex-col gap-3.5 rounded-lg border px-4 py-3 text-white backdrop-blur-xl xl:w-full xl:gap-10 xl:rounded-[14px] xl:p-6",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <Logo className="xl:scale-[2.45]" />
        <SignUpForWorkoutBtn
          className="max-w-17 bg-[oklch(0.75_0.06_260)] px-3 py-1 text-[10px] text-white xl:max-w-25 xl:py-2 xl:text-[14px]"
          text="Подарок"
        />
      </div>
      <div className="flex flex-col gap-2 text-lg font-bold xl:text-[40px]">
        <p>Индивидуально</p>
        <p className="text-[12px] xl:text-lg">{count} персональная тренировка</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold xl:text-[32px]">{cost} руб</p>
        <SignUpForWorkoutBtn
          className={cn("size-8 rounded-full px-0 py-0 xl:size-14", classNameBtn)}
          withArrow
        />
      </div>
    </div>
  );
}
