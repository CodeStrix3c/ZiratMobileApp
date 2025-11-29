// StepE_PlantProtection.schema.ts
import { z } from "zod";

/* -------------------------------------------
   OPTIONS (MUST MATCH UI EXACTLY)
-------------------------------------------- */

export const diseaseList = [
  "Scab",
  "Alternaria",
  "Powdery Mildew",
  "Fire Blight",
  "Marssonina",
  "Root Rot",
  "Other",
] as const;

export const pestList = [
  "Aphids",
  "Mites",
  "Codling Moth",
  "Leaf Miner",
  "San Jose Scale",
  "Borers",
  "Other",
] as const;

export const insuranceOptions = ["Yes", "No"] as const;

/* -------------------------------------------
   SCHEMA
-------------------------------------------- */

export const stepEPlantProtectionSchema = z.object({
  /**  
   * 🌿 Diseases (multi-select)
   * - Must be an array
   * - Must select at least 1 item  
   */
  diseases: z
    .array(z.enum(diseaseList))
    .min(1, "Please select at least one disease."),

  /**
   * 🐛 Pests (multi-select)
   */
  pests: z
    .array(z.enum(pestList))
    .min(1, "Please select at least one pest."),

  /**
   * 🧴 Spray Schedule (Optional string)
   */
  spraySchedule: z
    .string()
    .max(500, "Spray schedule description is too long.")
    .optional()
    .nullable(),

  /**
   * 🛡 Crop Insurance (Yes / No)
   */
  cropInsurance: z.enum(insuranceOptions, {
    required_error: "Please select crop insurance option.",
    invalid_type_error: "Please choose Yes or No.",
  }),
});

export type StepEPlantProtectionType = z.infer<typeof stepEPlantProtectionSchema>;
