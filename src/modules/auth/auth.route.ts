import { auth } from "@/lib/auth";
import authMiddleWare, { UserRole } from "@/middleware/authMiddleWare";
import { toNodeHandler } from "better-auth/node";
import express from "express";
import { authController } from "./auth.controller";

const router = express.Router();

// get all user
router.use(
  "/all-user",
  authMiddleWare(UserRole.user),
  authController.getAllUsers
);
// Better Auth handler
router.use("/", toNodeHandler(auth));

export const authRouter = router;
