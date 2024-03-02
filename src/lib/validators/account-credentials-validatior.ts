import { z } from 'zod';

export const AuthCredentialsValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: 'Kata sandi harus terdiri dari minimal 8 karakter.',
  }),
});

export type TAuthCredentialsValidator = z.infer<
  typeof AuthCredentialsValidator
>;
