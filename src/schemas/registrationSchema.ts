import { z } from "zod";

/* --------------------------------------
   PROFILE SCHEMA
-------------------------------------- */
export const profileSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Invalid phone"),
  age: z.string().min(1, "Age is required"),
  gender: z.enum(["male", "female", "other"]),
  password: z.string().min(6, "Password too short"),
  confirmPassword: z.string().min(6, "Confirm password is required"),
});

/* --------------------------------------
   OTP SCHEMA
-------------------------------------- */
export const otpSchema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits"),
});

/* --------------------------------------
   ADDRESS SCHEMA
-------------------------------------- */
export const addressSchema = z.object({
  state: z.string().min(1, "State is required"),
  district: z.string().min(1, "District is required"),
  tehsil: z.string().min(1, "Tehsil is required"),
  village: z.string().min(1, "Village is required"),
  pincode: z.string().min(6, "Pincode is required"),
});

/* --------------------------------------
   EDUCATION SCHEMA
-------------------------------------- */
export const educationSchema = z.object({
  highestQualification: z.string().min(1),
  instituteName: z.string().min(1),
  passingYear: z.coerce.number().int().min(1),
  specialization: z.string().optional(),
});

/* --------------------------------------
   PROFESSION SCHEMA
-------------------------------------- */
export const professionSchema = z.object({
  professionType: z.string().min(1),
  organizationName: z.string().min(1),
  designation: z.string().min(1),
  experienceYears: z.string().min(1),
  skills: z.string().optional(),
});
