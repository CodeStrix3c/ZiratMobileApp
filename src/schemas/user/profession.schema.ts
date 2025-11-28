import z from "zod";

export const professionSchema = z.object({
  professionType: z.string().min(1),
  organizationName: z.string().min(1),
  designation: z.string().min(1),
  experienceYears: z.string().min(1),
  skills: z.string().optional(),
});
