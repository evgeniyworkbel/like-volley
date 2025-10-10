import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(4),
  phone: z
    .string()
    .min(1)
    .regex(/^\+375 \(\d{2,3}\) \d{3}-\d{2}-\d{2}$/),
  message: z.string().optional(),
  consent: z.literal(true),
  citySelect: z.string().refine((val) => val !== "change" && val !== "", {
    message: "Выберите город",
  }),
});

export type formSchemaType = z.infer<typeof formSchema>;
