import { z } from "zod";

export const requiredUsername = () =>
  z
    .string()
    .min(1, "Required Field")

    .min(3, "Full Name must be at least 3 characters");

export const requiredEmail = () =>
  z.string().min(1, "Required Field").email("Invalid email address");

export const requiredPhone = () =>
  z
    .string()
    .min(1, "Required Field")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number too long");

export const requiredAge = () =>
  z
    .string()
    .min(1, "Required Field")

    .refine((v) => Number(v) > 0 && Number(v) <= 120, "Enter a valid age");

export const requiredGender = () =>
  z.enum(["male", "female", "other"], {
    required_error: "Please select a gender",
  });

export const requiredPasswordStrong = () =>
  z
    .string()
    .min(6, "Password must be at least 6 characters")
    .refine(
      (v) => /[A-Z]/.test(v),
      "Password must contain one uppercase letter"
    )
    .refine((v) => /[0-9]/.test(v), "Password must contain a number");

export const requiredPasswordOnly = () =>
  z.string().min(1, "Password is required");

export const requiredOTP = () =>
  z
    .string()
    .length(6, "OTP must be 6 digits")
    .regex(/^[0-9]{6}$/, "Enter Valid OTP");
