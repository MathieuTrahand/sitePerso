import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères."),
  email: z.string().email("Adresse email invalide."),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères."),
  honeypot: z.string().max(0, "Ne pas remplir ce champ.").optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
