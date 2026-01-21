export function SentMessage() {
  return (
    <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-[oklch(0.195_0_0/0.8)]">
      <div className="flex items-center gap-2.5 font-shantell text-3xl font-bold text-[oklch(0.701_0.2122_145.88)] xl:text-6xl">
        <div className="tems-center flex h-8 w-8 justify-center rounded-full border-2 border-white bg-[oklch(0.701_0.2122_145.88)] xl:h-11 xl:w-11">
          <div className="mt-1 h-3 w-4 rotate-45 border-r-3 border-b-3 border-white xl:h-5 xl:w-6"></div>
        </div>
        Отправлено!
      </div>
    </div>
  );
}
