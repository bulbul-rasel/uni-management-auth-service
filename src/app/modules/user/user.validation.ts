import { z } from "zod";

const CreateUserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: "Role required",
    }),
    password: z.string().optional(),
  }),
});

export const UserValidation = {
  CreateUserZodSchema,
};
