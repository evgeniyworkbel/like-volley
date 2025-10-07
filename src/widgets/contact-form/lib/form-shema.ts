import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(4),
  // .regex(/^[А-ЯЁ][а-яё]*(\s[А-ЯЁ][а-яё]*)*$/),
  phone: z
    .string()
    .regex(
      /^\+375 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      "Введите корректный номер телефона",
    ),
  message: z.string().optional(),
  consent: z.literal(true),
  ReactSelect: z.object({
    value: z.string().refine((val) => val !== "change" && val !== "", {
      message: "Выберите город",
    }),
    label: z.string(),
  }),
});

export type formSchemaType = z.infer<typeof formSchema>;
