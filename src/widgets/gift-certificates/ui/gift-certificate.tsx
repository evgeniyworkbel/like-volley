import Image from "next/image";
import { cn } from "@/shared/lib";
import { CertificateModel } from "../model/types";
import { GetCertificateBtn } from "./get-certificate-btn";

type GiftCertificateProps = CertificateModel;

export function GiftCertificate({
  className,
  btnColor,
  cost = "60",
  count = "1",
}: GiftCertificateProps) {
  return (
    <div
      className={cn(
        "flex w-70 flex-col gap-3.5 rounded-lg border px-4 py-3 text-white backdrop-blur-xl xl:w-full xl:gap-10 xl:rounded-[14px] xl:p-6",
        {
          "absolute border-[oklch(0.5381_0.2545_270.46/0.698)] bg-[oklch(0.5381_0.2545_270.46/0.698)]":
            btnColor === "blue",
          "absolute border-[oklch(0.701_0.2122_145.88/0.698)] bg-[oklch(0.701_0.2122_145.88/0.8)]":
            btnColor === "green",
          "border-[oklch(0.7724_0.1253_44.75)] bg-[oklch(0.7466_0.1572_43.66/0.8)]":
            btnColor === "yellow",
        },
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <Image
          src="/logo-ball.svg"
          className="xl:scale-[2.45]"
          width={22}
          height={15}
          alt="Логотип школы волейбола Like Volley"
        />
        <div className="max-w-17 rounded-[40px] bg-[oklch(0.75_0.06_260)] px-3 py-1 text-[10px] text-white xl:max-w-25 xl:py-2 xl:text-[14px]">
          Подарок
        </div>
      </div>
      <div className="flex flex-col gap-2 text-lg font-bold xl:text-[40px] [&>p]:text-left">
        <p>Индивидуально</p>
        <p className="text-[12px] xl:text-lg">{count} персональная тренировка</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold xl:text-[32px]">{cost} руб</p>
        <GetCertificateBtn btnColor={btnColor} withArrow />
      </div>
    </div>
  );
}
