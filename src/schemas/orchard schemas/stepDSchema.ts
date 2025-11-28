// StepD_CropNutrition.schema.ts
import { z } from "zod";

/* ------------------ OPTIONS (must match your UI exactly) ------------------ */

export const fertilizerOptions = [
  "Organic",
  "Chemical",
  "Integrated",
] as const;

export const yesNoOptions = ["Yes", "No"] as const;

export const applicationModeOptions = [
  "Soil Application",
  "Foliar Application",
] as const;

/* --------------------------- SCHEMA --------------------------- */

export const stepDCropNutritionSchema = z.object({
  /* 1️⃣ Fertilizer Practices (Dropdown) */
  fertilizerPractice: z
    .enum(fertilizerOptions, {
      invalid_type_error: "Please select a valid fertilizer practice.",
    })
    .nonempty({ message: "Fertilizer practice is required." }),

  /* 2️⃣ Fertigation (YES/NO – Radio) */
  fertigation: z
    .enum(yesNoOptions, { invalid_type_error: "Please select Yes or No." })
    .nonempty({ message: "Please select fertigation option." }),

  /* 3️⃣ Nutrition Plan (Optional text) */
  nutritionPlan: z
    .string()
    .max(500, "Nutrition plan description is too long.")
    .optional()
    .nullable(),

  /* 4️⃣ Mulching (YES/NO – Radio) */
  mulching: z
    .enum(yesNoOptions, { invalid_type_error: "Please select Yes or No." })
    .nonempty({ message: "Please select mulching option." }),

  /* 5️⃣ Last Fertiliser Application Date (Year or YYYY-MM-DD) */
  lastFertiliserDate: z
    .string()
    .optional()
    .nullable()
    .refine(
      (v) =>
        !v ||
        /^\d{4}$/.test(v) || // Year only
        /^\d{4}-\d{2}-\d{2}$/.test(v), // Full date
      {
        message: "Enter a valid date (YYYY or YYYY-MM-DD).",
      }
    ),

  /* 6️⃣ Mode of Application (Dropdown) */
  applicationMode: z
    .enum(applicationModeOptions, {
      invalid_type_error: "Please select a valid mode of application.",
    })
    .nonempty({ message: "Application mode is required." }),
});

export type StepDCropNutritionType = z.infer<typeof stepDCropNutritionSchema>;
