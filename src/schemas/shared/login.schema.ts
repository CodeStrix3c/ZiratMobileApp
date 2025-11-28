import { z } from "zod";
import { requiredPasswordOnly, requiredPhone } from "../lib/validation";

export const LoginSchema = z.object({
  mobileNumber: requiredPhone(),
  password: requiredPasswordOnly(),
});
