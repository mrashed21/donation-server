import { auth } from "@/lib/auth";
import { toNodeHandler } from "better-auth/node";
import express from "express";


const router = express.Router();
// Better Auth handler
router.use("/", toNodeHandler(auth));

export const authRouter = router;
