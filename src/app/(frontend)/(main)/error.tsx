"use client";

import { SectionTitle } from "@/shared/ui";

export default function Error() {
  return (
    <div>
      <main className="flex flex-col items-center py-29.5 xl:py-11">
        <SectionTitle className="max-w-85 text-center text-2xl md:max-w-145 xl:max-w-none">
          Сервис временно недоступен :(
        </SectionTitle>
        <video autoPlay muted playsInline>
          <source src="/error/animated-ball.webm" />
          <source src="/error/animated-ball.mp4" />
        </video>
      </main>
    </div>
  );
}
