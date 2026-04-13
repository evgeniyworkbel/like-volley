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
        "flex flex-col gap-3.5 rounded-lg border-[oklch(1_0_0/0.4)] px-4 py-3 text-white backdrop-blur-xl",
        className,
      )}
    >
      <div className="flex items-center gap-39.5">
        <Logo />
        <SignUpForWorkoutBtn
          className="max-w-17 bg-[oklch(0.75_0.06_260)] px-3 py-1 text-[10px] text-white"
          text="Подарок"
        />
      </div>
      <div className="flex flex-col gap-2 font-bold">
        <p className="text-lg">Индивидуально</p>
        <p className="text-[12px]">{count} персональная тренировка</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold">{cost} руб</p>
        <SignUpForWorkoutBtn
          className={cn("class size-8 rounded-full px-0 py-0", classNameBtn)}
          withArrow
        />
      </div>
    </div>
  );
}
