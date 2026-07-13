import { OptionObject } from "payload";

export const COMPANY_CITIES_OPTIONS = [
  { label: "Брест", value: "brest" },
  { label: "Минск", value: "minsk" },
] as const satisfies Array<OptionObject>;
