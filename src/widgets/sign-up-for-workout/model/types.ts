import * as z from "zod";
import { formSchema } from "./config";

export type ContactFormModel = z.infer<typeof formSchema>;

export type CitysModel = { label: string; value: string | null };
