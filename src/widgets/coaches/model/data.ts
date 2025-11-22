import { CoachModel, OwnerModel } from "./types";

export const coachesData: CoachModel[] = [
  {
    firstName: "Евгений",
    lastName: "Быков",
    patronymicName: "Валерьевич",
    description:
      "Ведущий тренер. «Не могу и дня без волейбола». Ведёт детские и взрослые группы",
    city: "Минск",
    src: "/coaches/bykov.webp",
    alt: "Фото тренера Евгения Быкова",
  },
  {
    firstName: "Александр",
    lastName: "Рыбко",
    patronymicName: "Александрович",
    description: "Тренер детских и взрослых групп",
    city: "Минск",
    src: "/coaches/rybko.webp",
    alt: "Фото тренера Александра Рыбко",
  },
  {
    firstName: "Игорь",
    lastName: "Гурский",
    patronymicName: "Александрович",
    description: "Тренер детских и взрослых групп",
    city: "Минск",
    src: "/coaches/gursky.webp",
    alt: "Фото тренера Игоря Гурского",
  },
  {
    firstName: "Ангелина",
    lastName: "Горбачева",
    patronymicName: "Александровна",
    description: "Тренер детских и взрослых групп",
    city: "Минск",
    src: "/coaches/gorbacheva.webp",
    alt: "Фото тренера Ангелины Горбачевой",
  },
  {
    firstName: "Егор",
    lastName: "Киселев",
    patronymicName: "Игоревич",
    description: "Тренер детских и взрослых групп",
    city: "Минск",
    src: "/coaches/kiselyov.webp",
    alt: "Фото тренера Ангелины Горбачевой",
  },
  {
    firstName: "Виктория",
    lastName: "Крупко",
    patronymicName: "Анатольевна",
    description: "Ведущий детский тренер.  Опыт работы с детьми - более 10 лет",
    city: "Брест",
    src: "/coaches/krupko.webp",
    alt: "Фото тренера Виктории Крупко",
  },
  {
    firstName: "Наталья",
    lastName: "Андриевич",
    patronymicName: "Павловна",
    description: "Детский тренер",
    city: "Брест",
    src: "/coaches/andrievich.webp",
    alt: "Фото тренера Натальи Андриевич",
  },
  {
    firstName: "Владислав",
    lastName: "Сабиров",
    patronymicName: "Денисович",
    description: "Детский тренер",
    city: "Брест",
    src: "/coaches/sabirov.webp",
    alt: "Фото тренера Владислава Сабирова",
  },
] as const;

export const ownerData: OwnerModel = {
  firstName: "Владислав",
  lastName: "Голодухин",
  description:
    "Мы смотрим на наших учеников не с позиции: “Каких высот он может или не может достичь в волейболе”, а с позиции: “Как мы можем помочь стать лучше через волейбол. ”Если вы разделяете наши ценности и ищете не просто занятие волейболом, а также поддержку ребенка в развитии, мы будем рады видеть вас в нашей дружной команде.",
  src: "/coaches/golodukhin.webp",
  alt: "Фото тренера Владислава Голодухина",
} as const;
