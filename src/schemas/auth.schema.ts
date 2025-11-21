import { z } from "zod";
import {
  requiredEmail,
  requiredPasswordOnly,
  requiredPasswordStrong,
  requiredPhone,
  requiredUsername,
} from "./validation";

export const LoginSchema = z.object({
  phone: requiredPhone(),
  password: requiredPasswordOnly(),
});

export const RegisterSchema = z.object({
  username: requiredUsername(),
  email: requiredEmail(),
  password: requiredPasswordStrong(),
});
