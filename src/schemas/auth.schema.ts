import { z } from "zod";
import {
  requiredEmail,
  requiredPassword,
  requiredUsername,
} from "./validation";

export const LoginSchema = z.object({
  email: requiredEmail(),
  password: requiredPassword(),
});

export const RegisterSchema = z.object({
  username: requiredUsername(),
  email: requiredEmail(),
  password: requiredPassword(),
});
