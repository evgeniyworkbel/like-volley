import * as z from "zod";
import { ContactFormModel } from "./types";

export const formSchema = z.object({
  city: z.string(),
  name: z.string().min(4, "Поле должно быть заполнено"),
  phone: z
    .string()
    .regex(
      /^\+375 \(\d{2,3}\) \d{3}-\d{2}-\d{2}$/,
      "Поле должно быть заполнено",
    ),
  message: z.string().max(2000).optional(),
  agreement: z.boolean().refine((val) => val === true),
});

export const formDefaultValues: ContactFormModel = {
  city: "",
  name: "",
  phone: "",
  message: "",
  agreement: false,
};

export const RESET_TIMEOUT_MS = 3000;
