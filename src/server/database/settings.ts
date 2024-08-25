import { z } from "zod";

const envSchema = z.object({
  VITE_FIREBASE_API_KEY: z.string().min(30),
  VITE_FIREBASE_APP_ID: z.string().min(30),
  VITE_FIREBASE_MESSAGING_SENDER_ID: z.string(),
  VITE_FIREBASE_PROJECT_ID: z.string().min(1),
  VITE_FIREBASE_DATABASE_URL: z.string().url(),
});

function validateEnv() {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    console.error("environment validation error", error);
    throw error;
  }
}

const env = validateEnv();

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: `${env.VITE_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: `${env.VITE_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID,
  databaseURL: env.VITE_FIREBASE_DATABASE_URL,
};

const settings = {
  firebase: firebaseConfig,
};

export default settings;
