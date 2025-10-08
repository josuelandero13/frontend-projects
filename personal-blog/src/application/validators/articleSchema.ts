import { z } from 'zod';

export const articleSchema = z.object({
  title: z
    .string()
    .min(1, 'El título es requerido')
    .max(200, 'El título no puede tener más de 200 caracteres')
    .refine((val) => val.trim().length > 0, 'El título no puede estar vacío'),
  content: z
    .string()
    .min(1, 'El contenido es requerido')
    .min(10, 'El contenido debe tener al menos 10 caracteres')
    .refine(
      (val) => val.trim().length > 0,
      'El contenido no puede estar vacío'
    ),
  published: z.boolean(),
  author: z.string().min(1, 'El autor es requerido'),
});
