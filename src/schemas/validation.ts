import { z } from "zod";

// Required email with "required first, then format check"
export const requiredEmail = () =>
  z.string().superRefine((value, ctx) => {
    if (!value.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Email is required",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Invalid email address",
      });
    }
  });

export const requiredPhone = () =>
  z.string().superRefine((value, ctx) => {
    if (!value.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Phone number is required",
      });
      return;
    }

    if (value.length !== 10) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Enter Valid Phone Number",
      });
    }
  });

export const requiredPasswordOnly = () =>
  z.string().superRefine((value, ctx) => {
    if (!value.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password is required",
      });
    }
  });

export const requiredPasswordStrong = () =>
  z.string().superRefine((value, ctx) => {
    if (!value.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password is required",
      });
      return;
    }

    if (value.length < 6) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password must be at least 6 characters",
      });
    }

    if (!/[A-Z]/.test(value)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password must contain at least one uppercase letter",
      });
    }

    // Optional extras:
    // if (!/[0-9]/.test(value)) ...
    // if (!/[!@#$%^&*]/.test(value)) ...
  });

// Required username
export const requiredUsername = () =>
  z.string().superRefine((value, ctx) => {
    if (!value.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Username is required",
      });
      return;
    }

    if (value.length < 3) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Username must be at least 3 characters",
      });
    }
  });
