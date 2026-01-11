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
      bloodGroup: {
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
      lastDonateDate: {
        type: "date",
        required: false,
      },
      isAvailable: {
        type: "boolean",
        required: true,
      },
      isBlocked: {
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
