"use client";

import Image from "next/image";
import { Title } from "@/shared/ui";

export default function Error() {
  return (
    <div>
      <main className="flex flex-col items-center gap-21 py-[118px] font-bold xl:py-11">
        <Title className="text-center text-2xl text-foreground">
          Сервис временно&nbsp; недоступен :(
        </Title>
        <div className="relative flex aspect-[1.20] w-1/2">
          <Image
            src="/error/error.webp"
            quality={100}
            alt="Декоративная картинка спущенного мяча"
            fill
          />
        </div>
      </main>
    </div>
  );
}
