import zod from "zod";

const envSchema = zod.object({
  VITE_FIREBASE_API_KEY: zod.string().min(30),
  VITE_FIREBASE_APP_ID: zod.string().min(30),
  VITE_FIREBASE_MESSAGING_SENDER_ID: zod.string(),
  VITE_FIREBASE_PROJECT_ID: zod.string().min(1),
});

export default envSchema.parse(import.meta.env);
