import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Il nome deve contenere almeno 2 caratteri'),
  email: z.string().email('Inserisci un\'email valida'),
  phone: z.string().min(10, 'Inserisci un numero di telefono valido'),
  subject: z.string().min(5, 'L\'oggetto deve contenere almeno 5 caratteri'),
  message: z.string().min(20, 'Il messaggio deve contenere almeno 20 caratteri'),
});
