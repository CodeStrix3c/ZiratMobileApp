import { z } from "zod";

export const profileSchema = z
  .object({
    fullName: z.string().min(1, "Required Field"),

    phone: z
      .string()
      .min(1, "Required Field")
      .regex(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number"),

    email: z.string().email("Enter a valid email"),

    age: z.coerce
      .number()
      .min(1, "Required Field")
      .min(1, "Age must be at least 1")
      .max(120, "Enter a valid age"),

    gender: z.string().min(1, "Required Field"),

    password: z
      .string()
      .min(1, "Required Field")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{7,}$/,
        "Password must be at least 7 characters long and include an uppercase letter, a lowercase letter, a number, and a special character."
      ),

    confirmPassword: z.string().min(1, "Required Field"),

    profilePic: z.any().optional(),
  })

  // Password match logic
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "Passwords do not match",
      });
    }
  });
