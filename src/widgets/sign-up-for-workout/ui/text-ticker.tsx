export function TextTicker() {
  const copies = 21;

  return (
    <div className="absolute bottom-0 flex items-center gap-8 overflow-hidden bg-accent-blue py-0.5 md:w-full">
      <div className="flex w-full animate-ticker gap-6">
        {Array.from({ length: copies }).map((_, index) => (
          <span key={index} className="font-shantell text-base font-bold text-white">
            #LIKEVOLLEY
          </span>
        ))}
      </div>
    </div>
  );
}
