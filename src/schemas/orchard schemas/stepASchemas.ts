import { z } from "zod";

const currentYear = new Date().getFullYear();

export const orchardSchema = z.object({
  orchardName: z.string().min(3, "Name must be at least 3 characters long"),
  orchardSize: z.string().min(1, "Orchard size required "),
  establishmentYear: z
    .string()
    .refine((v) => !!v && /^\d{4}$/.test(v) && Number(v) <= currentYear && Number(v) >= 1900,
      { message: `Enter valid year between 1900 and ${currentYear}` }
    ),
  plantationPattern: z.string().min(1, "Plantation pattern required"),
  ownershipType: z.string().min(1, "Ownership type required"),
  district: z.string().min(1, "District required"),
  tehsil: z.string().min(1, "Tehsil required"),
  zone: z.string().optional(),
  pincode: z.string().refine((v) => /^\d{5,6}$/.test(v), { message: "Incorrect Pincode" }),
  latitude: z.string().optional().refine((v) => v === "" || /^-?\d+(\.\d+)?$/.test(v), { message: "Valid latitude" }),
  longitude: z.string().optional().refine((v) => v === "" || /^-?\d+(\.\d+)?$/.test(v), { message: "Valid longitude" }),
});

export type OrchardSchemaType = z.infer<typeof orchardSchema>;
