import { Coach } from "@/shared/types";
export const coachesData: Coach[] = [
  {
    name: "Евгений Быков",
    description: "Старший тренер в городе Бресте, чемпион по волейболу 2018г",
    src: "/coaches/bulls.png",
    alt: "Фото тренера Евгения Быкова",
  },
  {
    name: "Александр Рыбко",
    description: "Старший тренер в городе Бресте, чемпион по волейболу 2018г",
    src: "/coaches/rybko.png",
    alt: "Фото тренера Александра Рыбко",
  },
  {
    name: "Игорь Гурский",
    description: "Старший тренер в городе Бресте, чемпион по волейболу 2018г",
    src: "/coaches/gursky.png",
    alt: "Фото тренера Игоря Гурского",
  },
  {
    name: "Ангелина Горбачева",
    description: "Старший тренер в городе Бресте, чемпион по волейболу 2018г",
    src: "/coaches/gorbachev's.png",
    alt: "Фото тренера Ангелины Горбачевой",
  },
] as const;
