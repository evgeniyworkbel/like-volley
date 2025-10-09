export function SentMessage() {
  return (
    <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 font-shantell text-3xl font-bold text-[oklch(0.701_0.2122_145.88)] xl:text-6xl">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[oklch(0.701_0.2122_145.88)] xl:h-11 xl:w-11">
        <div className="xl:w- h-3 w-4 rotate-45 border-r-2 border-b-2 border-white xl:h-5"></div>
      </div>
      Отправлено!
    </div>
  );
}
