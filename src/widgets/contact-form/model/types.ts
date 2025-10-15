import z from "zod";
import { formSchema } from "./config";

export type ContactFormModel = z.infer<typeof formSchema>;
