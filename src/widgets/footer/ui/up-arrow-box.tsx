export function UpArrowBox() {
  return (
    <div className="relative h-6 w-6">
      <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 rotate-180 flex-col items-center">
        <div className="h-2.5 w-0.5 bg-white"></div>
        <div className="border-t-[6px] border-r-4 border-l-4 border-t-white border-r-transparent border-l-transparent" />
      </div>
    </div>
  );
}
