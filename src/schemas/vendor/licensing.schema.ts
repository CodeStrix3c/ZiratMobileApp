import { z } from "zod";

export const licensingComplianceSchema = z.object({
  dealerLicenseNumber: z.string().min(1, "Required Field"),
  licenseStartDate: z.string().min(1, "Required Field"),
  licenseExpiryDate: z.string().min(1, "Required Field"),

  licenseCopyUrl: z
    .object({
      uri: z.string(),
      name: z.string(),
      size: z.number().optional(),
      mimeType: z.string().optional(),
    })
    .nullable()
    .refine((file) => file !== null, "License file is required")
    .refine(
      (file) =>
        !file ||
        ["application/pdf", "image/jpeg", "image/png"].includes(file.mimeType),
      "Only PDF or JPEG/PNG files are allowed"
    ),

  gstNumber: z
    .string()
    .regex(/^[0-9]{15}$/, "GST must be a valid 15-digit number")
    .optional()
    .or(z.literal("")),

  panNumber: z
    .string()
    .regex(
      /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
      "Invalid PAN format (e.g., ABCDE1234F)"
    )
    .optional()
    .or(z.literal("")),
});
