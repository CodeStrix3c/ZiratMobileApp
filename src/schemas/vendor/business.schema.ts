import { z } from "zod";

export const businessInformationSchema = z.object({
  businessName: z.string().min(1, "Required Field"),

  ownerName: z.string().min(1, "Required Field"),

  primaryContact: z
    .string()
    .min(1, "Required Field")
    .regex(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number"),

  alternateContact: z
    .string()
    .regex(/^[0-9]{10}$/, "Enter a valid 10-digit number")
    .optional()
    .or(z.literal("")),

  email: z.string().email("Enter a valid email").optional().or(z.literal("")),

  businessAddressVillage: z.string().min(1, "Required Field"),
  businessAddressTehsil: z.string().min(1, "Required Field"),
  businessAddressDistrict: z.string().min(1, "Required Field"),
  businessAddressState: z.string().min(1, "Required Field"),

  businessAddressPincode: z.coerce
    .number()
    .min(1, "Required Field")
    .min(100000, "PIN must be 6 digits")
    .max(999999, "PIN must be 6 digits"),

  gps: z.string().min(1, "GPS location is required").optional(),
});
