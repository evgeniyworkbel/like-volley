import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(5)
    .regex(/^[А-ЯЁ][а-яё]*(\s[А-ЯЁ][а-яё]*)*$/),
  phone: z.string(),
  message: z.string().optional(),
  consent: z.boolean(),
  ReactSelect: z.object({
    value: z.string(),
    label: z.string(),
  }),
});

export type formSchemaType = z.infer<typeof formSchema>;
