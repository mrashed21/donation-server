import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { db } from "./mongodb";

export const auth = betterAuth({
  database: mongodbAdapter(db),
  trustedOrigins: [process.env.APP_URL!],
  experimental: { joins: true },
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "user",
        required: false,
      },
      phone: {
        type: "string",
        required: false,
      },
      status: {
        type: "string",
        defaultValue: "active",
        required: false,
      },
      blood_group: {
        type: "string",
        required: true,
      },
      division: {
        type: "string",
        required: true,
      },
      district: {
        type: "string",
        required: true,
      },
      last_donate_date: {
        type: "date",
        required: false,
      },
      is_available: {
        type: "boolean",
        required: true,
      },
      is_blocked: {
        type: "boolean",
        required: false,
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true,
  },
});
