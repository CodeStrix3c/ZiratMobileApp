// StepI_OptionalFutureFields.schema.ts
import { z } from "zod";

/* -------------------- OPTIONS (must match UI) -------------------- */

export const schemeOptions = [
  "Subsidy",
  "Crop Insurance",
  "Horticulture Mission Support",
  "PM-Kisan Support",
  "Other",
] as const;

export const certificationOptions = [
  "Organic",
  "GAP",
  "Fair Trade",
  "Global GAP",
  "Other",
] as const;

export const digitalToolOptions = [
  "Weather Apps",
  "Advisory Apps",
  "Farm Management Tools",
  "Soil Health Apps",
  "Mobile-based Irrigation Advisory",
  "Other",
] as const;

/* ---------------------- SCHEMA ---------------------- */

export const stepIOptionalFutureFieldsSchema = z.object({
  /** 1️⃣ Government Schemes (Required Multi-select) */
  govtSchemes: z
    .array(z.enum(schemeOptions))
    .min(1, "Please select at least one government scheme."), 

  /** 2️⃣ FPO Membership (Optional Text) */
  fpoMembership: z
    .string()
    .max(200, "Too long")
    .optional()
    .nullable(),

  /** 3️⃣ Certifications (Single Select Required) */
  certifications: z.enum(certificationOptions, {
    required_error: "Please select a certification.",
    invalid_type_error: "Invalid certification value.",
  }),

  /** 4️⃣ Digital Tools (Required Multi-select) */
  digitalTools: z
    .array(z.enum(digitalToolOptions))
    .min(1, "Please select at least one digital tool."),
});

export type StepIOptionalType = z.infer<typeof stepIOptionalFutureFieldsSchema>;
