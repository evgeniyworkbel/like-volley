export const heroData = {
  children: {
    title: (
      <>
        Будущие чемпионы растут&nbsp;
        <span className="text-accent-green">здесь</span>
      </>
    ),
    subtitle: (
      <p className="z-10 flex max-w-2xs flex-col text-sm md:mb-6 md:max-w-170 md:text-lg xl:m-0 xl:text-start">
        Профессиональная подготовка юных спортсменов. Развиваем координацию, характер и командный
        дух в игровой форме.
      </p>
    ),
  },
  adults: {
    title: (
      <div className="flex flex-col">
        Живи,&nbsp;играй,&nbsp;
        <span className="text-accent-green">Побеждай!</span>
      </div>
    ),
    subtitle: (
      <p className="z-10 flex max-w-2xs flex-col text-sm md:mb-6 md:max-w-147 md:text-lg xl:m-0 xl:text-start">
        Тренировки для любого уровня: от новичков до профи. Улучшаем технику, тактику и физическую
        форму в удобное время.
      </p>
    ),
  },
} as const;
