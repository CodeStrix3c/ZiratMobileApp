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

// Required password with uppercase + length checks
export const requiredPassword = () =>
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
  });

// Required username (simple pattern)
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
