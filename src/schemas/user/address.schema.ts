import z from "zod";

export const addressSchema = z.object({
  state: z.string().min(1, "State is required"),
  district: z.string().min(1, "District is required"),
  tehsil: z.string().min(1, "Tehsil is required"),
  village: z.string().min(1, "Village is required"),
  pincode: z.string().min(6, "Pincode is required"),
});
