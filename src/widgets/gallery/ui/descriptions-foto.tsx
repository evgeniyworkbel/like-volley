import { ArrowIcon } from "@/shared/icons";

export function DescriptionsFoto() {
  return (
    <div className="z-10 mx-2.5 mb-2.5 flex h-18 w-86 items-center justify-between rounded-4xl bg-white px-3">
      <p className="flex flex-col">
        <span>Тренировка перед матчем</span>
        <span className="text-xs font-normal">23.08.20024</span>
      </p>
      <div className="flex size-14.5 items-center justify-center rounded-full bg-accent-orange">
        <ArrowIcon className="rotate-45 text-white" width={45} height={45} />
      </div>
    </div>
  );
}
