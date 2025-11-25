import { z } from "zod";
import { requiredPasswordOnly, requiredPhone } from "../lib/validation";

export const LoginSchema = z.object({
  phone: requiredPhone(),
  password: requiredPasswordOnly(),
});
