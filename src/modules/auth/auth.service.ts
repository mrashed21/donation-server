// src/modules/auth/auth.service.ts
import { db } from "@/lib/mongodb";

const getAllUsers = async () => {
  const result = await db
    .collection("user")
    .find({})
    .toArray();
  console.log("result", result);
  return result;
};

export const authService = { getAllUsers };
