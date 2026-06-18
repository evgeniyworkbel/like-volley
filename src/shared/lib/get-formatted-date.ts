import { format } from "date-fns";
import { ru } from "date-fns/locale";

export const getFormattedDate = (date: string): string =>
  format(new Date(date), "d MMMM yyyy", { locale: ru });
