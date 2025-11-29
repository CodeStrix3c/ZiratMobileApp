import { z } from "zod";

export const businessInformationSchema = z.object({
  shopName: z.string().min(1, "Required Field"),

  ownerName: z.string().min(1, "Required Field"),

  contactNumberPrimary: z
    .string()
    .min(1, "Required Field")
    .regex(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number"),

  contactNumberAlternate: z
    .string()
    .regex(/^[0-9]{10}$/, "Enter a valid 10-digit number")
    .optional()
    .or(z.literal("")),

  email: z.string().email("Enter a valid email").optional().or(z.literal("")),

  village: z.string().min(1, "Required Field"),
  tehsil: z.string().min(1, "Required Field"),
  address: z.string().min(1, "Required Field"),
  state: z.string().min(1, "Required Field"),

  pincode: z.coerce
    .number()
    .min(1, "Required Field")
    .min(100000, "PIN must be 6 digits")
    .max(999999, "PIN must be 6 digits"),

  gps: z.string().min(1, "GPS location is required").optional(),
});
