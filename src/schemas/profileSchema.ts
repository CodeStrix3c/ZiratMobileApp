import { z } from "zod";

export const profileSchema = z
  .object({
    fullName: z.string().min(3, "Full Name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    phone: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number too long"),
    age: z
      .string()
      .refine((val) => Number(val) > 0, "Age must be a positive number"),
    gender: z.enum(["male", "female", "other"], "Please select a gender"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .refine(
        (val) => /[A-Z]/.test(val),
        "Password must contain at least one uppercase letter"
      )
      .refine(
        (val) => /[0-9]/.test(val),
        "Password must contain at least one number"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
