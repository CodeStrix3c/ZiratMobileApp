// StepF_FarmInfrastructure.schema.ts
import { z } from "zod";

/* -------------------- OPTIONS -------------------- */
export const equipmentOptions = [
  "Tractor",
  "Sprayer",
  "Grading Line",
  "Power Weeder",
  "Weather Station",
  "Sensors",
  "Rotavator",
  "Plough",
  "Other",
] as const;

export const storageOptions = [
  "Cold Storage",
  "CA Storage",
  "Open Storage",
  "On-farm Shed",
  "Other",
] as const;

export const laborOptions = [
  "Permanent",
  "Seasonal",
  "Contract-based",
] as const;

/* -------------------- SCHEMA -------------------- */
export const stepFFarmInfrastructureSchema = z.object({
  /* REQUIRED: Equipment Owned (at least 1) */
  equipmentOwned: z
    .array(z.enum(equipmentOptions))
    .min(1, "Select at least one equipment."),

  /* REQUIRED: Storage Facility (at least 1) */
  storageFacility: z
    .array(z.enum(storageOptions))
    .min(1, "Select at least one storage facility."),

  /* OPTIONAL: Farm Labor */
  farmLabor: z.enum(laborOptions).optional().nullable(),

  /* OPTIONAL: Other Tools */
  otherTools: z.string().max(200, "Too long").optional().nullable(),
});

export type StepFFarmInfrastructureType = z.infer<
  typeof stepFFarmInfrastructureSchema
>;
