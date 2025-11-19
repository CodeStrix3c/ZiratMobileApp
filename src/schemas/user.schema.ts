// schemas/user.schema.ts
import { z } from "zod";

export const UserSchema = z.object({
  username: z.string().min(3, "Username too short"),
  password: z.string().min(6),
  bio: z.string().optional(),
  document: z.any().optional(),
});
