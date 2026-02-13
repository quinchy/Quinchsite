import { z } from "zod";

export const contactValidation = z.object({
  subject: z.string().min(1, "Subject is required").max(50, "Subject must be 50 characters or less"),
  body: z.string().min(1, "Message body is required").max(1000, "Message body must be 1000 characters or less"),
});

export type ContactFormData = z.infer<typeof contactValidation>;
