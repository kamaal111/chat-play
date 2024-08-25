import { z } from "zod";

const settingsSchema = z.object({
  SERVER_PORT: z.coerce.number().optional().default(3000),
});

function validateSettings() {
  try {
    return settingsSchema.parse(process.env);
  } catch (error) {
    console.error("environment validation error", error);
    throw error;
  }
}

const settings = validateSettings();

export default settings;
