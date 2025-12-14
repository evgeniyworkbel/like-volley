"use client";

import { Title } from "@/shared/ui";

export default function Error() {
  return (
    <div>
      <main className="flex flex-col items-center py-[118px] xl:py-11">
        <Title className="max-w-85 md:max-w-145 text-center text-2xl xl:max-w-none">
          Сервис временно недоступен :(
        </Title>
        <video autoPlay muted playsInline>
          <source src="/error/animated-ball.webm" />
          <source src="/error/animated-ball.mp4" />
        </video>
      </main>
    </div>
  );
}
