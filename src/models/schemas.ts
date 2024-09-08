import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, { message: "Nome é obrigatório" }),
  password: z.string().min(1, { message: "Senha é obrigatória" }),
  rememberMe: z.boolean(),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
