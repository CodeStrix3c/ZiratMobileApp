// StepC_SoilWaterProfile.schema.ts
import { z } from "zod";

const currentYear = new Date().getFullYear();

/**
 * Option lists (kept in sync with your UI)
 */
export const soilTypeOptions = [
  "Sandy Clay Loam",
  "Sandy Loam",
  "Sandy Clay",
  "Sandy",
  "Silt Loam",
  "Heavy Clay",
  "Silt Clay",
  "Silt",
  "Silt Clay Loam",
  "Not Getting",
] as const;

export const waterSourceOptions = [
  "Canal",
  "Borewell",
  "Rainfed",
  "Spring",
  "Other",
] as const;

export const irrigationOptions = [
  "Drip",
  "Sprinkler",
  "Flood",
  "None",
] as const;

export const waterAvailabilityOptions = [
  "Round-the-year",
  "Seasonal",
  "Not Available",
] as const;

export const soilHealthOptions = ["Acidic", "Alkaline", "Not Known"] as const;

/**
 * FIXED + CLEAN SCHEMA
 */
export const stepCSoilWaterSchema = z.object({

  /** ------------------------
   *   REQUIRED ENUM FIELDS
   * -------------------------*/
  soilType: z.enum(soilTypeOptions, {
    invalid_type_error: "Please choose a valid soil type.",
    required_error: "Soil type is required.",
  }),

  soilHealth: z.enum(soilHealthOptions, {
    invalid_type_error: "Please select a valid soil health.",
    required_error: "Soil health is required.",
  }),

  waterSource: z.enum(waterSourceOptions, {
    invalid_type_error: "Please select a valid water source.",
    required_error: "Water source is required.",
  }),

  irrigationMethod: z.enum(irrigationOptions, {
    invalid_type_error: "Please select irrigation method.",
    required_error: "Irrigation method is required.",
  }),

  waterAvailability: z.enum(waterAvailabilityOptions, {
    invalid_type_error: "Please select water availability.",
    required_error: "Water availability is required.",
  }),


  /** ------------------------
   *   OPTIONAL NUMERIC FIELDS
   * -------------------------*/
  soilPH: z.coerce
    .number({ invalid_type_error: "Enter valid pH (0–14)." })
    .min(0, "pH must be >= 0")
    .max(14, "pH must be <= 14")
    .optional()
    .nullable(),

  soilN: z.coerce
    .number({ invalid_type_error: "Enter valid Nitrogen value." })
    .min(0, "Nitrogen cannot be negative")
    .optional()
    .nullable(),

  soilP: z.coerce
    .number({ invalid_type_error: "Enter valid Phosphorus value." })
    .min(0, "Phosphorus cannot be negative")
    .optional()
    .nullable(),

  soilK: z.coerce
    .number({ invalid_type_error: "Enter valid Potassium value." })
    .min(0, "Potassium cannot be negative")
    .optional()
    .nullable(),

  soilOrganicCarbon: z.coerce
    .number({ invalid_type_error: "Enter valid Organic Carbon (%)." })
    .min(0, "Organic Carbon must be >= 0")
    .max(100, "Organic Carbon must be <= 100")
    .optional()
    .nullable(),


  /** ------------------------
   *   OPTIONAL TEXT FIELDS
   * -------------------------*/
  soilMicronutrients: z
    .string()
    .max(500, "Too long")
    .optional()
    .nullable(),


  /** ------------------------
   *   OPTIONAL FILE
   * -------------------------*/
  soilTestFile: z.any().optional().nullable(),


  /** ------------------------
   *   OPTIONAL DATE / YEAR
   * -------------------------*/
  lastSoilTest: z
    .string()
    .optional()
    .nullable()
    .refine(
      (v) =>
        !v ||
        /^\d{4}$/.test(v) ||          // YEAR
        /^\d{4}-\d{2}-\d{2}$/.test(v), // YYYY-MM-DD
      { message: "Enter a year (e.g. 2022) or YYYY-MM-DD" }
    ),
});

export type StepCSoilWaterType = z.infer<typeof stepCSoilWaterSchema>;
