import * as z from "zod";

export const ContacfFormModel = z.object({
  name: z.string().min(4),
  phone: z
    .string()
    .min(1)
    .regex(/^\+375 \(\d{2,3}\) \d{3}-\d{2}-\d{2}$/),
  message: z.string().optional(),
  agreement: z.literal(true),
  city: z.string().min(1),
});

export type ContacfFormModelType = z.infer<typeof ContacfFormModel>;

export const formDefaultValues = { phone: "", city: "chooseCity" } as const;
