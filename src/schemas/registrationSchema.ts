// src/schemas/registrationSchema.ts
import { z } from "zod";

export const registrationSchema = z.object({
  // Profile
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Invalid phone"),
  age: z.string().min(1, "Age is required"),
  gender: z.enum(["male", "female", "other"]),
  password: z.string().min(6, "Password too short"),
  confirmPassword: z.string().min(6, "Confirm password is required"),

  // OTP
  otp: z.string().length(6, "OTP must be 6 digits"),
});
