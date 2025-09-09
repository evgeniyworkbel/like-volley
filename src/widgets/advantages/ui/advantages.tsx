import Image from "next/image";

export function Advantages() {
  return (
    <div className="flex flex-col gap-12 px-10 py-[74px] text-center text-sm xl:flex-row xl:justify-between xl:gap-0 xl:px-20 xl:text-base">
      <div className="flex flex-col items-center gap-3 xl:gap-4">
        <Image
          className="pb-1.5"
          src="/award.svg"
          width={80}
          height={80}
          alt="Знак медали школы"
        />
        <span className="font-bold">Школа волейбола №1 в Бресте</span>
        <span className="text-muted">
          Квалифицированные тренеры и удобные&nbsp;
          <span className="text-center xl:block">локации</span>
        </span>
      </div>
      <div className="flex flex-col items-center gap-3 xl:gap-4">
        <Image
          className="pb-1.5"
          src="/group.svg"
          width={80}
          height={80}
          alt="Знак групповых занятий"
        />
        <span className="font-bold">Любой уровень подготовки</span>
        <span className="text-muted">
          Квалифицированные тренеры и удобные&nbsp;
          <span className="text-center xl:block">локации</span>
        </span>
      </div>
      <div className="flex flex-col items-center gap-3 xl:gap-4">
        <Image
          className="pb-1.5"
          src="/location_2.svg"
          width={80}
          height={80}
          alt="Знак локации школы"
        />
        <span className="font-bold">Доступные цены и уютные залы</span>
        <span className="text-muted">
          Квалифицированные тренеры и удобные&nbsp;
          <span className="text-center xl:block">локации</span>
        </span>
      </div>
    </div>
  );
}
