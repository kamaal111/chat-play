import { z } from "zod";

const signUpPayloadSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(4),
});

export type SignUpPayload = z.infer<typeof signUpPayloadSchema>;

export default signUpPayloadSchema;
