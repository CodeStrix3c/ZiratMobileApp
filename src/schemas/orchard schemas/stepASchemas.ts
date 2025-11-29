import { z } from "zod";

const currentYear = new Date().getFullYear();

export const orchardSchema = z.object({
  orchardName: z
    .string()
    .min(3, "Orchard name must be at least 3 characters"),

  // Because Kanals & Marlas contain text + number format
  orchardSize: z
    .string()
    .min(1, "Orchard size is required"),

  establishmentYear: z.coerce
    .number({
      invalid_type_error: "Establishment year must be a number",
    })
    .int("Year must be a whole number")
    .min(1900, "Year must be between 1900 and current year")
    .max(currentYear, `Year cannot exceed ${currentYear}`),

  plantationPattern: z
    .string()
    .min(1, "Plantation pattern is required"),

  ownershipType: z
    .string()
    .min(1, "Ownership type is required"),

  district: z
    .string()
    .min(1, "District is required"),

  tehsil: z
    .string()
    .min(1, "Tehsil is required"),

  zone: z.string().optional(),

  pincode: z
    .string()
    .regex(/^\d{6}$/, "Pincode must be a valid 6-digit number"),

  latitude: z.coerce
    .number({
      invalid_type_error: "Latitude must be a number",
    })
    .min(-90, "Latitude must be ≥ -90")
    .max(90, "Latitude must be ≤ 90")
    .optional(),

  longitude: z.coerce
    .number({
      invalid_type_error: "Longitude must be a number",
    })
    .min(-180, "Longitude must be ≥ -180")
    .max(180, "Longitude must be ≤ 180")
    .optional(),
});

export type OrchardSchemaType = z.infer<typeof orchardSchema>;
