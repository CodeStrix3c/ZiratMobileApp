import z from "zod";

export const educationSchema = z.object({
  highestQualification: z.string().min(1),
  instituteName: z.string().min(1),
  passingYear: z.coerce.number().int().min(1),
  specialization: z.string().optional(),
});
