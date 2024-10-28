import { z } from "zod";

export const signUpSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  name: z.string().min(1, { message: "Name is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const logInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});
